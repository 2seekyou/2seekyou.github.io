---
slug: The-Note-of-Missing-Semester
title: 笔记：计算机缺失的一课
authors: [seekyou]
tags: [Note,seekyou,2024]
---
# The Note of Missing Semester of CS Education
<!-- truncate -->

## MIT Lecture Online 

近期抽空看完了之前只看了git部分的课程，视频+课件参半看的差不多了。记录一些笔记，主要也是自己不太熟悉，以及感觉之后会用到的。附上链接[MIT: Missing Semester of CS education](https://missing.csail.mit.edu/2020/course-shell/)如果注册不成功的话也可以去bilibili上看，有搬运带翻译的完整视频。

## some commad:
`man + function` manual page of function  
`convert input.jpg output.png`:convert  
`touch {foo,bar}{a..j}` touch foo/a-j and bar/a-j(a,b,c,..)  
`diff <(ls foo) <(ls bar)`compare files in dir foo with bar  
`shellcheck a.sh`  
`> /dev/nul` 将命令的标准输出重定向到 /dev/null，任何标准输出都将被丢弃。  
`2> /dev/null` 将命令的标准错误输出重定向到 /dev/null，任何错误消息都将被丢弃。  
`$?`输出上一个命令的错误代码  
`$_`输出上一个命令的最后一个参数  
`$0`当前运行的脚本名  
`$#`为当前命令提供的参数数量
`$$`为正在运行的命令的进程号  
`$@`将会扩展到所有的输入参数 $1 $2...  
`!!` 等效于上一个命令  
`ls ?.sh` find file with .sh and only one string
`ls */sh` find file with string and a .sh  
`tee` reads from the standard input and writes to both the standard output and one or more files simultaneously

### Resource Monitoring
`htop`, which is an improved version of top. htop presents various statistics for the currently running processes on the system. htop has a myriad of options and keybinds, some useful ones are: 
- `<F6>` to sort processes, 
- `t` to show tree hierarchy and h to toggle threads. 
- `See also`glances for similar implementation with a great UI.
- `dstat` is another nifty tool that computes real-time resource metrics for lots of different subsystems like I/O, networking, CPU utilization, context switches, &c.
- `iotop` displays live I/O usage information and is handy to check if a process is doing heavy I/O disk operations
- `lsof` lists file information about files opened by processes. It can be quite useful for checking which process has opened a specific file.
### 0 and 1

`echo "hello"` >> hello  
`echo $?` >> 0 ( because function run successfully )  
`grep foobar a.sh` >> (nothing)  
`echo $?` >> 1 (because fuction didn't realize so that return 1)  
`ture` >> (nothing)  
`echo $?` >> 0  
`false` >> (nothing)  
`echo $?` >> 0  
`"$?" -ne 0` for "non equal"  
`false || echo "oops fail"` >> oops fail (logic OR: if first didn't return 0 then try second )  
`ture || echo "fine"` >> (nothing)  
`cat <(ls) <(ls ..)` >> will print the file on present dir and its parent folder meanwhile  

### a east script
```
#!/usr/local/bin/python
import sys
for arg in reversed(sys.argv[1:]):
    print(arg)
```
The kernel knows to execute this script with a python interpreter instead of a shell command because we included a shebang line at the top of the script.  

It is good practice to write shebang lines using the `env` command that will resolve to wherever the command lives in the system, increasing the portability of your scripts. To resolve the location, `env` will make use of the PATH environment variable we introduced in the first lecture. 

For this example the shebang line would look like `#!/usr/bin/env` python.

### shell tools

`tldr + function` a easy document for function with beautiful format  
`find . -name src -type d`  
`fd ".*py"`equal to find   
`grep -R foobar .`find every foobar in present dir  
`rg "import requests" -t (-C 5) py ~/scratch `find all import requests in which line in dir of ~/scratch  
(-C 5 ):get 5 linesontext around import requests  
`fzf`is commonly used to streamline various command-line tasks, such as searching through files, navigating directories, selecting items from lists, and filtering command output.  
`broot` likely to `tree`  
`less` likely to vim but mostly in viewing  
`sed + [option] + 'regular expresion' + [file] `  
`tail [options] [file]`// Displays the last part of files  
`awk '{print $1}' file.txt`display first row of every line  
`echo "5 + 3" | bc -l`    
`bc` caculator  
`-l` can loading math lib  to caculate more fuction and reply in decimal places  

#### Regular expressions

/.*Disconnected from /. Regular expressions are usually (though not always) surrounded by /
Very common patterns are:

`.`means “any single character” except newline  
`*`zero or more of the preceding match  
`+` one or more of the preceding match  
`[abc]` any one character of a, b, and c  
`(RX1|RX2)` either something that matches RX1 or RX2  
`^` the start of the line  
`$` the end of the line  

## Command-line Environment  
### Job Control
#### Killing a process

`Ctrl-C` SIGINT signal  
`Ctrl-\.`SIGQUIT signal  

#### Pausing and backgrounding processes

`jobs` show all the process stats   
`Ctrl-Z` prompt the shell to send a `SIGTSTP` signal to stop lprocess  
Then can use `fg` `bg %n` to continue the work in foreground or background(n is the job num of process shown by `jobs`so we don't need too remenber pid num)  
`nohup sleep 200 &` hang up on background and ignore the hangup signal   

#### Terminal Multiplexers
`tmux` likely to `screen` use`ctrl + B/A` as same as opening 2 terminal while using mostly in remote computer because it can aviod the hangup signal like what we mentioned before

### Aliases
`alias ll= "ls -lah"`  can be mdoify in .bashrc in order to keep all terminal 

### Dotfiles
Many programs are configured using plain-text files known as dotfiles (because the file names begin with a ., e.g. ~/.vimrc  
In fact, many programs will ask you to include a line like export PATH="$PATH:/path/to/program/bin" in your shell configuration file so their binaries can be found by bash.  

### Remote Machines
`ssh foo@bar.mit.edu`  
`Mosh` the mobile shell, improves upon ssh  

#### SSH copt file 
`cat localfile | ssh remote_server tee serverfile`copt localfile paste to remote server  
`scp local_file remote_user@remote_host:remote_path`supports transferring both files and directories between local and remote servers, and you can use the -r option for recursive copying.  
`rsync -avz local_directory/ remote_user@remote_host:remote_directory`used to sync files and directories between a local computer and a remote server.  
## Potpourri :
### Daemons 
In Linux, systemd (the system daemon) is the most common solution for running and setting up daemon processes.  
You can run systemctl status to list the current running daemons.Systemd can be interacted with the systemctl command in order to enable, disable, start, stop, restart or check the status of services (those are the systemctl commands).
### FUSE
Some interesting examples of FUSE filesystems are:  

* sshfs - Open locally remote files/folder through an SSH connection.
* rclone - Mount cloud storage services like Dropbox, GDrive, Amazon S3 or Google Cloud Storage and open data locally.
* gocryptfs - Encrypted overlay system. Files are stored encrypted but once the FS is mounted they appear as plaintext in the mountpoint.
* kbfs - Distributed filesystem with end-to-end encryption. You can have private, shared and public folders.
* borgbackup - Mount your deduplicated, compressed and encrypted backups for ease of browsing.
### Common command-line flags/patterns
Almost all tools have a --verbose or -v flag to produce more verbose output. You can usually include the flag multiple times (-vvv) to get more verbose output, which can be handy for debugging. Similarly, many tools have a --quiet flag for making it only print something on error.


