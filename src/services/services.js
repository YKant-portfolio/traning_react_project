class Service {

	getUsers = [
		{ id: "1", author: "Alexandro Kazulin", text: "HI Im Kazulin", date: "03.09.2022", raiting: "5", blocked: "false" },
		{ id: "2", author: "Dio Denisovich", text: "HI Im Dio", date: "03.09.2020", raiting: "5", blocked: "false" },
		{ id: "3", author: "Marsel Kyasar", text: "HI Im Marsel", date: "03.09.2020", raiting: "5", blocked: "false" },
	]

	getAuthorText = (() => {
		const message = this.getUsers;
		return message.map(this._transformMessages);
	});

	getProfile = (() => {
		const profile = this.getUsers;
		return profile.map(this._transformProfile);
	})

	_transformMessages = data => {
		return {
			id: data.id,
			author: data.author,
			text: data.text,
		}
	}

	_transformProfile = data => {
		return {
			id: data.id,
			author: data.author,
			date: data.date,
			raiting: data.raiting,
			blocked: data.blocked,
		}
	}
}

export default Service;