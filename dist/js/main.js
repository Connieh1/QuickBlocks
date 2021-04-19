var game;
var mt;

window.onload = function () {
  var config = {
    type: Phaser.AUTO,
    width: 480,
    height: 640,
    parent: "phaser-game",
    scene: [SceneTitle, SceneMain, SceneOver],
  };
  mt = {};
  mt.model = new Model();
  game = new Phaser.Game(config);
  mt.game = game;
  mt.constants = new Constants();
};
