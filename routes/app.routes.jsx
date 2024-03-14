import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { EditDish } from "../pages/EditDish";
import { Profile } from "../pages/Profile";
import { Details } from "../pages/Details";
import { Cart } from "../pages/cart";
import { Orders } from "../pages/Orders";
import { CreateDish } from "../pages/CreateDish";

export function AppRoutes() {
    return (
        <routes>
            <Route path="/" element={<Home/>} />
            <Route path="/createdish" element={<CreateDish />} />
            <Route pathpath="/editdish/:id" element={<EditDish />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
        </routes>
    )
}