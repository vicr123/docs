---
id: playing
title: Playing Music
---

import Image from '@theme/IdealImage';
import { KeycapContainer, Keycap } from '../../src/components/keycap';

import PlayIcon from '../../icons/media-playback-start.svg'
import ZenIcon from '../../icons/arrow-up.svg'
import VolumeIcon from '../../icons/audio-volume-high.svg'
import ShuffleIcon from '../../icons/media-playlist-shuffle.svg'
import RepeatIcon from '../../icons/media-repeat-single.svg'
import SkipBackIcon from '../../icons/media-skip-backward.svg'
import PauseIcon from '../../icons/media-playback-pause.svg'
import SkipForwardIcon from '../../icons/media-skip-forward.svg'

## The Play Queue

The Play Queue is located to the right of the window. It represents all the tracks that will be played by theBeat.

<Image className="inlineImage" img={require('./playqueue.png')} alt="Play Queue" />

The item denoted by <PlayIcon /> represents the currently playing track.

### Playing Music from your library

Clicking on a track will add it to the end of the Play Queue and start playing it.

### Playing Music from disk

You can open a file on your disk by opening the menu and selecting the Open option. The file you select to play will be added to the end of the Play Queue.

:::tip PROTIP!
You can also just drag a file into the Play Queue to enqueue the file.
:::

### Opening a Network Stream

To add a network stream to the Play Queue, open the menu and select Open URL. A dialog box will appear where you can enter the URL of the network stream you wish to play.

### Playing Music from a CD

:::note Note
Playing music from a CD is only supported on Linux platforms at this time.
:::

CDs will be automatically detected and placed under the "Other Sources" tab. Clicking on a track from a CD there will add it to the end of the Play Queue.

### Removing Music from the Play Queue

To remove a track from the Play Queue, right click on the track and select the "Remove from Queue" option. To remove everything from the play queue, you can use the "Clear Queue" option.

### Rearranging the Play Queue

To rearrange items in the Play Queue, simply drag the items around.

## The Control Strip

The Control Strip is located on the bottom of the window. It shows information about, and allows you to control the currently playing track.

<Image className="inlineImage" img={require('./controlstrip.png')} alt="Control Strip" />

1. <ZenIcon /> Zen Mode
2. Current Track Information
3. <VolumeIcon /> Volume
4. <ShuffleIcon /> Shuffle
5. <RepeatIcon /> Repeat
6. <SkipBackIcon /> Skip Back
7. <PlayIcon /><PauseIcon /> Play/Pause
8. <SkipForwardIcon /> Skip Forward
9. Tracker

### Shuffle

The Shuffle function allows you to listen to the Play Queue in a random order. To enable Shuffle, click on the <ShuffleIcon alt="Shuffle Button" /> Shuffle button in the Control Strip. To turn it off, click <ShuffleIcon alt="Shuffle Button" /> Shuffle again.

### Repeat

The Repeat function allows you to listen to one track repeatedly. The track will repeat until you turn off the Repeat function. To enable Repeat, click on the <RepeatIcon alt="Repeat Button" /> Repeat button in the Control Strip. To turn it off, click <RepeatIcon alt="Repeat Button" /> Repeat again.

If both Shuffle and Repeat are turned on at the same time, Repeat will take precedence.

## Keyboard Shortcuts

theBeat also includes some global keyboard shortcuts:
- <KeycapContainer>
    <Keycap>SPACE</Keycap> Play/Pause
</KeycapContainer>
- <KeycapContainer>
    <Keycap>J</Keycap> Rewind 10 Seconds
</KeycapContainer>
- <KeycapContainer>
    <Keycap>K</Keycap> Play/Pause
</KeycapContainer>
- <KeycapContainer>
    <Keycap>L</Keycap> Fast Forward 10 Seconds
</KeycapContainer>
- <KeycapContainer>
    <Keycap>↑</Keycap> Volume Up
</KeycapContainer>
- <KeycapContainer>
    <Keycap>↓</Keycap> Volume Down
</KeycapContainer>