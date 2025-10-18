import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import express from "express";
const app = express();
const port = 3000;

inquirer
    //input
    .prompt([
        {
            message: "Type your URL: ",
            name: "URL",
        }
    ])

    .then((answers) => {

        //qr code generation 
        const url = answers.URL;
        console.log(answers);
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_img.png'));
        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        });

        //express
        app.use(express.static("."));
        app.get("/", (req, res) => {
            res.send('<h1>QR image </h1><br><img src="/qr_img.png" height=100px width=100px>');
        });
        app.listen(3000, () => {
            console.log(`server running on port ${port}`);
        });

    }) 

    .catch((error) => {

        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in this environment");
        } 
        
        else {
            console.log("Something went wrong:", error);
        }

    });