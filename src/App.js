import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MediaQuery from "react-responsive";

import CssBaseline from "@mui/material/CssBaseline";

import NavigationBar from "./components/NavigationBar";
import HomePage from "./page/Home";
import PublicationPage from "./page/Publications";
import NewsPage from "./page/News";
import JoinUsPage from "./page/JoinUs";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <CssBaseline />
        <div>
          <MediaQuery maxWidth={996}>
            <h1>还没适配移动端</h1>
          </MediaQuery>
          <MediaQuery minWidth={996}>
            <NavigationBar />
          </MediaQuery>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/publication" component={PublicationPage} />
          <Route exact path="/news" component={NewsPage} />
          <Route exact path="/joinus" component={JoinUsPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
