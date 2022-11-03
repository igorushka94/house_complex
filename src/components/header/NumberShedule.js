import "./NumberShedule.css";


function NumberShedule(props) {
    return (
        <div className="NumberShedule">
            <div className="NumberShedule-flex">
                <div className="NumberShedule-phone">{props.number}</div>
                <div className="NumberShedule-shedule">{props.shedule}</div>
            </div>
        </div>
    );
}


export default NumberShedule;