import React from "react";
import { Route, Switch } from "react-router-dom";

// styles for this kit
import "../assets/css/bootstrap.min.css";
import "../assets/css/now-ui-kit.css";
import "../assets/demo/demo.css";
import "../assets/demo/nucleo-icons-page-styles.css";

// style main page
import "../assets/css/main/index.css";

// pages for this kit
import Index from "./index";
import Home from "./views/home"
import TestIndex from "../components/views/index";

function Routes() {
    return (
        <Switch>
            <Route
                path="/"
                render={ () => {
                    return <Home/>
                }}
            />
            <Route
                path="/test"
                render={ () => {
                    return <Index/>
                }}
            />
            <Route
                path="/testPage"
                render={ () => {
                    return <TestIndex/>
                }}
            />
            {/*<Redirect to="/index"/>*/}
            {/*<Redirect from="/" to="/index"/>*/}
        </Switch>
    );
}

export default Routes;
