namespace SpriteKind {
    export const Projectile2 = SpriteKind.create()
    export const snake = SpriteKind.create()
}
info.onScore(100000, function () {
    game.showLongText("AAAHH! FUCING DIE ALREADY...", DialogLayout.Bottom)
    game.showLongText("...", DialogLayout.Bottom)
    game.showLongText("...", DialogLayout.Bottom)
    game.showLongText("Flowey: PUUUHH!", DialogLayout.Bottom)
    game.setGameOverEffect(true, effects.slash)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Projectile2, SpriteKind.Player, function (sprite, otherSprite) {
    falling = sprites.create(img`
        . . . 7 7 . . . 
        . . . 7 7 . . . 
        . 7 7 7 7 7 7 . 
        7 7 5 5 5 5 7 7 
        . 7 7 5 5 7 7 . 
        . . 7 7 7 7 . . 
        . . . 7 7 . . . 
        . . . 7 7 . . . 
        `, SpriteKind.Projectile)
    falling.setBounceOnWall(true)
    falling.setPosition(sprite.x, sprite.y - 5)
    falling.setVelocity(sprite.vx, 0 - sprite.vy)
    falling.ay = sprite.ay
    sprite.destroy(effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.setScore(info.score() + 1)
    sprite.destroy(effects.fire, 500)
})
info.onCountdownEnd(function () {
    game.setDialogFrame(img`
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
        5 7 5 5 5 5 5 5 5 5 5 5 5 7 5 
        5 7 5 7 7 7 7 7 7 7 7 7 5 7 5 
        5 7 5 7 7 7 7 7 7 7 7 7 5 7 5 
        5 7 5 7 7 7 7 7 7 7 7 7 5 7 5 
        5 7 5 7 7 7 7 7 7 7 7 7 5 7 5 
        5 7 5 7 7 7 7 7 7 7 7 7 5 7 5 
        5 7 5 7 7 7 7 7 7 7 7 7 5 7 5 
        5 7 5 7 7 7 7 7 7 7 7 7 5 7 5 
        5 7 5 7 7 7 7 7 7 7 7 7 5 7 5 
        5 7 5 7 7 7 7 7 7 7 7 7 5 7 5 
        5 7 5 5 5 5 5 5 5 5 5 5 5 7 5 
        5 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `)
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    game.showLongText("NO! It can't be... First you steal my Hearts.. then You do this", DialogLayout.Bottom)
    game.showLongText("Sans: That's Deserved for what you did now Bastard DIE!", DialogLayout.Bottom)
    game.showLongText("Sans: Help me Frisk", DialogLayout.Bottom)
    scene.cameraShake(8, 5000)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.disintegrate, 1000)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.disintegrate, 1000)
    info.setLife(3)
    info.setScore(99998)
})
scene.onHitWall(SpriteKind.Projectile2, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile`)) {
        info.changeLifeBy(-1)
        sprite.destroy(effects.ashes, 500)
    }
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile`)) {
        info.changeLifeBy(-1)
        sprite.destroy(effects.ashes, 500)
    }
})
let limit = 0
let falling: Sprite = null
let s4Dir = 1
info.setLife(5)
let basket = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 . . . . . . . . . . 5 5 . 
    5 5 . . . . . . . . . . . . 5 5 
    5 . . . . . . . . . . . . . . 5 
    `, SpriteKind.Player)
basket.setPosition(80, 100)
controller.moveSprite(basket, 160, 0)
let mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.snake)
mySprite4.setFlag(SpriteFlag.Ghost, true)
mySprite4.setPosition(-7, 100)
tiles.setTilemap(tilemap`level`)
scene.setBackgroundColor(12)
game.setDialogFrame(img`
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
    5 7 5 5 5 5 5 5 5 5 5 5 5 7 5 
    5 7 5 7 7 7 7 7 7 7 7 7 5 7 5 
    5 7 5 7 7 7 7 7 7 7 7 7 5 7 5 
    5 7 5 7 7 7 7 7 7 7 7 7 5 7 5 
    5 7 5 7 7 7 7 7 7 7 7 7 5 7 5 
    5 7 5 7 7 7 7 7 7 7 7 7 5 7 5 
    5 7 5 7 7 7 7 7 7 7 7 7 5 7 5 
    5 7 5 7 7 7 7 7 7 7 7 7 5 7 5 
    5 7 5 7 7 7 7 7 7 7 7 7 5 7 5 
    5 7 5 7 7 7 7 7 7 7 7 7 5 7 5 
    5 7 5 5 5 5 5 5 5 5 5 5 5 7 5 
    5 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    `)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.showLongText("Sans: I won't Let Him hit you", DialogLayout.Bottom)
info.startCountdown(60)
game.onUpdateInterval(2200, function () {
    mySprite4.vx = 10 * s4Dir
    s4Dir = s4Dir * -1
})
game.onUpdateInterval(2000, function () {
    if (info.score() < 10 || randint(1, Math.min(50, info.score())) < 10) {
        falling = sprites.create(img`
            . . . 7 7 . . . 
            . . . 7 7 . . . 
            . 7 7 7 7 7 7 . 
            7 7 5 5 5 5 7 7 
            . 7 7 5 5 7 7 . 
            . . 7 7 7 7 . . 
            . . . 7 7 . . . 
            . . . 7 7 . . . 
            `, SpriteKind.Projectile)
    } else {
        falling = sprites.create(img`
            . . . 5 5 . . . 
            . . . 5 5 . . . 
            . 5 5 5 5 5 5 . 
            5 5 4 4 4 4 5 5 
            . 5 5 4 4 5 5 . 
            . . 5 5 5 5 . . 
            . . . 5 5 . . . 
            . . . 5 5 . . . 
            `, SpriteKind.Projectile2)
    }
    falling.setPosition(randint(20, 140), 20)
    limit = Math.min(10, info.score())
    falling.setVelocity(randint(-100, 100), randint(0 - limit, 5))
    falling.ay = 20
    falling.setBounceOnWall(true)
})
forever(function () {
    music.play(music.createSong(hex`005a000408050301001c000f05001202c102c201000405002800000064002800031400060200046c0000000400011e04000800011d08000c00011e0c001000011d10001400011e14001800012018001c00011d1c002000011e20002400011d24002800011e28002c00011d2c003000012030003400011d34003800011e38003c00011d3c004000012040004400012444004800012704001c00100500640000041e000004000000000000000000000000000a0400049c00140018000220242c0030000220243c004000012040004400012444004800012748004c0001244c005000012250005400012454005800012258005c00031e242960006400012264006800012468006c0001226c007000012470007400031e242978007c00011d7c008000011e80008400011d84008800011e88008c00011d8c009000012090009400012494009800012a98009c0001279c00a000012205001c000f0a006400f4010a00000400000000000000000000000000000000023c0078007c00011d7c008000011e80008400011d84008800011e88008c00011d8c009000012090009400012494009800012a98009c0001279c00a0000122`), music.PlaybackMode.UntilDone)
})
