---
id: restoreimage
title: Restoring a Disk Image
---

import Command from "@site/src/components/command.jsx";
import Image from '@theme/IdealImage';

Once you have a Disk Image, it can be restored to a physical disk (or partition).

Restoring a Disk Image to a disk overwrites the contents of the disk with the data inside the Disk Image.

:::danger
After you restore a Disk Image to a medium, the data on the target medium is erased. It may not be possible to recover your data.
:::

To get started, select the target disk (or partition) and then select <Command>Restore</Command>.

The **Restore to Block** dialog will appear.

<Image className="inlineImage" img={require('./restore-image.png')} />

Locate the Disk Image that you wish to restore the disk from, and then click <Command icon="media-image-restore">Restore this image</Command>. You will be asked to confirm that you want to restore the Disk Image.

<Image className="inlineImage" img={require('./restore-confirm.png')} />

If you are sure that you want to copy the medium, click <Command icon="media-image-restore">Restore this image</Command>. theFrisbee will start copying the medium, and the progress can be tracked in the **Jobs** view.
