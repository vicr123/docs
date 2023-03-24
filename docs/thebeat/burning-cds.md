---
id: burning-cds
title: Burning CDs
---

import Image from '@theme/IdealImage';
import Command from "@site/src/components/command.jsx";
import Icon from "@site/src/components/icon.jsx";

If you have a CD writer installed, theBeat can burn CDs that work on standard CD players.

theBeat will also automatically write CD-Text onto the CD, so any devices that support CD-Text will be able to display metadata for each track.

:::note Note
Burning CDs can only be performed on Linux platforms at this time.
:::

To get started, open an artist, album or playlist page, and then click the <Command icon="tools-media-optical-burn">Burn</Command> button.

:::tip
To create a CD with tracks of your own choosing, create a playlist for the CD. Once you add tracks to the playlist, you can burn the playlist to a CD.
:::

## Burn Options

<Image className="inlineImage" img={require('./burn.png')} />

- **Album Name**<br />
  The name of the album to be written onto the CD as CD-Text.

Once these settings are set as you'd like, select <Command icon="tools-media-optical-burn">Burn</Command> to start burning the CD. The burn progress can be tracked using the Jobs button in the top right corner of the window. Once the burn process is complete, the CD will be ejected automatically, and a notification will appear to let you know.