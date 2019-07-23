
var makeNewDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="newDancer"></span>');
  // console.log('new' + JSON.stringify(this.$node));
};

makeNewDancer.prototype = Object.create(makeDancer.prototype);
makeNewDancer.prototype.constructor = makeNewDancer;

makeNewDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};


makeNewDancer.prototype.setPosition = function() {
  makeDancer.prototype.setPosition.call(this);
};

