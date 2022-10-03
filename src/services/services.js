const getUsers = [
	{ id: "1", author: "Alexandro Kazulin", text: "HI Im Kazulin", date: "03.09.2022", raiting: "1", blocked: "false" },
	{ id: "2", author: "Dio Denisovich", text: "HI Im Dio", date: "03.09.2022", raiting: "3", blocked: "false" },
	{ id: "3", author: "Marsel Kyasar", text: "HI Im Marsel", date: "03.09.2022", raiting: 5, blocked: "false" },
]

export const getAuthorText = (() => {
	const message = getUsers;
	return message.map(_transformMessages);
});

export const getUserProfiles = (() => {
	const profile = getUsers;
	return profile.map(_transformProfile);
})

const _transformMessages = data => {
	return {
		id: data.id,
		author: data.author,
		text: data.text,
	}
}

const _transformProfile = data => {
	return {
		id: data.id,
		author: data.author,
		date: data.date,
		raiting: data.raiting,
		blocked: data.blocked,
	}
}
