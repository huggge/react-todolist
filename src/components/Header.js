import React from "react";

import "../style.css";

function Header() {
    const headerText = "Titel";

    return (
        <header className="navbar">
            <h4>här är en {`${headerText} och här är den igen ${headerText}`}</h4>
        </header>
    )
}

export default Header;