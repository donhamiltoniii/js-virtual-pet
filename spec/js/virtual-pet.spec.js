describe('Virtual Pet', () => {
	it('should have instance variables', () => {
		const virtualPet = new VirtualPet('Pet', 'Animal', 'Generic animal')
		expect(virtualPet.getHunger()).toEqual(30)
		expect(virtualPet.getThirst()).toEqual(30)
		expect(virtualPet.getCleanliness()).toEqual(30)
	})

	describe('instance modifiers', () => {
		describe('feed()', () => {
			it('should reduce hunger', () => {
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

		describe('giveDrink()', () => {
			it('should reduce thirst', () => {
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

		describe('clean()', () => {
			it('should increase cleanliness', () => {
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

	describe('tick()', () => {
		const billy = new VirtualPet(
			'Bill Bill',
			'Cat',
			'Sleeps on my favorite blanket',
		)
		it('should increase hunger', () => {
			const expected = billy.getHunger() + 1
			billy.tick()
			const underTest = billy.getHunger()

			expect(expected).toEqual(underTest)
		})
		it('should increase thirst', () => {
			const expected = billy.getThirst() + 1
			billy.tick()
			const underTest = billy.getThirst()

			expect(expected).toEqual(underTest)
		})
		it('should decrease cleanliness', () => {
			const expected = billy.getCleanliness() - 1
			billy.tick()
			const underTest = billy.getCleanliness()

			expect(expected).toEqual(underTest)
		})
	})
})
