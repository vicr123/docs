---
id: imagedisk
title: Taking a Disk Image
---

import Command from "../../src/components/command.jsx";
import Image from '@theme/IdealImage';

A **Disk Image** is a 1:1 representation of the data on a storage medium. Disk Images can be attached to the device, and then it will act as a storage medium in itself.

To take a disk image, select the medium that you want to create the disk image from on the left, and then select <Command>Image</Command>.

The **Image Disk** dialog will appear.

<Image className="inlineImage" img={require('./imagedisk.png')} />

Select where you want to save the disk image. You will require at least the same amount of free space on disk as the medium that you are taking an image of.

When you're ready, click <Command icon="media-image-create">Image this disk</Command> to create the disk image. theFrisbee will start creating the disk image, and the progress can be tracked in the **Jobs** view.