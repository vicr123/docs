---
id: playing
title: Playing Music
---

import Image from '@theme/IdealImage';
import { KeycapContainer, Keycap } from '../../src/components/keycap';

## Selecting Music

Once you've decided what you want to listen to, there are a few ways to play your tracks.

### Playing Music from your library

Clicking on a track will add it to the end of the play queue and start playing it.

### Playing Music from disk

You can open a file on your disk by opening the menu and selecting the Open option. The file you select to play will be added to the end of the play queue.

:::tip PROTIP!
You can also just drag a file into the play queue to enqueue the file.
:::

### Opening a Network Stream

To add a network stream to the play queue, open the menu and select Open URL. A dialog box will appear where you can enter the URL of the network stream you wish to play.

### Playing Music from a CD

:::note Note
Playing music from a CD is only supported on Linux platforms at this time.
:::

CDs will be automatically detected and placed under the "Other Sources" tab. Clicking on a track from a CD there will add it to the end of the play queue.

## The Control Strip

The Control Strip is located on the bottom of the window. It shows information about, and allows you to control the currently playing track.

<Image className="inlineImage" img={require('./controlstrip.png')} />

1. Expand Button
2. Current Track Information
3. Volume
4. Shuffle
5. Repeat
6. Skip Back
7. Play/Pause
8. Skip Forward
9. Tracker

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