const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: null,
            users: null,
            notes: null,
            deals: null,
            response: null,
            error: null,
            userId: null,
        },
        actions: {
            getContacts: async () => {
                fetch("http://localhost:5000/api/contacts", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            contacts: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "contacts " + error.message
                        })
                    });
            },
            getUsers: async () => {
                fetch("http://localhost:5000/api/users", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            users: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "users " + error.message
                        })
                    });
            },
            getNotes: async () => {
                fetch('http://localhost:5000/api/notes', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            notes: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "notes " + error.message
                        })
                    });
            },
            getDeals: async () => {
                fetch("http://localhost:5000/api/deals", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            deals: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "deals " + error.message
                        })
                    });
            },
            setContact: async (name, lastName, rut, type, phone, email, userId) => {
                fetch("http://localhost:5000/api/contacts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "name": name,
                        "last_name": lastName,
                        "rut": rut,
                        "type": type,
                        "phone": phone,
                        "email": email,
                        "user_id": userId
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            setUser: async (name, lastName, rut, type, phone, email, password) => {
                fetch("http://localhost:5000/api/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "name": name,
                        "last_name": lastName,
                        "rut": rut,
                        "type": type,
                        "phone": phone,
                        "email": email,
                        "password": password
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            setNote: async (comment, contactId, userId) => {
                fetch("http://localhost:5000/api/notes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "comment": comment,
                        "user_id": contactId,
                        "contact_id": userId
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            setDeal: async (plan, duration, description, contactId, userId) => {
                fetch("http://localhost:5000/api/deals", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "plan": plan,
                        "duration": duration,
                        "description": description,
                        "user_id": userId,
                        "contact_id": contactId
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            editContact: async (id, name, lastName, rut, type, phone, email, userId) => {
                fetch("http://localhost:5000/api/contacts/"+id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "name": name,
                        "last_name": lastName,
                        "rut": rut,
                        "type": type,
                        "phone": phone,
                        "email": email,
                        "user_id": userId
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            editUser: async (id, name, lastName, rut, type, estado, phone, email) => {
                fetch("http://localhost:5000/api/users/"+id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "name": name,
                        "last_name": lastName,
                        "rut": rut,
                        "type": type,
                        "estado": estado,
                        "phone": phone,
                        "email": email
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            editNote: async (id, comment, contactId, userId) => {
                fetch("http://localhost:5000/api/notes"+id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "comment": comment,
                        "user_id": contactId,
                        "contact_id": userId
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            editDeal: async (id, plan, duration, description, contactId, userId) => {
                fetch("http://localhost:5000/api/deals/"+id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "plan": plan,
                        "duration": duration,
                        "description": description,
                        "user_id": contactId,
                        "contact_id": userId
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            deleteContact: async (id) => {
                fetch("http://localhost:5000/api/contacts/"+id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            deleteUser: async (id) => {
                fetch("http://localhost:5000/api/users/"+id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            deleteNote: async (id) => {
                fetch("http://localhost:5000/api/notes/"+id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            deleteDeal: async (id) => {
                fetch("http://localhost:5000/api/deals/"+id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            idUser: (id) => {
                setStore({ userId: id })
            }

        }
    };
};

export default getState;