import React, { useState } from "react";
import Main from "./components/main";
import NavBar from "./components/navBar.jsx";
import AlertBox from "./components/alert.jsx";
import Footer from "./components/footer.jsx";
import "./css/alertContent.css";
export default function App() {
    const [error, setError] = useState("");
    return (
        <>
            <div className="bodybox">
                <NavBar />
                <AlertBox message={error} onClose={() => setError("")} />
                <Main setError={setError} />
                <Footer />
            </div>
            
        </>
    );
}

