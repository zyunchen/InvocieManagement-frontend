import React, { Component } from "react";
import Navbar from "./component/Navbar";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import InvoiceCreate from "./pages/invoice_create/InvoiceCreate";
import InvoiceEdit from "./pages/invoice_create/InvoiceEdit";
import InvoicePayment from "./pages/invoice_create/InvoicePayment";
import InvoiceList from "./pages/invoice_list/InvoiceList";
import Root from "./Root";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import axios from "axios";

class App extends Component {
  render() {
    return (
      <div>
        <Root>
          <ToastContainer hideProgressBar={true} newestOnTop={true} />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/home" component={Home} />
            <Route path="/invoice_create" component={InvoiceCreate} />
            <Route path="/invoice_list" component={InvoiceList} />
            <Route path="/invoice/edit/:id" component={InvoiceEdit} />
            <Route path="/invoice/payment/:id" component={InvoicePayment} />
          </Switch>
        </Root>
      </div>
    );
  }
}

export default App;
