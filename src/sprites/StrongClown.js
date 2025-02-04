import { Enemy } from './Enemy'

export class StrongClown extends Enemy {

  constructor (game, asset, tileX, tileY) {

    super(game, asset, tileX, tileY, 5, 'strongClown')
    this.attackAnimSpeed = 12   // Frames per second
    this.attackDuration = 1000  // Milliseconds

    this.walkSpeed = 200
    this.walkAnimSpeed = this.walkSpeed / 16.6

    this.deathAnimSpeed = 3
    this.deathDuration = 2000

    this.animations.add('rightattack', [16,18,16,19,16,20,17,17,17,17])
    this.animations.add('leftattack',  [21,23,21,24,21,25,22,22,22,22])
    this.animations.add('upattack',  [37,39,37,40,37,41,38,38,38,38])
    this.animations.add('downattack',  [32,34,32,35,32,36,33,33,33,33])
    this.animations.add('die', [48,49,50,51,52,53])

    this.attackSound = game.add.audio('punch_flurry')
    this.attackSound.volume = 0.5

  }

  animateAttacking(direction) {
    this.animations.play(direction + 'attack', this.attackAnimSpeed, false)
    setTimeout(() => {this.setAnimatingFalse()}, this.attackDuration);
  }

  otherAttack () {
    console.log('other attack from StrongClown!')
  }

}
