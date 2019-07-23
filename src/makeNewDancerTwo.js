
var makeNewDancerTwo = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, 500);
  this.$node = $('<span class="dancer, makeNewDancerTwo"></span>');
  this.setPosition(top - 10, left - 10);
  // console.log('new' + JSON.stringify(this.$node));
};

makeNewDancerTwo.prototype = Object.create(makeDancer.prototype);
makeNewDancerTwo.prototype.constructor = makeNewDancerTwo;

makeNewDancerTwo.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};
