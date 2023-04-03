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

Enter the clone URL and then click <Command icon="edit-copy">Clone</Command>. theBranch will contact the repository to retrieve information about it.

If authentication is required by the remote, you will be asked for the appropriate credentials to complete the clone operation.

Once theBranch is satisfied that it can clone from the clone URL you specified, it will ask you for more information before the clone operation starts.

<Image className="inlineImage" img={require('./clone2.png')} />

- **Checkout Branch**<br />
The branch to checkout once the clone is complete.
- **Clone to**<br />
The folder on your local computer to create a clone of the repository at. This must be an empty folder.

Once you've filled in the correct details, click <Command icon="edit-copy">Clone</Command> to start the process of cloning the repository. theBranch will access the remote repository and start copying it onto your computer.

<Image className="inlineImage" img={require('./cloning.png')} />

Once the repository has been cloned and is ready for use, theBranch will show the repository view.

<Image className="inlineImage" img={require('../../home.png')} />
