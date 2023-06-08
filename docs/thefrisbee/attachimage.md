---
id: attachimage
title: Attaching and Detaching Disk Images
---

import Command from "@site/src/components/command.jsx";
import Image from '@theme/IdealImage';

After you take a [Disk Image](imagedisk.md), attaching it allows you to access the Disk Image as if you had just connected it as an external drive to your device. Any contents written to the disk image while it is attached will be retained in the original Disk Image file.

## Attaching a Disk Image

To attach a disk image, select <Command icon="media-mount">Attach Image</Command> from the menu. You will be asked to select an image to attach.

Once a disk image is selected to attach, it will be available in the list of connected disks.

:::info
If the contents of the disk do not contain a suitable name, it is likely that the disk will appear as `/dev/loopX`, where X is a unique number.
:::

## Detaching an attached Disk Image

To detach an attached Disk Image, select it from the list of connected disks.

<Image className="inlineImage" img={require('./detachimage.png')} />

Select <Command icon="media-eject">Detach</Command>. The Disk Image will be detached.