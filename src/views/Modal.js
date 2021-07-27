import React, { useRef, useState } from 'react';
//Importaciones de Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
//Importaciones de Firebase Hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

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
        <header>
          <h1>CRM Facil</h1>
          <SignOut />
        </header>
  
        <section>
          {usuario ? <ChatRoom /> : <SignIn />}
        </section>
  
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
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      </>
    )
  
  }
  
  function SignOut() {
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
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
      <main>
  
        {mensajes && mensajes.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={scrollDummy}></span>
  
      </main>
  
      <form className="chat-body" onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Escribe algo" />
  
        <button type="submit" disabled={!formValue}>Enviar</button>
  
      </form>
    </>)
  }
  
  
  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <p>{text}</p>
      </div>
    </>)
  }
  export default Chat;
