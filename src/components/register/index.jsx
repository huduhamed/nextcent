import React, { useState } from 'react';

//internal import
import './styles.css';

function Register({ formRef }) {
	const [submit, setSubmit] = useState(false);

	const handleSubmit = () => {
		setSubmit((currentSubmit) => {
			return !currentSubmit;
		});
	};

	return (
		<>
			<div className="register-form" id="register" ref={formRef}>
				<h2>Kindly fill out this form to get registered on our site.</h2>

				<form className="form">
					<fieldset>
						<legend>Personal Information</legend>
						<section>
							<label htmlFor="firstName" id="firstName">
								First Name
							</label>
							<input type="text" id="firstName" required placeholder="e.g. Dani" />
						</section>
						<section>
							<label htmlFor="lastName" id="lastName">
								Second Name
							</label>
							<input type="text" id="LastName" required placeholder="e.g. Shitu" />
						</section>
						<section>
							<label htmlFor="dob">Date of Birth</label>
							<input type="date" id="dob" required placeholder=" dd/mm/yyyy" />
						</section>
						<section>
							<label htmlFor="age">Age</label>
							<input type="number" id="age" required placeholder="e.g. 8" />
						</section>
						<div className="gender-options">
							<p>Gender</p>
							<div className="gender-selection">
								<section>
									<label htmlFor="male">
										<span>Male</span>
									</label>
									<input type="radio" id="male" name="gender" value="Male" required />
								</section>
								<section>
									<label htmlFor="female">
										<span>Female</span>
									</label>
									<input type="radio" id="female" name="gender" value="Female" required />
								</section>
							</div>
						</div>
						<section>
							<label htmlFor="email">Email</label>
							<input type="email" id="email" placeholder="example@gmail.com" required />
						</section>
						<section>
							<label htmlFor="password">Password</label>
							<input type="password" id="password" required />
						</section>
						<section>
							<label htmlFor="confirmPassword">Confirm Password</label>
							<input type="password" id="confirmPassword" required />
						</section>
						<button type="submit" onClick={handleSubmit}>
							Submit
						</button>
					</fieldset>
				</form>
			</div>
		</>
	);
}

export default Register;
