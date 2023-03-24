---
id: push
title: Pushing commits
---

import Command from "@site/src/components/command.jsx";
import Image from '@theme/IdealImage';

## Starting a push operation

To push your changes, ensure that you are on the branch that you want to push, and then select <Command icon="vcs-push" shortcut={["CTRL", "UP"]}>Push</Command> from the menu. On a Mac, go to **Remotes > Push**.

The **Push** dialog will appear.

<Image className="inlineImage" img={require('./push.png')} />

The dialog will ask you for some information about what you want to push.

- **Upstream Branch**<br />
The branch that you want to push to. By default, this is the upstream branch, or if there is no upstream branch, an option to create a new branch will be shown.
- **Set as upstream for this branch**<br />
If checked, once the push is complete, the branch will be set as the upstream branch. This is the branch that theBranch will push to by default next time you push this branch.
- **Push Tags**<br />
If checked, the remote will also be updated with any tags created locally.

## Pushing to a remote

Once you're ready to push, click <Command icon="vcs-push">Push # Commits</Command>. theBranch will push the current branch to the remote.

If you are pushing to a new branch, click <Command icon="vcs-push">Publish Branch</Command>. theBranch will create a new branch on the remote and push to it.

If authentication is required by the remote, you will be asked for the appropriate credentials to complete the push operation.

### If the repository is out of date

If other people have pushed commits to the branch before you last pulled, theBranch will abort the push and ask you what you want to do.

<Image className="inlineImage" img={require('./out-of-date.png')} />

Select from the following options to continue:
- <Command icon="vcs-pull">Pull</Command><br />
Perform a pull operation to update your repository. This is the recommended option.
- <Command icon="vcs-push">Force Push</Command><br />
Overwrite changes on the remote branch by force pushing.

## Force Pushing

A *Force Push* allows you to overwrite changes on the remote, even if your local branch is not up to date.

:::warning
A force push may cause you to lose changes on the remote.
:::

To force push a branch, click <Command icon="vcs-push">Force Push</Command> in the Push dialog. You also have the option to force push if you have just attempted to push the repository and have discovered that it is out of date.

:::info
You can't force push to a branch that is not yet created.
:::

You will be asked to confirm that you want to force push.

<Image className="inlineImage" img={require('./force-push.png')} />

If you are sure that you want to force push, click <Command icon="vcs-push">Force Push # to #</Command>. theBranch will force push the current branch to the branch that you specified.