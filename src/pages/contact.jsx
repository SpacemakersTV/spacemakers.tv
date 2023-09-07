import React from "react";
import emailjs from "emailjs-com";
import Header from "../components/Header/Header";
import styles from "./contact.module.css"; // Create a separate CSS file for Contact component styles

//Hello there Spacemakers, me want to make epic light show. You down?

const SERVICE_ID = 'service_sezx8dg';
const TEMPLATE_ID = 'template_i0c94ik';
const PUBLIC_KEY = 'Ld-hm4pAN2iPPlkWF';

// const SERVICE_ID = process.env.EMAIL_JS_SERVICE_ID;
// const TEMPLATE_ID = process.env.EMAIL_JS_TEMPLATE_ID
// const PUBLIC_KEY = process.env.EMAIL_JS_PUBLIC_KEY


const Contact = () => {

	const handleOnSubmit = (e) => {
		e.preventDefault();
		emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
			.then((result) => {
				console.log(result.text);
				// Swal.fire({
				// 	icon: 'success',
				// 	title: 'Message Sent Successfully'
				// })
			}, (error) => {
				console.log(error.text);
				// Swal.fire({
				// 	icon: 'error',
				// 	title: 'Ooops, something went wrong',
				// 	text: error.text,
				// })
			});
		e.target.reset()
	};


	return (
		<div>
			<Header />
			<div className={styles.contact_container}>

				<form className={styles.contact_form} onSubmit={handleOnSubmit}>
					<div className={styles.contact_form_title_contaienr}>
						<h1 className={styles.contact_form_title}>Contact us</h1>
						<div className={styles.contact_form_title_line_container}>
							<div className={styles.contact_form_title_line}></div>
						</div>
					</div>


					<div className={styles.contact_form_main}>
						<div className={styles.contact_form_group}>
							<div className={styles.contact_form_field}>
								<label className={styles.contact_form_label} htmlFor="first_name">First name *</label>
								<input className={styles.contact_form_input} type="text" id="first_name" name="first_name" placeholder="First name" required />
							</div>

							<div className={styles.contact_form_field}>
								<label className={styles.contact_form_label} htmlFor="last_name">Last name *</label>
								<input className={styles.contact_form_input} type="text" id="last_name" name="last_name" placeholder="Last name" required />
							</div>
						</div>
						<div className={styles.contact_form_group}>
							<div className={styles.contact_form_field}>
								<label className={styles.contact_form_label} htmlFor="email">Email *</label>
								<input className={styles.contact_form_input} type="email" id="email" name="email" placeholder="Email" required />
							</div>
						</div>

						<div className={styles.contact_form_group}>
							<div className={styles.contact_form_field}>
								<label className={styles.contact_form_label} htmlFor="company">Company *</label>
								<input className={styles.contact_form_input} id="company" name="company" placeholder="Company" required />
							</div>
						</div>

						<div className={styles.contact_form_group}>
							<div className={styles.contact_form_field}>
								<label className={styles.contact_form_label} htmlFor="message">Message *</label>
								<textarea className={styles.contact_form_input} id="message" name="message" placeholder="Message" required />
							</div>
						</div>

						<div className={styles.contact_form_group}>
							<div className={styles.contact_form_field}>
								<button className={styles.contact_form_button} type="submit">Send</button>
							</div>
						</div>
					</div>
				</form >
			</div>
		</div>
	);
};

export default Contact;
