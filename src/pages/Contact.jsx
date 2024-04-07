import React from 'react';
import Header from "../components/Header";
import Form from "../components/Form"
import '../App.css';


export default function Contact () {
    return (
        <div className="contact-container">
            <Header pageTitle={"Contact"} />
            <div className="contact-contents">
                 <Form />
            </div>
        </div>
    );
};