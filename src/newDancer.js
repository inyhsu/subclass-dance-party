
var makeNewDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer, newDancer"></span>');
  this.setPosition(top + 5, left + 5);
  // console.log('new' + JSON.stringify(this.$node));
};

makeNewDancer.prototype = Object.create(makeDancer.prototype);
makeNewDancer.prototype.constructor = makeNewDancer;

makeNewDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // this.$node.toggle();
};

