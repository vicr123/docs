---
id: stopwatch
title: Stopwatch
---

import Command from "@site/src/components/command.jsx";
import Image from '@theme/IdealImage';

## About the Stopwatch

The <Command icon="clock-stopwatch">Stopwatch</Command> allows you to measure time.

<Image className="inlineImage" img={require('./stopwatch.png')} />

You can start as many stopwatches as you need to, and the stopwatch continues to run even when you exit the24, and even your device is powered off.

## Starting a new stopwatch

To start a new stopwatch, click <Command icon="list-add">Start Stopwatch</Command>. A new stopwatch will appear and start counting up.

## Pausing a stopwatch

To pause a stopwatch, click <Command icon="media-playback-pause">Pause</Command> on the stopwatch you want to pause. The stopwatch will stop counting up, and the elapsed time will be grayed out to indicate that the stopwatch is not running.

## Resuming a stopwatch

To resume a stopwatch, click <Command icon="media-playback-start">Resume</Command> on the stopwatch you want to resume. The stopwatch will begin counting up again, and the elapsed time will appear solid again.

## Resetting a stopwatch

To reset a stopwatch, click <Command icon="view-refresh">Reset</Command>. The stopwatch will return to 0 seconds.

:::info
A stopwatch can only be reset when it is paused
:::

## Removing a stopwatch

To remove a stopwatch, click <Command icon="edit-delete">Remove</Command> on the stopwatch you want to remove. The stopwatch will be removed.