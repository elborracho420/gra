import Shared from './shared'

import L1Path from '../img/l1.png'
import StalactiteUp1Path from '../img/stalactite-up-1.png'
import StalactiteUp2Path from '../img/stalactite-up-2.png'
import StalactiteDown1Path from '../img/stalactite-down-1.png'
// items
import HeartAnimPath from '../img/heart-9.png'
import GunAnimPath from '../img/gun-9.png'
import BulletsPath from '../img/bullets-9.png'
import DoorOpenPath from '../img/door-open-5.png'
import KeyPath from '../img/key-6.png'
import Mushroom9Path from '../img/mushroom-9.png'
import MushroomTele9Path from '../img/mushroom-medium-9.png'
import BulletPath from '../img/bullet-1.png'
import FlashlightPath from '../img/flashlight-9.png'
// hero
import IdleLeftPath from '../img/idle-left-3.png'
import IdleHitLeftPath from '../img/idle-hit-left-1.png'
import IdleHitRightPath from '../img/idle-hit-right-1.png'
import IdleGunLeftPath from '../img/idle-gun-left-3.png'
import IdleRightPath from '../img/idle-right-3.png'
import IdleGunRightPath from '../img/idle-gun-right-3.png'
import WalkLeftPath from '../img/walk-left-6.png'
import WalkGunLeftPath from '../img/walk-gun-left-6.png'
import WalkRightPath from '../img/walk-right-6.png'
import WalkGunRightPath from '../img/walk-gun-right-6.png'
import JumpLeftPath from '../img/jump-left-9.png'
import JumpGunLeftPath from '../img/jump-gun-left-9.png'
import JumpRightPath from '../img/jump-right-9.png'
import JumpGunRightPath from '../img/jump-gun-right-9.png'
// enemies
import BugLeftPath from '../img/bug-left-2.png'
import BugRightPath from '../img/bug-right-2.png'
import BugUpPath from '../img/bug-up-2.png'
import BugDownPath from '../img/bug-down-2.png'
import BugBlkLeftPath from '../img/bug-black-left-5.png'
import BugBlkRightPath from '../img/bug-black-right-5.png'
import BugBlueLeftPath from '../img/bug-black-blue-left-3.png'
import BugBlueRightPath from '../img/bug-black-blue-right-3.png'
import BugBigLeftPath from '../img/bug-big-left-3.png'
import BugBigRightPath from '../img/bug-big-right-3.png'
// scripts
import DropPath from '../img/drop-1.png'
import DropDownPath from '../img/drop-down-12.png'
import PortalPath from '../img/portal-9.png'
// music
import Cave0 from '../music/cave0.mp3'
// sounds
import SoundHit from '../sound/hit.mp3'
import SoundHitMushroom from '../sound/hit-mushroom.mp3'
import SoundKey from '../sound/key.mp3'
import SoundGun from '../sound/gun.mp3'
import SoundWin from '../sound/win.mp3'
import SoundLending from '../sound/lending.mp3'
import SoundSteps from '../sound/steps.mp3'
import SoundBite from '../sound/bite.mp3'
import SoundBreath from '../sound/breath.mp3'
import SoundBullets from '../sound/bullets.mp3'
import SoundGameOver from '../sound/game-over.mp3'
import SoundHeart from '../sound/heart.mp3'
import SoundFire from '../sound/fire.mp3'
import SoundBugDie from '../sound/bug-die.mp3'
import SoundDrop1 from '../sound/drop1.mp3'
import SoundDrop2 from '../sound/drop2.mp3'
import SoundDrop3 from '../sound/drop3.mp3'
import SoundDrop4 from '../sound/drop4.mp3'
import SoundGoUp from '../sound/go-up.mp3'
import SoundGoDown from '../sound/go-down.mp3'
import SoundGoLeft from '../sound/go-left.mp3'
import SoundGoRight from '../sound/go-right.mp3'
import SoundPick from '../sound/pick.mp3'

export const ASSET_NAMES = {
  'L1Path': L1Path,
  'StalactiteUp1Path': StalactiteUp1Path,
  'StalactiteUp2Path': StalactiteUp2Path,
  'StalactiteDown1Path': StalactiteDown1Path,
  'HeartAnimPath': HeartAnimPath,
  'GunAnimPath': GunAnimPath,
  'BulletsPath': BulletsPath,
  'DoorOpenPath': DoorOpenPath,
  'KeyPath': KeyPath,
  'Mushroom9Path': Mushroom9Path,
  'MushroomTele9Path': MushroomTele9Path,
  'BulletPath': BulletPath,
  'FlashlightPath': FlashlightPath,
  'IdleLeftPath': IdleLeftPath,
  'IdleHitLeftPath': IdleHitLeftPath,
  'IdleHitRightPath': IdleHitRightPath,
  'IdleGunLeftPath': IdleGunLeftPath,
  'IdleRightPath': IdleRightPath,
  'IdleGunRightPath': IdleGunRightPath,
  'WalkLeftPath': WalkLeftPath,
  'WalkGunLeftPath': WalkGunLeftPath,
  'WalkRightPath': WalkRightPath,
  'WalkGunRightPath': WalkGunRightPath,
  'JumpLeftPath': JumpLeftPath,
  'JumpGunLeftPath': JumpGunLeftPath,
  'JumpRightPath': JumpRightPath,
  'JumpGunRightPath': JumpGunRightPath,
  'BugLeftPath': BugLeftPath,
  'BugRightPath': BugRightPath,
  'BugUpPath': BugUpPath,
  'BugDownPath': BugDownPath,
  'BugBlkLeftPath': BugBlkLeftPath,
  'BugBlkRightPath': BugBlkRightPath,
  'BugBlueLeftPath': BugBlueLeftPath,
  'BugBlueRightPath': BugBlueRightPath,
  'BugBigLeftPath': BugBigLeftPath,
  'BugBigRightPath': BugBigRightPath,
  'DropPath': DropPath,
  'DropDownPath': DropDownPath,
  'PortalPath': PortalPath,
  'Cave0': Cave0,
  'SoundHit': SoundHit,
  'SoundKey': SoundKey,
  'SoundGun': SoundGun,
  'SoundWin': SoundWin,
  'SoundLending': SoundLending,
  'SoundSteps': SoundSteps,
  'SoundBite': SoundBite,
  'SoundHitMushroom': SoundHitMushroom,
  'SoundBreath': SoundBreath,
  'SoundBullets': SoundBullets,
  'SoundGameOver': SoundGameOver,
  'SoundHeart': SoundHeart,
  'SoundFire': SoundFire,
  'SoundBugDie': SoundBugDie,
  'SoundDrop1': SoundDrop1,
  'SoundDrop2': SoundDrop2,
  'SoundDrop3': SoundDrop3,
  'SoundDrop4': SoundDrop4,
  'SoundGoUp': SoundGoUp,
  'SoundGoDown': SoundGoDown,
  'SoundGoLeft': SoundGoLeft,
  'SoundGoRight': SoundGoRight,
  'SoundPick': SoundPick
}

export const ASSETS = {}

export function preload(cb) {
  const onLoad = () => Shared.assets--
  for (let i in ASSET_NAMES) {
    const asset = ASSET_NAMES[i]

    if (asset.endsWith('.mp3')) {
      ASSETS[asset] = new Audio()
      ASSETS[asset].oncanplaythrough = onLoad
    } else if (asset.endsWith('.png')) {
      ASSETS[asset] = new Image()
      ASSETS[asset].onload = onLoad
    }
    Shared.assets++
    ASSETS[asset].src = asset
  }
  wait(cb)
}

function wait(cb) {
  if (Shared.assets > 0) {
    setTimeout(wait.bind(null, cb), 30)
    return
  }
  cb()
}