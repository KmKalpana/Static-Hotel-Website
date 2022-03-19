import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h3 className='he'>Contact Us
      </h3>
      <form className='form'>
        <label>
        Name : &nbsp; &nbsp;
          <input type='text' name='name' className='name' size='30' required/>
          <br/>
          <br/>
          Contact : &nbsp;
          <input type='text' contact='contact' size='30' required/>
          <br/>
          <br/>
        Email : &nbsp; &nbsp;
          <input type='text' email='email' size='30' required/>
          <br/>
          <br/>
          Message: &nbsp;
         <br/>
           <textarea rows='5' cols='50' text='text' required/>
           <br/>
           <input className='submit' type='submit'/>
       </label>
      </form>
    </div>)
}
export default Contact
