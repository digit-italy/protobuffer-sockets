const PROTO_PATH = "../humans.proto";

var grpc = require("grpc");
var protoLoader = require("@grpc/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

var humansProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

const humans = [
    {
        name: "Adam",
        age: 23,
    },
    {
        name: "Nicky",
        age: 45,
    }
];

server.addService(humansProto.HumanService.service, {
    getAll: (_, callback) => {
        callback(null, { humans });
    },
});

server.bind("127.0.0.1:3001", grpc.ServerCredentials.createInsecure());
console.log("Server running at http://127.0.0.1:3001");
server.start();