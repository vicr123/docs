---
id: blankimage
title: Creating a blank Disk Image
---

import Command from "@site/src/components/command.jsx";
import Image from '@theme/IdealImage';

Besides taking a [Disk Image](imagedisk.md) of an existing disk, you can also create blank disk images.

:::note
Blank Disk Images take up the allocated space on disk right from the get-go. They do not gradually expand until the maximum size of the Disk Image.
:::

To create a blank Disk Image, select <Command icon="document-new" shortcut={["CTRL", "N"]}>Create Disk Image</Command> from the menu. The **Create Disk Image** dialog will appear.

<Image className="inlineImage" img={require('./blankimage.png')} />

The dialog will ask you for some information about the blank disk image to be created.

- **Disk Image Size**<br />
The size of the disk image that will be created. When you attach the Disk Image, this is the size of the disk that will be reported.
- **Output File**<br />
The file to save the Disk Image as.
- **Attach this disk image**<br />
If checked, the disk image will be [attached](attachimage.md) after it has been created.

When you're ready, click <Command icon="document-new">Create Disk Image</Command> to create the disk image. theFrisbee will create the disk image, and attach it if you have selected the option to do so.