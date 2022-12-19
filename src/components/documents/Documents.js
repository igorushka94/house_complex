import "./Documents.css"
import view from "../../assets/img/view.svg";
import loading from "../../assets/img/download.svg";
import paper from "../../assets/img/document.svg";
import { useState } from "react";
import Api from "../../Api";


function Documents() {

    const [docs, setDocs] = useState([
        {
            title: "Градостроительный план",
            file: "aksdk"
        },
        {
            title: "Договор аренды участка",
            file: "aksdk"
        },
        {
            title: "Договор аренды участка",
            file: "aksdk"
        },
        {
            title: "Договор аренды участка",
            file: "aksdk"
        },
        {
            title: "Договор аренды участка",
            file: "aksdk"
        },
    ]);

    const getDocument = (method, id) => {
        switch (method) {
            case 'view':
                // file = Api.getDocument(id);
            case 'download':
                // file = Api.getDocument(id);
        }
    }

    const renderListOfDocuments = (documents) => {
        return documents.map(
            doc =>
                <div className="Documents-item">
                    <img src={paper} width="24" height="24" />
                    <span className="Documents-item-title">{doc.title}</span>
                    <a id="Documents-item-icon-viev" href={doc.file} />
                    <a id="Documents-item-icon-download" href={doc.file} download />
                </div>
        )
    }

    return(
        <div className="Documents">
            <h2>Документы</h2>
            {renderListOfDocuments(docs)}
        </div>
    );
}

export default Documents;