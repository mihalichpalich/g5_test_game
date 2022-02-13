import { Scene } from 'phaser';

import { ImagesKeys } from '~/consts/ImagesKeys';
import { SceneKeys } from '~/consts/SceneKeys';

import WebFontFile from '../components/WebFontFile';

export default class Preload extends Scene {
  preload() {
    const fonts = new WebFontFile(this.load, 'Roboto Condensed:700');
    this.load.addFile(fonts);
    this.load.image(ImagesKeys.Button, 'assets/btn.png');
  }

  create() {
    this.scene.start(SceneKeys.Game);
  }
}
