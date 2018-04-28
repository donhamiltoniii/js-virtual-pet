describe('Virtual Pet Shelter', () => {
	describe('canary', () => {
		it('should run a test', () => {
			expect(true).toBe(true)
		})
	})
	describe('run()', () => {
		const virtualPetApp = new VirtualPetApp()
		let currentTurn = virtualPetApp.getTurn() + 1
		const underTest = virtualPetApp.run()
		it('should run our application', () => {
			expect(underTest).toBe(true)
		})
		it('should implement a loop system', () => {
			let expectedTurn = virtualPetApp.getTurn()
			expect(currentTurn).toEqual(expectedTurn)
		})
		describe('userInput', () => {
			it('should accept user input', () => {
				const userInput = virtualPetApp.getUserInput()
				virtualPetApp.userInput = 'quit'
				expect(userInput).toBe('quit')
			})
		})
	})
})
