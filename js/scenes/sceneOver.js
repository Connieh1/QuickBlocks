class SceneOver extends Phaser.Scene {
  constructor() {
    super("SceneOver");
  }

  create() {
    this.btnPlayAgain = this.add.image(0, 0, "btnPlayAgain");
    Align.center(this.btnPlayAgain);
    this.btnPlayAgain.setInteractive();
    this.btnPlayAgain.on("pointerdown", this.playAgain, this);
  }

  playAgain() {
    this.scene.start("SceneMain");
  }

  update() {}
}
