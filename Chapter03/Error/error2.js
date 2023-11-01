const fs = require("fs");

setInterval(() => {
    fs.unlink("./abcefg.js", (err) => {
        if (err) {
            console.error(err);
        }
    });
}, 1000);