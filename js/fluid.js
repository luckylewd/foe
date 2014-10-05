/*
 * Fluids
 */

function Fluid(name, qty) {
	this.name      = name;
	this.qty       = qty;
}
Fluid.prototype.CoatedDesc = function () {
	var qtyDescriptor = "";
	if(this.qty > 0 && this.qty < 10) {
	  qtyDescriptor = "spattered";
	}
	if(this.qty >= 10 && this.qty < 20) {
	  qtyDescriptor = "glistening";
	}
	if(this.qty >= 20 && this.qty < 30) {
	  qtyDescriptor = "coated";
	}
	if(this.qty >= 30) {
	  qtyDescriptor = "dripping";
	}
	return qtyDescriptor + " with " + name;
}

function FluidFelineCum(qty) {
	Fluid.call(this, "cat cum", qty);
}
function FluidRabbitCum(qty) {
	Fluid.call(this, "rabbit cum", qty);
}
function FluidVagCum(qty) {
	Fluid.call(this, "vag cum", qty);
}
function FluidCockCum(qty) {
	Fluid.call(this, "human cum", qty);
}
function FluidMilk(qty) {
	Fluid.call(this, "milk", qty);
}
function FluidBlood(qty) {
	Fluid.call(this, "blood", qty);
}

// TODO
Fluid.prototype.ToStorage = function(storage) {
	var storage = {};
	
	storage.lact  = this.lactating ? 1 : 0;
	storage.lactR = this.lactationRate.base;
	storage.milk  = this.milk.base;
	storage.milkP = this.milkProduction.base;
	storage.milkC = this.milkCap.base;

	return storage;
}

// TODO
Fluid.prototype.FromStorage = function(storage) {
	storage = storage || {};
	
	this.lactating           = parseInt(storage.lact) == 1;
	this.lactationRate.base  = parseFloat(storage.lactR) || this.lactationRate.base;
	this.milk.base           = parseFloat(storage.milk)  || this.milk.base;
	this.milkProduction.base = parseFloat(storage.milkP) || this.milkProduction.base;
	this.milkCap.base        = parseFloat(storage.milkC) || this.milkCap.base;
}

