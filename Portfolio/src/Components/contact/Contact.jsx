import "./contact.css";
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import {useRef, useState} from "react";
// import emailjs from '@emailjs/browser';
import emailjs from "emailjs-com"
const Contact = () => {
    const formRef = useRef();
    const [done , setDone] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_c2olu9u',
            'template_k6omo14',
            formRef.current,
            'LUrnZyBcoFVKor5PC'
        )
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className="contact">
            <div className="c-bg">

            </div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's Contact</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                className="c-icon"
                                src={Phone} alt="phone"/>
                            +918421414009
                        </div>
                        <div className="c-info-item">
                            <img
                                className="c-icon"
                                src={Email} alt="phone"/>
                            shubhampawar1705@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img
                                className="c-icon"
                                src={Address} alt="phone"/>
                            Cosmos Nest , Thane
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your Project</b> Get in touch. Always freelancing if the right Project comes along.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="email" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message"/>
                        <button>Submit</button>
                        { done && "Thank You" }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;