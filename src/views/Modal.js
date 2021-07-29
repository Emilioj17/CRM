import React, { useRef, useState } from 'react';
//Importaciones de Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
//Importaciones de Firebase Hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import '../style/Chat.css'

//Conectar con la DB
firebase.initializeApp({
    apiKey: "AIzaSyB60oWTvucHLKr1phwOur809PUri0ikmEM",
    authDomain: "chat-bootstrap-ccb4d.firebaseapp.com",
    projectId: "chat-bootstrap-ccb4d",
    storageBucket: "chat-bootstrap-ccb4d.appspot.com",
    messagingSenderId: "681291155659",
    appId: "1:681291155659:web:30536e54b43966237eb34e"
})

//Instancias de autenticacion y base de datos
const auth = firebase.auth();
const firestore = firebase.firestore();

function Chat() {

    const [usuario] = useAuthState(auth);
  
    return (
      <div>
<div className="container chat_board my-5">
<div className="card border-success mb-3">
  <div className="card-header bg-primary text-light border-success d-flex justify-content-between">
        
          <h1 className="text-center">CRM Facil ChatRoom</h1>
          <SignOut />
        

  </div>
  <div className="card-body text-success">

      <div className="chat_board">
  
        <section>
          {usuario ? <ChatRoom /> : <SignIn />}
        </section>
  
      </div>

  
  </div>
</div>

</div>




      </div>
    );
  }
  
  function SignIn() {
  
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <>
      <div className="d-flex justify-content-center">
        <button className="sign-in chat_board btn btn-success" onClick={signInWithGoogle}>Sign in with Google</button>

      </div>
      </>
    )
  
  }
  
  function SignOut() {
    return auth.currentUser && (
      <button className="sign-out btn btn-danger" onClick={() => auth.signOut()}>Sign Out</button>
    )
  }
  
  
  function ChatRoom() {
    const scrollDummy = useRef();
    const mensajesFirebase = firestore.collection('messages');
    const query = mensajesFirebase.orderBy('createdAt').limit(150);
  
    const [mensajes] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await mensajesFirebase.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
      scrollDummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      <div className="chat_board">

      <main>
  
        {mensajes && mensajes.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={scrollDummy}></span>
  
      </main>
        <hr className="chat_board" />
  
      <form className="chat-body form-control d-flex border-0" onSubmit={sendMessage}>
  
        <input className=" form-control w-75 form-select-lg" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Escribe algo" />
  
        <button className=" w-25 btn btn-primary btn-lg" type="submit" disabled={!formValue}>Enviar</button>
  
      </form>
      </div>
    </>)
  }
  
  
  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass} chat_board`}>
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <p className="overflow-auto">{text}</p>
      </div>
    </>)
  }
  export default Chat;
