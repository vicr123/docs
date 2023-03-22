---
id: commit
title: Creating a commit
---

import Command from "../../../../src/components/command.jsx";
import Image from '@theme/IdealImage';

## Starting a commit

To create a commit, ensure that you are on the branch that you want to commit to, and then press the <Command icon="commit">Commit</Command> button on the toolbar, or select <Command icon="commit" shortcut={["CTRL", "RETURN"]}>Commit</Command> from the menu. On a Mac, go to **Tree > Commit**.

The **Commit** dialog will appear.

<Image className="inlineImage" img={require('./commit.png')} />

## Reviewing changes

The **Commit** dialog gives you an opportunity to review your changes before you commit them to the repository. Selecting a file will show two versions of a file: on the left, the version of the file as at the last commit is displayed, and on the right, the version of the file currently on disk is displayed.

Once you are ready to introduce the changes to the next commit, check the box next to the filename.

:::tip
If you want to introduce all the changes made since the last commit, check the **Select # modified files** box.
:::

## Tracking new files

Files which have never been committed are called *untracked files* and are hidden from view by default. In order to show them, check the **View Untracked Files** checkbox. theBranch will show all the files that have not been added to the repository, and you can introduce them into the next commit by checking them. Introducing an untracked file into a commit makes it part of the repository, and changes will be shown in theBranch by default.

## Finalising the commit

Once you've selected the files you want to commit, you can enter a message into the **Commit Message** box. A commit message is a memo that will be saved along with the commit, and can help identify what changes were introduced in each commit.

If you also want to [push](../sharing/push.md) the branch to a remote afterwards, you can check the **Push to remote** box.

When you've finished entering the commit message, press the <Command icon="commit">Commit # Files</Command> button. theBranch will create a commit with the changes that you specified and record it in the repository.