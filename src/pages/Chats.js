import React, { useContext } from "react";
import Form from "../component/Form/Form";
import Alert from '@mui/material/Alert';
import { Spinner } from '../component/Spiner/Spiner';
import { Context } from "../context/context";

export const Chats = () => {

	const { loading, msg } = useContext(Context);


	const spinner = loading ? <Spinner /> : null;
	const messageRobot = msg ? <Alert borderradius={8} >Ваше сообщение принято</Alert> : null;

	return (
		<>
			<Form />
			{spinner}
			{messageRobot}
		</>
	)
}
