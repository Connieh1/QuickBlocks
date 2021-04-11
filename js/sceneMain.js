class SceneMain extends Phaser.Scene {
  constructor() {
    super("SceneMain");
  }
  preload() {
    //load our images or sounds
    this.load.spritesheet("blocks", "images/blocks.png", {
      frameWidth: 63,
      frameHeight: 84,
    });
  }
  create() {
    //define our objects
  }
  update() {
    //constant running loop
  }
}
