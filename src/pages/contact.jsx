import React, { useState } from "react";
import styles from "./contact.module.css"; // Create a separate CSS file for Contact component styles

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
	FiInstagram,
	FiFacebook,
	FiMail,
	FiMapPin,
	FiPhone,
	FiLinkedin,
	FiCreditCard,
} from "react-icons/fi";

const Contact = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [company, setCompany] = useState("");
	const [message, setMessage] = useState("");

	const handleOnSubmit = async (e) => {
		e.preventDefault();

		const formData = {
			first_name: firstName,
			last_name: lastName,
			email: email,
			phone: phone,
			company: company,
			message: message,
		};

		try {
			fetch("/api/postFormData", {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			})
				.then((response) => {
					console.log(response);

					if (response.status === 200) {
						toast.success("Form submitted successfully!", {
							position: "top-right",
							autoClose: 3000,
							hideProgressBar: true,
							closeOnClick: true,
							draggable: true,
							progress: undefined,
							theme: "colored",
						});

						e.target.reset();
					} else {
						toast.error("There was an error submitting the form!", {
							position: "top-right",
							autoClose: false,
							hideProgressBar: false,
							closeOnClick: true,
							draggable: true,
							progress: undefined,
							theme: "colored",
						});
						toast.error(
							"You can send an email with your request to info@spacemakers.tv",
							{
								position: "top-right",
								autoClose: false,
								hideProgressBar: false,
								closeOnClick: false,
								draggable: false,
								progress: undefined,
								theme: "colored",
							}
						);
					}
				})
				.catch((error) => {
					console.log(error);
				});
		} catch (err) {
			console.error(err);
		}
	};

	const handleSetFirstName = (e) => {
		setFirstName(e.target.value);
	};

	const handleSetLastName = (e) => {
		setLastName(e.target.value);
	};

	const handleSetEmail = (e) => {
		setEmail(e.target.value);
	};

	const handleSetPhone = (e) => {
		setPhone(e.target.value);
	};

	const handleSetCompany = (e) => {
		setCompany(e.target.value);
	};

	const handleSetMessage = (e) => {
		setMessage(e.target.value);
	};

	return (
		<div>
			<ToastContainer />

			<div className={styles.contact_container}>
				<form className={styles.contact_form} onSubmit={handleOnSubmit}>
					<div className={styles.contact_form_title_contaienr}>
						<div className={styles.contact_info}>
							<h1 className={styles.contact_form_title}>Contact us</h1>

							<p>
								<a
									className={styles.contact_form_link}
									href="https://maps.app.goo.gl/FhnRdMq12iX4Xpho8"
									target="_blank"
									rel="noopener noreferrer">
									<FiMapPin />
									&emsp;Moenkouterstraat 3 bus 6, 8550 Zwevegem
								</a>
							</p>

							<p>
								<a
									className={styles.contact_form_link}
									href="mailto:info@spacemakers.tv"
									target="_blank"
									rel="noopener noreferrer">
									<FiMail />
									&emsp;info@spacemakers.tv
								</a>
							</p>

							<p>
								<FiPhone />
								&emsp;+32 478 03 38 44
							</p>

							<p>
								<FiCreditCard />
								&emsp;BE 1005.853.079
							</p>

							<br />

							<div>
								<a
									className={styles.contact_form_title_line_icon_href}
									href="https://www.facebook.com/spacemakerstv"
									target="_blank"
									rel="noopener noreferrer">
									<FiFacebook className={styles.contact_form_title_line_icon} />
								</a>
								<a
									className={styles.contact_form_title_line_icon_href}
									href="https://www.instagram.com/spacemakers_/"
									target="_blank"
									rel="noopener noreferrer">
									<FiInstagram
										className={styles.contact_form_title_line_icon}
									/>
								</a>

								<a
									className={styles.contact_form_title_line_icon_href}
									href="https://www.linkedin.com/company/spacemakerstv"
									target="_blank"
									rel="noopener noreferrer">
									<FiLinkedin className={styles.contact_form_title_line_icon} />
								</a>
							</div>
						</div>

						<div className={styles.contact_form_title_line_container}>
							<div className={styles.contact_form_title_line}></div>
						</div>
					</div>

					<div className={styles.contact_form_main}>
						<div className={styles.contact_form_group}>
							<div className={styles.contact_form_field}>
								<label
									className={styles.contact_form_label}
									htmlFor="first_name">
									First name *
								</label>
								<input
									className={styles.contact_form_input}
									type="text"
									id="first_name"
									name="first_name"
									placeholder="First name"
									required
									onChange={handleSetFirstName}
								/>
							</div>

							<div className={styles.contact_form_field}>
								<label
									className={styles.contact_form_label}
									htmlFor="last_name">
									Last name *
								</label>
								<input
									className={styles.contact_form_input}
									type="text"
									id="last_name"
									name="last_name"
									placeholder="Last name"
									required
									onChange={handleSetLastName}
								/>
							</div>
						</div>

						<div className={styles.contact_form_group}>
							<div className={styles.contact_form_field}>
								<label className={styles.contact_form_label} htmlFor="email">
									Email *
								</label>
								<input
									className={styles.contact_form_input}
									type="email"
									id="email"
									name="email"
									placeholder="Email"
									required
									onChange={handleSetEmail}
								/>
							</div>
						</div>

						<div className={styles.contact_form_group}>
							<div className={styles.contact_form_field}>
								<label className={styles.contact_form_label} htmlFor="phone">
									Phone Number *
								</label>
								<input
									className={styles.contact_form_input}
									type="phone"
									id="phone"
									name="phone"
									placeholder="Phone"
									required
									onChange={handleSetPhone}
								/>
							</div>
						</div>

						<div className={styles.contact_form_group}>
							<div className={styles.contact_form_field}>
								<label className={styles.contact_form_label} htmlFor="company">
									Company *
								</label>
								<input
									className={styles.contact_form_input}
									id="company"
									name="company"
									placeholder="Company"
									required
									onChange={handleSetCompany}
								/>
							</div>
						</div>

						<div className={styles.contact_form_group}>
							<div className={styles.contact_form_field}>
								<label className={styles.contact_form_label} htmlFor="message">
									Message *
								</label>
								<textarea
									className={styles.contact_form_input}
									id="message"
									name="message"
									placeholder="Message"
									required
									onChange={handleSetMessage}
								/>
							</div>
						</div>

						<div className={styles.contact_form_group}>
							<div className={styles.contact_form_field}>
								<button className={styles.contact_form_button} type="submit">
									Send
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
