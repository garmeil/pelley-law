import React from 'react';
import "./TopNav.css"
import MdMenu from "react-icons/lib/md/menu"

export default class TopNav extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: true
        };
    }
    handleMenuClick() {

        if (this.state.expanded) {
            document.getElementById('nav-link-container').className += ` expanded`
            console.log(document.getElementById('nav-link-container').className)
        }
        else {
            document.getElementById('nav-link-container').className = 'nav-link-container'
            console.log(document.getElementById('nav-link-container').className)
        }

        this.setState({ expanded: !this.state.expanded })

    }
    render() {
        return (<div className="container-nav-wrap">
            <div className="container-nav">
                <div className="nav-buttons-container">
                    <div className="menu-button" onClick={() => this.handleMenuClick()}><MdMenu size={24} /> Menu</div>
                    <div className="contact-button">Contact</div>
                </div>
                <div id="nav-link-container" className="nav-link-container">
                    <span className="nav-link">Home</span>
                    <span className="nav-link">Case Results</span>
                    <span className="nav-link">Faqs</span>
                    <span className="nav-link">Attorney Profiles</span>
                    <span className="nav-link">Contact Us</span>
                </div>
            </div>
        </div>)
    }
}

