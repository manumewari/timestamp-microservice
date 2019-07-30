const express = require("express");

const app = express();

app.get("/timestamp/:timeStamp", (req, res) => {
    const TimeStamp = req.params.timeStamp;

    if ( !isNaN(TimeStamp) ) {
        const date = new Date(TimeStamp);
        res.send(JSON.stringify({"date stamp": date.getTime(), "utc" : date.toUTCString() }));
    }
    else {
        res.send(JSON.stringify({"Error": "The timestamp sent is not valid. Please try again." }));
    }
})

app.get("/timestamp/", (req, res) => {
    const currentDate = new Date();
    res.send(JSON.stringify({"date stamp": currentDate.getTime(), "utc" : currentDate.toUTCString() }));
})

app.use((req, res, next) => {
    res.status(404).send("No time stamp found in url");
})

app.listen(3000);

