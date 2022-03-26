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

const client = new grpcObject.randomPackage.Random(
  `0.0.0.0:${PORT}`,
  grpc.credentials.createInsecure()
);

// client deadline
const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  // call back runs when client is ready
  onClientReady();
});

function onClientReady() {
  // client.PingPong({ message: "Ping" }, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log(result);
  // });

  //--------------- Get Server Stream Data
  //   const stream = client.RandomNumbers({ maxValue: 85 });

  //   stream.on("data", (chunck) => {
  //     console.log(chunck);
  //   });

  //   stream.on("end", () => {
  //     console.log("end..");
  //   });
  // }

  //--------------- Send To Server Stram Data
  const stream = client.TodoList((err, result) => {
    if (err) {
      console.log("arvin", err);
      return;
    }
    console.log(result);
  });

  stream.write({ todo: "todo 1", status: "status 1" });
  stream.write({ todo: "todo 2", status: "status 2" });
  stream.write({ todo: "todo 3", status: "status 3" });
  stream.write({ todo: "todo 4", status: "status 4" });
  stream.write({ todo: "todo 5", status: "status 5" });

  stream.end();
}
