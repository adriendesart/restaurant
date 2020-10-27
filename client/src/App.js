import React, { Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import WelcomePage from './pages/welcome';
import Admin from './pages/admin';
import NotFound from './pages/error404';

import {getDeviceTypeInfo} from './utils/responsive';
import {getBrowserLanguage} from './utils/browserLang';
import ScrollToTop from '../src/utils/scrolltotop';

const { deviceType, deviceOrientation, screenWidth, screenHeight } = getDeviceTypeInfo();

export default class App extends Component {
  language = getBrowserLanguage()
  state = {
      language : this.language,
      deviceType,
      deviceOrientation,
      screenWidth, 
      screenHeight,
  }
  componentDidMount() {
      window.addEventListener("resize", this.handleResize, false);
  };
  componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize, false);
  };
  handleResize = () => {
      const { deviceType, deviceOrientation, screenWidth, screenHeight } = getDeviceTypeInfo();
      this.setState({ deviceType, deviceOrientation, screenWidth, screenHeight });
    };
  setLanguage = lang =>{
      this.setState({language : lang})
  };
  
  render(){
    return (
      <Router>
        <ScrollToTop/>
        <Switch>
            <Route exact path="/">
              <WelcomePage
                deviceType={this.state.deviceType}
                deviceOrientation={this.state.deviceOrientation}
              />
            </Route>
            <Route path="/admin">
              <Admin 
                deviceType={this.state.deviceType}
                deviceOrientation={this.state.deviceOrientation}
              />
            </Route>
            <Route component={NotFound}/>
        </Switch>
      </Router>
    )
  }
}