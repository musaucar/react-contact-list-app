import {useState, useEffect} from 'react'

import "./styles.css"

import List from './List'
import Form from './Form';

function Contacts() {
  const [contacts, setContacts] = useState([
    {fullName:"musa", phone_number:"4511523"},
    {fullName:"damian", phone_number:"154111"},
    {fullName:"bruce", phone_number:"12411241"},
  ]);

  useEffect(()=>{
    console.log(contacts)
  }, [contacts])

  return (
    <div id="container">
        <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts;