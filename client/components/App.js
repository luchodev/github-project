import React from "react";
import { Route, Switch } from "react-router-dom";

import homePage from "./../pages/home";
import notFoundPage from "./../pages/notFound";

class App extends React.Component {
   render() {
      return (
         <Switch>
            <Route exact path="/" component={homePage} />
            <Route component={notFoundPage} />
         </Switch>
      );
   }
}

export default App;
