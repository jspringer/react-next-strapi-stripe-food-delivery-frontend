/* /pages/_app.js */

import Layout from "../components/Layout";
import withData from "../lib/apollo";
import AppProvider from "../components/Context/AppProvider";
import defaultPage from "../hocs/defaultPage";
import { compose } from "recompose";
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
              height: 60px;
              line-height: 60px;
              background-color: #f5f5f5;
              text-align: center;
              font-family: 'Gothic A1', Roboto, Helvetica, Arial;
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