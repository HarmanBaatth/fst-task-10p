const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sendGrid = require("@sendgrid/mail");

const app = express();
app.use(cors());
app.use(bodyParser.json());

sendGrid.setApiKey("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"); 

app.post("/subscribe", (req, res) => {
  const email = req.body.email;

  const message = {
    to: email,
    from: 'baatth62harman@gmail.com', 
    subject: "Welcome to DEV@Deakin",
    text: "Thanks for subscribing!",
    html: "<h2>Thanks for subscribing to <b>DEV@Deakin</b>!</h2>",
  };

  sendGrid
    .send(message)
    .then(() => {
      console.log(`Email sent to ${email}`);
      res.send("Success");
    })
    .catch((error) => {
      console.error("SendGrid error:", error);
      res.status(500).send("Failed to send email.");
    });
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));