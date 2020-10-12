import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import paymentMethods from "./img/paymentLogo.png";
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Footer,
  FooterSection,
  FooterDropDownSection,
  FooterLinkList,
} from "react-mdl";
import Router from "./components/Router";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout className="layoutStyle">
        <Header
          className="header-color"
          title={
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              BilStereo Experten
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/About">About us</Link>
            <Link to="/Contact">Contact us</Link>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              BilStereo Experten
            </Link>
          }
        >
          <Navigation>
            <Link to="/About">About us</Link>
            <Link to="/Contact">Contact us</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Router />
        </Content>

        {/* Footer Section  */}

        <Footer size="mega" className="footerFoo">
          {/* First footer section  */}
          <FooterSection type="mini">
            <FooterDropDownSection title="Quick Links">
              <FooterLinkList>
                <Link to="/">Home | Products</Link>
                <Link to="/About">About us</Link>
                <Link to="/Contact">Contact us</Link>
              </FooterLinkList>
            </FooterDropDownSection>

            <FooterDropDownSection title="FAQs">
              <FooterLinkList>
                <a href="/">Return & Refund Policy</a>
                <a href="/">10 reasons to choose us</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Terms & Conditions</a>
              </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title="Delivery | Shipping">
              <FooterLinkList>
                <h4 className="shippingModes">
                  Free delivery in whole Europe!
                </h4>
              </FooterLinkList>
            </FooterDropDownSection>
          </FooterSection>
          <hr />
          {/* Footer second section */}
          <FooterSection type="bottom" logo="">
            <FooterLinkList>
              <img src={paymentMethods} alt="" className="paymentMethods" />
            </FooterLinkList>
          </FooterSection>
          {/* Third footer section  */}
          <FooterSection type="bottom" logo="">
            <FooterLinkList>
              <p> &copy; Nazaqat 2020</p>
              <p> &reg; All rights reserved</p>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
