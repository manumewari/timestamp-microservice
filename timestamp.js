const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("./static"));

app.get("/timestamp/:timeStamp", (req, res) => {
    const TimeStamp = req.params.timeStamp;

    console.log("timeStamp : "+TimeStamp);
    let timeStamp = "-";

    if(TimeStamp === "") {
        timeStamp = (new Date()).getTime();
        utcString = (new Date()).toUTCString();
    }
    else if ( !isNaN(TimeStamp) ) {
        timeStamp = (new Date(TimeStamp)).getTime();
        utcString = (new Date(TimeStamp)).toUTCString();
    }
    else {
        res.send(JSON.stringify({"error": "Invalid Date" }));
    }
    res.send(JSON.stringify({"date stamp": timeStamp, "utc" : utcString }));

})

app.get("/timestamp/", (req, res) => {
    const TimeStamp = req.params.timeStamp;

    res.send("no time stamp found in url");
})

app.get("/", (req, res) => {
    const TimeStamp = req.params.timeStamp;

    res.send("no time stamp found in url");
})

app.listen(3000);

