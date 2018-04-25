describe('Virtual Pet Shelter', function() {
	describe('canary', function() {
		it('should run a test', function() {
			expect(true).toBe(true)
		})
	})
	describe('run()', function() {
		it('should run our application', function() {
			const virtualPetApp = new VirtualPetApp()
			const underTest = virtualPetApp.run()
			expect(underTest).toBe(true)
		})
	})
})
