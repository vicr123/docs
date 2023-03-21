import https from "https";
import fs from "fs";

const output = fs.createWriteStream("static/img/cntp-sprites.svg");
https.get("https://contemporary-icons.vicr123.com/symbol/svg/sprite.symbol.svg", response => {
    response.pipe(output);
    output.on("finish", () => {
        output.close();

        console.log("Download Contemporary icon spritesheet");
    });
});