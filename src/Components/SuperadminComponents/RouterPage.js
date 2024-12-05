import React from "react";
import{Routes,Route} from 'react-router-dom';
import AddCustomer from "./AddCustomer";



export default function RouterPage() {
    return(
        <div className="container">
            <Routes>
            <Route path="/add-customer" element={<AddCustomer/>} />
            </Routes>
         </div>
    )

}