import { defineMock } from "@alova/mock";

export default defineMock({
  "/user/{id}": ({ params }) => {
    return {
      code: 200,
      result: {
        name: "userName",
        id: params.id,
      },
    };
  },
  "[POST]/user": ({ query, data }) => {
    console.log(query, data);
    return {
      code: 200,
      message: "ok",
    };
  },
});
