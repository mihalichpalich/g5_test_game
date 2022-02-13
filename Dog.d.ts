declare interface IDog extends Phaser.GameObjects.Sprite {
  flipHorizontal(): void;
}

declare namespace Phaser.GameObjects {
  interface GameObjectFactory {
    dog(x: number, y: number): IDog;
  }
}
