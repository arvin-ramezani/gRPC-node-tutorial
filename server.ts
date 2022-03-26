import { TodoRequest } from "./proto/randomPackage/TodoRequest";
import { TodoResponse } from "./proto/randomPackage/TodoResponse";
import { RandomHandlers } from "./proto/randomPackage/Random";
import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./proto/random";

const PORT = 8082;
const PROTO_FILE = "./proto/random.proto";

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
// make grpc object
const grpcObject = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;
const randomPackage = grpcObject.randomPackage;

// initialize server
function main() {
  const server = getServer();

  // bind async to localhost
  server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`Your server is running on port: ${port}`);

      server.start();
    }
  );
}

let todoList: TodoResponse = { todos: [] };
function getServer() {
  // create server
  const server = new grpc.Server();

  // define services / Handlers
  server.addService(randomPackage.Random.service, {
    PingPong: (req, res) => {
      console.log(req.request);
      res(null, { message: "Pong" });
    },
    RandomNumbers: (call) => {
      const { maxValue = 10 } = call.request;

      let runCount = 0;
      const id = setInterval(() => {
        runCount = ++runCount;
        call.write({ number: Math.floor(Math.random() * maxValue) });

        if (runCount >= 10) {
          clearInterval(id);
          call.end();
        }
      }, 500);
    },
    TodoList: (call, callback) => {
      call.on("data", (chunk: TodoRequest) => {
        todoList.todos?.push(chunk);
        console.log(chunk);
      });
      call.on("end", () => {
        callback(null, { todos: todoList.todos });
      });
    },
  } as RandomHandlers);
  return server;
}

main();
