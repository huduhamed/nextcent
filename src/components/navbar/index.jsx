//external import
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

//internal import
import headImage from '../../images/header.png';
import './styles.scss';

function Navbar({ formRef }) {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleClick = (e, id) => {
		e.preventDefault();

		if (id === 'register' && formRef?.current) {
			formRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
			return;
		}

		scrollToSection(id);
	};

	const scrollToSection = (id) => {
		const sectionId = document.getElementById(id);
		if (sectionId) {
			const headerOffset = 50;
			const elementPosition = sectionId.getBoundingClientRect().top + window.scrollY;
			const offsetPosition = elementPosition - headerOffset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			});
		}
	};

	return (
		<div className="header">
			<a href="/" aria-label="Nextcent">
				<div className="logo-items">
					<img src={headImage} alt="nav-logo" />
					<h2 className="head">Nextcent</h2>
				</div>
			</a>

			{/* <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
				☰
			</button> */}

			<ul className="navbar">
				<li onClick={(e) => handleClick(e, 'home')} href="#home">
					<a href="/home">Home</a>
				</li>

				<li>
					<a onClick={(e) => handleClick(e, 'features')} href="#features">
						Features
					</a>
				</li>

				<li>
					<a onClick={(e) => handleClick(e, 'community')} href="#community">
						Community
					</a>
				</li>

				<li>
					<a onClick={(e) => handleClick(e, 'blog')} href="#blog">
						Blog
					</a>
				</li>

				<li>
					<a onClick={(e) => handleClick(e, 'pricing')} href="#pricing">
						Pricing
					</a>
				</li>

				<li className="register">
					<a onClick={(e) => handleClick(e, 'register')} href="#register">
						Register Now{' '}
						<span>
							<FontAwesomeIcon icon={faArrowRight} />
						</span>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
