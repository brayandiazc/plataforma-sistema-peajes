import React from "react";

import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Features from "../../components/features/features";
import Footer from "../../components/footer/footer";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Home",
      content: "This is the home page"
    };
  }

  render() {
    return (
      <>
      <Header />
      <Hero />
      <Features />
      <Footer />
      </>
      )
  }
}

export default Home;