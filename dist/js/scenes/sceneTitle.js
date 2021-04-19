class SceneTitle extends Phaser.Scene {
  constructor() {
    super("SceneTitle");
  }

  preload() {
    this.load.image("btnStart", "images/btnStart.png");
    this.load.image("titleBack", "images/titleBack.jpg");
  }

  create() {
    this.back = this.add.image(0, 0, "titleBack");
    this.back.setOrigin(0, 0);
    this.back.displayWidth = game.config.width;
    this.back.displayHeight = game.config.height;

    this.titleText = this.add.text(0, 0, "QUICK\nBLOCKS", {
      fontSize: game.config.width / 5,
      color: "#ff0000",
    });

    this.btnStart = this.add.image(0, 0, "btnStart");
    Align.scaleToGameW(this.btnStart, 0.45);
    Align.center(this.btnStart);

    this.btnStart.setInteractive();
    this.btnStart.on("pointerdown", this.startGame, this);
  }
  startGame() {
    this.scene.start("SceneMain");
  }
}
