import "./Footer.css";
import LogoButton from "./LogoButton";
import Contacts from "./Contacts";
import Social from "./Social";
import { useState } from "react";


function Footer() {

    const [contactData, setContactData] = useState({
        number: '+7 999-982-81-11',
        email: 'naruto228@gmail.com',
        address: 'Москва, пер. Советский, д.2, офис 17',
        address_object: 'Москва, пер. Советский, д.4',
    });

    return (
        <div className="Footer">
            <LogoButton />
            <div className="Line" />
            <Contacts data={ contactData } />
            <div className="Line" />
            <Social />
        </div>
    );
}


export default Footer;
