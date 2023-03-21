---
id: clone
title: Cloning a repository
---

import Icon from "../../../../src/components/icon.jsx";
import Image from '@theme/IdealImage';

To open a repository that is hosted online, you will need to *clone* the repository. Cloning the repository makes a copy of the repository on your local computer, so that you can edit the files and perform version control operations.

To clone a repository, select the <Icon name="edit-copy" /> **Clone Repository** option from the welcome screen, or select <Icon name="edit-copy" /> **Clone Repository** from the menu.

The **Clone Repository** dialog will appear.

<Image className="inlineImage" img={require('./clone.png')} />

The dialog will ask you for some information before you can clone a repository.

- **Clone URL**<br />
The URL of the repository. Usually you can obtain this from the repository home page.
- **Clone to**<br />
The folder on your local computer to create a clone of the repository at. This must be an empty folder.

Once you've filled in the correct details, click <Icon name="edit-copy" /> **Clone** to start the process of cloning the repository. theBranch will access the remote repository and start copying it onto your computer.