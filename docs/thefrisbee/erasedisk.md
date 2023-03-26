---
id: erasedisk
title: Erasing a Disk
---

import Icon from "@site/src/components/icon.jsx";
import Command from "@site/src/components/command.jsx";
import Image from '@theme/IdealImage';

## About erasing a disk

When you erase a disk, you clear out all the partitions on it. Any data that is on the disk will be erased.

:::info
theFrisbee will not allow you to erase the disk used to start up your device. If you want to erase the startup disk, you will need to start your device using recovery media.

If you are using Cactus and want to erase your device and reinstall Cactus, you can use the reset utility. Open the **Status Center**, select <Icon name="preferences-system" themed={false} /> **System Settings > ** <Icon name="preferences-system-danger" themed={false} /> **Advanced**, and then select <Command icon="view-refresh">Reset this device</Command>.
:::

:::danger
After you erase a disk, it may not be possible to recover your data.
:::

## Erasing a disk

When you're ready to erase a disk, select it from the list on the left, and then click <Command icon="media-harddisk-erase">Erase</Command> in the bottom right corner.

The **Erase Disk** dialog will appear.

:::note
If the **Erase Partition** dialog appears instead, you have selected a partition to erase, not a disk.
:::

<Image className="inlineImage" img={require('./erasedisk.png')} />

Before theFrisbee erases a disk, it needs to know what type of partition table you want to create to replace the existing partition table. You can choose between:

- **GPT** (GUID Partition Table)<br />
theFrisbee will create a GUID Partition Table type partition table on the disk. This is the recommended option, as it is supported by recent versions of Microsoft Windows, macOS and Linux.
- **DOS/MBR** (Master Boot Record)<br />
theFrisbee will create a Master Boot Record type partition table on the disk.
- **Erase Only**<br />
theFrisbee will leave the disk devoid of any partition table. Before the disk can be used again, a new partition table will need to be created by erasing the disk again.

Once you have selected a choice, click <Command icon="media-harddisk-erase">Erase this disk</Command>. You will be asked to confirm that you wish to erase the disk.

<Image className="inlineImage" img={require('./erasedisk-confirm.png')} />

If you are sure that you want to erase the disk, click <Command icon="media-harddisk-erase">Erase this disk</Command>. theFrisbee will erase the disk and create the partition table as requested.
