---
id: playlists
title: Playlists
---

import Command from "@site/src/components/command.jsx";
import Icon from "@site/src/components/icon.jsx";

Playlists represent a collection of tracks that you can customise.

## Adding a Playlist

To add a playlist, navigate to the <Command icon="view-media-playlist">Playlists</Command> view and select <Command icon="list-add">Create Playlist</Command>.

## Adding tracks to a Playlist

To add a track to a playlist, start by locating it in your library. Once you have found the track, right click it, select <Command icon="list-add">Add to Playlist</Command>, and then select the playlist you would like to add the track to.

## The Header

The Header shows the current playlist, followed by some actions. The actions you see will depend on what you're looking at and which actions are available. Some menu items may be hidden behind a <Icon name="application-menu" /> disclosure button.

- <Command icon="view-media-playlist">Enqueue All</Command><br />
  Adds the entire playlist to the play queue
- <Command icon="media-playback-start">Play All</Command><br />
  Replaces the play queue with the playlist, and starts playing the first track
- <Command icon="media-playlist-shuffle">Shuffle All</Command><br />
  Replaces the play queue with the playlist, turns on the Shuffle button and starts playing a random track.
- <Command icon="edit-rename">Rename</Command><br />
  Changes the name of the current playlist
- <Command icon="edit-delete">Remove</Command><br />
  Removes the playlist from your library.
- <Command icon="tools-media-optical-burn">Burn</Command><br />
  Begins the process of burning the playlist to a writable CD.
