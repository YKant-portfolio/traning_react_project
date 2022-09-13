import { useHistory, useRouteMatch } from "react-router-dom"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const boxStyle = {
	display: "flex",
	flexDirection: 'column',
	justifyContent: "center",
	borderRadius: 3,
}

export const Profile = ({ id, author, raiting, date, blocked }) => {

	const history = useHistory();
	const match = useRouteMatch();

	const isProfile = match.path !== '/profiles';

	const handleClick = () => {
		history.push(`/profile/${id}`);
	}

	const handleClickBack = () => {
		history.goBack();
	}

	const res = <>
		<h4>дата : {date}</h4>
		<h4>рейтинг : {raiting}</h4>
		<Rating name="disabled" value={+raiting} readOnly />
		<h4>блокирован : {blocked ? 'нет' : 'да'}</h4>
		<button onClick={handleClickBack}>back</button>
	</>

	return (
		<div>
			<Typography variant='h6'
				textAlign='center'
				marginTop='5px'
				onClick={!isProfile ? handleClick : Function.prototype} >{author}</Typography>

			<Box className='box' sx={{ bgcolor: 'primary.light', textAlign: 'center', padding: '15px', overflow: 'auto', marginBottom: '20px' }}
				{...boxStyle}>
				{
					isProfile && res
				}
			</Box>
		</div >
	)
}