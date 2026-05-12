# ShadowLens

> 每一帧，都是一个故事。

**影子 ShadowLens** 是一个极简风格的纯前端摄影社区，专注于摄影作品的展示与发现。没有社交噪音，只有纯粹的视觉享受。

## Live

[t1per07.github.io/shadowlens](https://t1per07.github.io/shadowlens/)

## Features

- **首页** — 全屏 Hero + 瀑布流精选作品 + 分类预览 + 摄影师展示
- **发现** — 按分类浏览全部作品，支持筛选
- **分类** — 11 个主分类（风景、人像、街拍、自然、建筑、夜景、旅行、黑白、胶片、极简、老照片），每个含 5 个子分类
- **排行榜** — 热门作品排名
- **搜索** — 关键词搜索作品、摄影师、标签
- **摄影师主页** — 个人封面、作品集、统计数据
- **作品详情** — 大图查看、点赞、收藏、评论、分享
- **发布作品** — 上传照片、填写信息、选择分类
- **登录 / 注册** — 本地用户系统
- **中英双语** — 一键切换中文 / English

## Design

- 字体：Noto Serif SC（衬线） + Inter（无衬线）
- 风格：极简编辑式排版，大量留白，微妙的视差与滚动动画
- 布局：Masonry 瀑布流、响应式适配
- 动效：页面加载动画、滚动渐显、鼠标视差、导航栏智能显隐

## Tech

```
HTML / CSS / JavaScript
无框架，无构建工具，纯原生实现
图片来源：Unsplash
```

## Structure

```
shadowlens/
├── index.html            # 首页
├── explore.html          # 发现
├── categories.html       # 分类总览
├── category.html         # 分类详情
├── category-vintage.html # 老照片专题
├── rankings.html         # 排行榜
├── search.html           # 搜索
├── photographer.html     # 摄影师主页
├── photo.html            # 作品详情
├── post.html             # 发布作品
├── login.html            # 登录 / 注册
├── css/
│   └── style.css         # 全局样式
├── js/
│   ├── main.js           # 首页逻辑
│   └── pages.js          # 通用页面逻辑 + 数据
└── images/               # 本地图片资源
```

## Run

```bash
# 直接打开
open index.html

# 或用本地服务器
npx serve .
python -m http.server 8080
```

## License

MIT
