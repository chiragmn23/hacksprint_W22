import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { TrainingTaskController } from "../trainingTask.controller";
import { TrainingTaskService } from "../trainingTask.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  trainingDetails: "exampleTrainingDetails",
  startTime: new Date(),
  endTime: new Date(),
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  trainingDetails: "exampleTrainingDetails",
  startTime: new Date(),
  endTime: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    trainingDetails: "exampleTrainingDetails",
    startTime: new Date(),
    endTime: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  trainingDetails: "exampleTrainingDetails",
  startTime: new Date(),
  endTime: new Date(),
};

const service = {
  createTrainingTask() {
    return CREATE_RESULT;
  },
  trainingTasks: () => FIND_MANY_RESULT,
  trainingTask: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("TrainingTask", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TrainingTaskService,
          useValue: service,
        },
      ],
      controllers: [TrainingTaskController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /trainingTasks", async () => {
    await request(app.getHttpServer())
      .post("/trainingTasks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        startTime: CREATE_RESULT.startTime.toISOString(),
        endTime: CREATE_RESULT.endTime.toISOString(),
      });
  });

  test("GET /trainingTasks", async () => {
    await request(app.getHttpServer())
      .get("/trainingTasks")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          startTime: FIND_MANY_RESULT[0].startTime.toISOString(),
          endTime: FIND_MANY_RESULT[0].endTime.toISOString(),
        },
      ]);
  });

  test("GET /trainingTasks/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/trainingTasks"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /trainingTasks/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/trainingTasks"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        startTime: FIND_ONE_RESULT.startTime.toISOString(),
        endTime: FIND_ONE_RESULT.endTime.toISOString(),
      });
  });

  test("POST /trainingTasks existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/trainingTasks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        startTime: CREATE_RESULT.startTime.toISOString(),
        endTime: CREATE_RESULT.endTime.toISOString(),
      })
      .then(function () {
        agent
          .post("/trainingTasks")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
