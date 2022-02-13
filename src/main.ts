import Phaser from 'phaser';

import { SceneKeys } from './consts/SceneKeys';

import Preload from './scenes/Preload';
import Game from './scenes/Game';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1075,
  height: 767,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
};

const game = new Phaser.Game(config);

game.scene.add(SceneKeys.Game, Game);
game.scene.add(SceneKeys.Preload, Preload);
game.scene.start(SceneKeys.Preload);
