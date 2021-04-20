class MediaManager {
  constructor(config) {
    this.scene = config.scene;
  }

  playSound(key) {
    if ((mt.model.sfxOn = true)) {
      let sound = this.scene.sound.add(key);
      sound.play();
    }
  }

  setBackground(key) {
    if (mt.model.musicOn == true) {
      this.background = this.scene.sound.add(key, {
        volume: 0.5,
        loop: true,
      });
      this.background.play();
    }
  }

  stopMusic() {
    this.background.stop();
    this.background.destroy();
  }
}
