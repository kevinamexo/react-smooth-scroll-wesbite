import React from 'react'
import {useForm} from 'react-hook-form'
import './Contact.css'

export default function Contact() {

    const {register, handleSubmit} = useForm()
    const onSubmit=(values)=>console.log(values)


    return (
        <div className="contact-page">
            <p className="contact-title">Contact Us</p>
            <div className="contact-section-container">
                <div className="contact-section">
                    <div className="contact-image">
                        <img src='contact-us.svg'/>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}> 
                        <label>
                            <span className="sp">Home</span>
                            <textarea rows={1} cols={50}  placeholder="Enter your Name..." name="name"/>
                        </label><br />
                        <label>
                            <span className="sp">Email</span>
                            <textarea rows={1} cols={50}  type="text" placeholder="Enter your Email..." name="email"/>
                        </label><br />
                        <label>
                            <span className="sp msg-label">Message</span>
                            <textarea rows={5} cols={50} type="text" placeholder="Type your Message Here..." name="message"/>
                        </label><br />
                        <div className="btn-container">
                            <button type="submit" className="submit-form">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
