---
id: playing
title: Playing Music
---

import Icon from "@site/src/components/icon.jsx";
import Image from '@theme/IdealImage';
import { KeycapContainer, Keycap } from '../../src/components/keycap';

## The Play Queue

The Play Queue is located to the right of the window. It represents all the tracks that will be played by theBeat.

<Image className="inlineImage" img={require('./playqueue.png')} alt="Play Queue" />

The item denoted by <Icon name="media-playback-start" /> represents the currently playing track.

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

For more information about playing CDs, visit [Playing CDs](playing-cds).

### Removing Music from the Play Queue

To remove a track from the Play Queue, right click on the track and select the "Remove from Queue" option. To remove everything from the play queue, you can use the "Clear Queue" option.

### Rearranging the Play Queue

To rearrange items in the Play Queue, simply drag the items around.

## The Control Strip

The Control Strip is located on the bottom of the window. It shows information about, and allows you to control the currently playing track.

<Image className="inlineImage" img={require('./controlstrip.png')} alt="Control Strip" />

1. <Icon name="arrow-up" /> Zen Mode
2. Current Track Information
3. <Icon name="audio-volume-high" /> Volume
4. <Icon name="media-playlist-shuffle" /> Shuffle
5. <Icon name="media-repeat-single" /> Repeat
6. <Icon name="media-skip-backward" /> Skip Back
7. <Icon name="media-playback-start" /><Icon name="media-playback-pause" /> Play/Pause
8. <Icon name="media-skip-forward" /> Skip Forward
9. Tracker

### Shuffle

The Shuffle function allows you to listen to the Play Queue in a random order. To enable Shuffle, click on the <Icon name="media-playlist-shuffle" alt="Shuffle Button" /> Shuffle button in the Control Strip. To turn it off, click <Icon name="media-playlist-shuffle" alt="Shuffle Button" /> Shuffle again.

### Repeat

The Repeat function allows you to listen to one track repeatedly. The track will repeat until you turn off the Repeat function. To enable Repeat, click on the <Icon name="media-repeat-single" alt="Repeat Button" /> Repeat button in the Control Strip. To turn it off, click <Icon name="media-repeat-single" alt="Repeat Button" /> Repeat again.

More Repeat options are available if you right-click the <Icon name="media-repeat-single" alt="Repeat Button" /> Repeat button.
- **Repeat Play Queue**<br />
  If this option is checked, theBeat will start at the beginning of the Play Queue once all of the tracks have been played. Otherwise, theBeat will automatically stop playing once it reaches the end of the Play Queue.

If both Shuffle and Repeat are turned on at the same time, Repeat will take precedence.

## Keyboard Shortcuts

theBeat also includes some global keyboard shortcuts:
- **Play/Pause**
  <KeycapContainer>
    <Keycap>SPACE</Keycap> or <Keycap>K</Keycap>
  </KeycapContainer>
- **Skip Back**
  <KeycapContainer>
    <Keycap>SHIFT</Keycap><Keycap>←</Keycap>
  </KeycapContainer>
- **Skip Next**
  <KeycapContainer>
    <Keycap>SHIFT</Keycap><Keycap>→</Keycap>
  </KeycapContainer>
- **Rewind 10 Seconds**
  <KeycapContainer>
    <Keycap>J</Keycap> or <Keycap>←</Keycap>
  </KeycapContainer>
- **Fast Forward 10 Seconds**
  <KeycapContainer>
    <Keycap>L</Keycap> or <Keycap>→</Keycap>
  </KeycapContainer>
- **Volume Up**
  <KeycapContainer>
    <Keycap>↑</Keycap>
  </KeycapContainer>
- **Volume Down**
  <KeycapContainer>
    <Keycap>↓</Keycap>
  </KeycapContainer>