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
import { sanitised_data } from "../src/data_sanitise";

const HOSTNAME = "localhost";
const API_PORT = 8000;

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
    // create a new child proccess that streams the data.
    res.send(val);
});

api.get("/api/stop", async (req, res) => {
    const val = await Promise.resolve("Stopped streaming weather data");
    // tell kill child process to stop transmitting data
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
const data = Buffer.from("some data" /* sanitised_data() */);

async function sendData(): Promise<void> {
    socket.send(data, 0, data.length, 5000, "localhost", console.error);
    console.log("Sent data");
}

socket.bind(4500);

// -------------------------------------------------------

setInterval(sendData, 1000);

api.listen(API_PORT, () =>
    console.log(
        `Weather Station API server running at http://${HOSTNAME}:${API_PORT}`,
    ),
);
