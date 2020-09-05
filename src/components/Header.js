import React from "react";

import "../style.css";

function Header() {
    const headerText = "Skriv upp lite grejer";

    return (
        <header className="navbar">
            <h4>{headerText}</h4>
        </header>
    )
}

export default Header;