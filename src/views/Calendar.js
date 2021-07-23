import React, { useContext, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import  dayGridPlugin   from '@fullcalendar/daygrid'
import { AppContext } from '../store/appContext';
import { useHistory } from 'react-router';

function Calendar(){
    const { store, actions } = useContext(AppContext);
    let history = useHistory()

    let fecha = '25/07/2021'.split("/").reverse().join("-");
    let dates = []
    if(store.notes !== null && store.contacts !== null){
        store.notes.forEach(note => {
            dates.push({title: "nota " + note.id + " " + (store.contacts.find(contact => contact.id === note.contact_id).name) + " " +
            (store.contacts.find(contact => contact.id === note.contact_id).last_name), date: note.create_at.split("/").reverse().join("-"), color: 'lightgreen' })
        });
        store.deals.forEach(deal => {
            dates.push({title: "trato " + deal.id + " " + (store.contacts.find(contact => contact.id === deal.contact_id).name) + " " +
            (store.contacts.find(contact => contact.id === deal.contact_id).last_name), date: deal.create_at.split("/").reverse().join("-"), color: '#cyan' })
        });
    }
    

    useEffect(() => {
        if(sessionStorage.getItem("token") === null){
            history.push('/login')
        }
        actions.getContacts();
        actions.getUsers();
        actions.getNotes();
        actions.getDeals();
        console.log(dates)
    },[]);

    return(
        <div className="container">
            <div className="row">
                {store.notes !== null ? <>
                <div className="d-flex justify-content-between align-items-center my-2 mt-5 my-2">
                    <h2>Calendario</h2>
                </div>
                <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                events={ dates}
                />
                </> : ""}
            </div>
        </div>

    )
}

export default Calendar

//[ {title: 'Ejemplo', date: fecha, color: "purple"}]