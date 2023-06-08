---
id: opticalerase
title: Erasing a rewritable disc
---

import Icon from "@site/src/components/icon.jsx";
import Command from "@site/src/components/command.jsx";
import Image from '@theme/IdealImage';

## About erasing rewritable discs

When you erase a rewritable disc, you clear out all the data on it. Once the disc is erased, new data can be written to it.

:::info
Only rewritable discs can be erased. If you need to destroy the data on a non-rewritable disc, you should physically break it in half.
:::

:::danger
After you erase a disc, it may not be possible to recover your data.
:::

## Erasing a disc

When you're ready to erase a disc, select it from the list on the left, and then click <Command icon="media-optical-erase">Erase</Command> in the bottom right corner.

The **Erase Disc** dialog will appear.

<Image className="inlineImage" img={require('./opticalerase.png')} />

Select the method that you want theFrisbee to use when erasing the disc.

- **Quick**<br />
theFrisbee will only erase the parts of the disc that need to be erased to make it appear blank.
- **Full**<br />
theFrisbee will erase the entire surface of the disc.

Once you have selected a choice, click <Command icon="media-optical-erase">Erase this disc</Command>. You will be asked to confirm that you wish to erase the disc.

<Image className="inlineImage" img={require('./opticalerase-confirm.png')} />

If you are sure that you want to erase the disc, click <Command icon="media-optical-erase">Erase this disc</Command>. theFrisbee will begin the process of erasing the disc, and the progress can be tracked in the **Jobs** view.