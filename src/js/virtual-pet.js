class VirtualPet {
	constructor(name, type, description) {
		this.name = name
		this.type = type
		this.description = description

		this._hunger = 30
		this._thirst = 30
		this._cleanliness = 30
	}

	getCleanliness() {
		return this._cleanliness
	}
	getDescription() {
		return this.description
	}
	getHunger() {
		return this._hunger
	}
	getName() {
		return this.name
	}
	getThirst() {
		return this._thirst
	}
	getType() {
		return this.type
	}

	clean() {
		this._cleanliness += 3
	}
	feed() {
		this._hunger -= 3
	}
	giveDrink() {
		this._thirst -= 3
	}

	tick() {
		this._cleanliness -= 1
		this._hunger += 1
		this._thirst += 1
	}
}
