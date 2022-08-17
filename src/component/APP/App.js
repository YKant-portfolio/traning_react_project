import { useState, useEffect } from 'react';
import Message from '../Message/Message';
import Form from '../Form/Form';
import Spinner from '../Spiner/Spiner';
import './App.css';

function App() {
	const [value, setValue] = useState('');
	const [robot, setRobot] = useState([]);
	const [loading, setLoading] = useState(false);
	const [msg, setMsg] = useState(false);

	let getData = [
		{ id: 1, author: 'Alexandro Kazulin', text: 'HI Im Kazulin' },
		{ id: 2, author: 'Dio Denisovich', text: 'HI Im Dio' },
		{ id: 3, author: 'Marsel Kyasar', text: 'HI Im Marsel' },
	]

	let maxId = value.length + 1;

	const clearData = () => {
		setValue('');
	}

	const addItem = (author, text) => {
		const newItem = {
			author,
			text,
			id: maxId++,
		}
		setValue([...value, newItem]);
		setRobot([0])
	}


	useEffect(() => {
		setValue([...getData]);
	}, [])

	useEffect(() => {
		if (robot.length > 0) {
			setLoading(true);
			setTimeout(() => {
				setLoading(false);
				setMsg(true);
			}, 5000)
		}
	}, [robot])

	useEffect(() => {
		setTimeout(() => {
			setMsg(false);
		}, 3000)
	}, [msg])

	const spinner = loading ? <Spinner /> : null;
	const message = msg ? <h3>Ваше сообщение принято</h3> : null;

	return (
		<div className='content'>
			{/* <button onClick={updateData}>upload</button> */}
			<button onClick={clearData}>clear</button>
			<Message onUpdateData={value} />
			<Form onAdd={addItem} />
			{spinner}
			{message}
		</div>
	)
}

export default App;