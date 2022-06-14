import React from 'react';

import NavBar from './components/NavBar';
import NoteApp from './components/NoteApp';
import Footer from './components/Footer';

function App() {
	return (
		<div className="flex h-full flex-col">
			<NavBar></NavBar>
			<NoteApp></NoteApp>
			<Footer></Footer>
		</div>
	);
}

export default App;
