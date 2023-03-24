---
id: copy
title: Copying a Medium
---

import Command from "@site/src/components/command.jsx";
import Image from '@theme/IdealImage';

theFrisbee allows you to copy an entire medium from one location to another.

:::danger
After you copy a medium, the data on the target medium is erased. It may not be possible to recover your data.
:::

To get started, select the target disk and then select <Command>Restore</Command>.

The **Restore to Block** dialog will appear.

<Image className="inlineImage" img={require('./restore-image.png')} />

Switch to the <Command>Copy Media</Command> tab.

<Image className="inlineImage" img={require('./restore-media.png')} />

Select the medium from which you want to copy from. The medium must be smaller than the target on which you are copying to.

Once you have selected a medium to copy from, click <Command icon="media-image-restore">Restore this image</Command>. You will be asked to confirm that you want to copy the medium.

<Image className="inlineImage" img={require('./restore-confirm.png')} />

If you are sure that you want to copy the medium, click <Command icon="media-image-restore">Restore this image</Command>. theFrisbee will start copying the medium, and the progress can be tracked in the **Jobs** view.