const VirtualPet = (function() {
	function VirtualPet(name, type, description) {
		this.name = name
		this.type = type
		this.description = description

		this._hunger = 30
		this._thirst = 30
		this._cleanliness = 30
	}

	VirtualPet.prototype = {
		getCleanliness: function() {
			return this._cleanliness
		},
		getDescription: function() {
			return this.description
		},
		getHunger: function() {
			return this._hunger
		},
		getName: function() {
			return this.name
		},
		getThirst: function() {
			return this._thirst
		},
		getType: function() {
			return this.type
		},

		clean: function() {
			this._cleanliness += 3
		},
		feed: function() {
			this._hunger -= 3
		},
		giveDrink: function() {
			this._thirst -= 3
		},

		tick: function() {
			this._cleanliness -= 1
			this._hunger += 1
			this._thirst += 1
		},
	}

	return VirtualPet
})()
