---
id: overview
title: Collaborating and Sharing
---

## Remotes

Git allows you to easily share your changes with other people and collaborate on a project. To facilitate this, Git allows you to communicate with a **remote**, that is, a server that holds a copy of changes in your repository.

There are many third party services that can act as a remote and host your repository, for example:

- [GitHub](https://github.com/)
- [GitLab](https://gitlab.com/)
- [BitBucket](https://bitbucket.org/)

:::caution
These services are provided by a third party.
:::

## Sharing your repository

Each branch on your repository can be shared to a remote by [pushing](push.md) it to the remote. Pushing a branch uploads the latest commits and points the remote branch to the same commit as the local branch.

Once a branch is pushed, the uploaded commits can be downloaded by [pulling](pull.md). Pulling a branch downloads all the commits on the remote branch and adds them to your local branch.