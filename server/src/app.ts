import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(cors());
app.use(bodyParser.json({limit: '1024mb'}));
app.use(bodyParser.urlencoded({limit: '1024mb', extended: true, parameterLimit: 500000}));

if (process.env.HTTPS) {
    console.log("Running https server...");
    const fs = require("fs");
    const https = require("https");

    const cert = fs.readFileSync('./certs/dstepanov_com.crt');
    const ca = fs.readFileSync('./certs/dstepanov_com.ca-bundle');
    const key = fs.readFileSync('./certs/dstepanov.key');


    let options = {
        cert: cert,
        ca: ca,
        key: key
    };

    https.createServer(options, app).listen(port, () => {
        console.log(`Code demonstration secured app listening on port ${port}!`)
    });

    const http = require("http");
    const defaultPort = 80;
    const httpServer = http.createServer(app);

    app.use((req, res, next) => {
        if(req.protocol === 'http') {
            res.redirect(301, `https://${req.headers.host}${req.url}`);
        }
        next();
    });

    httpServer.listen(defaultPort, () => console.log(`Code demonstration app listening on port ${defaultPort}!`));
} else {
    app.listen(port, () => console.log(`Code demonstration app listening on port ${port}!`));
}

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.use((error, req, res, next) => {
    console.error('=== Caught error ===');
    console.error(error.stack);
    next();
});

export default app;
