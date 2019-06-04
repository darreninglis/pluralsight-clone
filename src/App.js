import React from 'react';
import './App.css';
import Left from './components/left';
import Right from './components/right';

function App() {
	return (
		<div className='App'>
			<div id='wrapper'>
				<Left />
				<Right />
			</div>
		</div>
	);
}

export default App;
