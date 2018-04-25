describe('Virtual Pet', function() {
	it('should have instance variables', function() {
		const virtualPet = new VirtualPet()
		expect(virtualPet.getHunger()).toEqual(10)
		expect(virtualPet.getThirst()).toEqual(10)
		expect(virtualPet.getCleanliness()).toEqual(10)
	})
})
