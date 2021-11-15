import "./styles.css";

import { Component } from "react";

export class Button extends Component{
    render(){
        const { text,bttnClicked,disabled } = this.props;

        return (
            <button
                disabled={disabled}
                className="bttn"
                onClick={bttnClicked}
            >
                {text}
            </button>
        );
    }
}