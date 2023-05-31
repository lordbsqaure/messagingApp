const express = require('express');


var app = express()
app.get('/', (req, res) => {
    res.send(
        `Hello World
      <h2>click to view <a href="/student/list">Database</a></h2>  `)
})





app.listen(3000, () => {
    console.log("server is runnin at 3000");


});