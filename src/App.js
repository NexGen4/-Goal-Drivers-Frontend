import React from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home"
import Form from "./components/Form/Form"
import BidForm from "./components/Form/BidForm";
import DirectForm from "./components/Form/DirectForm";
import Seller from "./components/Seller/Seller";
import SellerBid from "./components/Seller/SellerBid";
import CustomerBid from "./components/Customer/CustomerBid";
import ConfirmOrder from "./components/Customer/ConfirmOrder";
import Feedback from "./Feedback/Feedback";
import NotificationSystem from "./components/Notification/NotificationSystem";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/form" element={<Form/>}/>
                <Route path="/bid" element={<BidForm/>}/>
                <Route path="/direct" element={<DirectForm/>}/>
                <Route path="/seller" element={<Seller/>}/>
                <Route path="/seller-bid" element={<SellerBid/>}/>
                <Route path="/customer-bid" element={<CustomerBid/>}/>
                <Route path="/confirm-order/:id" element={<ConfirmOrder/>}/>
                <Route path="/feedback" element={<Feedback/>}/>
                <Route path="/notification" element={<NotificationSystem/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
