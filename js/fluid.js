/*
 * Fluids
 */

function Fluid(name, qty) {
	this.name      = name;
	this.qty       = qty;
}

function Mixture() {
	this.composition = [];
}
Mixture.prototype.Combine = function (fluid) {
	// does the fluid already exist in the mixture?
	for(var i = 0; i < this.composition.length; i++) {
	  if(this.composition[i].name === fluid.name) {
	    this.composition[i].qty += fluid.qty;
	    return;
	  }
	}

	// otherwise
	this.composition.push(fluid);
}

Mixture.prototype.Mix = function (mix) {
	// iterate though base fluids in mix
	for(var i = 0; i < mix.composition.length; i++) {
	  // mix them in
	  this.Combine(mix.composition[i]);
	}
}

// removes an absolute qty of the mixture and returns it
Mixture.prototype.SplitAbs = function (qtyRemoved) {
	var newMix = new Mixture();
	var totalQty = this.Qty();
	var totalSplitFlag = false;

	// if we try and remove more than there is
	if(qtyRemoved > totalQty) {
	  qtyRemoved = totalQty;
	  totalSplitFlag = true;
	}

	for(var i = 0; i < this.composition.length; i++) {
	  // store the current fluid
	  var thisFluid = this.composition[i];
	  // copy current fluid so we can modify it
	  var newFluid = $.extend({}, thisFluid);

	  // get proportion of total this fluid is
	  var proportion = thisFluid.qty / totalQty;
	  // set the new fluid qty to the portion removed from old fluid
	  newFluid.qty = proportion * qtyRemoved;
	  // subtract the removed fluid from the old fluid
	  thisFluid.qty -= newFluid.qty;

	  // add the new fluid into our new mixture
	  newMix.Combine(newFluid);
	}

	// if we try and remove more than there is
	// remove everything from old Mixture to prevent small float values
	if(totalSplitFlag) {
	  this.composition = [];
	}

	return newMix;
}

Mixture.prototype.Qty = function () {
	var qty = 0;
	for(var i = 0; i < this.composition.length; i++) {
	  qty += this.composition[i].qty;
	}
	return qty;
}
Mixture.prototype.Desc = function () {
	var names = [];
	var liquidDesc = "";
	for(var i = 0; i < this.composition.length; i++) {
	  names.push(this.composition[i].name);
	}

	if(names.length === 0) {
	  liquidDesc = "nothing";
	}
	if(names.length === 1) {
	  liquidDesc = names[0];
	}
	if(names.length === 2) {
	  liquidDesc = "" + names[0] + " and " + names[1];
	}
	if(names.length > 2) {
	  liquidDesc += "";
	  for(var ni = 0; ni < names.length - 2; ni += 1) {
	    liquidDesc += names[ni] + ", ";
	  }
	  liquidDesc += names[names.length - 2] + " and " + names[names.length - 1];
	}

	return liquidDesc;
}

// x is [coated] with
Mixture.prototype.QtyCoatingDesc = function () {
	var qtyDescriptor = "";
	if(this.Qty() > 0 && this.Qty() < 10) {
	  qtyDescriptor = randomChoice(["spattered", "speckled", "trickled"]);
	}
	if(this.Qty() >= 10 && this.Qty() < 20) {
	  qtyDescriptor = randomChoice(["glistening", "slick", "glazed"]);
	}
	if(this.Qty() >= 20 && this.Qty() < 30) {
	  qtyDescriptor = randomChoice(["coated", "covered", "wet"]);
	}
	if(this.Qty() >= 30) {
	  qtyDescriptor = randomChoice(["dripping", "bathed", "sopping", "soaked"]);
	}
	return qtyDescriptor;
}

// leaving a [splash] of x
// you see a [splash] of x
Mixture.prototype.QtyPoolDesc = function () {
	var qtyDescriptor = "";
	if(this.Qty() > 0 && this.Qty() < 10) {
	  qtyDescriptor = "drop";
	}
	if(this.Qty() >= 10 && this.Qty() < 20) {
	  qtyDescriptor = "splash";
	}
	if(this.Qty() >= 20 && this.Qty() < 30) {
	  qtyDescriptor = "puddle";
	}
	if(this.Qty() >= 30) {
	  qtyDescriptor = "pool";
	}
	return qtyDescriptor;
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

function FluidCaleCum(qty) {
	Fluid.call(this, "cale cum", qty);
}
FluidCaleCum.prototype = new Fluid();


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
function FluidWater(qty) {
	Fluid.call(this, "water", qty);
}
FluidWater.prototype = new Fluid();


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

