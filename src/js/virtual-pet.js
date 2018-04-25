const VirtualPet = function() {
	this._hunger = 10
	this._thirst = 10
	this._cleanliness = 10
}
VirtualPet.prototype.getHunger = function() {
	return this._hunger
}
VirtualPet.prototype.getThirst = function() {
	return this._thirst
}
VirtualPet.prototype.getCleanliness = function() {
	return this._cleanliness
}

VirtualPet.prototype.feed = function() {
	this._hunger -= 3
}
