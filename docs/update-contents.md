# 教程-更新网站内容

> 这篇文档主要面向没有技术背景（没有编程基础、没有 Git 使用经验）但是需要更新网站内容的人。

## 认识 GitHub、Git、网站

### 什么是 GitHub

- <github.com>
- GitHub 是一个专门存放代码的云盘。
- 每个人都有「个人账号（personal account）」，个人账号下面可以有很多文件夹，一个文件夹存放一个项目的代码，一个文件夹又叫一个「仓库（repository / repo）」。
- 可以创建一个「组织（organization / org）」，「组织」里面也可以有很多「仓库」，更重要的是，「组织」可以包含多个「个人账号」来一起维护一个组织里面的「仓库」。
- 目前 IDC Group 使用的「组织」是 <https://github.com/IDC-SH>，里面有一个「仓库」 <https://github.com/IDC-SH/IDC-SH.github.io>，这里面存放的就是 IDC Group 网站的「源代码文件（codes）」（下面提到 Git 分支会详细说明）。

### 什么是网站

- 「网站（site / website）」是一堆 「HTML、CSS、JS 文件」，可以通过一个「链接（link）」访问到这些文件，「浏览器（browser）」将这些「HTML、CSS、JS 文件」呈现/显示/渲染出来，用户通过浏览器与网站交互。
- 网站开发可以手写 「HTML、CSS、JS 文件」，但现在更轻松一些的方式是使用一些「开发框架（framework）」（如 React，使用 JSX 语言）来编写「源代码文件（codes）」，然后由「开发框架」将这些「源代码文件」转为 「HTML、CSS、JS 文件」。

### 什么是 Git

- 「Git」可以管理一个文件夹的修改历史，Git 主要管理代码，一般我们将 Git 管理的文件夹称作「仓库」。
- 「Git」是一个版本控制工具（修改历史记录工具），每一次修改为一个「提交（commit）」。
- 一个「仓库」可以有多个「分支（branch）」，每个分支可以理解为不同的进度（下面修改会说到）；也有一些分支是完全独立的。可以理解为，一个「仓库」中有多个不同形态的文件夹。

### 了解网站修改方式和基于 GitHub pages 的自动发布方式

- 现在的网站仓库有一个 main 分支，这里存放网站的「源代码文件」。
- 当需要更改的时候，可以从 main 分支创建一个新分支（如 update-230911），然后进行修改，修改好后将新分支的「提交（commit）」「合并（merge）」（画图展示一下）到 main 分支。
    - 「Git」的一个仓库是可以多人合作开发的。每人每次开发/修改的时候都可以新建一个分支。
- 在 main 分支检测到修改时，GitHub 会自动将 main 分支的「源代码文件」转为「HTML、CSS、JS 文件」，然后将 「HTML、CSS、JS 文件」放在 gh-pages 分支。当有人访问 <https://idc-sh.github.io/> 时，其实访问的是 gh-pages 分支中的「HTML、CSS、JS 文件」。

## 本地修改网站内容并将更改发布到云端

### 本地安装 Git

- Windows 安装 详见 <https://yang-xijie.github.io/LECTURE/Git/windows-install/>
- macOS 系统自带，无需安装

### Git bash 和常用命令行简介

- 「终端（terminal）」是一个安装在电脑的软件
- 「shell」是通过命令行与计算机系统交互的一种方式（可视化界面也是一种交互方式，程序员更倾向于用 shell 进行交互）
- 一个「终端」可以开多个「shell」

打开 Git bash

- 感受一下命令行？
    - `date`
- 路径相关
    - `pwd`（print working directory）
        - `/` 根目录
        - 树状结构
        - `~` `.` `..`
    - `ls`（list）
    - `cd`（change directory）
- ctrl C
    - 可以结束当前命令的执行
    - 输错了也可以用 ctrl 全部删除
    - 所以复制粘贴需要右键

### 本地使用 Git 前的操作

设置邮箱和名字，使用真实的邮箱和名字，这样和你合作的人才知道是你在改东西。

```sh
git config --global user.name <your name>
git config --global user.email <your email>
```

### 设置 ssh

ssh 有公钥和私钥，这很复杂，你可以理解为账号和密码，但 ssh 相比账号和密码更安全（绝对安全）。

查看电脑是否在之前生成过 ssh 公钥和私钥：

```sh
ls -al ~/.ssh
```

如果没有，生成一个新的：

```sh
ssh-keygen -t ed25519 -C "your_email@example.com"
```

将 .pub 文件上传（复制粘贴）至 GitHub 的设置 Access > SSH and GPG keys

私钥（不带 .pub 的文件）千万别发给任何人，相当于密码。

### 克隆仓库到本地

使用 git 将 GitHub 上面的 <https://github.com/IDC-SH/IDC-SH.github.io> 仓库 clone 到本地（需要设置 ssh 密钥）

用 ssh 克隆，在仓库点击 Code，复制得到 `git@github.com:IDC-SH/IDC-SH.github.io.git`

在本地，输入命令：

```sh
git clone git@github.com:IDC-SH/IDC-SH.github.io.git
```

之后会得到一个文件夹，这个文件夹就是克隆或者说下载到本地的网站仓库。

### 本地安装 VS Code

<https://code.visualstudio.com>（注意勾选将 code 添加到环境变量）

打开刚刚下载得到的网站仓库：

命令行

```sh
code <文件夹路径>
```

或者

将文件夹拖拽到桌面的 VS Code 图标上面

### VS Code 安装插件

Git Graph：可以查看本地仓库的所有分支和提交记录

### 本地安装 node

<https://nodejs.org/en>

node 是网站开发的必备工具。装了 node 才有 npm（将 npm 理解为网站开发的一个工具就行了）

### 在本地查看网站

打开集成终端，切换到 Git bash

将设置中的默认终端改为 Git bash

```sh
# 安装依赖，只需要运行一次
npm install
# 在本地打开网站，每次修改代码的时候运行
npm start
```

### 如何更新内容

- 新建分支 `git switch --create update-news-230911`
- 修改内容
    - 修改 src/data/news.json 来更新 News
    - 修改 src/data/publications.json 来更新 Publications
    - 修改 src/data/recent-publications.json 来修改 Recents
    - 修改图片
    - 在 data/images-publications/ 中添加或修改图片（图片名称为 publications.json 里面的 i 加上后缀名）
    - 或者使用 utilities/ 文件夹下的 Python 脚本做批量的处理

补充说明：

- `npm start` 可以热更新，保存即可看到修改后的网站
- 本地和云端的仓库是分离的，不是说一个更新了另一个就自动更新，因为可能很多人都会在同一个仓库中工作

### 通过 Git 提交内容

```sh
# 查看当前仓库的修改状态
git status

# 将所有更改“选中”，然后提交生成一次修改记录
git add .
git commit -m "add a news item"
```

- `-m` 是 `--message` 的缩写

### 查看云端仓库

```sh
git remote -v
```

- `-v` 是 `--verbose` 的缩写，可以看到云端仓库名称和地址
- 可以看到有一个名为 origin 的云端仓库。这个就是 GitHub 上面的仓库

### 将更新的内容上传到 GitHub 云端仓库

```sh
git push origin <分支名称>
```

打开 GitHub 查看确实已经有了新的一个分支。

### 在 GitHub 仓库提交 PR

GitHub 仓库已经有了修改好的分支，我们就要将这个分支上面的修改内容合并到 GitHub 仓库的 main 分支。「PR（pull request，合并请求）」做的就是这件事情。

我会检查你的修改内容。如果没有问题，我会将你上传的这个新分支合并到 GitHub 仓库的 main 分支；如果有问题，我会在 PR 里面回复，你可以继续修改本地的分支、提交、上传，我继续检查，直到没有问题，这个分支的内容合并到 main 分支为止。

## 第二次及以后的修改方法

### 切换到 main 分支拉取云端仓库的最新内容

```sh
git switch main
git pull
```

### 创建新分支

```sh
git switch -c update-image-230911
```

- 修改内容
- 提交内容
- 将分支 push 到云端仓库
- 提 PR

## 进阶内容

### 使用 Python 脚本处理图片

- 电脑安装 Python
- `pip install opencv-python numpy` 安装需要用到的依赖
- 准备图片、运行 Python 脚本
