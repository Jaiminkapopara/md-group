import React from 'react'
import './form.css'
const Form = () => {
  return (
    <div className='for'>
      <div className="form">
                        <h2>Login Form</h2>
                        <form >
                            <div className="inputBox">
                                <input type="text" placeholder='Username ' name="user_name" required />
                            </div>
                            <div className="inputBox">
                                <input type="email" placeholder='Email' 
                                name="user_email" required/>
                            </div>

                            <div className="inputBox">
                                <input type="text" placeholder='Description' 
                                name="user_message" required/>
                            </div>

                            <div className="inputBox">
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
    </div>
  )
}

export default Form
