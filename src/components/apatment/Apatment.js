import "./Apatment.css";
import apatmentPlan from "../../assets/img/plan.png";



function Apatment() {
    return(
        <div className="Apatment">
            <h2>Планировка квартир</h2>
            <div className="Apatment-group">
                <div id="Apatment-group-plan">
                    <img src={apatmentPlan} alt="plan"></img>
                </div>
                <div id="Apatment-group-price">
                    <div className="Apatment-flat">
                        <span className="Apatment-flat-frame">1-комн.</span>
                        <span className="Apatment-flat-frame2">2-комн.</span>
                    </div>
                    <p>Однокомнатные квартиры от 23м</p>
                    <br />От 5 400 000 Р
                    <span className="Apatment-flat-frame">Подобрать квартиру</span>
                </div>
            </div>
        </div>
    );
}

export default Apatment;