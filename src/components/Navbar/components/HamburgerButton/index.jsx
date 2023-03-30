import React from "react";
import { Button } from "./style";
function HamburgerButton(props) {
    return (
        <Button >
            <div
                onClick={props.handleClick}
                className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Button>

    )
}

export default HamburgerButton