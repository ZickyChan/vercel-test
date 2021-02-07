import { createMocks } from "node-mocks-http";
import createUserHandler from "../../../../pages/api/create_user";

describe("/api/create_user", () => {
  it("should return 200 with json body containing firstName and lastName is upper case", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        firstName: "toto",
        lastName: "tata",
      },
    });

    await createUserHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getData()).toBe('{"firstName":"TOTO","lastName":"TATA"}');
  });

  it("should return 405 if the method is not POST", async () => {
    const { req, res } = createMocks({
      method: "GET",
      body: {
        firstName: "toto",
        lastName: "tata",
      },
    });

    await createUserHandler(req, res);

    expect(res._getStatusCode()).toBe(405);
    expect(res._getHeaders()).toEqual({ allow: ["POST"] });
  });

  it("should return 400 if firstName is missing", async () => {
    const { req, res } = createMocks({
      method: "GET",
      body: {
        lastName: "tata",
      },
    });

    await createUserHandler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(res._getData()).toBe('{"message":"Missing firstName or lastName!"}');
  });

  it("should return 400 if lastName is missing", async () => {
    const { req, res } = createMocks({
      method: "GET",
      body: {
        firstName: "tata",
      },
    });

    await createUserHandler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(res._getData()).toBe('{"message":"Missing firstName or lastName!"}');
  });
});
