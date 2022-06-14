import React from 'react';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
	return (
		<div className="flex h-full flex-col">
			<NavBar></NavBar>
			<Footer></Footer>
		</div>
	);
}

export default App;
