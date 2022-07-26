const express = require("express");
const { route } = require("./userRouter");
const auth = require("../middleware/auth");
const noteCtrl = require("../controllers/noteCtrl");

const router = express.Router();

router.route('/')
    .get(auth, noteCtrl.getNotes)
    .post(auth, noteCtrl.createNote)

router.route('/:id')
    .get(auth,noteCtrl.getNote)
    .post(auth,noteCtrl.updateNote)
    .delete(auth,noteCtrl.deleteNote)

module.exports = router