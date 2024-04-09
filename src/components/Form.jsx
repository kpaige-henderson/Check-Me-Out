import React, { useState } from "react";

function Contact() {
    const [contactForm, setContractForm] = useState({
        name: '',
        email: '',
        message: ''
      })

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setContractForm({ ...contactForm, [name]: value });
      };

      const handleSubmit =(event) => {
        event.preventDefault();
        console.log(contactForm);
        alert('Thank you! I will be in contact soon!');
        setContractForm({
            name: '',
            email: '',
            message: ''
        });
      };

      return (
        <div> 
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="contact">
                    <label htmlform="name">Name:</label>
                    <input className="box"
                        type="text"
                        id="name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        required/>
                </div>
                <div className="contact">
                    <label htmlform="email">Email:</label>
                    <input className="box"
                        type="email"
                        id="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleInputChange}
                        required/>
                </div>
                <div className="contact-name">
                    <label htmlform="message">Message:</label>
                    <input className="box"
                        id="message"
                        name="message"
                        value={contactForm.message}
                        onChange={handleInputChange}
                        required/>
                </div>
                <div className="btn-container">
                    <button type="submit" className="submit-btn">Submit</button>
                </div>
            </form>
            <div className="contact-name">
                You can also use the links below!
            </div>
        </div>

      )
}

export default Contact;


