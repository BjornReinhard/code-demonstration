import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import path from "path";


const app = express();

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(cors());
app.use(bodyParser.json({limit: '1024mb'}));
app.use(bodyParser.urlencoded({limit: '1024mb', extended: true, parameterLimit:500000}));

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.use((error, req, res, next) => {
    console.error('=== Caught error ===');
    console.error(error.stack);
    next();
});

app.listen(port, () => console.log(`Code demonstration app listening on port ${port}!`));

export default app;
