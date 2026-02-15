const https = require("https");
const fs = require("fs");
const next = require("next");

const app = next({ dev: true });
const handle = app.getRequestHandler();

const httpsOptions = {
key: fs.readFileSync("./localhost+1-key.pem"),
cert: fs.readFileSync("./localhost+1.pem"),
};

app.prepare().then(() => {
https.createServer(httpsOptions, (req, res) => {
handle(req, res);
}).listen(3000, () => {
console.log("HTTPS Server running on https://localhost:3000");
});
});