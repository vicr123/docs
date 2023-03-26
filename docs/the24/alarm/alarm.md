---
id: alarm
title: Alarms
---

import Command from "@site/src/components/command.jsx";
import Image from '@theme/IdealImage';

## About Alarms

Using <Command icon="clock-alarm">Alarms</Command>, you can be alerted at a specified time each day.

<Image className="inlineImage" img={require('./alarm.png')} />

Each entry represents a different alarm, and the time that the alarm will alert you is displayed, and, if set, the days of the week that the alarm will alert you on.

:::caution
Alarms won't alert you if your device is powered off or suspended.
:::

## Setting a new alarm

To set a new alarm, click <Command icon="list-add">Add Alarm</Command>.

The **New Alarm** dialog will appear.

<Image className="inlineImage" img={require('./alarm-add.png')} />

Enter the time that you would like to be alerted, and, if you like, the days of the week you would like the alarm to alert you on.

:::info
If you don't set any days of the week to repeat on, the alarm will sound once and then disable itself.
:::

Once you've set up the alarm correctly, click <Command>Add Alarm</Command>. the24 will create that alarm and add it to the bottom of the list of alarms.

## When it's time for the alarm

When it's time for the alarm to sound, a notification will appear and an audible tone will be played.

<Image className="inlineImage" img={require('./alarm-alert.png')} />

- Dismissing the alarm will cause the tone to stop playing.
- Selecting <Command>Snooze</Command> will cause the tone to stop playing, and temporarily set the alarm to sound again in 10 minutes.

## Editing an existing alarm

If you need to edit an alarm, right click on the alarm and select <Command icon="edit-rename">Edit</Command>.

<Image className="inlineImage" img={require('./alarm-edit.png')} />

Modify the alarm as you would like it, and then dismiss the dialog to save it. Edits to the alarm will take place immediately.

## Enabling/disabling an alarm

If you need to temporarily turn off an alarm, turn off the switch on the alarm. The time on the alarm will appear grayed out to confirm that the alarm is disabled.

When the alarm is disabled, it will not sound at the time that you set, even if it normally would.

When you're ready to turn the alarm on again, turn on the switch. The time on the alarm will become solid again, indicating that the alarm is now active.

## Removing an alarm

If you don't need an alarm any more, you can remove it. Removing an alarm will delete all the information about that alarm, and it will no longer sound at the time that you set.

To remove an alarm, right click on the alarm and select <Command icon="dialog-cancel">Remove</Command>. the24 will remove the alarm from the list of alarms.