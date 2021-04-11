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
      let color = Phaser.Math.Between(0, model.numberOfColors);
      this.colorArray.push(color);
      this.centerBlock = null;
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
        // block.setOrigin(0, 0);
        block.x = xx + block.displayWidth / 2;
        block.y = yy + block.displayHeight / 2;
        if (i == 2 && j == 2) {
          this.centerBlock = block;
        } else {
          block.setInteractive();
        }
        xx += block.displayWidth;
        count++;
      }
      xx = 0;
      yy += block.displayHeight;
    }
    this.colorArray[12] = -1;

    this.pickColor();

    this.input.on("gameobjectdown", this.selectBlock, this);

    this.timer = new CircleTimer({ scene: this });
    this.timer.x = this.centerBlock.x;
    this.timer.y = this.centerBlock.y;
    this.timer.setCallback(this.timeUp, this);
    this.timer.start();
  }

  timeUp() {
    alert("time is up!");
  }

  selectBlock(pointer, block) {
    if (block.frame.name == this.centerBlock.frame.name) {
      block.removeInteractive();
      this.fall(block);
      this.pickColor();
    } else {
      console.log("wrong");
    }
    this.timer.reset();
  }

  fall(block) {
    this.tweens.add({ targets: block, duration: 1000, scaleX: 0, scaleY: 0 });
  }

  pickColor() {
    let color;
    if (this.colorArray.length == 0) {
      console.log("Next Level");
      return;
    }
    color = this.colorArray.shift();
    if (color == -1) {
      this.pickColor();
      return;
    }
    this.centerBlock.setFrame(color);
  }

  update() {
    //constant running loop
  }
}
