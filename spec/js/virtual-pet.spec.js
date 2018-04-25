describe('Virtual Pet', function() {
	it('should have instance variables', function() {
		const virtualPet = new VirtualPet('Pet', 'Animal', 'Generic animal')
		expect(virtualPet.getHunger()).toEqual(10)
		expect(virtualPet.getThirst()).toEqual(10)
		expect(virtualPet.getCleanliness()).toEqual(10)
	})

	describe('instance modifiers', function() {
		describe('feed()', function() {
			it('should reduce hunger', function() {
				const wallace = new VirtualPet(
					'Wallace',
					'Cat',
					'Super hungry always',
				)
				const expected = wallace.getHunger() - 3
				wallace.feed()
				const underTest = wallace.getHunger()

				expect(expected).toEqual(underTest)
			})
		})

		describe('giveDrink()', function() {
			it('should reduce thirst', function() {
				const maurice = new VirtualPet(
					'Momo',
					'Kitten',
					'Wants to cuddle',
				)
				const expected = maurice.getThirst() - 3
				maurice.giveDrink()
				const underTest = maurice.getThirst()

				expect(expected).toEqual(underTest)
			})
		})

		describe('clean()', function() {
			it('should increase cleanliness', function() {
				const jojo = new VirtualPet(
					'Jojo',
					'Cat',
					'Runs around all night and keeps up owners',
				)
				const expected = jojo.getCleanliness() + 3
				jojo.clean()
				const underTest = jojo.getCleanliness()

				expect(expected).toEqual(underTest)
			})
		})
	})

	describe('tick()', function() {
		const billy = new VirtualPet(
			'Bill Bill',
			'Cat',
			'Sleeps on my favorite blanket',
		)
		it('should increase hunger', function() {
			const expected = billy.getHunger() + 1
			billy.tick()
			const underTest = billy.getHunger()

			expect(expected).toEqual(underTest)
		})
		it('should increase thirst', function() {
			const expected = billy.getThirst() + 1
			billy.tick()
			const underTest = billy.getThirst()

			expect(expected).toEqual(underTest)
		})
		it('should decrease cleanliness', function() {
			const expected = billy.getCleanliness() - 1
			billy.tick()
			const underTest = billy.getCleanliness()

			expect(expected).toEqual(underTest)
		})
	})
})
