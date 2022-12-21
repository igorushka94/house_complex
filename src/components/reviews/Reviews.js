import "./Reviews.css";


function Reviews() {
    return (
        <div className="Reviews">
            <h3>Отзывы наших клиентов</h3>
            <div className="Reviews item">
                <div className="Reviews item-photo">
                    <img alt="avatar"></img>
                </div>
                <div className="Reviews item-sign">
                    <p>Антон Антонов</p>
                </div>
                <div className="Reviews item-review">
                    Тут отзыв
                </div>
            </div>
        </div>
    );
}


export default Reviews;