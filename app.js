const express = require("express");
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors())

//Routes
const user = require("./routes/userRouter");
const note = require("./routes/notesRouter");

app.use("/api/notes",note);
app.use("/users", user);


module.exports = app;
