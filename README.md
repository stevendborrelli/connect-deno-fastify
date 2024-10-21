# connect-deno-fastify

This is a project to get the following working together:

- [connect-es](https://connectrpc.com/docs/node/getting-started/) for gPRC
- [Deno](https://deno.com)
- [fastify](https://fastify.dev)

## Running Examples

### Http Server

[server.ts](server.ts) is a simple http server, run using `deno run -A server.ts`

In another window run curl:

```shell
./curl-say.sh 
{"sentence":"You said I feel happy."}    
```

## gRPC Blocking Issues

We are currently blocked from running the grpc server over https by issue
<https://github.com/denoland/deno/issues/26088>.

First make certs:

```shell
./mkcert.sh
```

Next run the gRPC server:

```shell
deno run -A server-grpc.ts 
error: Uncaught (in promise) Error: Not implemented: http2.createSecureServer
    at notImplemented (ext:deno_node/_utils.ts:9:9)
    at Object.createSecureServer (node:http2:1303:3)
    at getServerInstance (file:///Users/stevenborrelli/code/stevendborrelli/connect-deno-fastify/node_modules/.deno/fastify@4.28.1/node_modules/fastify/lib/server.js:350:24)
    at createServer (file:///Users/stevenborrelli/code/stevendborrelli/connect-deno-fastify/node_modules/.deno/fastify@4.28.1/node_modules/fastify/lib/server.js:25:18)
    at fastify (file:///Users/stevenborrelli/code/stevendborrelli/connect-deno-fastify/node_modules/.deno/fastify@4.28.1/node_modules/fastify/fastify.js:198:30)
    at main (file:///Users/stevenborrelli/code/stevendborrelli/connect-deno-fastify/server-grpc.ts:7:18)
    at file:///Users/stevenborrelli/code/stevendborrelli/connect-deno-fastify/server-grpc.ts:22:3
```
