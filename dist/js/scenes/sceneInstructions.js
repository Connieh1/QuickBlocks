class SceneInstructions extends Phaser.Scene {
  constructor() {
    super("SceneInstructions");
  }

  preload() {}

  create() {
    console.log("SceneInstructions");
    this.aGrid = new AlignGrid({ scene: this, rows: 11, cols: 11 });
    this.aGrid.showNumbers();
    this.back = this.add.image(0, 0, "titleBack");
    this.back.setOrigin(0, 0);
    this.back.displayWidth = game.config.width;
    this.back.displayHeight = game.config.height;

    this.sampleImage = this.add.image(0, 0, "sample");
    Align.scaleToGameW(this.sampleImage, 0.5);
    this.aGrid.placeAtIndex(27, this.sampleImage);

    this.text1 = this.add.text(
      0,
      0,
      "Click the same color block\n as the center block\n before time runs out",
      {
        color: "#000000",
        fontSize: game.config.width / 30,
        backgroundColor: "#ffffff",
      }
    );

    this.text1.setOrigin(0.5, 0.5);
    this.aGrid.placeAtIndex(71, this.text1);

    this.btnStart = new TextButton({
      scene: this,
      event: mt.constants.SHOW_TITLE,
      params: this.scene,
      key: "green",
      text: "Home",
      scale: 0.35,
      textScale: 25,
      textColor: "#ffffff",
    });
    this.aGrid.placeAtIndex(93, this.btnStart);
  }

  update() {}
}
