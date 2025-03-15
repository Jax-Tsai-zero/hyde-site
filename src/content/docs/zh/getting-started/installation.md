---
title: 安装
description: HyDE 安装指南
---

我们的安装脚本是为在最小[Arch Linux](https://wiki.archlinux.org/title/Arch_Linux) 上安装设计的，但在其他一些 [基于 Arch 的发行版](https://wiki.archlinux.org/title/Arch-based_distributions) 上可能也适用。
HyDE 是一个高度自定义的预设，在其他[桌面环境](https://wiki.archlinux.org/title/Desktop_environment)/[窗口管理器](https://wiki.archlinux.org/title/Window_manager)的上安装 HyDE 也许可行，但它可能会与您的[GTK](https://wiki.archlinux.org/title/GTK)/[Qt](https://wiki.archlinux.org/title/Qt) 主题, [Shell](https://wiki.archlinux.org/title/Command-line_shell), [SDDM](https://wiki.archlinux.org/title/SDDM), [GRUB](https://wiki.archlinux.org/title/GRUB)等配置相冲突，请自行承担风险。

我们支持 Nixos， 但作为一个单独的仓库在 [Hydenix](https://github.com/richen604/hydenix/tree/main) 提供。


:::note
安装脚本会自动检测英伟达显卡并安装 nvidia-dkms 内核驱动。
请确保您的英伟达显卡支持 dkms 驱动，支持的具体型号可以查看[这个列表](https://wiki.archlinux.org/title/NVIDIA)。

:::danger

这个脚本会修改您的 `grub` 或 `systemd-boot` 配置以启用英伟达 DRM。

:::

<!-- ### Option 1 -->

### 自动安装脚本

```shell
pacman -S --needed git base-devel
git clone --depth 1 https://github.com/HyDE-Project/HyDE ~/HyDE
cd ~/HyDE/Scripts
./install.sh
```

:::tip
您可以在 `Scripts/pkg_user.lst` 中添加您想随 HyDE 一同安装的应用，并将此文件作为参数传入安装脚本，像这样：

```shell
./install.sh pkg_user.lst
```

:::

:::note
如果您想安装额外的软件包，请参照 `Scripts/pkg_extra.lst`，

或者您也可以复制它 `cp Scripts/pkg_extra.lst Scripts/pkg_user.lst`。
:::

### 精细化手动安装

#### 克隆

克隆项目仓库并进入脚本目录，请确认当前用户是否有写权限([w])和运行权限([x])。

```sh
pacman -Sy git
git clone --depth 1 https://github.com/prasanthrangan/hyprdots ~/HyDE
cd ~/HyDE/Scripts
```

:::caution
**请勿**使用 sudo 或以 root 用户运行该脚本！
:::

#### 运行模式

The install script can be executed in different modes,

- for default full hyprland installation with all configs

```shell
./install.sh
```

- for full or minimal hyprland installation + your favorite packages (ex.`pkg_user.lst`)

```shell
./install.sh pkg_user.lst # full install pkg_core.lst + pkg_user.lst with configs
./install.sh -i pkg_user.lst # minimal install pkg_core.lst + pkg_user.lst without configs
```

- each[section](#process) can also be independently executed as,

```shell
./install.sh -i # minimal install hyprland without any configs
./install.sh -d # minimal install hyprland without any configs, but with (--noconfirm) install
./install.sh -r # just restores the config files
./install.sh -s # start and enable system services
./install.sh -t # test run without executing (-irst to dry run all)
./install.sh -m # skips the theme installation
./install.sh -n # skips nvidia installation
./install.sh -irst # to do a test run for all
./install.sh -irst # to do a test run for all
```

<!-- ### Option 2

:::caution

HyDE-CLI author here.
The CLI's dots management (Hyde {restore,backup,control,override}) is not yet and might not be 100% compatible of the current hyprdots.
This is due to incompatibility of the meta files
and the above commands need manual intervention
Rest assured that other commands are working perfectly
and will be ported to its own `hydectl` command line interface

:::

As a second install option, you can also use `Hyde-install`, which might be easier for some.
View installation instructions for HyDE in [Hyde-cli - Usage](https://github.com/kRHYME7/Hyde-cli?tab=readme-ov-file#usage).

### Option 3

...Soon
A declarative way to manage importing and exporting dotfiles from other users. This is not for boot strapping but for sharing dotfiles.

---

---

---

:::note

> Please reboot after the install script completes and takes you to the SDDM login screen (or black screen) for the first time.
> ::: -->
