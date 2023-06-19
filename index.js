import inquirer from "inquirer";
import qr from "qr-image";
import fs from "file-system";

inquirer
  .prompt([{ message: "Please enter URL: ", name: "url" }])
  .then((answer) => {
    const url = answer.url;
    // console.log("url entered", url);
    let qrsvg = qr.image(url, { type: "png" });
    qrsvg.pipe(fs.createWriteStream(`qr_pic.png`));
    fs.appendFile("URLs.txt", url+"\r\n", (err) => {
      if (err) throw err;
      console.log("File has been saved. Enjoy!");
    });
  });
