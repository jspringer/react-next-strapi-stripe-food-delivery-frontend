/* hocs/defaultPage.js */

import React from "react";
import Router from "next/router";

import { getUserFromServerCookie, getUserFromLocalCookie } from "../lib/auth";

export default Page =>
  class DefaultPage extends React.Component {
    static async getInitialProps({ req }) {
      console.log("defaultPage req: ", req);
      const loggedUser = process.browser
        ? getUserFromLocalCookie()
        : getUserFromServerCookie(req);
      const pageProps = Page.getInitialProps && Page.getInitialProps(req);
      console.log("defaultPageis authenticated");
      console.log("defaultPageloggedUser: ", loggedUser);
      let path = req ? req.url : "/";
      console.log("defaultPage Path: ", path);
      console.log("defaultPage pageProps: ", pageProps);
      // path = "";
      return {
        ...pageProps,
        loggedUser,
        currentUrl: path,
        isAuthenticated: !!loggedUser
      };
    }

    logout = eve => {
      if (eve.key === "logout") {
        Router.push(`/?logout=${eve.newValue}`);
      }
    };

    componentDidMount() {
      window.addEventListener("storage", this.logout, false);
    }

    componentWillUnmount() {
      window.removeEventListener("storage", this.logout, false);
    }

    render() {
      return <Page {...this.props} />;
    }
  };