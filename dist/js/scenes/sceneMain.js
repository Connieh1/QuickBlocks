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
    this.load.image("btnPlayAgain", "images/btnPlayAgain.png");
  }
  create() {
    this.blockGroup = this.add.group();
    this.clickLock = false;
    this.colorArray = [];
    for (let i = 0; i < 25; i++) {
      let color = Phaser.Math.Between(0, mt.model.numberOfColors);
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
        this.blockGroup.add(block);
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

    this.scoreText = this.add.text(0, 0, "0", {
      fontSize: game.config.width / 10,
      color: "#000000",
    });
    this.scoreText.setOrigin(0.5, 0.5);
    Align.center(this.scoreText);
  }

  timeUp() {
    this.doGameOver();
  }

  selectBlock(pointer, block) {
    if (this.clickLock == true) {
      console.log("locked");
      return;
    }
    if (block.frame.name == this.centerBlock.frame.name) {
      block.removeInteractive();
      this.fall(block);
      this.pickColor();
      mt.model.score++;
      this.scoreText.setText(mt.model.score);
    } else {
      this.doGameOver();
      return;
    }
    this.timer.reset();
  }

  fall(block) {
    this.tweens.add({ targets: block, duration: 1000, scaleX: 0, scaleY: 0 });
  }

  pickColor() {
    let color;
    let index;
    if (this.colorArray.length == 0) {
      console.log("Next Level");
      mt.model.numberOfColors++;
      if (mt.model.numberOfColors > 7) {
        mt.model.numberOfColors = 7;
      }
      this.scene.restart();
      return;
    }
    index = Phaser.Math.Between(0, this.colorArray.length - 1);
    color = this.colorArray.splice(index, 1)[0];
    console.log(color);
    if (color == -1) {
      this.pickColor();
      return;
    }
    this.centerBlock.setFrame(color);
  }

  doGameOver() {
    this.clickLock = true;
    this.timer.stop();
    this.timer.visible = false;
    this.blockGroup.children.iterate(
      function (child) {
        this.fall(child);
      }.bind(this)
    );
    this.time.addEvent({
      delay: 1200,
      callback: this.doGameOver2,
      callbackScope: this,
      loop: false,
    });
  }

  doGameOver2() {
    this.scene.start("SceneOver");
  }

  update() {
    //constant running loop
  }
}
