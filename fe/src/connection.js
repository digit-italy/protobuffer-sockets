import grpc from 'grpc'
import protoLoader from '@grpc/proto-loader'
const PROTO_PATH = "./humans.proto";

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

export default client;