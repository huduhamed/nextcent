import React from 'react';

//internal import
import './styles.scss';
import { Header, SocialIcon, SocialIcon1, SocialIcon2, SocialIcon3, InputIcon } from '..';

function Footer() {
	return (
		<>
			<div className="container-footer">
				<div className="left-footer">
					<div className="logo-footer">
						<img src={Header} alt="favicon" />
						<h2 className="next">Nextcent</h2>
					</div>

					<div className="footer-text">
						<p>Copyright © 2020 Landify UI Kit.</p>
						<p>All rights reserved</p>
					</div>

					<div className="socials">
						<a href="https://instagram.com" aria-label="instagram">
							<img src={SocialIcon} alt="instagram icon" />
						</a>
						<a href="https://facebook.com" aria-label="facebook">
							<img src={SocialIcon1} alt="social icons" />
						</a>
						<a href="https://X.com" aria-label="X">
							<img src={SocialIcon2} alt="twitter icon" />
						</a>
						<a href="https://youtube.com" aria-label="youtube">
							<img src={SocialIcon3} alt="youtube icon" />
						</a>
					</div>
				</div>

				<div className="links-container">
					<div className="company">
						<h4>Company</h4>

						<p>About us</p>
						<p>Blog</p>
						<p>Contact us</p>
						<p>Pricing</p>
						<p>Testimonials</p>
					</div>

					<div className="support">
						<h4>Support</h4>

						<p>Help center</p>
						<p>Terms of service</p>
						<p>Legal</p>
						<p>Privacy policy</p>
						<p>Status</p>
					</div>

					<div className="input-section">
						<h4>Stay up to date</h4>

						<div className="input-container">
							<input type="text" id="email" placeholder="Your email address" required />
							<img src={InputIcon} alt="input arrow" className="input-icon" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
