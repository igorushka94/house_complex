import "./Logos.css";
import logo from "../../logo.svg"


function Logos() {

    return(
        <div className="Logos">
            <div className="Logos-btn center-text">
                <button>prev</button>
            </div>
            <div className="Logos-item center-text">2</div>
            <div className="Logos-btn center-text">
                <button>next</button>
            </div>
        </div>
    );
}

export default Logos;
