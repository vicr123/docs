---
id: clone
title: Cloning a remote repository
---

import Icon from "@site/src/components/icon.jsx";
import Command from "@site/src/components/command.jsx";
import Image from '@theme/IdealImage';
import {KeyboardShortcut} from "@site/src/components/keycap";

To open a repository that is hosted online, you will need to *clone* the repository. Cloning the repository makes a copy of the repository on your local computer, so that you can edit the files and perform version control operations.

To clone a repository, select the <Command icon="edit-copy">Clone Repository</Command> option from the welcome screen, or select <Command icon="edit-copy" shortcut={["F7"]}>Clone Repository</Command> from the menu. On a Mac, go to **File > Clone Repository**

The **Clone Repository** dialog will appear.

<Image className="inlineImage" img={require('./clone.png')} />

The dialog will ask you for some information before you can clone a repository.

- **Clone URL**<br />
The URL of the repository. Usually you can obtain this from the repository home page.
- **Clone to**<br />
The folder on your local computer to create a clone of the repository at. This must be an empty folder.

Once you've filled in the correct details, click <Command icon="edit-copy">Clone</Command> to start the process of cloning the repository. theBranch will access the remote repository and start copying it onto your computer.

<Image className="inlineImage" img={require('./cloning.png')} />

Once the repository has been cloned and is ready for use, theBranch will show the repository view.

<Image className="inlineImage" img={require('../../home.png')} />
