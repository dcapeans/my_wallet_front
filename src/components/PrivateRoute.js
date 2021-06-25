import React from "react";
import { Redirect, Route } from "react-router";

export default function PrivateRoute({component: Component, path, transactions, fetchTransactions}){
    return (
        <Route path={path} exact>
            {localStorage.getItem("user") ? (<Component fetchTransactions={fetchTransactions} transactions={transactions}/>) : <Redirect to="/"/>}
        </Route>
    )
}