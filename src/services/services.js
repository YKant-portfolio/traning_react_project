class Service {

	getUsers = [
		{ id: "1", author: "Alexandro Kazulin", text: "HI Im Kazulin", date: "15.01.2020", raiting: "5", blocked: "false" },
		{ id: "2", author: "Dio Denisovich", text: "HI Im Dio", date: "15.01.2020", raiting: "5", blocked: "false" },
		{ id: "3", author: "Marsel Kyasar", text: "HI Im Marsel", date: "15.01.2020", raiting: "5", blocked: "false" },
	]

	getAuthorText = (() => {
		const users = this.getUsers;
		return users.map(this._transformData);
	})

	_transformData = (data) => {
		return {
			id: data.id,
			author: data.author,
			text: data.text,
		}
	}
}

export default Service;