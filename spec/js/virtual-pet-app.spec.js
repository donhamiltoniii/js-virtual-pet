describe('Virtual Pet Shelter', function() {
	describe('canary', function() {
		it('should run a test', function() {
			expect(true).toBe(true)
		})
	})
	describe('run()', function() {
		const virtualPetApp = new VirtualPetApp()
		let currentTurn = virtualPetApp.getTurn() + 1
		const underTest = virtualPetApp.run()
		it('should run our application', function() {
			expect(underTest).toBe(true)
		})
		it('should implement a loop system', function() {
			let expectedTurn = virtualPetApp.getTurn()
			expect(currentTurn).toEqual(expectedTurn)
		})
		describe('userInput', function() {
			it('should accept user input', function() {
				const userInput = virtualPetApp.getUserInput()
				virtualPetApp.userInput = 'quit'
				expect(userInput).toBe('quit')
			})
		})
	})
})
