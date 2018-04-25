const VirtualPetApp = function() {
	this._turn = 0
}

VirtualPetApp.prototype.run = function() {
	let userInput, virtualPet
	while (userInput !== 'quit') {
		virtualPet = new VirtualPet('Wallace', 'Cat', 'Always a hungry guy')
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
		userInput = prompt('What option would you like to choose?')
		this._turn++
	}
	return true
}

VirtualPetApp.prototype.getTurn = function() {
	return this._turn
}
