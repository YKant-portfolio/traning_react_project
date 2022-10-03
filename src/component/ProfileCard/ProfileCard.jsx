import React from 'react'
import Rating from '@mui/material/Rating';


function ProfileCard(props) {
	const { raiting, date, blocked } = props;
	return (
		<>
			<h4>дата : {date}</h4>
			<h4>рейтинг : {raiting}</h4>
			<Rating name="disabled" value={+raiting} readOnly />
			<h4>блокирован : {blocked ? 'нет' : 'да'}</h4>
		</>
	)
}

export default ProfileCard;