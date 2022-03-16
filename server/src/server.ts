import express, {
    NextFunction,
    Request as ExpressRequest,
    Response as ExpressResponse,
} from "express";
import cors from "cors";
import HttpError from "./httpError";
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
import { sanitisedData } from "./dataSanitise";
import expressWS from "express-ws";

const HOSTNAME = "localhost";
const API_PORT = 8000;
// ----------------- Create global variable -----------------
let sendDataID: NodeJS.Timer;
let running: Boolean;

// ----------------- Set up the express API server -----------------
const wss = expressWS(express());
const api = wss.app;

// ----------------- Set up a  socket -----------------

async function sendData(): Promise<void> {
    let data = JSON.stringify(sanitisedData());
    const valClients = wss.getWss().clients.values();
    for (const client of valClients) {
        var socket = client;
        socket.send(data);
    }
}

// -------------------------------------------------------

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

api.ws("/wss", function (ws) {
    ws.on("message", function (msg) {
        console.log(msg);
    });
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

api.listen(API_PORT, () =>
    console.log(
        `Weather Station API server running at http://${HOSTNAME}:${API_PORT}`,
    ),
);
