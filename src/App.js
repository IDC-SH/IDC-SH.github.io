import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import HomePage from "./page/Home";
import PublicationPage from "./page/Publications";
import NewsPage from "./page/News";
import JoinUsPage from "./page/JoinUs";

import NavigationBar from "./components/NavigationBar";

class App extends React.Component {
  render() {
    return (
      <HashRouter basename="/idcgroup">
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/publication" component={PublicationPage} />
          <Route exact path="/news" component={NewsPage} />
          <Route exact path="/joinus" component={JoinUsPage} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
