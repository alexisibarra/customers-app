import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import AppFrame from "../components/AppFrame";
import CustomersList from "../components/CustomersList";
import CustomersActions from "../components/CustomersActions";

const customers = [
  { dni: "23", name: "José", age: 34 },
  { dni: "24", name: "Alberto", age: 34 },
  { dni: "25", name: "Jacinto", age: 34 },
  { dni: "26", name: "Juan", age: 34 }
];
class CustomersContainer extends Component {
  handleAddNew = () => {
    this.props.history.push("/customers/new");
  };

  renderBody = customers => {
    return (
      <div>
        <CustomersList customers={customers} urlPath={"customer/"} />
        <CustomersActions>
          <button onClick={this.handleAddNew}> Nuevo Cliente</button>
        </CustomersActions>
      </div>
    );
  };

  render() {
    return (
      <div>
        <AppFrame
          header={"Listado de clientes"}
          body={this.renderBody(customers)}
        />
      </div>
    );
  }
}

CustomersContainer.propTypes = { history: PropTypes.object.isRequired };

export default withRouter(CustomersContainer);
