/* /pages/_app.js */

import Layout from "../components/Layout";
import withData from "../lib/apollo";
import AppProvider from "../components/Context/AppProvider";
import App, { Container } from "next/app";
import React from "react";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, isAuthenticated, ctx } = this.props;
    return (
      <Container>
        <AppProvider>
          <Layout isAuthenticated={isAuthenticated} {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </AppProvider>
        <style jsx global>
          {`
            a {
              color: blue;
            }
            a:link {
              text-decoration: none !important;
              color: blue !important;
            }
            a:hover {
              color: DeepSkyBlue;
            }
            .card {
              display: inline-block !important;
              vertical-align: top !important;
              margin-bottom: 30px;
            }
            .card-columns {
              column-count: 3;
            }
            .footer {
              margin-top: 50px;
              width: 100%;
              height: 50px;
              line-height: 50px;
              background-color: #313131;
              text-align: center;
              font-family:  Helvetica, Arial;
            }
            .footer a {
              color: #fafafa !important;
              text-decoration: none;
            }
            .footer a:hover {
              color: #dadada !important;
              text-decoration: none; 
            }

            .midBgColor {
              background-color: #ffeae4;
            }
          `}
        </style>
      </Container>
    );
  }
}
export default withData(MyApp);