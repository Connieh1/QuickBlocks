class TextButton extends UIBlock {
  constructor(config) {
    super();
    this.scene = config.scene;

    this.back = this.scene.add.image(0, 0, config.key);
    this.back.setInteractive();
    this.back.on("pointerdown", this.pressed, this);
    this.add(this.back);
    if (!config.scale) {
      config.scale = 0.5;
    }
    Align.scaleToGameW(this.back, config.scale);

    if (!config.textScale) {
      config.textScale = 30;
    }

    if (!config.textColor) {
      config.textColor = "#ffffff";
    }
    this.textfield = this.scene.add.text(0, 0, config.text, {
      fontSize: game.config.width / config.textScale,
      color: config.textColor,
    });
    this.textfield.setOrigin(0.5, 0.5);
    this.add(this.textfield);

    if (config.callBack) {
      this.callBack = config.callBack;
    }
    if (config.callBackScope) {
      this.callBackScope = config.callBackScope;
    }
    if (config.event) {
      this.event = config.event;
    }
  }

  pressed() {
    console.log("pressed");
    if (this.callBack) {
      if (this.callBackScope) {
        this.callBack.call(this.callBackScope);
      } else {
        this.callBack.apply();
      }
    }
    if (this.event) {
      emitter.emit(this.event);
    }
  }
}
