import { HashRouter, Routes, Route } from "react-router-dom";
import MediaQuery from "react-responsive";

import CssBaseline from "@mui/material/CssBaseline";

import NavigationBar from "./components/NavigationBar";
import NavigationDrawer from "./components/NavigationDrawer";
import HomePage from "./page/Home";
import PublicationPage from "./page/Publications";
import NewsPage from "./page/News";
import JoinUsPage from "./page/JoinUs";

export default function App() {
  return (
    // https://reactrouter.com/en/main/router-components/hash-router
    <HashRouter>
      {/* https://mui.com/material-ui/react-css-baseline/ */}
      <CssBaseline />
      <div>
        {/* https://stackoverflow.com/questions/51054431/material-ui-appbar-doesnt-scale-down-when-on-mobile */}
        <MediaQuery maxWidth={1024}>
          <NavigationDrawer />
        </MediaQuery>
        <MediaQuery minWidth={1024}>
          <NavigationBar />
        </MediaQuery>
      </div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/publication" element={<PublicationPage />} />
        <Route exact path="/news" element={<NewsPage />} />
        <Route exact path="/joinus" element={<JoinUsPage />} />
      </Routes>
    </HashRouter>
  );
}
