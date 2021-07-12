import React, { useEffect, useState } from 'react';
import { getState } from 'expect';

export const AppContext = React.createContext(null);

function ContextWrapper(PassedComponent) {
    const StoreWrapper = props => {
        const [state, setState] = useState(
            getState({
                getStore: () => state.store,
                getActions : () => state.actions,
                setStore : updateStore =>
                setState({
                    store: Object.assign(state.store, updateStore),
                    actions: {...state.actions}
                })
            })
        );

        useEffect(() =>{
            state.actions.getContacts();
            state.actions.getUsers();
            state.actions.getNotes();
            state.actions.getDeals();
        },[]);

        return(
            <AppContext value={state}>
                <PassedComponent {...props} />
            </AppContext>
        );
    };
    return StoreWrapper;
};

export default ContextWrapper;
