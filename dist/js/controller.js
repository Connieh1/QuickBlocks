class Controller {
  constructor() {
    mt.emitter.on(mt.constants.START_GAME, this.startGame, this);
    mt.emitter.on(mt.constants.SHOW_TITLE, this.showTitle, this);
    mt.emitter.on(mt.constants.SHOW_INSTR, this.showInstructions, this);
    mt.emitter.on(mt.constants.SHOW_SETTINGS, this.showSettings, this);
    mt.emitter.on(mt.constants.TOGGLE_MUSIC, this.toggleMusic, this);
    mt.emitter.on(mt.constants.TOGGLE_SOUND, this.toggleSound, this);
  }

  startGame(scene) {
    scene.start("SceneMain");
  }

  showInstructions(scene) {
    scene.start("SceneInstructions");
  }

  showSettings(scene) {
    scene.start("SceneSettings");
  }

  showTitle(scene) {
    scene.start("SceneTitle");
  }

  toggleMusic() {
    mt.model.musicOn = !mt.model.musicOn;
  }

  toggleSound() {
    mt.model.sfxOn = !mt.model.sfxOn;
  }
}
