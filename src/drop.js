import Shared from './shared'
import Config from './config'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import { downBarrier } from './barriers'

export function Drop(cfg) {
  return {
    speed: cfg.speed,
    sound: Shared.sounds[cfg.sound],
    sprite1: Sprite(...cfg.sprite1),
    sprite2: Sprite(...cfg.sprite2),
    x: cfg.sprite1[0].x,
    y: cfg.sprite1[0].y,
    time: performance.now(),
    delay: cfg.delay,
    delayTime: performance.now(),
    startTime: 0
  }
}

export function draw(drop) {
  if (!drop.delayTime) drawSprite(drop.sprite1)
  else if (drop.delayTime < 0) drawSprite(drop.sprite2)
}

export function update(drop) {
  const t = performance.now()
  const s1 = drop.sprite1
  const s2 = drop.sprite2

  // delay between drops
  if (drop.delayTime > 0 && t - drop.delayTime > drop.delay) {
    drop.delayTime = 0
    drop.startTime = t
  }

  // drop
  if (!drop.delayTime && t - drop.time > Config.objTickMs) {
    s1.y += (drop.speed * Shared.speed * ((((t - drop.startTime) / 1000) ** 2 / 2) * 3))
    const pos = downBarrier(s1)
    if (pos || s1.y > Config.height) {
      drop.sound.play()
      drop.delayTime = -1
      s2.x = s1.x - (s2.img.frames.width / 2 - s1.img.frames.width / 2)
      s2.y = pos[1] - s2.height
      s1.y = drop.y
      s2.img.frames.frame = 0
    }
    drop.time = t
  }

  // drop collision
  if (drop.delayTime === -1 && s2.img.frames.frame >= s2.img.frames.amount - 1) {
    drop.delayTime = t
  }


  updateSprite(drop.delayTime < 0 ? s2 : s1)
}