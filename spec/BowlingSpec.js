describe('The Bowling Game', function(){
  
  it('exists',function(){
    var game = new BowlingGame();
    expect(game).toBeTruthy();
  });
  
  it('can roll a gutter game', function(){
    var game = new BowlingGame();
     for (var i = 0; i < 20; i++) {
      game.roll(0); 
         }
    expect(game.score()).toBe(0);
  });
});