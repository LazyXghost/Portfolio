const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const RBTree = require('./dataStructures/RBTree');

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const port = 8000;

app.get('/', (req, res, next) => {
    res.send("Hello");
})

let tree;
app.get('/visualiser', (req, res, next) => {
    tree = new RBTree();
    res.send({ status: "Tree Constructed!" });
})
app.post('/visualiser', (req, res, next) => {
    tree.insert(req.body['value']);
    res.send(tree.display());
})

const server = app.listen(port, function () {
    console.log(`Listening on http://localhost:${server.address().port}`);
})
