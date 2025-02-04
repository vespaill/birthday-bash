import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({game, x, y, asset, player}) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    game.physics.enable(this, Phaser.Physics.ARCADE)
    this.body.onCollide = new Phaser.Signal()
    this.body.onCollide.add(this.collected, this)
  }

  collected () {
    this.game.points += 1
    this.game.banner.text = 'Prototype Game\n' + this.game.points + ' points'
    console.log('collected')
    if (this.game.points >= 5) {
      this.game.state.start('Level1')
    }
    this.destroy()
  }

  update () {
    this.game.physics.arcade.collide(this, this.game.player)
  }
}
