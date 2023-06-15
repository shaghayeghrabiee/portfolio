import React,{useState} from "react";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const changeFiled= event=>{
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_tkeqbni",
        "template_l9nwtdc",
        form.current,
        "UaSAd3VPWFSzrz7cN"
      )
      .then(
        (result) => {
          console.log(result.text);
          setState({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [state,setState]= useState({
    name : "",
    email : "",
    message :""
  });


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineMail className="option-icon" />
            <h4>Email</h4>
            <h5>rabiei.dgital@gmail.com</h5>
            <a href="mailto:rabiei.dgital@gmail.com">send an email</a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="option-icon" />
            <h4>WhatsApp</h4>
            <h5>+36203733497</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+36203733497"
              target="_blank"
            >
              send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={changeFiled}
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={changeFiled}
            placeholder="Your Email"
            required
          />
          <textarea
            rows={7}
            name="message"
            value={state.message}
            onChange={changeFiled}
            placeholder="Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Sent a message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
