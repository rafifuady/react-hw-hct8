import React from 'react';
import Button from "../../atom/Button";

let NavigationBar = () => {
    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark">
            <ul className="nav">
            <li className="nav-item col-4">
                <Button className="navbar-brand active" href="https://github.com/rafifuady" value="QTEMU" /> 
            </li>
            <li className="nav-item col-5">
                <Button className="navbar-text" href="https://github.com/rafifuady" value="Create Meetup" /> 
            </li>
            <li className="nav-item col-3">
                <Button className="navbar-text" href="https://github.com/rafifuady" value="Explore" />
            </li>
            </ul>
            </nav>
        </React.Fragment>
    )
}
export default NavigationBar;