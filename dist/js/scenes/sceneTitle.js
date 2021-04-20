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
    this.load.image("sample", "images/sample.png");
    this.load.audio("right", "audio/right.wav");
    this.load.audio("wrong", "audio/wrong.wav");
    this.load.audio("background", "audio/background.mp3");
    this.load.audio("levelUp", "audio/levelUP.wav");
  }

  create() {
    mt.emitter = new Phaser.Events.EventEmitter();
    mt.controller = new Controller();
    mt.mediaManager = new MediaManager({ scene: this });

    this.back = this.add.image(0, 0, "titleBack");
    this.back.setOrigin(0, 0);
    this.back.displayWidth = game.config.width;
    this.back.displayHeight = game.config.height;

    this.aGrid = new AlignGrid({ scene: this, rows: 11, cols: 11 });
    this.aGrid.showNumbers();

    this.titleText = this.add.text(0, 0, "QUICK\nBLOCKS", {
      fontSize: game.config.width / 5,
      color: "#ff0000",
    });

    this.btnStart = new TextButton({
      scene: this,
      event: mt.constants.START_GAME,
      params: this.scene,
      key: "green",
      text: "Start Game",
      scale: 0.35,
      textScale: 30,
      textColor: "#000000",
    });
    Align.center(this.btnStart);

    this.btnInstr = new TextButton({
      scene: this,
      event: mt.constants.SHOW_INSTR,
      params: this.scene,
      key: "blue",
      text: "How to Play",
      scale: 0.35,
      textScale: 30,
      textColor: "#000000",
    });
    this.aGrid.placeAtIndex(35, this.btnInstr);

    this.btnSettings = new TextButton({
      scene: this,
      event: mt.constants.SHOW_SETTINGS,
      params: this.scene,
      key: "orange",
      text: "Settings",
      scale: 0.35,
      textScale: 30,
      textColor: "#000000",
    });
    this.aGrid.placeAtIndex(85, this.btnSettings);
  }
}
