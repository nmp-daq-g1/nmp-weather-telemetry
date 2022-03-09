import express, {
    NextFunction,
    Request as ExpressRequest,
    Response as ExpressResponse,
} from "express";
import cors from "cors";
import dgram from "dgram";
import { Buffer } from "buffer";
import HttpError from "./httpError";
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
import { sanitisedData } from "./dataSanitise";

const HOSTNAME = "localhost";
const API_PORT = 8000;
// ----------------- Create global variable -----------------
let sendDataID : NodeJS.Timer
let running : Boolean
// ----------------- Set up the express API server -----------------
const api = express();

api.use(cors());
api.use(express.json({ limit: "50mb" }));
api.use(express.urlencoded({ extended: true, limit: "50mb" }));
api.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});

api.get("/", async (req, res) => {
    const val = await Promise.resolve("Hello World!");
    res.send(val);
});

api.get("/api/start", async (req, res) => {
    const val = await Promise.resolve("Started streaming weather data");
    if (running != true) {
        sendDataID = setInterval(sendData, 10);
        running = true;
    }
    
    res.send(val);
});

api.get("/api/stop", async (req, res) => {
    const val = await Promise.resolve("Stopped streaming weather data");
    clearInterval(sendDataID);
    running = false;
    res.send(val);
});

// Error handler
api.use(
    (
        err: HttpError,
        req: ExpressRequest,
        res: ExpressResponse,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        next: NextFunction,
    ) => {
        console.error(err.stack);
        const status = err.status || 500;
        res.status(status).send(err.message);
    },
);

// ----------------- Set up a UDP socket -----------------
const socket = dgram.createSocket("udp4");

async function sendData(): Promise<void> {
    let data = Buffer.from(JSON.stringify(sanitisedData()))
    socket.send(data, 0, data.length, 5000, "localhost", console.error);
}

socket.bind(4500);

// -------------------------------------------------------



api.listen(API_PORT, () =>
    console.log(
        `Weather Station API server running at http://${HOSTNAME}:${API_PORT}`,
    ),
);
