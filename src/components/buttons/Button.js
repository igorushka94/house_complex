import "./Button.css";


function Buttons(props) {
    return (
        <div className="Button">
            <div className={`slider-` + props.direction}>
            </div>
        </div>
    );
}


export default Buttons;
