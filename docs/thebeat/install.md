---
id: install
title: Installing theBeat
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Let's get started! Select your system to view installation instructions.

<Tabs defaultValue="windows" values={[
    {label: "Windows", value: "windows"},
    {label: "macOS", value: "macos"},
    {label: "Arch Linux", value: "arch"},
    {label: "Fedora", value: "fedora"}
]}>
<TabItem value="windows">

Grab the [theBeat installer](https://github.com/vicr123/theInstaller/releases/download/continuous/theBeat.exe) and follow the instructions.

</TabItem>
<TabItem value="macos">
Unfortunately, theBeat is not available on macOS at this time.
</TabItem>
<TabItem value="arch">

Install the `thebeat` package from the AUR.

</TabItem>
<TabItem value="fedora">

Enable the theSuite COPR repository
```bash
sudo dnf copr enable vicr123/theSuite
```

Install theBeat
```bash
sudo dnf install thebeat
```

</TabItem>
</Tabs>
