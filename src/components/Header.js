import React from "react";

import "../style.css";

function Header() {
    const headerText = "app";

    return (
        <header className="navbar">
            <h4>Välkommen till min  {`${headerText}`}</h4>
        </header>
    )
}

export default Header;