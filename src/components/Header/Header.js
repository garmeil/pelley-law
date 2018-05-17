import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import Logo from "../../assets/images/pelley-brand.png"
import MdLocalPhone from "react-icons/lib/md/local-phone"


export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <div className="header-page-wrap">
                <div className="header-page">
                    <div className="brand-image" style={{ backgroundImage: `url(${Logo})`, backgroundSize: 'fit', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', marginBottom: '15px' }} />
                    <div className="container-brand-cta">
                        <div className="cta">
                            <div className="cta-cities">
                                <span className="cta-text">Dallas Office</span>
                                <span className="cta-text cta-plan">Plano Office</span>
                                <span className="cta-text cta-sher">Sherman Office</span>
                            </div>
                            <div className="cta-content">
                                <span className="cta-phone"><MdLocalPhone className="phone-icon" /> 214-733-1775</span>
                                <span className="cta-phone middle"><MdLocalPhone className="phone-icon" /> 972-608-0335</span>
                                <span className="cta-phone"><MdLocalPhone className="phone-icon" /> 903-813-4778 </span>
                            </div>
                            <h2>NO CHARGE FOR INITIAL CONSULTATION ($250 VALUE)</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}