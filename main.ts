scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, sprites.castle.tilePath5)
})
let planta: Sprite = null
let XoséXosefa: Sprite = null
tiles.setCurrentTilemap(tilemap`nivel 1`)
controller.moveSprite(XoséXosefa, 100, 100)
scene.cameraFollowSprite(XoséXosefa)
info.setScore(0)
XoséXosefa = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . . f f 1 1 f f . . . . . 
    . . . . f f 1 1 1 1 f f . . . . 
    . . . f f 9 9 9 9 9 9 f f . . . 
    . . f f 9 1 1 1 1 1 1 9 f f . . 
    . . f 9 1 f f f f f f 1 9 f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 9 9 9 9 9 9 f 4 e . . 
    . . 4 d f 1 1 1 1 1 1 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    let mySprite: Sprite = null
    let myEnemy: Sprite = null
    planta = sprites.create(img`
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
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 100)
})
