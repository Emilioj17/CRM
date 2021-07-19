const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: null,
            users: null,
            notes: null,
            deals: null,
            contact: null,
            user: null,
            note: null,
            deal: null,
            response: null,
            error: null,
            userId: null,
            contactMessage: null,
            usuarioActual: null,
            token: null
            // ingreso: []
        },
        actions: {
            getContacts: async () => {
                const store = getStore();
                fetch("http://localhost:5000/api/contacts", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
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
                const store = getStore();
                fetch("http://localhost:5000/api/users", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
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
                const store = getStore();
                fetch('http://localhost:5000/api/notes', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
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
                const store = getStore();
                fetch("http://localhost:5000/api/deals", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
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
            getContact: async (id) => {
                const store = getStore();
                fetch("http://localhost:5000/api/contacts/"+id, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            contact: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "contact " + error.message
                        })
                    });
            },
            getUser: async (id) => {
                const store = getStore();
                fetch("http://localhost:5000/api/users/"+id, {
                    method: "GET",
                    header: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            user: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "user " + error.message
                        })
                    });
            },
            getNote: async (id) => {
                const store = getStore();
                fetch("http://localhost:5000/api/notes/"+id, {
                    method: "GET",
                    header: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            note: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "note " + error.message
                        })
                    });
            },
            getDeal: async (id) => {
                const store = getStore();
                fetch("http://localhost:5000/api/deals/"+id, {
                    method: "GET",
                    header: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            deal: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "deal " + error.message
                        })
                    });
            },
            setContact: async (name, lastName, rut, type, phone, email, userId) => {
                const store = getStore();
                fetch("http://localhost:5000/api/contacts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
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
                const store = getStore();
                fetch("http://localhost:5000/api/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
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
                const store = getStore();
                fetch("http://localhost:5000/api/notes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    },
                    body: JSON.stringify({
                        "comment": comment,
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
            setDeal: async (plan, duration, description, contactId, userId) => {
                const store = getStore();
                fetch("http://localhost:5000/api/deals", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
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
                const store = getStore();
                fetch("http://localhost:5000/api/contacts/"+id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
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
                const store = getStore();
                fetch("http://localhost:5000/api/users/"+id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
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
                const store = getStore();
                fetch("http://localhost:5000/api/notes"+id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
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
                const store = getStore();
                fetch("http://localhost:5000/api/deals/"+id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
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
                const store = getStore();
                fetch("http://localhost:5000/api/contacts/"+id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
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
                const store = getStore();
                fetch("http://localhost:5000/api/users/"+id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
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
                const store = getStore();
                fetch("http://localhost:5000/api/notes/"+id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
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
                const store = getStore();
                fetch("http://localhost:5000/api/deals/"+id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
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
            },
            setContactMessage: (nombre, email, telefono, motivoDelMensaje, mensaje) => {
                const store = getStore();
                fetch("", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    },
                    body: JSON.stringify({
                        "nombre": nombre,
                        "email": email,
                        "telefono": telefono,
                        "motivo": motivoDelMensaje,
                        "mensaje": mensaje
                    })
                }).then((res) => res.json())
                    .then((data) => {
                        setStore({
                            contactMessage: data
                        })
                    })
                    .catch((err) => {
                        setStore({
                            error: err.message
                        })
                    });
                
            },
            getUsuario: (usuario) => {
                const actions = getActions();
				fetch("http://localhost:5000/login", {
					method: "POST",
					body: JSON.stringify({"email": usuario.correo, "password": usuario.clave})
				}).then(res => {
					if (res.status === 200) return res.json();
					else if (res.status === 401) {
						alert("Usuario o clave Incorrecto");
					}
				}).then(data => {
                    sessionStorage.setItem("usuarioActual", JSON.stringify(data[0]))
                    sessionStorage.setItem("token", data[1])
					setStore({ usuarioActual: data[0], token: data[1] });
					// setStore({ ingreso: ["Correcto"] });
					}
				).catch(error => { console.error("Hay un problemilla", error) })
            },
            sendEmail: (email) => {
                fetch("http://127.0.0.1:5000/enviarCorreo", {
					method: "POST",
					body: JSON.stringify(email)
				}).then(res => {
					if (res.status === 201) return res.json();
					else if (res.status === 401) {
						alert("Error Enviado Correo");
					}
				}).catch(error => { console.error("Hay un problemilla con el Envio del Correo: ", error) })
            },
            sendEmailRecovery: (email) => {
                fetch("http://127.0.0.1:5000/enviarCorreo", {
					method: "POST",
					body: JSON.stringify(email)
				}).then(res => {
					if (res.status === 201) return res.json();
					else if (res.status === 401) {
						alert("Error Enviado Correo");
					}
				}).catch(error => { console.error("Hay un problemilla con el Envio del Correo: ", error) })
            }
        }
    };
};

export default getState;