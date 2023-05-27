import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import Home from "./HomePage/HomePage";
import Cart from "./Cart/Cart";
import PhonebookContacts from "./PhonebookContacts/PhonebookContacts";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/contacts" element={<PhonebookContacts />} />
                </Route>
            </Routes>

        </>
    )

};
