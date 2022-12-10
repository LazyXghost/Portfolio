const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
const port = 8000;

app.get('/', (req, res, next) => {
	res.send("Hello");
})

const server = app.listen(port, function () {
    console.log(`Listening on http://localhost:${server.address().port}`);
})
