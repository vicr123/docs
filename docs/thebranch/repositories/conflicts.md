---
id: conflicts
title: Resolving Merge Conflicts
---

import Command from "@site/src/components/command.jsx";
import Image from '@theme/IdealImage';

When you perform operations in theBranch, situations will arise you will need to merge two incompatible files. Such a situation is called a *merge conflict*.

If, after performing an operation, a merge conflict occurs, the **Conflict Resolution** dialog will appear.

<Image className="inlineImage" img={require('./conflict.png')} />

## Resolving Conflicts

To resolve conflicts, inspect each file one by one by clicking on it.

As you select each file, the changes appear on the right, with conflicts highlighted in red. To select a resolution, click in the gutter, near the <Command icon="vcs-resolve-none">Conflict</Command> marker. Select from the following options:

- <Command icon="vcs-resolve-left">Take Left</Command><br />
Retain the changes on the left side, discarding the changes on the right side.

- <Command icon="vcs-resolve-right">Take Right</Command><br />
Retain the changes on the right side, discarding the changes on the left side.

- <Command icon="vcs-resolve-left-right">Take Left and then Right</Command><br />
Retain the changes on both sides, placing the changes on the right side below the changes on the left side.

- <Command icon="vcs-resolve-right-left">Take Right and then Left</Command><br />
Retain the changes on both sides, placing the changes on the left side below the changes on the right side.

As you complete conflict resolution, the left side changes to reflect the results of your decisions. Once all conflicts in a file have been resolved, a check mark appears next to the file in the list.

Once all conflicts are resolved in all files, the completion button below the file list is enabled. To finalise conflict resolution, click this button. theBranch will resolve the conflicts in the manner that you instruct, and continue the operation that you started.

## Aborting Conflict Resolution

If you decide that you don't want to resolve the conflicts, you can abort conflict resolution. Aborting conflict resolution will return the repository back to the state that it was in before you started the conflict causing operation.

To abort conflict resolution, click the <Command icon="go-previous">Back</Command> button in the top left corner. You will be asked to confirm that you want to abort the conflict resolution.

<Image className="inlineImage" img={require('./conflict-abort.png')} />

If you are sure that you want to abort conflict resolution, click <Command icon="dialog-cancel">Abort Operation</Command> button. theBranch will return the repository to the state it was in before you started the conflict causing operation.