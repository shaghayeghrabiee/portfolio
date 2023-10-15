import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";
 import { useFormik } from "formik";
 import * as Yup from "yup";
import emailjs from "emailjs-com";


const Contact = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      emailjs
        .send(
          "service_tkeqbni",
          "template_l9nwtdc",
          values,
          "UaSAd3VPWFSzrz7cN"
        )
        .then(
          (result) => {
            console.log(result.text);
            formik.resetForm();
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email("Invalid email address").required(),
      message: Yup.string(),
    }),
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
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <i style={{ color: "red" }}>{formik.errors.name}</i>
          ) : null}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <i style={{ color: "red" }}>{formik.errors.email}</i>
          ) : null}

          <textarea
            rows={7}
            name="message"
            placeholder="Message"
            {...formik.getFieldProps("message")}
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
