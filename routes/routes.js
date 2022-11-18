const express = require('express')
const todocontainer = require('../controller/todoController')
const router = express.Router();

router.get('/todo', todocontainer.todo_index)
router.post('/todo',todocontainer.todo_post)
router.delete('/todo/:item', todocontainer.todo_delete)
module.exports = router;
