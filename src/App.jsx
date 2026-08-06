import { useRef } from 'react';

//internal import
import { Home, Features, Community, Blog, Pricing, Register, Navbar, Footer } from './components';
import './global.scss';

function App() {
	const formRef = useRef(null);

	return (
		<>
			<Navbar formRef={formRef} />
			<Home formRef={formRef} />
			<Features />
			<Community />
			<Blog />
			<Pricing />
			<Register formRef={formRef} />
			<Footer />
		</>
	);
}

export default App;
