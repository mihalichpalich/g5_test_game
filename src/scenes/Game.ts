import { Scene } from 'phaser';

import { ImagesKeys } from '~/consts/ImagesKeys';
import { Colors } from '~/consts/Colors';
import { Roboto } from '~/consts/Fonts';

import '../components/Dog';

export default class StartScene extends Scene {
  private scrHeight!: number;
  private scrWidth!: number;
  private scrCenterX?: number;

  private btn?: Phaser.GameObjects.Container;
  private task?: Phaser.GameObjects.Container;
  private taskImage?: IDog;
  private taskBottom?: Phaser.GameObjects.Text;
  private taskTopText?: Phaser.GameObjects.Text;
  private dogA?: IDog;
  private dogB?: IDog;
  private dogC?: IDog;
  private dogD?: IDog;

  preload() {
    this.load.image(ImagesKeys.BG, 'assets/back_five_dogs.jpg');
    this.load.image(ImagesKeys.Dog, 'assets/doggy.png');
  }

  init() {
    this.scrHeight = this.cameras.main.height;
    this.scrWidth = this.cameras.main.width;
    this.scrCenterX = this.cameras.main.width / 2;
  }

  create() {
    this.add.image(0, 0, ImagesKeys.BG).setOrigin(0, 0);

    this.dogA = this.add
      .dog(this.scrWidth * 0.17, this.scrHeight * 0.35)
      .setScale(0.75);
    this.dogA.flipHorizontal();
    this.dogB = this.add
      .dog(this.scrWidth * 0.5, this.scrHeight * 0.43)
      .setScale(0.75);
    this.dogB.flipHorizontal();
    this.dogC = this.add
      .dog(this.scrWidth * 0.21, this.scrHeight * 0.8)
      .setScale(0.9);
    this.dogD = this.add
      .dog(this.scrWidth * 0.9, this.scrHeight * 0.8)
      .setScale(0.8);

    // const darkBG = this.add
    //   .rectangle(0, 0, this.scrWidth, this.scrHeight, Colors.Black)
    //   .setOrigin(0, 0);
    // this.taskTopText = this.add
    //   .text(this.scrWidth * 0.45, this.scrHeight * 0.4, '5 Hidden Dogs', {
    //     fontSize: '64px',
    //     fontFamily: Roboto,
    //   })
    //   .setOrigin(0.5, 0.5);
    // this.taskImage = this.add.dog(this.scrWidth * 0.68, this.scrHeight * 0.4);
    // this.taskImage.flipHorizontal();
    // this.taskBottom = this.add
    //   .text(this.scrWidth * 0.5, this.taskImage.y + 130, 'Can you spot them?', {
    //     fontSize: '64px',
    //     fontFamily: Roboto,
    //   })
    //   .setOrigin(0.5, 0.5);
    // this.task = this.add.container(0, 0, [
    //   darkBG,
    //   this.taskTopText,
    //   this.taskImage,
    //   this.taskBottom,
    // ]);

    // this.taskAnimation();

    const btnBG = this.add.sprite(0, 0, ImagesKeys.Button);
    const btnText = this.add
      .text(0, 0, 'Play Now', {
        fontSize: '48px',
        fontFamily: Roboto,
        color: Colors.LightYellow,
      })
      .setShadow(2, 2, '#000000', 2, false, true)
      .setOrigin(0.5, 0.5);
    this.btn = this.add
      .container(this.scrCenterX, this.scrHeight * 0.9, [btnBG, btnText])
      .setSize(btnBG.width, btnBG.height)
      .setInteractive()
      .on('pointerup', () => this.onButtonClick(), this.scene);
  }

  update() {}

  taskAnimation() {
    const timeline = this.tweens.createTimeline();

    timeline.add({
      targets: this.task,
      alpha: { from: 0.5, to: 1 },
      duration: 500,
      ease: 'Power2',
    });
    timeline.add({
      targets: [this.taskTopText, this.taskImage, this.taskBottom],
      duration: 3000,
      scale: 1.025,
      ease: 'Linear',
    });
    timeline.add({
      targets: this.task,
      alpha: { from: 1, to: 0 },
      duration: 2000,
      ease: 'Power2',
    });

    timeline.play();
  }

  onButtonClick() {
    window.open('https://www.g5e.com/', '_blank');
  }
}
