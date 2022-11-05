import "./Contacts.css";


function Contacts(props) {
    return (
        <div className="Footer-contacts">
            <div className="Footer-phone">
                <div className="Footer-item">Телефон:</div>
                <div className="Footer-content">{props.data.number}</div>
            </div>
            <div className="Footer-email">
                <div className="Footer-item">Эл. почта:</div>
                <div className="Footer-content">{props.data.email}</div>
            </div>
            <div className="Footer-address-office">
                <div className="Footer-item">Адрес офиса:</div>
                <div className="Footer-content">{props.data.address}</div>
            </div>
            <div className="Footer-address-object">
                <div className="Footer-item">Адрес объекта:</div>
                <div className="Footer-content">{props.data.address_object}</div>
            </div>
        </div>
    );
}

export default Contacts;
