---
id: world-clock
title: World Clock
---

import Command from "@site/src/components/command.jsx";
import Image from '@theme/IdealImage';

## About the World Clock

The <Command icon="clock-world">World Clock</Command> shows the time around the world.

<Image className="inlineImage" img={require('./world-clock.png')} />

Each entry represents a different timezone, and the current time for that timezone is displayed, as well as the time difference from your local time to that timezone.

:::info
A small +1 or -1 next to the digital clock indicates that the timezone is a day ahead, or a day behind, respectively.
:::

### About the World Clock and theDesk

The first four clocks, excluding the clock representing your local timezone, will be shown in the Overview in theDesk. the24 does not need to be opened to view these clocks.

To see these clocks in theDesk, either click on the clock in the bar, or open the <Command icon="arrow-down" shortcut={["SUPER", "TAB"]}>Status Center</Command>, and select <Command icon="thedesk-overview" themed={false}>Overview</Command>.

<Image className="inlineImage" img={require('./thedesk.png')} />

## Adding a clock to the World Clock

To add a new clock, click <Command icon="list-add">Add Clock</Command>.

The **Add Clock** dialog will appear.

<Image className="inlineImage" img={require('./add-clock.png')} />

Select the timezone that you want to add to the World Clock. You can also search for timezones using the Search box.

Once you have located the timezone that you want to add, click on it. the24 will add that timezone to the bottom of the World Clock.

## Removing a clock from the World Clock

To remove a World Clock, right click on the timezone that you want to remove, and select <Command icon="dialog-cancel">Remove</Command>. the24 will remove that timezone from the World Clock.

:::note
You cannot remove the clock representing your current timezone (at the top)
:::