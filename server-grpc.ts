import { fastify } from "fastify";
import { fastifyConnectPlugin } from "@connectrpc/connect-fastify";
import routes from "./connect.ts";


// import { parseArgs } from "jsr:@std/cli/parse-args";
// const flags = parseArgs(Deno.args, {
//   boolean: ["insecure"],
// });

async function main() {
  const decoder = new TextDecoder("utf-8");
  const server = fastify({
    http2: true,
    https: {
      key: decoder.decode(Deno.readFileSync("localhost+2-key.pem")),
      cert: decoder.decode(Deno.readFileSync("localhost+2.pem")),
    },
  });

  await server.register(fastifyConnectPlugin, {
    routes,
  });
  await server.listen({ host: "localhost", port: 8443 });
  console.log("server is listening at", server.addresses());
}

if (import.meta.main) {
  main();
}
