const PROTO_PATH = "../humans.proto";

const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

const HumanService = grpc.loadPackageDefinition(packageDefinition).HumanService;

const client = new HumanService(
    "localhost:3001",
    grpc.credentials.createInsecure()
);

module.exports = client;