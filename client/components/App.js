import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";

import homePage from "./../pages/home";
import notFoundPage from "./../pages/notFound";

class App extends React.Component {
   render() {
      return (
         <>
            <Switch>
               <Route exact path="/" component={homePage} />
               <Route component={notFoundPage} />
            </Switch>
            <ToastContainer
               position="top-right"
               autoClose={6000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnVisibilityChange
               draggable
               pauseOnHover
               transition={Flip}
            />
         </>
      );
   }
}

export default App;
