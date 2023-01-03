import IdleLeftPath from '../img/idle-left-3.png'
import IdleRightPath from '../img/idle-right-3.png'
import WalkLeftPath from '../img/walk-left-6.png'
import WalkRightPath from '../img/walk-right-6.png'
import JumpLeftPath from '../img/jump-left-9.png'
import JumpRightPath from '../img/jump-right-9.png'
import L1BackPath from '../img/l1-back.png'

// TODO: review all props
export default {
  fpsId: 'fps',
  canvasId: 'canvas',
  debug: true,
  useSetTimeout: true,

  width: 2048,
  height: 900,
  spriteSize: 32,
  hSprites: null,
  vSprites: null,
  
  zoom: 1.5,
  jumpTime: 1000,
  jumpSize: 250,
  stepTime: 300,
  stepSize: 150,

  backColor: 'black',
  frontColor: '#fff',
  frontFont: '16px Tahoma',

  // sprites
  hero: [100, 600, [77, 88, 38, 100], {
    idleLeft:  [IdleLeftPath,  3, 260],
    idleRight: [IdleRightPath, 3, 260],
    walkLeft:  [WalkLeftPath,  6, 80],
    walkRight: [WalkRightPath, 6, 80],
    jumpLeft:  [JumpLeftPath,  9, 150],
    jumpRight: [JumpRightPath, 9, 150]
  }],
  back: [0, 0, null, L1BackPath]
}