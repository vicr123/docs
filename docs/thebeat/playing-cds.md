---
id: playing-cds
title: Playing CDs
---

import Command from "@site/src/components/command.jsx";

If your computer has a CD drive installed, theBeat can play your CDs.

## Viewing CD Information

Any CDs detected by theBeat appear under the <Command icon="view-list-details">Other Sources</Command> view. Select a CD to get started.

:::info
On macOS, theBeat requires permission to access external storage devices.
:::

When you insert a CD, theBeat queries the [MusicBrainz Database](https://musicbrainz.org/) to obtain information about the currently inserted CD.

## Playing a CD

Select a track from the CD to add it to the queue and play it. Alternatively, select <Command icon="view-media-playlist">Enqueue All</Command> to add all the tracks to the queue.

## The Header

The Header shows the tracks on the CD, followed by some actions.

- <Command icon="view-media-playlist">Enqueue All</Command><br />
  Adds the entire playlist to the play queue
- <Command icon="media-cd-import">Import</Command><br />
  Begins the process of importing the tracks on the CD into your music library.
- <Command icon="media-eject">Eject</Command><br />
  Ejects the CD.
  