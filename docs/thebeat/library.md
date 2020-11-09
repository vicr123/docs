---
id: library
title: The Library
---

import Image from '@theme/IdealImage';

The library represents your music collection.

<Image className="inlineImage" img={require('./library.png')} />

Upon startup, theBeat will scan your Music folder to find any music you may already have. Every time you open theBeat, this scan will be repeated to ensure that the library is up to date.

## Adding Items

If the tracks you want to listen to are not in your Music folder, manually add them to the library. You can do this in one of many ways:

### Drag and Drop

Drag the track from your files into the library.

### Using the menu

Select the menu > Add to Library, and then select a folder. theBeat will scan the entire folder for music tracks and add them to the library for you.

## Browsing the Library

theBeat organises your library into three sections: Tracks, Artists and Albums. To switch between each view, use the tabs on the top of the theBeat window to select the view you'd like to use.
<Image className="inlineImage" img={require('./views.png')} />

### Browsing by Track

In the Tracks view, theBeat shows an alphabetically sorted list of your entire library.

### Browsing by Artist

In the Artists view, theBeat shows a list of artists in your library. Selecting an artist will take you to a list of their tracks, sorted alphabetically.

### Browsing by Album

In the Albums view, theBeat shows a list of albums in your library. Selecting an album will take you to a list of the included tracks, sorted by track number.

### Browsing Playlists

In the Playlists view, theBeat shows a list of playlists that you have created. Selecting a playlist will take you to the list of tracks within that playlist. For more information on playlists, visit [Playlists](playlists).

## The Header

The Header shows the current artist or album being displayed, followed by some actions. The actions you see will depend on what you're looking at and which actions are available.

- **Enqueue All**<br />
  Adds the entire list of tracks to the play queue
- **Play All**<br />
  Replaces the play queue with the list of tracks, and starts playing the first track
- **Shuffle All**<br />
  Replaces the play queue with the list of tracks, turns on the Shuffle button and starts playing a random track.
- **Burn**<br />
  Begins the process of burning the list of tracks to a writable CD.