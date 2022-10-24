class Bowling {
  constructor() {
    this.rolls = [];
  }

  roll(pins){
   this.rolls.push(pins)
  };

    score() {
    let total = 0
    let rollIndex = 0

    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];

      if (this.spare(frameScore)) {
        total += this.spareScore(rollIndex)
      } else {
        total += frameScore;
      }
      rollIndex +=2
    };
    return total;
  };


  spare(frameScore){
    return frameScore === 10
  };

  spareScore(rollIndex){
    return 10 + this.rolls[rollIndex + 2];
  }
};


module.exports = Bowling;