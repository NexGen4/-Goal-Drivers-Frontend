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
import Product from "./Product/Home";
import ProductDetails from "./Product/ProductDetails";
import AddToCartProducts from "./Product/AddToCartProducts";
import OrderConfirm from "./Product/OrderConfirm";
import Report from './Report/Client/Report';
import MembershipNotification from "./Membership/MembershipNotification";
import SamplePaymentPage from "./Product/SamplePaymentPage";
import AboutPage from "../src/About/About";
import ProductInfo from "./Product/ProductInfo";



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
                <Route path="/customer-bid/:id" element={<CustomerBid/>}/>
                <Route path="/confirm-order/:id" element={<ConfirmOrder/>}/>
                <Route path="/feedback" element={<Feedback/>}/>
                <Route path="confirm-order/:amount" element={<OrderConfirm />} />
                <Route path="addToCart/:id" element={<AddToCartProducts />} />
                {/* <Route path="report" element={<Report/>}/> */}
                <Route path="product/:type" element={<Product />} />
                <Route path="report" element={<ProductDetails />} />
                <Route path="membershipNotification" element={<MembershipNotification />} />
                <Route path="samplePayment" element={<SamplePaymentPage />} />
                <Route path="aboutus" element={<AboutPage />} />
                <Route path="productDetail/:id" element={<ProductInfo />} />
                <Route path="confirm-order/:id/:qty" element={<OrderConfirm />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
