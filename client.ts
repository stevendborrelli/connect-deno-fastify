import { createClient } from "@connectrpc/connect";
import { ElizaService } from "./gen/eliza/v1/eliza_pb.ts";
import { createConnectTransport } from "@connectrpc/connect-node";

const transport = createConnectTransport({
  baseUrl: "http://localhost:8080",
  httpVersion: "1.1",
});

async function main() {
  const client = createClient(ElizaService, transport);
  console.log("starting");
  const res = await client.say({ sentence: "I feel happy." });
  console.log(res);
}

if (import.meta.main) {
  main();
}
