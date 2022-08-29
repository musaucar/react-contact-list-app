import { useState, useEffect }  from 'react'

const initialFormValues = { fullName:"", phone_number:""};

function Form({ addContact,contacts}) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(()=>{
    setForm(initialFormValues);
  }, [contacts])

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    if (form.fullName === "" || form.phone_number ==="") {
      return false;
    }

    addContact([ ...contacts, form ]);

  }
  return (
    <form onSubmit={onSubmit}> 
      <div>
        <input name="fullName" placeholder='Full Name' onChange={onChangeInput} value={form.fullName}/>
      </div>
      <div>
        <input name="phone_number" placeholder='Phone Number' onChange={onChangeInput} value={form.phone_number}/>
      </div>

      <div className='btn'>
        <button>Add</button>
      </div>
    </form>
  )
}

export default Form