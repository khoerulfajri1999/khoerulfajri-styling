import React from "react";
import Atas from "./bootstrap";
import Isian from "./bootstrap/Isi";

export default class Bootstrap extends React.Component {
    render () {
        return (
            <div>
                <Atas />
                <Isian />
            </div>
            
        )
    }
}