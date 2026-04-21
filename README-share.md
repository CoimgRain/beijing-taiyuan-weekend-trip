# 北京太原周末自驾网页分享说明

## 当前结构

- `index.html`
- `trip-data.js`
- `scripts/sync-trip-from-obsidian.mjs`
- `assets/trip/`

这套页面按 `旅行规划地图网页生成 KSkill` 制作，内容来自知识库：

- `AI归档/北京太原周末汇合自驾方案.md`

页面包含：

- 地图总览
- `整体 / DAY 0 / DAY 1 / DAY 2` 切换
- 每天路线点位与自驾线
- 当天交通建议
- 当天吃饭和玩法标签
- 当天真实照片卡
- 当天详细说明

## 如何从知识库刷新网页

在仓库目录运行：

```bash
node scripts/sync-trip-from-obsidian.mjs
```

这一步会重新读取：

```text
AI归档/北京太原周末汇合自驾方案.md
```

并生成：

```text
trip-data.js
```

如果后续发布到 GitHub Pages，再执行：

```bash
git add index.html trip-data.js scripts assets README-share.md
git commit -m "Refresh weekend road trip site"
git push origin main
```

## 当前路线

- `DAY 0`：周五晚上到保定，汇合、吃饭、住保定
- `DAY 1`：周六保定老城轻量游，下午开去蔚县 / 暖泉
- `DAY 2`：周日飞狐峪 + 麻田岭，张家口方向返程

## 手机端验收重点

- 点 `整体` 要显示全部三天路线。
- 点 `DAY 0 / DAY 1 / DAY 2` 要只显示当天路线。
- 点地图区域要能收起底部卡片。
- 同一天按钮二次点击要能展开 / 收起底部卡片。
- 地图切换不要抽搐。
- 点、线、标签不能明显错位。
- 图片使用真实地点照片，点开大图后能看到来源入口。
