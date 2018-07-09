import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import CustomersContainer from "./containers/CustomersContainer";
import NewCustomerContainer from "./containers/NewCustomerContainer";

class App extends Component {
  renderCustomerListContainer = () => <h1>Customer list container</h1>;
  renderCustomerNewContainer = () => <h1>Customer new container</h1>;

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/customers" component={CustomersContainer} />
          <Switch>
            <Route path="/customers/new" component={NewCustomerContainer} />
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
