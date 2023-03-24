---
id: checkout-old
title: Going back in time
---

import Command from "@site/src/components/command.jsx";
import Image from '@theme/IdealImage';

Git allows you to view a history of all the changes ever committed.

## Viewing changes in a commit

To view the changes made in a commit, in the tree, select the branch that contains the commit, locate the commit and click on it.

The **Diff** dialog will appear.

<Image className="inlineImage" img={require('./commit-diff.png')} />

The **Diff** dialog allows you to view what files were changed in a commit, and how they were changed. Select a file on the left to view the changes.

The left side shows you the version of the file before the commit, and the right side shows you the version of the file after the commit.

## Viewing files at a commit

To view all the files at a specific commit, in the tree, select the branch that contains the commit, locate the commit and right click on it. Select <Command icon="vcs-checkout">Checkout</Command>.

<Image className="inlineImage" img={require('./checkout-commit.png')} />

theBranch will update the files on disk to reflect the state of the repository when that commit was made.

:::caution
After checking out a commit, you will be in a *detached HEAD* state - that is, you are not on a branch. Actions that require you to be on a branch will be unavailable, and making commits in this state can cause you to lose commits unless you branch off the commit.

To recover from a detached HEAD, checkout a branch.
:::