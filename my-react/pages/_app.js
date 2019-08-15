import React from "react";
import App, { Container } from "next/app";
import { Header, Footer } from "../components/common/Manager";

// TextEditor CSS
import "react-quill/dist/quill.snow.css";
class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return <div className="layout">{children}</div>;
  }
}

export default class MyApp extends App {
  componentWillMount() {
    console.log("====================================");
    console.log("Will Mount");
    console.log("====================================");
  }

  componentDidMount() {
    console.log("====================================");
    console.log("did Mount");
    console.log("====================================");
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <LinkCSS />
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </Container>
    );
  }
}

function LinkCSS() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </div>
  );
}
