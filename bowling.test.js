const Bowling = require('./bowling');

beforeEach(() => {
  game = new Bowling();
})

  it('can roll a gutter game', () => {
    fullGame(0,20)
    expect(game.score()).toEqual(0);
  });

  it('can roll a game of ones', () => {
    fullGame(1,20)
    expect(game.score()).toEqual(20);
  });

  it('can roll a spare', () => {
    game.roll(7);
    game.roll(3);
    game.roll(5);
    fullGame(0,17)
    expect(game.score()).toEqual(20)
  });

  it('can roll a strike', () => {
    game.roll(10);
    game.roll(2);
    game.roll(2);
    fullGame(0,17)
    expect(game.score()).toEqual(18)
  });

  const fullGame = (pins, rolls) => {
    for(let i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  }
  