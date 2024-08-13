import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import AppRoutes from "./routes";


function App() {
    return (
        <BrowserRouter>
            <Header />
            <AppRoutes />
            <GlobalStyles/>
            <ToastContainer autoClose={3000} className="toast-container" />
        </BrowserRouter>
    )
}

export default App;
