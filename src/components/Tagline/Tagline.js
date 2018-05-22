import React from 'react';
import "./Tagline.css"

export default class Tagline extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (<div className="container-tagline-wrap"><div className="container-tagline">
            <div className="tagline-multi-wrap">
                <div className="tagline-big-1">
                    <strong className="">COLLIN & DALLAS COUNTY 24/7 RAPID JAIL RELEASE</strong>
                    <span className="tagline-phone-number">214-997-7777</span>
                </div>
                <p className="">WANT TO GET OUT OF JAIL FASTER, HIRE A VETERAN DEFENSE TEAM, & SAVE MONEY ALL AT ONCE?</p>
                <strong className="">Of course you do. <a href='#'>Click here</a> right now.</strong>
            </div>
            <div className="tagline-pracs">
                <div className="prac-container-wrap">
                    <div className="prac-container">
                        <img className="prac-image" />
                        <div className="prac-desc">
                            <h1>BANKRUPTCY</h1>
                            <p>Stressed out from creditors calling you? Frustrated with you debt? We can help.</p>
                        </div>
                    </div>
                </div>

                <div className="prac-container-wrap">
                    <div className="prac-container">
                        <img className="prac-image" />
                        <div className="prac-desc">
                            <h1>CRIMINAL DEFENSE</h1>
                            <p>Under investigation? Been arrested? Keep your mouth shut!</p>
                        </div>
                    </div>
                </div>
                <div className="prac-container-wrap">
                    <div className="prac-container">
                        <img className="prac-image" />
                        <div className="prac-desc">
                            <h1>FAMILY LAW</h1>
                            <p>We treat our family law clients like members of the family.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>)
    }
}