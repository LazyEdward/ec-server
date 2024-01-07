import ObjectModel from "./objectModel";

type UserType = {
	id: string,
	firstName: string,
	lastName: string,
	loginName: string,
	password: string,
	email: string | null,
	phone: string | null,
	groups: string[],
}

class User implements UserType, ObjectModel {
	id: string = "";
	firstName: string = "";
	lastName: string = "";
	loginName: string = "";
	password: string = "";
	email: string | null = null;
	phone: string | null = null;
	groups: string[] = [];

	constructor(json: Partial<User>) {
		this.id = json.id ?? this.id
		this.firstName = json.firstName ?? this.firstName
		this.lastName = json.lastName ?? this.lastName
		this.loginName = json.loginName ?? this.loginName
		this.password = json.password ?? this.password
		this.email = json.email ?? this.email
		this.phone = json.phone ?? this.phone
		this.groups = json.groups ?? this.groups
	}

	public toJson(): object {
		const json: Partial<User> = {
			id: this.id,
			firstName: this.firstName,
			lastName: this.lastName,
			loginName: this.loginName,
		}

		if(this.email)
			json.email = this.email

		if(this.phone)
			json.phone = this.phone

		if(this.groups.length > 0)
			json.groups = this.groups

		return json
	}

}

export default User