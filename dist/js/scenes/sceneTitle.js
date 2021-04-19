class SceneTitle extends Phaser.Scene {
  constructor() {
    super("SceneTitle");
  }

  preload() {
    this.load.image("btnStart", "images/btnStart.png");
    this.load.image("titleBack", "images/titleBack.jpg");

    this.load.image("blue", "images/buttons/blue.png");
    this.load.image("red", "images/buttons/red.png");
    this.load.image("orange", "images/buttons/orange.png");
    this.load.image("green", "images/buttons/green.png");
  }

  create() {
    emitter = new Phaser.Events.EventEmitter();
    this.back = this.add.image(0, 0, "titleBack");
    this.back.setOrigin(0, 0);
    this.back.displayWidth = game.config.width;
    this.back.displayHeight = game.config.height;

    this.titleText = this.add.text(0, 0, "QUICK\nBLOCKS", {
      fontSize: game.config.width / 5,
      color: "#ff0000",
    });

    this.btnStart = new TextButton({
      scene: this,
      event: "START_GAME",
      key: "blue",
      text: "Start Game",
      scale: 0.25,
      textScale: 30,
      textColor: "#000000",
    });
    Align.center(this.btnStart);
    // this.btnStart = this.add.image(0, 0, "btnStart");
    // Align.scaleToGameW(this.btnStart, 0.45);
    // Align.center(this.btnStart);

    // this.btnStart.setInteractive();
    // this.btnStart.on("pointerdown", this.startGame, this);
    emitter.on("START_GAME", this.startGame, this);
  }
  startGame() {
    this.scene.start("SceneMain");
  }
}
