import React from "react";
import "./Contact.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
// import workshopAdd from "../img/workshop.JPG";
import threeD from "../img/3D.png";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com"; // npm install emailjs-com --save

function Contact() {
  // Lines of code to send email via emailjs
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "business_order_inquiry", //Template ID can be found from user / email template
        e.target,
        "user_suFpPm9c2FYr8pxkCRxTY" // User ID visible under API KEYS / Account settings
      )
      .then(
        (result) => {
          alert("Thank you for contacting us - you'll hear from us asap");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset(); // to reset contact form lines when send message button is clicked
  }
  return (
    <div>
      <CardGroup>
        {/* First card contact info - left card */}
        <Card className="contactInfo">
          <Card.Img variant="top" src={threeD} />
          <Card.Body>
            <Card.Title>
              För hjälp och personligt möte angående installation, besök oss
            </Card.Title>
            <Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Address:</strong> Stigtomtavägen 1 | 12140 Älvsjö
                </ListGroup.Item>

                <ListGroup.Item>
                  {" "}
                  <strong>Tel:</strong> +46 5555 5555{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <strong> Email:</strong>
                  <a href="mailto:naa.dk@yahoo.com">naa.dk@yahoo.com</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <strong>CVR:</strong> 8888 8888
                </ListGroup.Item>
                {/* Google maps button  */}
                <Button variant="info">
                  {" "}
                  <a
                    href=" https://www.google.com/maps/place/Stigtomtav%C3%A4gen+1,+125+42+%C3%84lvsj%C3%B6,+Sweden/@59.2742982,18.0244151,17z/data=!4m13!1m7!3m6!1s0x465f77726f482ba5:0xd7a061843717a384!2zU3RpZ3RvbXRhdsOkZ2VuIDEsIDEyNSA0MiDDhGx2c2rDtiwgU3dlZGVu!3b1!8m2!3d59.274305!4d18.024429!3m4!1s0x465f77726f482ba5:0xd7a061843717a384!8m2!3d59.274305!4d18.024429"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ color: "white" }}
                  >
                    <i aria-hidden="true"></i> Google Maps
                  </a>
                </Button>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
        {/* Second card - contact form starts here  */}
        <Card className="contactInfo">
          <div className="container">
            <form onSubmit={sendEmail}>
              <div className="row pt-5 mx-auto">
                {/* Name input  */}
                <div className="col-12 form-group mx-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                {/* Email input  */}
                <div className="col-12 form-group pt-2 mx-auto">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    name="email"
                  />
                </div>
                {/* Text input  */}
                <div className="col-12 form-group pt-2 mx-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                  />
                </div>
                {/* text area input  */}
                <div className="col-12 form-group pt-2 mx-auto">
                  <textarea
                    className="form-control"
                    id=""
                    cols="30"
                    rows="8"
                    placeholder="Your message"
                    name="message"
                  ></textarea>
                </div>
                {/* send message button  */}
                <div className="col-12 pt-3 mx-auto">
                  <input
                    type="submit"
                    className="btn btn-info"
                    value="Send Message"
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Contact;
