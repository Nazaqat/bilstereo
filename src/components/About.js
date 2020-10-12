import React from "react";
import "./About.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function About() {
  return (
    <div>
      {/* <h2 style={{ marginLeft: "5%", fontFamily: "Gorgia" }}>About Us!</h2> */}
      <p className="blockquote">
        På BILSTEREO ger vi inte bara våra kunder de bästa produkterna för sina
        kärleksbilar med en gratis leverans utanför dörren utan vi hjälper också
        kunderna i installationen. Detta görs på två sätt: Först genom våra
        uppladdade Youtube-videor som ger dig en komplett steg för steg
        installationsinstallationsguide för det andra om du känner dig obekväm
        när du ställer in dig själv, tillhandahåller vi installationstjänster i
        vår fysiska butik till överkomliga priser.
        <br /> <br />
        BilstereoExperten ligger i Stockholm, Sverige. Vi är professionella
        säljare av bilstereo i Sverige. Med vårt team bestående av proffs och
        bästa tekniker ser vi till att välja rätt och äkta passande produkt för
        din bil. Vi är specialiserade på OEM-anpassade GPS-navigationssystem som
        passar in i fabriken som håller sig tro mot fabriksutseendet och lägger
        till många nya avancerade funktioner och prestanda.Kundnöjdhet är vårt
        främsta mål. För att helt tillfredsställa våra kunder testas och
        kontrolleras alla produkter personligen innan de skickas till kunder.
        För annan information, frågor eller förslag, vänligen kontakta oss. Vi
        är alltid glada att hjälpa dig med våra bästa tjänster.
      </p>
      <hr style={{ width: "70%", marginLeft: "15%" }} />
      <CardGroup>
        <Card className="employeeCards">
          <Card.Img
            variant="top"
            src="https://i.ibb.co/m6Q881w/nalFoto.png"
            style={{ width: "200px", position: "center" }}
          />
          <Card.Body>
            <Card.Title>Irfan Cheema | Business Controller</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Tel: +46 5555 5555</small>
          </Card.Footer>
        </Card>
        <Card className="employeeCards">
          <Card.Img
            variant="top"
            src="https://i.ibb.co/m6Q881w/nalFoto.png"
            style={{ width: "200px" }}
          />
          <Card.Body>
            <Card.Title>Naveed Cheema | Business Controller</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Tel: +46 5555 5555</small>
          </Card.Footer>
        </Card>
        <Card className="employeeCards">
          <Card.Img
            variant="top"
            src="https://i.ibb.co/m6Q881w/nalFoto.png"
            style={{ width: "200px" }}
          />
          <Card.Body>
            <Card.Title>Usman Cheema | Business Controller</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Tel: +46 5555 5555</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default About;
