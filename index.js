import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static("public"))


app.get("/", (req, res) => {
    res.render(__dirname + "/public/pages/index.ejs");
})

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})