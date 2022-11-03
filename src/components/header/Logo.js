import logo from '../../logo.svg';
import "./Logo.css";


function Logo() {
    return (
        <div className="Logo">
            <img src={logo} width="24" height="24" alt="logo"></img>
        </div>
    );
}


export default Logo;