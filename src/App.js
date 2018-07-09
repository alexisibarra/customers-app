import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomeContainer from "./containers/HomeContainer";

class App extends Component {
  renderHome = () => <h1>Home</h1>;
  renderCustomerContainer = () => <h1>Customer container</h1>;
  renderCustomerListContainer = () => <h1>Customer list container</h1>;
  renderCustomerNewContainer = () => <h1>Customer new container</h1>;

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={HomeContainer} />
          <Route
            exact
            path="/customers"
            component={this.renderCustomerListContainer}
          />
          <Switch>
            <Route
              path="/customers/new"
              component={this.renderCustomerNewContainer}
            />
            <Route
              path="/customers/:dni"
              component={this.renderCustomerContainer}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
