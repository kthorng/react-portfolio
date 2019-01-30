import React, { Component } from 'react'
import Particleground from "particleground-light";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import daWeekender from "./components/daWeekender";
import Drago from "./components/Drago";
import MedSight from "./components/MedSight";
import { Route } from "react-router-dom";
import Footer from "./components/Footer"


class App extends Component {

  state = {
    aboutMeOpen: false
  };

  toggleAboutMe = () => {
    if (this.state.aboutMeOpen) {
      this.setState({ aboutMeOpen: false })
    } else {
      this.setState({ aboutMeOpen: true })
    }
  };

  componentDidMount() {
    new Particleground(document.getElementById("particles"), {
        lineColor: "#FF4500",
        dotColor: "#FFD700",
        curverLines: true,
        particleRadius: 10,
        // directionX: 'center',
    });
  };

  render() {
    return(
      <div id="particles" className="particle-style">
        <div id="intro" className="intro-style">
          <Nav
            aboutMeOpen={this.state.aboutMeOpen}
            toggleAboutMe={this.toggleAboutMe}
          />
          <Carousel/>
          <Route exact path="/"/>
          <Route exact path="/medsight" component={MedSight} />
          <Route exact path="/weekender" component={daWeekender} />
          <Route exact path="/drago" component={Drago} />
        </div>
        <Footer/>
      </div>
    )
  }
}
  

export default App;