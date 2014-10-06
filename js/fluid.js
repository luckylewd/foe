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

// combines the second fluid into the first
// assumes they are the same type
Fluid.prototype.Combine = function (fluid) {
	this.qty += fluid.qty;
}

function FluidFelineCum(qty) {
	Fluid.call(this, "wildcat cum", qty);
}
FluidFelineCum.prototype = new Fluid();

function FluidPumaCum(qty) {
	Fluid.call(this, "puma cum", qty);
}
FluidPumaCum.prototype = new Fluid();

function FluidJaguarCum(qty) {
	Fluid.call(this, "jaguar cum", qty);
}
FluidJaguarCum.prototype = new Fluid();

function FluidLynxCum(qty) {
	Fluid.call(this, "lynx cum", qty);
}
FluidLynxCum.prototype = new Fluid();

function FluidLionCum(qty) {
	Fluid.call(this, "lion cum", qty);
}
FluidLionCum.prototype = new Fluid();

function FluidLagomorphCum(qty) {
	Fluid.call(this, "lagomorph cum", qty);
}
FluidLagomorphCum.prototype = new Fluid();

function FluidEquineCum(qty) {
	Fluid.call(this, "equine cum", qty);
}
FluidEquineCum.prototype = new Fluid();

function FluidVagCum(qty) {
	Fluid.call(this, "vag cum", qty);
}
FluidVagCum.prototype = new Fluid();

function FluidCockCum(qty) {
	Fluid.call(this, "cum", qty);
}
FluidCockCum.prototype = new Fluid();

function FluidMilk(qty) {
	Fluid.call(this, "milk", qty);
}
FluidMilk.prototype = new Fluid();

function FluidBlood(qty) {
	Fluid.call(this, "blood", qty);
}
FluidBlood.prototype = new Fluid();

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

