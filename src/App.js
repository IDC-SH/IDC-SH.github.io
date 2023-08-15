import React from "react";
import { HashRouter, BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./page/Home";
import ResearchPage from "./page/Research";
import PublicationPage from "./page/Publications";
import NewsPage from "./page/News";
import JoinUsPage from "./page/JoinUs";

import TemplateProjectPage from "./projects/template";

class App extends React.Component {
  render() {
    return (
      <HashRouter basename="/idcgroup">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/research" component={ResearchPage} />
          <Route exact path="/publication" component={PublicationPage} />
          <Route exact path="/news" component={NewsPage} />
          <Route exact path="/joinus" component={JoinUsPage} />
          <Route
            exact
            path="/projects/template"
            component={TemplateProjectPage}
          />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
