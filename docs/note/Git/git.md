---
slug: Git
title: Git 基本操作
authors: [seekyou]
tags: [Git,seekyou,2024]
---
为了即将到来的开源活动，重新复习一下git。

## 基础 command
### user.config

```
git config --global user.name "seekyou"
git config --global user.email "xxx@gmail.com"
```
### init :创建本地仓库

```
git init
```
### clone :获取远程仓库

克隆远程仓库到本地
```
git clone + "url"
```
注意：仅克隆默认分支

### remote :远程仓库

```
git remote -v
```
获取了fetch和push的两个地址，分别是拉取地址和提交地址
（通常是用的同一个地址，极少数是权限控制管理和镜像仓库设置提高速度以及不同网络下的代理导致）

### branch :分支

```
git branch 
```
获取分支列表

### add ：追踪变更

在对仓库内容进行改动后使git对变更追踪
例如
```
git add readme.md
```
则会将readme文件存入暂存区实现追踪。对于 Git 有记录的文件，Git 可以计算出变动并标记为已修改文件，而没有记录的则需要将有需要的文件加入暂存区以便管理，这时候使用`status`命令即可获得文件的状态.
```
git status
```

### gitignore：忽略文件

对于一些与项目本身无关的文件 例如git,.gitignore等可以通过编辑.gitignore文件实现忽视其存在。

### fetch 和 pull

在我们对本地文件进行编辑的同时可能会有其他人也在对项目做出贡献，这就会造成本地和远程仓库的不同步，这时候通过使用`fetch`或`pull`操作访问远程仓库，将本地没有的数据全部拉取到本地。类似于更新操作。
```
git pull /fetch 
```
`pull `会自动合并到当前分支，但也会存在一些冲突需要手动处理，而`fetch`改不回自动合并修改仓库内文件，而是需要自己手动合并。
使用场景
- 如果你想查看远程仓库的最新状态，但不想立即合并到本地分支，可以使用`git fetch`。
- 如果你希望立即将远程仓库的最新变化合并到你的当前分支，可以使用`git pull`。

### diff:对比不同

```
git diff 
```
用于比对每个被追踪文件的变更
- 如果要比较工作目录中的文件与最新提交之间的差异，使用`git diff HEAD`命令。
- 如果我们已经提交了先前的更改，然后又对文件进行了修改，然后运行`git diff --cached`，它会显示暂存区中与最新提交不同的内容。

### commit：提交到本地存储库

将add后的变更的提交。使用参数`-m`添加提交报告、修改介绍
```
git commit -m "修改介绍"
```

-a：全提交

可以使用-a参数来将所有变更直接提交而不用使用add命令， 即
```
git commit -a -m "修改介绍"
```
但要小心，这样可能会把不想提交的文件也给提交了，最好和`gitignore`文件配置一起配合使用

--amend：重新提交

有时候我们会误操作在某次提交中少提交了某些文件，除了直接再提交一次，我们可以使用

--amend参数来补齐遗漏的文件，如下操作

```
git commit -m “修改介绍”
git add renamed.txt
git commit --amend
```

这样就只有一条说明为“修改介绍”的提交被记录下来，第二次提交的内容会覆盖第一次的提交。即使用log命令的 时候显示记录只有一条有关“修改介绍”

### rm：移除文件

Git 可以移除某个文件，我们以“ToRemove.txt”为例，那么可以通过rm命令 来实现
```
rm ToRemove.txt
```
这样就从文件系统中删除了，接下来让 Git 记录此次操作
```
git rm ToRemove.txt
```
如果该文件已经放入了暂存区，那么需要加入-f参数 来强制移除，这个参数可以认作是 Git 防止误删操作而加的保险
```
git rm -f ToRemove.txt
```
另一种情况可能更加常用，即我们仅仅是想将其从暂存区移除而不希望把它从磁盘上删除，那么可以加入--cached参数来实现
```
git rm --cache ToRemove.txt
```
那么“ToRemove.txt”会再次回到“Untracked files”列表中并且也会保留在磁盘上。


### reset HEAD：取消暂存的文件

```
git rest HEAD a.txt
```
a.txt将出现在“未追踪文件”中

### checkout：还原

如果不想保留对文件的修改呢，可以使用checkout命令来使其还原到上次提交的样子。
即该文件之间返回上次提交的状态，本地修改全部消失。
- 从暂存区恢复文件
```
git checkout -- file
```
- 从指定分支中获取文件
```
git checkout branch_name -- file
```
### log: 查看提交历史

```
git log
```
此命令会按时间倒叙显示所有提交，包括 SHA-1 校验和、作者名字、邮件地址、时间和提交说明。

### push：提交到远程仓库

只存在本地的代码仓库接下来使用以下命令来将本地存储库中的变动同步到远程仓库，这一步你需要提供在 Gitee 的用户名和密码或者配置github的ssh密钥获取 push 权限。
```
git push (对应分支)
```
如果不小心推送了错误的分支：
1. 回滚更改：`git reset`或`git revert`等命令回滚更改，例如使用`git reset HEAD~1`来撤销上一次提交，并保留修改。
2. 强制推送：在回滚更改后，将本地分支推送到远程分支时，你需要使用--force选项来覆盖之前的推送。这是因为你正在改变已经存在于远程仓库中的提交历史。例如，使用git push origin your_branch --force来强制推送本地分支到远程分支。

回滚命令说明：
- 使用`git reset HEAD~1`将取消暂存的更改并将它们移出暂存区，但不会删除对工作目录的更改。这样可以让你重新考虑哪些更改需要提交或重做。可能会修改提交历史.
- `git revert`不会修改提交历史，而是在历史上创建一个新的提交来撤销之前的更改。这使得它在协作环境中更安全，因为它不会改变已经共享的提交历史。

我们应该遵守远程分支不要强制回滚历史记录的约定 git push --force ，甚至应该设置远程分支为被保护分支，否则一旦回滚历史记录会导致远程的 commit 记录消失，如果这些 commit 记录被其他人合并/变基时所使用，那么在提交代码的时候就不得不重新解决冲突问题，回滚这些提交，所以即使想回滚远程提交，也应该通过新建提交的方式来回滚，这样就可以解决几乎全部的问题。