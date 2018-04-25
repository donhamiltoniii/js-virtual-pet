describe('Virtual Pet', function() {
	it('should have instance variables', function() {
		const virtualPet = new VirtualPet()
		expect(virtualPet.getHunger()).toEqual(10)
		expect(virtualPet.getThirst()).toEqual(10)
		expect(virtualPet.getCleanliness()).toEqual(10)
	})

	describe('feed()', function() {
		it('should reduce hunger', function() {
			const wallace = new VirtualPet()
			const expected = wallace.getHunger() - 3
			wallace.feed()
			const underTest = wallace.getHunger()

			expect(expected).toEqual(underTest)
		})
	})

	describe('giveDrink()', function() {
		it('should reduce thirst', function() {
			const maurice = new VirtualPet()
			const expected = maurice.getThirst() - 3
			maurice.giveDrink()
			const underTest = maurice.getThirst()

			expect(expected).toEqual(underTest)
		})
	})
})
