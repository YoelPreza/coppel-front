import React from "react";
import LandingModel from "../models/landingModel";
import LandingView from "../views/landingView";

class LandingController extends React.Component {
  constructor() {
    super();
    this.model = new LandingModel();
    this.view = (
      <LandingView
        welcomeMessage={this.model.welcomeMessage}
        explication={this.model.explication}
      />
    );
  }

  render() {
    return this.view;
  }
}

export default LandingController;
