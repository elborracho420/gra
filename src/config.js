import IdleLeftPath from '../img/idle-left-3.png'
import IdleRightPath from '../img/idle-right-3.png'
import WalkLeftPath from '../img/walk-left-6.png'
import WalkRightPath from '../img/walk-right-6.png'
import JumpLeftPath from '../img/jump-left-9.png'
import JumpRightPath from '../img/jump-right-9.png'
import L1BackPath from '../img/l1-back.png'

export default {
  canvasId: 'canvas',
  frontColor: '#fff',
  frontFont: '16px Tahoma',
  
  debug: true,
  upsDelay: 4,
  useSetTimeout: false,

  zoom: 2.1,
  width: 1600,
  height: 800,
  spriteSize: 32,
  hSprites: null,
  vSprites: null,

  jumpTime: 1000,
  jumpSize: 250,
  stepTime: 400,
  stepSize: 100,

  // sprites
  hero: [150, 540, [80, 90, 30, 95], {
    idleLeft:  [IdleLeftPath,  3, 260],
    idleRight: [IdleRightPath, 3, 260],
    walkLeft:  [WalkLeftPath,  6, 60],
    walkRight: [WalkRightPath, 6, 60],
    jumpLeft:  [JumpLeftPath,  9, 150],
    jumpRight: [JumpRightPath, 9, 150]
  }],
  back: [0, 0, null, L1BackPath]
}