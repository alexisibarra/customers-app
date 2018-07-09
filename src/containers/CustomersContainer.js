import React, { Component } from "react";
// import PropTypes from "prop-types";
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
  renderBody = customers => {
    return (
      <div>
        <CustomersList customers={customers} urlPath={"customer/"} />
        <CustomersActions>
          <button onClick={this.hangleAddNew}> Nuevo Cliente</button>
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

// CustomersContainer.propTypes = {};

export default CustomersContainer;