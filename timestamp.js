const Http = require("http");

const server = Http.createServer((req, res) => {

    const timeStampStartIndex = req.url.indexOf(":");
    const timeStampEndIndex = req.url.indexOf("?");
    let timeStamp;
    let utcString;

    if(timeStampStartIndex !== -1 && timeStampEndIndex !== -1) {
        const TimeStamp = req.url.substring(timeStampStartIndex+1, timeStampEndIndex);

        if(TimeStamp === "") {
            timeStamp = (new Date()).getTime();
            utcString = (new Date()).toUTCString();
        }
        else if ( !isNaN(TimeStamp) ) {
            timeStamp = (new Date(TimeStamp)).getTime();
            utcString = (new Date(TimeStamp)).toUTCString();
        }
        else {
            res.write(JSON.stringify({"error": "Invalid Date" }));
        }
        res.write(JSON.stringify({"date stamp": timeStamp, "utc" : utcString }));
    }
    else {
        res.write(JSON.stringify({"error": "Invalid Date" }));
    }
    res.end();
});

server.listen(3000);


