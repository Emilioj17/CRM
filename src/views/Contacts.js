import { useContext, useEffect } from 'react'
import { AppContext } from "../store/appContext.js";
import List from '../components/List'

function Contact() {
    const { store, actions } = useContext(AppContext);
    const { contacts } = store;

    return (
        <div className="container">
            <div className="row">
                <h1 className="my-5">Contactos</h1>
                <List objects={contacts}/>
            </div>
        </div>
    )
}

export default Contact
