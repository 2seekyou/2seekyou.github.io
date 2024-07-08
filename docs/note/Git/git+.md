---
slug: Git+
title: Git 操作手册
authors: [seekyou]
tags: [Git,seekyou]
---

# Git 命令手册

## 配置相关
```
# 初始化本仓库（创建新仓库）    
git init                                   
git config --global user.name "xxx"             # 配置用户名    
git config --global user.email "xxx@xxx.com"    # 配置邮件    
git config --global color.ui true               # git status等命令自动着色               
git config --global color.status auto    
git config --global color.diff auto    
git config --global color.branch auto    
git config --global color.interactive auto    
git config --global http.proxy                  # 查看当前代理设置      
git config --global http.proxy 'http://127.0.0.1:1080'  # 设置http代理      
git config --global https.proxy 'socks5://127.0.0.1:1080' # 设置https代理     
git config --global --unset http.proxy    #删除 proxy git config    
```
## 代码文件和提交相关
```git status                           # 查看当前版本状态   
git add t.txt                        # 添加单个文件至暂存区   
git add .     # 增加所有更改过的文件至index，不包括删除               
git add -u    # 仅增加所有已经跟踪的文件至index，不包括新文件         
git add -A    # git add . 和 git add -u的合集      
git commit -m 'xxx'                  # 提交    
git commit --amend -m 'xxx'          # 合并上一次提交（用于反复修改）    
git commit -am 'xxx'                 # 将add和commit合为一步    
git rm xxx                           # 删除index中的文件    
git rm -r *                          # 递归删除    
git log                              # 显示提交日志    
git log -1                           # 显示1行日志 -n为n行      
git log --stat                       # 显示提交日志及相关变动文件    
git log -p -m    
git log -- filename                  # 查看文件的修改日志     
git show xxxx                        # 显示某个提交的详细内容    
git show dfb02                       # 可只用commitid的前几位    
git show HEAD                        # 显示HEAD提交日志    
git show HEAD^                       # 显示上一个版本的提交日志 ^^为上两个版本 ^5为上5个版本                    
git whatchanged                      # 显示提交历史对应的文件修改    
git revert xxxxxx                    # 撤销提交xxxxx    
```
## tag相关
```
git tag                              # 显示已存在的tag    
git tag -a v2.0 -m 'xxx'             # 增加v2.0的tag    
git show v2.0                        # 显示v2.0的日志及详细内容    
git log v2.0                         # 显示v2.0的日志    
git push --tags                      # 把所有tag推送到远程仓库    
git tag -d tag_name                  # 本地删除名为tag_name的tag    
git push origin :refs/tags/tag_name  # 远程删除名为tag_name的tag    
```
## 差异比较
```
git diff                             # 显示所有未添加至index的变更    
git diff --cached                    # 显示所有已添加index但还未commit的变更    
git diff HEAD^                       # 比较与上一个版本的差异    
git diff HEAD -- ./lib               # 比较与HEAD版本lib目录的差异    
git diff origin/master..master        # 比较远程分支master上有本地分支master上没有的                   
git diff origin/master..master --stat # 只显示差异的文件，不显示具体内容    
```
## 分支相关
```
git clone git+ssh://git@xxx.xxx.xxx.xxx/xx.git       # clone远程仓库    
git remote add origin git+ssh://git@xxx.xxx.xxx.xxx/xx.git # 增加远程定义（用于push/pull/fetch）    
git branch                           # 显示本地分支    
git branch --contains 50089          # 显示包含提交50089的分支    
git branch -a                        # 显示所有分支    
git branch -r                        # 显示所有原创分支    
git branch --merged                  # 显示所有已合并到当前分支的分支    
git branch --no-merged               # 显示所有未合并到当前分支的分支    
git branch -m master master_copy     # 本地分支改名    
git checkout -b master_copy          # 从当前分支创建新分支master_copy并检出    
git checkout -b master master_copy   # 上面的完整版    
git checkout dev/minibear2333        # 检出已存在的分支    
git checkout --track dev/minibear2333   # 检出远程分支dev/minibear2333并创建本地跟踪分支    
git checkout v2.0                    # 检出版本v2.0    
git checkout -b devel origin/develop # 从远程分支develop创建新本地分支devel并检出    
git checkout -- README               # 检出head版本的README文件（可用于修改错误回退）    
git merge origin/master              # 合并远程master分支至当前分支    
git cherry-pick xxxxxx               # 合并提交xxxxxx的修改    
git push origin master               # 将当前分支push到远程master分支    
git push origin :dev/minibear2333    # 删除远程仓库的dev/minibear2333分支    
git fetch                            # 获取所有远程分支（不更新本地分支，另需merge）    
git fetch --prune                    # 获取所有原创分支并清除服务器上已删掉的分支    
git pull origin master               # 获取远程分支master并merge到当前分支    
git mv README README2                # 重命名文件README为README2    
git reset --hard HEAD                # 将当前版本重置为HEAD（通常用于merge失败回退）    
git rebase                           # 将其他分支上的更改应用到当前分支上
git branch -d dev/minibear2333       # 删除分支dev/minibear2333（需要确认本分支修改已合并到其他分支）    
git branch -D dev/minibear2333       # 强制删除分支dev/minibear2333，小心操作    
git ls-files                         # 列出git index包含的文件    
git show-branch                      # 图示当前分支历史    
git show-branch --all                # 图示所有分支历史    
```
## 图示命令
```
git ls-tree HEAD                   # 内部命令：显示某个git对象    
git rev-parse v2.0                 # 内部命令：显示某个ref对于的SHA1 HASH    
git reflog                         # 显示所有提交，包括孤立节点    
git show xxx                       # 查看xxx提交改变了哪些文件内容  
git show HEAD                      # 显示当前分支昨天的状态    
git log --pretty=format:'%h %s' --graph             # 图示提交日志    
git show HEAD~3                    # 查看倒数第三次提交改变了哪些内容  
git show -s --pretty=raw xxxxxx    # 显示指定提交的摘要信息和原始提交对象。
```
## 暂存相关
```
git stash                            # 暂存当前修改，将所有至为HEAD状态    
git stash list                       # 查看所有暂存    
git stash show -p stash@{0}          # 参考第一次暂存    
git stash apply stash@{0}            # 应用第一次暂存    
```
## 查找
```
git grep "delete from"               # 查找当前分支下的文件内容，可以git grep --help看具体用法                              
git grep "delete from" v2.0          # 指定tag来查找  
```
## git index 操作

```
git update-index —assume-unchanged 文件名      # 取消本地跟踪    
git update-index —no-assume-unchanged 文件名   # 恢复本地跟踪    
git ls-files -v| grep '^h\ '                  # 可以看到本地不跟踪的文件    
```
## 远程分支管理

```
git remote              # 不带参数，列出已经存在的远程分支                          
git remote -v           #(-v是–verbose 的简写,取首字母)列出详细信息，在每一个名字后面列出其远程url                          
git remote add [shortname]  url              #添加远程仓库    
git fetch origin        # 字符串 origin 指代对应的仓库地址了.比如说,要抓取所有 origin 有的,但本地仓库没有的信息,
```
## 打标签
Git 可以给任意一个提交打上标签，以示重要，默认使用标签来记录版本。
### 列出所有标签
```git tag```
### 如果标签太多，支持模糊匹配
```git tag -l "v1*"```
### 创建标签

轻量标签 默认在当前分支最后一个提交打 tag
```git tag v2.3```

携带提示信息创建的是附注标签，它是存储在 Git 数据库中的一个完整对象， 它们是可以被校验的，其中包含打标签者的名字、电子邮件地址、日期时间， 此外还有一个标签信息，并且可以使用 GNU Privacy Guard （GPG）签名并验证。 通常会建议创建附注标签，这样你可以拥有以上所有信息。
```git tag v2.4 -a -m "test"```
### 查看附注标签
```git show v2.4```
### 推送到远程
推送单个
```git push origin v1.0```
推送全部
``` git push origin --tags```
删除标签
```git tag -d v1.0```
注意上述命令并不会从任何远程仓库中移除这个标签，你必须用 `git push <remote> :refs/tags/<tagname> `来更新你的远程仓库：

```git push origin :refs/tags/v1.0```
或者
```git push origin -- delete v1.0```

### 检出标签

```git checkout v1.1```
作用类似于检出分支,但是检出的标签并不属于任何分支。如需要在该tag基础上修改提交，建议新建分支如下
```git checkout -b v1.1-dev v1.1```

### 关于pr

发起 PR 需要对这次提交修改了哪些功能进行描述，方便项目管理员看到这些内容，来判断是否可以合并，点击创建按钮成功发起。项目管理员或者其他人可以就你的 PR 提出建议，你可以参考其他人的建议使用 `git reset --soft 上一次的commitid `取消你的 commit ，修改完成后强制推送到自己的仓库里 `git push --force origin` 分支名 ，PR 中会自动更新。
#### 好习惯
- 在主干开发和分支开发中选择适合自己项目的解决方案并严格遵循
- 尽量保证每个 PR 都只针对一个功能或者一个 bug 做出修改
- 在提交代码之前，将远程分支上最新的代码合并进本地
- 在发起 PR 之前，保证自己的项目和源项目没有冲突，有冲突需要先解决冲突
- 发起pr的描述信息尽可能详细，不仅方便管理员查看，也方便其他人发现你修复的 bug


## 参考来自：
[开源指北]（https://oschina.gitee.io/opensource-guide/git_tutorial/Git%20%E5%91%BD%E4%BB%A4%E8%AF%A6%E8%A7%A3/%E5%B8%B8%E7%94%A8%20Git%20%E5%91%BD%E4%BB%A4/#%E6%89%93%E6%A0%87%E7%AD%BE）
（本文只记录了基础内容，进阶操作对我来说太早了哈哈）