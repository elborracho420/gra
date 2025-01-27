import Config from './config'
import { draw as drawSprite, stop } from './sprite'

export function Picked() {
  return {
    items: []
  }
}

export function draw(picked) {
  let x = Config.width - 2
  picked.items.forEach(i => {
    stop(i.sprite)
    if (!i.hidden) {
      x -= (i.sprite.width + 5)
      i.sprite.x = x
      i.sprite.y = Config.pickedY
      drawSprite(i.sprite)
    }
  })
}