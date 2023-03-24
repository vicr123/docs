---
id: undo
title: Undoing Changes
---

import Command from "@site/src/components/command.jsx";
import Image from '@theme/IdealImage';

If you have discovered that you have made a mistake, theBranch makes it easy to undo changes and revert to a known good state.

## If you have not yet made a commit

If you have yet to make a commit, you can undo changes to individual files, or the entire repository, and bring the files (or repository) back to the state it was in after the last commit.

### Discarding changes in an individual file

Press the <Command icon="commit">Commit</Command> button on the toolbar, or select <Command icon="commit" shortcut={["CTRL", "RETURN"]}>Commit</Command> from the menu. On a Mac, go to **Tree > Commit**.

The **Commit** dialog will appear.

<Image className="inlineImage" img={require('./commit.png')} />

Locate the file that you want to roll back. Follow the steps below depending on what letter appears next to it:

- **N**<br />
Right click on the file and select <Command icon="edit-delete">Delete from Repository</Command>. theBranch will delete the file on disk.
:::danger
Once the file has been deleted, it is not recoverable, as it has not been committed.
:::

- **Anything Else**<br />
Right click on the file and select <Command icon="edit-undo">Discard Changes</Command>. theBranch will replace the file with the version of the file as at the last commit.
:::danger
Once the changes have been discarded, they are not recoverable, as they have not been committed.
:::

### Discarding changes in the repository

Select <Command icon="edit-delete">Discard All Changes</Command> from the menu. On a Mac, go to **Tree > Discard All Changes**.

You will be asked to confirm that you want to discard all the changes in the repository.

<Image className="inlineImage" img={require('./discard-repository.png')} />

If you are sure that you want to discard all the changes since the last commit, click <Command>Discard Changes</Command>. theBranch will replace all files under source control with the version as at the last commit.

If you also check <Command>Also delete untracked files</Command>, theBranch will also delete any files that have not yet been committed.

:::danger
Once the changes have been discarded, they are not recoverable, as they have not been committed.
:::

## If you have made a commit, but have not pushed it

To return the repository to an earlier state, use the <Command icon="edit-undo">Reset</Command> function.

:::caution
Do not reset to before a commit that you have pushed. The repository will become out of sync with the remote, and you will need to pull, re-introducing the commits that you reset away.
:::

To reset the repository to an earlier state, in the tree, select the branch that contains the commit, locate the commit and right click on it. Select <Command icon="edit-undo">Reset</Command>.

Choose from the following reset methods:

- **Hard Reset**<br />
This will reset the repository and also the files on disk to reflect the commit that you select. Any commits *after* the commit you select will be discarded.
:::danger
A hard reset has the potential to delete any pending changes. Once these changes are deleted, they will not be recoverable, as they have not been committed.
:::
- **Mixed Reset**<br />
This will reset the repository, but will leave the files on disk intact. The index will be merged with the contents of the commit. Any commits *after* the commit you select will be discarded.
- **Soft Reset**<br />
This will reset the repository, but will leave the files on disk intact. Any commits *after* the commit you select will be discarded.

## If you have already pushed a commit

Use the <Command icon="vcs-revert">Revert</Command> function. Reverting a commit creates a new commit that undoes all the changes introduced in a single commit.

:::note
If you want to undo multiple commits, you will need to revert each commit one by one, in reverse chronological order.
:::

To undo the changes introduced in a commit, in the tree, select the branch that contains the commit, locate the commit and right click on it. Select <Command icon="vcs-revert">Revert</Command>.

<Image className="inlineImage" img={require('./revert.png')} />

To revert the commit, click <Command icon="vcs-revert">Revert</Command>. theBranch will revert the files and create a revert commit.

:::note
If you are reverting a merge commit, you will be asked to select a *mainline commit*. The changes from this commit, along with any merge resolution will be undone.
:::

### Resolving conflicts

If changes from the commit conflict with the current files, Git will not be able to merge the changes automatically. For example, if the same line is changed in your local repository (in a later commit) and also in the commit to be reverted, a conflict occurs. If this happens when you are reverting, you will be asked to merge changes.

Once you have selected an appropriate resolution for all the conflicting changes, click <Command icon="vcs-revert">Revert</Command>. theBranch will conclude the revert operation, resolving the conflicting changes in the manner that you instructed.