const express = require("express");
const app = express();
const cors = require("cors")


app.use(cors())
app.use(express.json());
app.use(express.static('./client/public'))
//Routes
const user = require("./routes/userRouter");
const note = require("./routes/notesRouter");

app.use("/api/notes",note);
app.use("/users", user);


module.exports = app;
