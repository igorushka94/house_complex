import "./Benefit.css";


function Benefit(props) {
    return (
        <div className="Benefit">
            <div className="Benefit-text">
                <p>Преимущества жизни в {props.title}</p>
            </div>
            <div className="Benefit-group">
                <div className="Benefit-group item">item</div>
                <div className="Benefit-group item">item</div>
                <div className="Benefit-group item">item</div>
                <div className="Benefit-group item">item</div>
            </div>
        </div>
    );
}


export default Benefit;