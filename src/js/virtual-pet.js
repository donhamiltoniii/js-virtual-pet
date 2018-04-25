const VirtualPet = function(name, type, description) {
	this.name = name
	this.type = type
	this.description = description

	this._hunger = 10
	this._thirst = 10
	this._cleanliness = 10
}

VirtualPet.prototype.getCleanliness = function() {
	return this._cleanliness
}
VirtualPet.prototype.getDescription = function() {
	return this.description
}
VirtualPet.prototype.getHunger = function() {
	return this._hunger
}
VirtualPet.prototype.getName = function() {
	return this.name
}
VirtualPet.prototype.getThirst = function() {
	return this._thirst
}
VirtualPet.prototype.getType = function() {
	return this.type
}

VirtualPet.prototype.clean = function() {
	this._cleanliness += 3
}
VirtualPet.prototype.feed = function() {
	this._hunger -= 3
}
VirtualPet.prototype.giveDrink = function() {
	this._thirst -= 3
}
VirtualPet.prototype.tick = function() {
	this._cleanliness -= 1
	this._hunger += 1
	this._thirst += 1
}
