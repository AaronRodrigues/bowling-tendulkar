describe('The Bowling Game', function(){
  
  it('can create a game', function(){
    var game = new BowlingGame();
    expect(game).toBeTruthy();
  });
});