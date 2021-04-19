var game;
var model;
var emitter;

window.onload = function () {
  var config = {
    type: Phaser.AUTO,
    width: 480,
    height: 640,
    parent: "phaser-game",
    scene: [SceneTitle, SceneMain, SceneOver],
  };
  model = new Model();
  game = new Phaser.Game(config);
};
