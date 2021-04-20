class SceneSettings extends Phaser.Scene {
  constructor() {
    super("SceneSettings");
  }

  preload() {}

  create() {
    console.log("Settings!");

    this.back = this.add.image(0, 0, "titleBack");
    this.back.setOrigin(0, 0);
    this.back.displayWidth = game.config.width;
    this.back.displayHeight = game.config.height;

    this.aGrid = new AlignGrid({ scene: this, rows: 11, cols: 11 });
    this.aGrid.showNumbers();

    this.btnSound = new TextButton({
      scene: this,
      event: mt.constants.TOGGLE_SOUND,
      key: "green",
      text: "",
      scale: 0.35,
      textScale: 30,
      textColor: "#000000",
    });
    this.aGrid.placeAtIndex(38, this.btnSound);

    this.btnMusic = new TextButton({
      scene: this,
      event: mt.constants.TOGGLE_MUSIC,
      key: "green",
      text: "",
      scale: 0.35,
      textScale: 30,
      textColor: "#000000",
    });
    this.aGrid.placeAtIndex(71, this.btnMusic);

    mt.emitter.on(mt.constants.MUSIC_CHANGED, this.updateButtons, this);
    mt.emitter.on(mt.constants.SOUND_CHANGED, this.updateButtons, this);

    this.updateButtons();
  }

  updateButtons() {
    let soundText = "Sound Is On";

    if (mt.model.sfxOn == false) {
      soundText = "Sound Is Off";
    }

    let musicText = "Music Is On";

    if (mt.model.musicOn == false) {
      musicText = "Music Is Off";
    }

    this.btnSound.textfield.setText(soundText);
    this.btnMusic.textfield.setText(musicText);
  }

  update() {}
}
