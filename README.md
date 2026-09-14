# Quan Cui Academic Homepage

崔全的个人学术主页，基于 Docusaurus 3.10.2 构建。网站以遥感智能解译研究为主线，保留原创博客与技术笔记。

## 本地运行

需要 Node.js 20+ 和 pnpm。

```bash
pnpm install
pnpm start
```

生产构建：

```bash
pnpm build
pnpm serve
```

## 内容维护

学术信息集中在 `src/data/academic.js`：

- `profile`：姓名、身份、邮箱、个人简介。
- `researchInterests`：研究兴趣。
- `publications`：已发表或已录用论文，页面会按年份倒序排列。
- `worksInReview`：二审、在投等尚未正式发表的成果，与正式成果分区展示。
- `projects`：研究与工程项目。
- `experiences`：教育及研究经历。
- `awards`：代表性荣誉。
- `skills`：研究、工程与学术能力。
- `featuredPosts`：首页推荐文章。

新增论文时复制一条 `publications` 记录，保证 `id` 唯一，并填写正式题目、作者、年份、状态与可信链接。在投稿件不放入公开数据文件。

个人头像位于 `static/img/profile/quan-cui.jpg`。替换时沿用文件名即可，无需修改页面。

## 页面

- `/`：学术首页
- `/scholar`：研究方向、论文、项目与荣誉
- `/awards`：奖学金、荣誉称号与竞赛获奖记录
- `/introduce`：个人介绍
- `/blog`：原创文章与随笔
- `/docs/all-skill-intro`：研究与技术笔记

## 部署

推送到 `main` 后，GitHub Actions 会自动安装依赖、构建站点并发布到
`gh-pages` 分支。自定义域名固定写在 `static/CNAME`，构建产物和自动部署都会
保留 `cq.seekyou.top`，无需每次重新填写 GitHub Pages 的 Custom domain。

首次启用自动部署时，请确认仓库 **Settings → Pages → Build and deployment**
仍选择 **Deploy from a branch**，分支为 `gh-pages`、目录为 `/ (root)`。

## 搜索引擎收录

- `static/robots.txt` 允许公开抓取，并指向自动生成的 `/sitemap.xml`。
- 首页、关于页和学者页分别提供 Person、ProfilePage、WebSite 与 ScholarlyArticle 结构化数据。
- 首次收录需在 Google Search Console 验证 `cq.seekyou.top`，提交
  `https://cq.seekyou.top/sitemap.xml`，并使用网址检查工具请求首页编入索引。
- 如需增加 Google 或 Bing 的 HTML 验证信息，请将平台给出的验证字符串加入站点配置，勿提交账户密码或访问令牌。
