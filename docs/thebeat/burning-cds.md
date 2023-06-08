---
id: burning-cds
title: Burning CDs
---

import Image from '@theme/IdealImage';
import Command from "@site/src/components/command.jsx";
import Icon from "@site/src/components/icon.jsx";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="windows" values={[
    {label: "Windows", value: "windows"},
    {label: "macOS", value: "macos"},
    {label: "Linux", value: "linux"}
]}>
<TabItem value="windows">

Instructions for burning CDs on Windows is not available at this time.

</TabItem>
<TabItem value="macos">

If you have a CD writer installed, theBeat can burn CDs that work on standard CD players.

theBeat will also automatically write CD-Text onto the CD, so any devices that support CD-Text will be able to display metadata for each track.

To get started, open an artist, album or playlist page, and then click the <Command icon="tools-media-optical-burn">Burn</Command> button.

:::tip
To create a CD with tracks of your own choosing, create a playlist for the CD. Once you add tracks to the playlist, you can burn the playlist to a CD.
:::

The **Burn** dialog will appear.

<Image className="inlineImage" img={require('./burn-mac.png')} />

Set the options you would like to use to burn, and then click <Command>Burn</Command> to start burning the CD. The burn progress can be tracked using the Jobs button in the top right corner of the window. Once the burn process is complete, the CD will be ejected automatically, and a notification will appear to let you know.

</TabItem>
<TabItem value="linux">

If you have a CD writer installed, theBeat can burn CDs that work on standard CD players.

theBeat will also automatically write CD-Text onto the CD, so any devices that support CD-Text will be able to display metadata for each track.

To get started, open an artist, album or playlist page, and then click the <Command icon="tools-media-optical-burn">Burn</Command> button. If you have more than one valid burner, select the burner that you want to use.

:::tip
To create a CD with tracks of your own choosing, create a playlist for the CD. Once you add tracks to the playlist, you can burn the playlist to a CD.
:::

The **Burn** dialog will appear.

<Image className="inlineImage" img={require('./burn.png')} />

- **Album Name**<br />
The name of the album to be written onto the CD as CD-Text.
- **Disc Type**<br />
  The type of disc to burn. Select from the following options:
  - **Audio CD**<br />
    Burn a classical audio CD that can be played in any CD player
  - **MP3 CD**<br />
    Burn a CD with MP3 files on it. An MP3 CD can fit more tracks than an Audio CD, but is not supported by some devices.

Once these settings are set as you'd like, select <Command icon="tools-media-optical-burn">Burn</Command> to start burning the CD. The burn progress can be tracked using the Jobs button in the top right corner of the window. Once the burn process is complete, the CD will be ejected automatically, and a notification will appear to let you know.

</TabItem>
</Tabs>

