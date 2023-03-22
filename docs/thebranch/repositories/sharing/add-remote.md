---
id: add-remote
title: Adding a remote
---

import Command from "../../../../src/components/command.jsx";
import Image from '@theme/IdealImage';

Adding a remote allows theBranch to share code with a remote server.

:::info
If you cloned a repository, a default remote is already added for you, called **origin**. It points to the clone URL that you specified when you cloned the repository.
:::

To add a remote, in the tree, right click on <Command icon="cloud-download">Remotes</Command> and select <Command icon="list-add">Add Remote</Command>

<Image className="inlineImage" img={require('./add-remote.png')} />

The **New Remote** dialog will appear.

<Image className="inlineImage" img={require('./new-remote.png')} />

The dialog will ask you for some information about the remote that you want to add.

- **Name**<br />
The name of the remote. This will be shown in the tree in theBranch.
:::note
By convention, the default remote is called **origin**.
:::
- **URL**<br />
The URL of the remote. Usually you can obtain this from the repository home page.

Once you've filled in the correct details, click <Command icon="list-add">Add Remote</Command> to add the remote to the repository.
