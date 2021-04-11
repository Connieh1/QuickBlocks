class SceneMain extends Phaser.Scene {
  constructor() {
    super("SceneMain");
  }
  preload() {
    //load our images or sounds
    this.load.spritesheet("blocks", "images/blocks.png", {
      frameWidth: 64,
      frameHeight: 84,
    });
  }
  create() {
    //define our objects
    this.colorArray = [];
    for (let i = 0; i < 25; i++) {
      let color = Phaser.Math.Between(0, 7);
      this.colorArray.push(color);
    }
    let xx = 0;
    let yy = 0;
    let block;
    let count = 0;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        block = this.add.image(0, 0, "blocks");
        block.displayWidth = game.config.width / 5;
        block.displayHeight = game.config.height / 5;
        block.setFrame(this.colorArray[count]);
        block.setOrigin(0, 0);
        block.x = xx;
        block.y = yy;
        xx += block.displayWidth;
        count++;
      }
      xx = 0;
      yy += block.displayHeight;
    }
  }
  update() {
    //constant running loop
  }
}
