/* /components/Layout.js */

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { unsetToken } from "../lib/auth";
import { Container, Nav, NavItem, Input, InputGroup, InputGroupAddon } from "reactstrap";
import defaultPage from "../hocs/defaultPage";
import Cookie from "js-cookie";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }
  static async getInitialProps({ req }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps, isAuthenticated };
  }
  onChange(e) {
    //set the state = to the input typed in the search Input Component
    //this.state.query gets passed into RestaurantList to filter the results
    this.setState({ query: e.target.value.toLowerCase() });
  }
  render() {
    const { isAuthenticated, children } = this.props;
    const title = "gimmegrub";
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
          <link 
            rel="stylesheet" 
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" 
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" 
            crossorigin="anonymous"
          />
          <script src="https://js.stripe.com/v3" />
          <link href="https://fonts.googleapis.com/css?family=Gothic+A1|Roboto" rel="stylesheet" />
        </Head>
        <header style={{ marginBottom: "30px" }}>
          <Nav className="navbar navbar-light bg-white" style={{ position: "sticky !important", top: "0" }}>
            <NavItem>
              <Link href="/">
                <a className="navbar-brand"><span style={{ color: "black", fontFamily: "Roboto, Helvetica, Arial, 'Open Sans'", fontWeight: "900" }}>gimmegrub</span></a>
              </Link>
            </NavItem>
            {isAuthenticated ? (
              <>
                <NavItem className="ml-auto">
                  <span style={{ color: "black", fontFamily: "Roboto, Helvetica, Arial, 'Open Sans'", fontWeight: "500", marginRight: 30 }}>
                    {this.props.loggedUser}
                  </span>
                </NavItem>
                <NavItem>
                  <Link href="/">
                    <a className="logout" onClick={unsetToken}>
                    <span style={{ color: "black", fontFamily: "Roboto, Helvetica, Arial, 'Open Sans'", fontWeight: "100" }}>Logout</span>
                    </a>
                  </Link>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem className="ml-auto">
                  <Link href="/signin">
                    <a className="nav-link"><span style={{ color: "black", fontFamily: "Roboto, Helvetica, Arial, 'Open Sans'", fontWeight: "100" }}>Sign In</span></a>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link href="/signup">
                    <a className="nav-link"><span style={{ color: "black", fontFamily: "Roboto, Helvetica, Arial, 'Open Sans'", fontWeight: "100" }}> Sign Up</span></a>
                  </Link>
                </NavItem>
              </>
            )}
          </Nav>
        </header>
        <Container>{children}</Container>
        <footer className="footer" style={{ position: "static", bottom: "0" }}><Link href="http://jasonspringer.me/">Jason Springer</Link></footer>
        {/* <footer className="footer">
          {"Strapi footer"}
          <style jsx>
            {`
              .footer {
                position: static;
                bottom: 0;
                width: 100%;
                height: 60px;
                line-height: 60px;
                background-color: #f5f5f5;
              }
              a:hover {
                cursor: pointer;
                color: yellow;
              }
            `}
          </style>
        </footer> */}
      </div>
    );
  }
}

export default defaultPage(Layout);