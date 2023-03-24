---
id: pull
title: Pulling commits
---

import Command from "@site/src/components/command.jsx";
import Image from '@theme/IdealImage';

## Starting a pull operation

To pull your changes, ensure that you are on the branch that you want to pull, and then select <Command icon="vcs-pull" shortcut={["CTRL", "DOWN"]}>Pull</Command> from the menu. On a Mac, go to **Remotes > Pull**. You also have the option to pull if you have just attempted to push the repository and have discovered that it is out of date.

The **Pull** dialog will appear.

<Image className="inlineImage" img={require('./pull.png')} />

The dialog will ask you for some information about where you want to pull from.

- **Upstream Branch**<br />
The branch that you want to pull from. By default, this is the upstream branch.
- **Rebase local commits onto upstream**<br />
If checked, theBranch will merge divergent changes with a rebase instead of a merge.

## Pulling from a remote

Once you're ready to pull, click <Command icon="vcs-pull">Pull</Command>. theBranch will pull changes from the remote branch into the current branch.

If authentication is required by the remote, you will be asked for the appropriate credentials to complete the pull operation.

## Resolving conflicts

If changes from the remote branch conflict with committed changes in the local branch, Git will not be able to merge the changes automatically. For example, if the same line is changed in your local repository and also in the remote repository, a conflict occurs. If this happens when you are pulling, you will be asked to merge changes.

Once you have selected an appropriate resolution for all the conflicting changes, click <Command icon="vcs-pull">Pull</Command>. theBeat will conclude the pull operation, resolving the conflicting changes in the manner that you instructed.