const VirtualPetApp = (function() {
	function VirtualPetApp() {
		this._turn = 0
	}

	VirtualPetApp.prototype = {
		run: function() {
			let virtualPet
			virtualPet = new VirtualPet('Wallace', 'Cat', 'Always a hungry guy')
			while (this.userInput !== 'quit') {
				console.log(`
				Welcome to Donny's Virtual Pet Facility!
				How would you like to interact with Wallace?

				1. Feed
				2. Give Drink
				3. Clean
				4. Check Description
				5. Check Type of Animal
				6. Check turn
				Type 'quit' to exit
			`)
				this.userInput = prompt('What option would you like to choose?')
				switch (this.userInput) {
					case '1':
						virtualPet.feed()
						break
					case '2':
						virtualPet.giveDrink()
						break
					case '3':
						virtualPet.clean()
						break
					case '4':
						console.log(`
						${virtualPet.getName()} is ${virtualPet.getDescription()}
					`)
						break
					case '5':
						console.log(`
						Animal type is: ${virtualPet.getType()}
					`)
						break
					case '6':
						console.log(`
						Turn number: ${this.getTurn()}
					`)
						break
					default:
						break
				}
				console.log(`
				${virtualPet.getName()} the ${virtualPet.getType()}'s Stats:

				Hunger: ${virtualPet.getHunger()}
				Thirst: ${virtualPet.getThirst()}
				Cleanliness: ${virtualPet.getCleanliness()}
			`)
				virtualPet.tick()
				this._turn++
			}
			return true
		},

		getTurn: function() {
			return this._turn
		},
		getUserInput: function() {
			return this.userInput
		},
	}

	return VirtualPetApp
})()
