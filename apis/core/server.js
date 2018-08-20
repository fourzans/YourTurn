var express = require("express"),
    app = express(),
    port = process.env.port || 3000;

app.listen(port);

console.log("yourturn core API started on port: " + port);