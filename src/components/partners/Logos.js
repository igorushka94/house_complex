import "./Logos.css";
import Buttons from "../buttons/Button";


function Logos() {

    return(
        <div className="Logos">
            <Buttons direction="left" />
            <div className="Logos items">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
            <Buttons direction="right" />
        </div> 
    );
}

export default Logos;
