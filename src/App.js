import React from "react";
import Particleground from "particleground-light";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import daWeekender from "./components/daWeekender";
import Drago from "./components/Drago";
import MedSight from "./components/MedSight";
import { Route } from "react-router-dom";
import Tracker from "./components/Tracker";
import Footer from "./components/Footer"


class App extends React.Component {

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
          <Route exact path="/" component={Tracker(Carousel)} />
          <Route exact path="/medsight" component={Tracker(MedSight)} />
          <Route exact path="/weekender" component={Tracker(daWeekender)} />
          <Route exact path="/drago" component={Tracker(Drago)} />
        </div>
        <Footer/>
      </div>
    )
  }
}
  

export default App;