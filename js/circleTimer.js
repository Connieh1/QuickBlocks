class CircleTimer extends UIBlock {
  constructor(config) {
    super();
    this.scene = config.scene;
    this.graphics = this.scene.add.graphics();
    this.graphics.fillStyle(0xffffff, 0.3);
    this.graphics.slice(
      0,
      0,
      game.config.width * 0.1,
      Phaser.Math.DegToRad(0),
      Phaser.Math.DegToRad(360)
    );

    this.graphics.fillPath();

    this.add(this.graphics);
  }
}
