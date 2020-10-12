import React from "react";
import "./Landingpage.css";
import Carousel from "react-bootstrap/Carousel";
import { Tabs, Tab } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Typical from "react-typical"; //npm install --save react-typical

function Landingpage() {
  return (
    <div>
      {/* Text type in code  */}
      <h3 style={{ marginLeft: "10%" }}>
        <Typical
          steps={[
            "Welcome to Bilstereo Experten",
            1000,
            "Andriod Multimedia Stereo!",
            500,
            "Plug & play for din bil",
            500,
            "Apple Car Play for din bil",
            500,
          ]}
          loop={Infinity}
          wrapper="b"
        />
      </h3>

      {/* Slider / Carousel  */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.carkeys.co.uk/media/18695/p90272991_highres_the-new-bmw-m5-08-20.jpg?center=0.34600760456273766,0.45063291139240508&mode=crop&width=2920&height=762&rnd=131703573660000000&format=webp%201920w"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.carkeys.co.uk/media/18695/p90272991_highres_the-new-bmw-m5-08-20.jpg?center=0.34600760456273766,0.45063291139240508&mode=crop&width=2920&height=762&rnd=131703573660000000&format=webp%201920w"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.carkeys.co.uk/media/18695/p90272991_highres_the-new-bmw-m5-08-20.jpg?center=0.34600760456273766,0.45063291139240508&mode=crop&width=2920&height=762&rnd=131703573660000000&format=webp%201920w"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Products section starts here 
      Typcial slides ....
      */}
      <h3 style={{ marginLeft: "10%" }}>
        {/* Text type in code  */}
        <Typical
          steps={["Products", 1000, "BMW X Series!", 500, "Offers", 500]}
          loop={Infinity}
          wrapper="b"
        />
      </h3>
      {/* Tabs code starts here  */}
      <Tabs
        defaultActiveKey="MBW"
        transition={false}
        id="noanim-tab-example"
        style={{ display: "flex", justifyContent: "center", padding: "0.1rem" }}
      >
        {/* Latest Tab  */}
        <Tab eventKey="Latest" title="Latest">
          <CardGroup>
            <Card className="cardgrp">
              <InnerImageZoom src="https://www.sigmacarstereo.com/image/cache/catalog/8203/8203-900x600.jpg" />
              <Card.Body>
                <Card.Text>
                  BMW 1 Series(F20/F21) 2017-2018 Radio upgrade Android Pie 9
                  with Free Back Camera
                </Card.Text>
                <Card.Title>4950 SEK </Card.Title>
                <button className="button">Add to card </button>
              </Card.Body>
            </Card>
            <Card className="cardgrp">
              <InnerImageZoom src="https://www.sigmacarstereo.com/image/cache/catalog/8203/8203-900x600.jpg" />
              <Card.Body>
                <Card.Text>
                  BMW 1 Series(F20/F21) 2017-2018 Radio upgrade Android Pie 9
                  with Free Back Camera
                </Card.Text>
                <Card.Title>4950 SEK</Card.Title>
                <button className="button">Add to card </button>
              </Card.Body>
            </Card>
            <Card className="cardgrp">
              <InnerImageZoom src="https://www.sigmacarstereo.com/image/cache/catalog/8203/8203-900x600.jpg" />
              <Card.Body>
                <Card.Text>
                  BMW 1 Series(F20/F21) 2017-2018 Radio upgrade Android Pie 9
                  with Free Back Camera
                </Card.Text>
                <Card.Title>4950 SEK</Card.Title>
                <button className="button">Add to card </button>
              </Card.Body>
            </Card>
            <Card className="cardgrp">
              <InnerImageZoom src="https://www.sigmacarstereo.com/image/cache/catalog/8203/8203-900x600.jpg" />
              <Card.Body>
                <Card.Text>
                  BMW 1 Series(F20/F21) 2017-2018 Radio upgrade Android Pie 9
                  with Free Back Camera
                </Card.Text>
                <Card.Title>4950 SEK</Card.Title>
                <button className="button">Add to card </button>
              </Card.Body>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card className="cardgrp">
              <InnerImageZoom src="https://www.sigmacarstereo.com/image/cache/catalog/8203/8203-900x600.jpg" />
              <Card.Body>
                <Card.Text>
                  BMW 1 Series(F20/F21) 2017-2018 Radio upgrade Android Pie 9
                  with Free Back Camera
                </Card.Text>
                <Card.Title>4950 SEK</Card.Title>
                <button className="button">Add to card </button>
              </Card.Body>
            </Card>
            <Card className="cardgrp">
              <InnerImageZoom src="https://www.sigmacarstereo.com/image/cache/catalog/8203/8203-900x600.jpg" />
              <Card.Body>
                <Card.Text>
                  BMW 1 Series(F20/F21) 2017-2018 Radio upgrade Android Pie 9
                  with Free Back Camera
                </Card.Text>
                <Card.Title>4950 SEK</Card.Title>
                <button className="button">Add to card </button>
              </Card.Body>
            </Card>
            <Card className="cardgrp">
              <InnerImageZoom src="https://www.sigmacarstereo.com/image/cache/catalog/8203/8203-900x600.jpg" />
              <Card.Body>
                <Card.Text>
                  BMW 1 Series(F20/F21) 2017-2018 Radio upgrade Android Pie 9
                  with Free Back Camera
                </Card.Text>
                <Card.Title>4950 SEK</Card.Title>
                <button className="button">Add to card </button>
              </Card.Body>
            </Card>
            <Card className="cardgrp">
              <InnerImageZoom src="https://www.sigmacarstereo.com/image/cache/catalog/8203/8203-900x600.jpg" />
              <Card.Body>
                <Card.Text>
                  BMW 1 Series(F20/F21) 2017-2018 Radio upgrade Android Pie 9
                  with Free Back Camera
                </Card.Text>
                <Card.Title>4950 SEK</Card.Title>
                <button className="button">Add to card </button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Tab>
        {/* MBW Tab  *************************************************************/}
        <Tab eventKey="MBW" title="MBW">
          <CardGroup>
            <Card className="cardgrp">
              <InnerImageZoom src="https://www.sigmacarstereo.com/image/cache/catalog/8203/8203-900x600.jpg" />
              <Card.Body>
                <Card.Text>
                  BMW 1 Series(F20/F21) 2017-2018 Radio upgrade Android Pie 9
                  with Free Back Camera
                </Card.Text>
                <Card.Title>4950 SEK</Card.Title>
                <button className="button">Add to card </button>
              </Card.Body>
            </Card>
            <Card className="cardgrp">
              <InnerImageZoom src="https://www.sigmacarstereo.com/image/cache/catalog/8203/8203-900x600.jpg" />
              <Card.Body>
                <Card.Text>
                  BMW 1 Series(F20/F21) 2017-2018 Radio upgrade Android Pie 9
                  with Free Back Camera
                </Card.Text>
                <Card.Title>4950 SEK</Card.Title>
                <button className="button">Add to card </button>
              </Card.Body>
            </Card>
            <Card className="cardgrp">
              <InnerImageZoom src="https://www.sigmacarstereo.com/image/cache/catalog/8203/8203-900x600.jpg" />
              <Card.Body>
                <Card.Text>
                  BMW 1 Series(F20/F21) 2017-2018 Radio upgrade Android Pie 9
                  with Free Back Camera
                </Card.Text>
                <Card.Title>4950 SEK</Card.Title>
                <button className="button">Add to card </button>
              </Card.Body>
            </Card>
            <Card className="cardgrp">
              <InnerImageZoom src="https://www.sigmacarstereo.com/image/cache/catalog/8203/8203-900x600.jpg" />
              <Card.Body>
                <Card.Text>
                  BMW 1 Series(F20/F21) 2017-2018 Radio upgrade Android Pie 9
                  with Free Back Camera
                </Card.Text>
                <Card.Title>4950 SEK</Card.Title>
                <button className="button">Add to card </button>
              </Card.Body>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card className="cardgrp">
              <InnerImageZoom src="https://www.sigmacarstereo.com/image/cache/catalog/8203/8203-900x600.jpg" />
              <Card.Body>
                <Card.Text>
                  BMW 1 Series(F20/F21) 2017-2018 Radio upgrade Android Pie 9
                  with Free Back Camera
                </Card.Text>
                <Card.Title>4950 SEK</Card.Title>
                <button className="button">Add to card </button>
              </Card.Body>
            </Card>
            <Card className="cardgrp">
              <InnerImageZoom src="https://www.sigmacarstereo.com/image/cache/catalog/8203/8203-900x600.jpg" />
              <Card.Body>
                <Card.Text>
                  BMW 1 Series(F20/F21) 2017-2018 Radio upgrade Android Pie 9
                  with Free Back Camera
                </Card.Text>
                <Card.Title>4950 SEK</Card.Title>
                <button className="button">Add to card </button>
              </Card.Body>
            </Card>
            <Card className="cardgrp">
              <InnerImageZoom src="https://www.sigmacarstereo.com/image/cache/catalog/8203/8203-900x600.jpg" />
              <Card.Body>
                <Card.Text>
                  BMW 1 Series(F20/F21) 2017-2018 Radio upgrade Android Pie 9
                  with Free Back Camera
                </Card.Text>
                <Card.Title>4950 SEK</Card.Title>
                <button className="button">Add to card </button>
              </Card.Body>
            </Card>
            <Card className="cardgrp">
              <InnerImageZoom src="https://www.sigmacarstereo.com/image/cache/catalog/8203/8203-900x600.jpg" />
              <Card.Body>
                <Card.Text>
                  BMW 1 Series(F20/F21) 2017-2018 Radio upgrade Android Pie 9
                  with Free Back Camera
                </Card.Text>
                <Card.Title>4950 SEK</Card.Title>
                <button className="button">Add to card </button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Tab>
        {/* Offers Tab starts here  ***************************************/}
        <Tab eventKey="Offers" title="Offers">
          <CardGroup>
            <Card className="cardgrp">
              <InnerImageZoom src="https://www.sigmacarstereo.com/image/cache/catalog/8203/8203-900x600.jpg" />
              <Card.Body>
                <Card.Text>
                  BMW 1 Series(F20/F21) 2017-2018 Radio upgrade Android Pie 9
                  with Free Back Camera
                </Card.Text>
                <Card.Title>4950 SEK</Card.Title>
                <button className="button">Add to card </button>
              </Card.Body>
            </Card>
            <Card className="cardgrp">
              <InnerImageZoom src="https://www.sigmacarstereo.com/image/cache/catalog/8203/8203-900x600.jpg" />
              <Card.Body>
                <Card.Text>
                  BMW 1 Series(F20/F21) 2017-2018 Radio upgrade Android Pie 9
                  with Free Back Camera
                </Card.Text>
                <Card.Title>4950 SEK</Card.Title>
                <button className="button">Add to card </button>
              </Card.Body>
            </Card>
            <Card className="cardgrp">
              <InnerImageZoom src="https://www.sigmacarstereo.com/image/cache/catalog/8203/8203-900x600.jpg" />
              <Card.Body>
                <Card.Text>
                  BMW 1 Series(F20/F21) 2017-2018 Radio upgrade Android Pie 9
                  with Free Back Camera
                </Card.Text>
                <Card.Title>4950 SEK</Card.Title>
                <button className="button">Add to card </button>
              </Card.Body>
            </Card>
            <Card className="cardgrp">
              <InnerImageZoom src="https://www.sigmacarstereo.com/image/cache/catalog/8203/8203-900x600.jpg" />
              <Card.Body>
                <Card.Text>
                  BMW 1 Series(F20/F21) 2017-2018 Radio upgrade Android Pie 9
                  with Free Back Camera
                </Card.Text>
                <Card.Title>4950 SEK</Card.Title>
                <button className="button">Add to card </button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Tab>
        {/* Volvo Tab  */}
        <Tab eventKey="Volvo" title="Volvo" disabled></Tab>
        {/* Mercedez Tab  */}
        <Tab eventKey="Mercedez" title="Mercedez" disabled></Tab>
        {/* VW Tab  */}
        <Tab eventKey="VW" title="VW" disabled></Tab>
        {/* Toyota Tab  */}
        <Tab eventKey="Toyota" title="Toyota" disabled></Tab>
        {/* Mini Tab  */}
        <Tab eventKey="Mini" title="Mini" disabled></Tab>
      </Tabs>
    </div>
  );
}

export default Landingpage;
