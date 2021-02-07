import { createMocks } from "node-mocks-http";
import greetingsHandler from "../../../../pages/api/greetings/[first_name]";

describe("/api/greetings/[first_name]", () => {
  it("should return 200 with json body containing a greeting with name", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        first_name: "toto",
      },
    });

    await greetingsHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getData()).toBe('{"greetings":"Hello toto!"}');
  });

  it("should return 405 if the method is not GET", async () => {
    const { req, res } = createMocks({
      method: "POST",
      query: {
        first_name: "toto",
      },
    });

    await greetingsHandler(req, res);

    expect(res._getStatusCode()).toBe(405);
    expect(res._getHeaders()).toEqual({ allow: ["GET"] });
  });
});
