var game;
var model;
window.onload = function () {
  var config = {
    type: Phaser.AUTO,
    width: 480,
    height: 640,
    parent: "phaser-game",
    scene: [SceneMain],
  };
  model = new Model();
  game = new Phaser.Game(config);
};
