import Phaser from 'phaser';

import { ImagesKeys } from '~/consts/ImagesKeys';

export default class Dog extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, ImagesKeys.Dog);
  }

  flipHorizontal() {
    this.flipX = true;
  }
}

Phaser.GameObjects.GameObjectFactory.register(
  'dog',
  function (this: Phaser.GameObjects.GameObjectFactory, x: number, y: number) {
    const dog = new Dog(this.scene, x, y).setOrigin(0.5, 0.5);
    this.displayList.add(dog);
    this.updateList.add(dog);
    return dog;
  }
);
