import "./Sale.css";


function Sale(props) {
    return (
        <div className="Sale">
            <h2>Как купить?</h2>
            <div className="Sale blocks">
                <div className="Sale block">
                    <div className="Sale block-item">
                        <img alt="img"></img>
                        <h3>Материнский капитал</h3>
                        <p>
                            Материнский капитал и другие субсидии в качестве первоначального взноса при покупке жилья в ипотеку или части стоимости квартиры
                        </p>
                    </div>
                    <div className="Sale block-item">
                        <img alt="img"></img>
                        <h3>Материнский капитал</h3>
                        <p>
                            Материнский капитал и другие субсидии в качестве первоначального взноса при покупке жилья в ипотеку или части стоимости квартиры
                        </p>
                    </div>
                </div>
                <div className="Sale questions">
                    <h3>Есть вопросы?</h3>
                    <p>Закажите бесплатную консультацию или звоните по номеру: {props.phone}</p>
                    <button>Заказать консультацию</button> 
                </div>
            </div>
        </div>
    );
}


export default Sale;