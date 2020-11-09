---
id: playlists
title: Playlists
---

import PlaylistIcon from '../../icons/view-media-playlist.svg'
import AddIcon from '../../icons/list-add.svg'
import ApplicationMenu from '../../icons/application-menu.svg'

Playlists represent a collection of tracks that you can customise.

## Adding a Playlist

To add a playlist, navigate to the <PlaylistIcon /> Playlists view and select <AddIcon /> Create Playlist.

## Adding tracks to a Playlist

To add a track to a playlist, start by locating it in your library. Once you have found the track, right click it, select <AddIcon /> Add to Playlist, and then select the playlist you would like to add the track to.

## The Header

The Header shows the current playlist, followed by some actions. The actions you see will depend on what you're looking at and which actions are available. Some menu items may be hidden behind a <ApplicationMenu /> disclosure button.

- **Enqueue All**<br />
  Adds the entire playlist to the play queue
- **Play All**<br />
  Replaces the play queue with the playlist, and starts playing the first track
- **Shuffle All**<br />
  Replaces the play queue with the playlist, turns on the Shuffle button and starts playing a random track.
- **Rename**<br />
  Changes the name of the current playlist
- **Export** <br />
  Exports the playlist so that you can import it into another media player.
- **Remove** <br />
  Removes the playlist from your library.
- **Burn**<br />
  Begins the process of burning the playlist to a writable CD.
  
## Exporting Playlists
If you'd like to use a different audio player to play your music, you may be able to bring your playlists over by exporting them.

Playlists are exported in the **M3U8** format. Examples of audio players that can read this format are:
- [Amarok](https://amarok.kde.org/)
- [Clementine](https://www.clementine-player.org/)
- [FRESHMusicPlayer](https://github.com/Royce551/FRESHMusicPlayer)
- QuickTime Player
- Windows Media Player

To export your playlist, select the Export option on the header, and select a file to save the playlist as.
