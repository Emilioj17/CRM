import React, { useContext, useEffect } from 'react'
import { FaStop } from 'react-icons/fa';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { AppContext } from '../store/appContext';
import { useHistory } from 'react-router';

function Calendar() {
    const { store, actions } = useContext(AppContext);
    let history = useHistory()

    let dates = []
    if (store.notes !== null && store.contacts !== null) {
        store.notes.forEach(note => {
            dates.push({
                title: "nota " + note.id + " " + (store.contacts.find(contact => contact.id === note.contact_id).name) + " " +
                    (store.contacts.find(contact => contact.id === note.contact_id).last_name), date: note.create_at.split("/").reverse().join("-"), color: '#16A085'
            })
        });
    }
    if(store.deals !== null && store.contacts !== null){
        store.deals.forEach(deal => {
            dates.push({
                title: "trato " + deal.id + " " + (store.contacts.find(contact => contact.id === deal.contact_id).name) + " " +
                    (store.contacts.find(contact => contact.id === deal.contact_id).last_name), date: deal.create_at.split("/").reverse().join("-"), color: '#D35400'
            })
        });
    }
    if(store.events !== null && store.contacts !== null){
        store.events.forEach(event => {
            dates.push({
                title: "Evento " + event.id + " " + (store.contacts.find(contact => contact.id === event.contact_id).name) + " " +
                    (store.contacts.find(contact => contact.id === event.contact_id).last_name), date: event.date.split("/").reverse().join("-"), color: '#8E44AD'
            })
        });
    }


    useEffect(() => {
        if (sessionStorage.getItem("token") === null) {
            history.push('/login')
        }
        actions.getContacts();
        actions.getUsers();
        actions.getNotes();
        actions.getEvents();
        actions.getDeals();
        console.log(dates)
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-between align-items-center my-2 mt-5 my-2">
                    <h2>Calendario</h2>
                </div>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    events={dates}
                />
                <div className="my-3">
                    <div className="me-2" style={{ float: "left", display: "flex" }}>
                        <span style={{ width: "20px", height: "20px", background: "#16A085", borderRadius: "3px" }}></span><span className="mx-2">Nota</span>
                    </div>
                    <div className="mx-2" style={{ float: "left", display: "flex" }}>
                        <span style={{ width: "20px", height: "20px", background: "#D35400", borderRadius: "3px" }}></span><span className="mx-2">Trato</span>
                    </div>
                    <div className="mx-2" style={{ float: "left", display: "flex" }}>
                        <span style={{ width: "20px", height: "20px", background: "#8E44AD", borderRadius: "3px" }}></span><span className="mx-2">Evento</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Calendar

//[ {title: 'Ejemplo', date: fecha, color: "purple"}]