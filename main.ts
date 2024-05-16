namespace SpriteKind {
    export const fire = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 5; index++) {
        mySprite.y += -5
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    info.changeLifeBy(-1)
    pause(100)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (pc > 0 && info.life() < 3) {
        info.changeLifeBy(1)
        pc += -1
    }
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    if (true) {
        mySprite.ay = 100
    } else {
        mySprite.ay = 200
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() > 8) {
        info.changeScoreBy(-8)
        pc += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    info.changeScoreBy(3)
})
controller.combos.attachCombo("L+R", function () {
    if (info.player3.score() > 2) {
        if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving))) {
            mySprite3 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . 4 4 4 5 5 4 4 4 . . . . 
                . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                . . . . 4 4 2 2 2 2 4 4 . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.fire)
            mySprite3.setPosition(mySprite.x, mySprite.y)
            mySprite3.vx = -100
        }
        if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving))) {
            mySprite3 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . 4 4 4 5 5 4 4 4 . . . . 
                . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                . . . . 4 4 2 2 2 2 4 4 . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.fire)
            mySprite3.setPosition(mySprite.x, mySprite.y)
            mySprite3.vx = 100
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    mySprite.x = 10
    mySprite.y = 32
    mySprite.sayText("loading", 5000, false)
    timer.after(10, function () {
        mySprite.sayText("loaded", 5000, false)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    mySprite.x = randint(255, 600)
    mySprite.y = 96
    tiles.setCurrentTilemap(tilemap`level4`)
    mySprite.sayText("loading", 5000, false)
    timer.after(10, function () {
        mySprite.sayText("loaded", 5000, false)
    })
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    if (Math.percentChance(50)) {
        mySprite2.ax = 200
    } else {
        mySprite2.ax = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    game.setGameOverMessage(false, "you fell out of the world")
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Food, assets.tile`myTile3`, function (sprite, location) {
    sprites.destroy(mySprite2)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        mySprite.ay = 400
    } else {
        mySprite.ay = 200
    }
})
info.player1.onLifeZero(function () {
    game.setGameOverMessage(false, "you died")
    game.gameOver(false)
})
let fall_damage = 0
let px = 0
let py = 0
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let pc = 0
let sc = 0
let mySprite: Sprite = null
let seed = randint(1, 10000000)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite.setVelocity(5, 0)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
sc += 1
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e e e d d d f . . . 
    . . . . . f 4 d d e 4 e f . . . 
    . . . . . f e d d e 2 2 f . . . 
    . . . . f f f e e f 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `,img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . 4 d d e 4 4 4 e f . . . 
    . . . . e d d e 2 2 2 2 f . . . 
    . . . . f e e f 4 4 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `],
100,
characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d d 4 . . . . . 
    . . . f 2 2 2 e d d e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d e e e e e f . . . 
    . . . f e 4 e d d 4 f . . . . . 
    . . . f 2 2 e d d e f . . . . . 
    . . f f 5 5 f e e f f f . . . . 
    . . f f f f f f f f f f . . . . 
    . . . f f f . . . f f . . . . . 
    `,img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d d 4 . . . . . 
    . . . f 2 2 2 e d d e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e d d 4 . . . . 
    . . . f 2 2 2 2 e d d e . . . . 
    . . f f 5 5 4 4 f e e f . . . . 
    . . f f f f f f f f f f . . . . 
    . . . f f f . . . f f . . . . . 
    `],
100,
characterAnimations.rule(Predicate.MovingLeft)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . e 4 e e 4 4 4 4 e e 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 2 2 2 2 2 2 f 4 4 . . 
    . . . . f 4 4 5 5 4 4 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . e 4 e d d d d d d e 4 e . . 
    . . 4 d e e 4 4 4 4 e e d 4 . . 
    . . 4 4 f 2 2 2 2 2 2 f 4 4 . . 
    . . . . f 2 2 2 2 2 2 f . . . . 
    . . . . f 4 4 5 5 4 4 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . e 4 e d d d d d d e 4 e . . 
    . . 4 d e e 4 4 4 4 e e d 4 . . 
    . . 4 4 f 2 2 2 2 2 2 f 4 4 . . 
    . . . . f 2 2 2 2 2 2 f . . . . 
    . . . . f 4 4 5 5 4 4 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . e 4 e d d d d d d e 4 e . . 
    . . 4 d e e 4 4 4 4 e e d 4 . . 
    . . 4 4 f 2 2 2 2 2 2 f 4 4 . . 
    . . . . f 2 2 2 2 2 2 f . . . . 
    . . . . f 4 4 5 5 4 4 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
200,
characterAnimations.rule(Predicate.MovingDown)
)
mySprite.ay = 200
mySprite.x = randint(20, 255)
mySprite.y = 10
tiles.setCurrentTilemap(tilemap`level2`)
info.setLife(3)
info.setScore(100)
pc = 0
info.player3.setScore(100)
game.onUpdate(function () {
    if (!(characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.MovingDown)))) {
        if (characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.HittingWallUp)) || (characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.HittingWallLeft)) || characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.HittingWallRight)))) {
            if (Math.percentChance(50)) {
                mySprite2.ax = 200
            } else {
                mySprite2.ax = -200
            }
        }
    }
    if (characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.HittingWallLeft)) || characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.HittingWallRight))) {
        if (true) {
            mySprite2.ax = 200
        } else {
            mySprite2.ax = -200
        }
    }
    if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.HittingWallRight)) || characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.HittingWallLeft))) {
        mySprite.y += -5
    }
    if (characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.HittingWallRight)) || characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.HittingWallLeft))) {
        mySprite2.y += -5
    }
    // perfomance optimization
    if (py > scene.screenHeight() - mySprite.y || py < scene.screenHeight() - mySprite.y || (px < scene.screenWidth() - mySprite.x || px > scene.screenWidth() - mySprite.x)) {
        sprites.destroy(mySprite2)
    }
    px = mySprite2.x
    py = mySprite2.y
    if (sc > 4) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    }
    // fall damage
    if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.MovingDown))) {
        if (mySprite.vy > 110) {
            fall_damage = 1
        }
        if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.HittingWallDown)) && fall_damage == 1) {
            info.changeLifeBy(-1)
        }
        if (mySprite.vy < 50) {
            fall_damage = 0
        }
    }
    if (info.life() > 3) {
        info.changeLifeBy(-1)
    }
    info.player2.setScore(pc)
    if (mySprite3) {
        if (characterAnimations.matchesRule(mySprite3, characterAnimations.rule(Predicate.HittingWallUp)) || (characterAnimations.matchesRule(mySprite3, characterAnimations.rule(Predicate.HittingWallRight)) || (characterAnimations.matchesRule(mySprite3, characterAnimations.rule(Predicate.HittingWallDown)) || characterAnimations.matchesRule(mySprite3, characterAnimations.rule(Predicate.HittingWallLeft))))) {
            sprites.destroy(mySprite3)
        }
    }
    info.player2.setLife(info.score() / 8)
})
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`)) {
        mySprite.y += 5
        mySprite.x += randint(-1, 1)
    }
})
game.onUpdateInterval(5000, function () {
    mySprite2 = sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.Food)
    mySprite2.ax = -20
    mySprite2.ay = 200
    mySprite2.x = randint(1, 255) / seed * 2
    characterAnimations.loopFrames(
    mySprite2,
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f f . . 
        . f f f e e 4 4 4 f . . . 
        . . f e 4 4 e e f f . . . 
        . . f e 4 4 e 7 7 f . . . 
        . f f f e e f 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mySprite2,
    [img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 e e f f f . 
        . . . f f e e 4 4 e f . . 
        . . . f 7 7 e 4 4 e f . . 
        . . f f 6 6 f e e f f f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    sc += 1
})
game.onUpdateInterval(5000, function () {
    mySprite2 = sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.Food)
    mySprite2.ax = 60
    mySprite2.ay = 200
    mySprite2.x = randint(1, 255) / seed * 2
    characterAnimations.loopFrames(
    mySprite2,
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f f . . 
        . f f f e e 4 4 4 f . . . 
        . . f e 4 4 e e f f . . . 
        . . f e 4 4 e 7 7 f . . . 
        . f f f e e f 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mySprite2,
    [img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 e e f f f . 
        . . . f f e e 4 4 e f . . 
        . . . f 7 7 e 4 4 e f . . 
        . . f f 6 6 f e e f f f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    sc += 1
})
game.onUpdateInterval(5000, function () {
    if (info.life() < 3) {
        info.changeLifeBy(1)
    }
})
