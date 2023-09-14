export default {
  async fetch(request: Request): Promise<Response> {
    console.log(request.headers.get("x-amzn-function-arn"));

    // BunのUtilを使ってみる
    const obj = { foo: "bar" };
    console.log(Bun.inspect(obj));

    return new Response("Hello from Lambda!", {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  },
};
