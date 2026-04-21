import fs from "node:fs/promises";
import path from "node:path";

const repoRoot = "/Users/kang/Downloads/北京太原周末自驾地图分享";
const vaultRoot = "/Users/kang/Library/Mobile Documents/iCloud~md~obsidian/Documents/KK个人知识库";
const sourceNote = "AI归档/北京太原周末汇合自驾方案.md";
const sourcePath = path.join(vaultRoot, sourceNote);
const outputFile = path.join(repoRoot, "trip-data.js");

const dayMeta = [
  {
    order: 0,
    label: "D0",
    kicker: "周五夜间汇合",
    title: "太原到保定、北京开车汇合、住保定",
    shortArea: "保定汇合",
    summary: "周五晚上只做一件事：到保定汇合、吃饭、休息。不赶夜路去张家口，给周六和周日留体力。",
    crowd: "低到中",
    mood: "汇合休整，不赶路",
    color: "#c84b3f",
    route: ["保定东 / 保定站", "保定市区晚饭", "保定住宿"],
    transportNote: "太原坐火车到保定，北京朋友开车到保定接人；当晚住保定，别夜里赶山路。",
    transit: [
      { title: "太原 -> 保定", copy: "按已订车票周五约 19:00 到保定，优先确认到站是保定东还是保定站。" },
      { title: "北京 -> 保定", copy: "北京朋友开车出发，到站接人后直接去市区吃饭。" },
      { title: "保定晚间", copy: "晚饭和住宿都放保定市区或车站附近，第二天上午玩保定更顺。" }
    ],
    highlights: ["不赶夜路", "保定汇合", "晚饭轻松", "早点休息"],
    food: [
      { label: "驴肉火烧", name: "保定驴肉火烧", area: "保定市区", url: "https://www.xiaohongshu.com/search_result?keyword=%E4%BF%9D%E5%AE%9A%20%E9%A9%B4%E8%82%89%E7%81%AB%E7%83%A7" },
      { label: "本地小馆", name: "保定本地小馆", area: "保定老城", url: "https://www.xiaohongshu.com/search_result?keyword=%E4%BF%9D%E5%AE%9A%20%E6%9C%AC%E5%9C%B0%E5%B0%8F%E9%A6%86" },
      { label: "简单面食", name: "保定晚饭面食", area: "保定站 / 市区", url: "https://www.xiaohongshu.com/search_result?keyword=%E4%BF%9D%E5%AE%9A%20%E6%99%9A%E9%A5%AD" }
    ],
    points: [
      { name: "保定东 / 保定站", lat: 38.8737, lon: 115.4646 },
      { name: "保定老城晚饭", lat: 38.8579, lon: 115.4946 },
      { name: "保定市区住宿", lat: 38.8730, lon: 115.4800 }
    ],
    photos: [
      {
        src: "assets/trip/baoding-railway-station.jpg",
        alt: "雪中的保定火车站",
        caption: "保定站真实照片",
        credit: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/Category:Baoding_Railway_Station"
      },
      {
        src: "assets/trip/baoding-donkey-burger.jpg",
        alt: "保定驴肉火烧",
        caption: "保定驴肉火烧",
        credit: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Donkey_burger.jpg"
      }
    ]
  },
  {
    order: 1,
    label: "D1",
    kicker: "保定轻量游 + 开去蔚县",
    title: "直隶总督署、古莲花池、保定午饭、暖泉古镇",
    shortArea: "保定 / 蔚县暖泉",
    summary: "周六上午在保定老城轻量玩，中午吃本地饭，下午尽早开去蔚县或暖泉，晚上住到周日自驾线附近。",
    crowd: "中",
    mood: "上午城市，下午转山地自驾",
    color: "#de8b22",
    route: ["直隶总督署", "古莲花池", "保定午饭", "暖泉古镇 / 蔚县住宿"],
    transportNote: "上午市区步行或短开车，13:30-14:30 从保定出发去蔚县 / 暖泉，别拖到傍晚后再进山。",
    transit: [
      { title: "保定住宿 -> 老城", copy: "上午 9:00 左右出门，车停好后用步行串直隶总督署和古莲花池。" },
      { title: "保定 -> 蔚县 / 暖泉", copy: "午饭后开车出发，按 13:30-14:30 控制节奏，避免夜里赶山路。" },
      { title: "暖泉 / 蔚县晚间", copy: "有打树花演出就看演出；没有就古镇散步、吃饭、早点休息。" }
    ],
    highlights: ["保定老城轻量玩", "午饭别拖太久", "下午早点出发", "暖泉住下更顺"],
    food: [
      { label: "驴肉火烧", name: "保定驴肉火烧", area: "保定老城", url: "https://www.xiaohongshu.com/search_result?keyword=%E4%BF%9D%E5%AE%9A%20%E9%A9%B4%E8%82%89%E7%81%AB%E7%83%A7%20%E8%80%81%E5%BA%97" },
      { label: "保定小馆", name: "保定本地菜", area: "裕华路 / 老城", url: "https://www.xiaohongshu.com/search_result?keyword=%E4%BF%9D%E5%AE%9A%20%E8%A3%95%E5%8D%8E%E8%B7%AF%20%E7%BE%8E%E9%A3%9F" },
      { label: "蔚县晚饭", name: "蔚县县城晚饭", area: "蔚县 / 暖泉", url: "https://www.xiaohongshu.com/search_result?keyword=%E8%94%9A%E5%8E%BF%20%E6%9A%96%E6%B3%89%E5%8F%A4%E9%95%87%20%E7%BE%8E%E9%A3%9F" }
    ],
    points: [
      { name: "直隶总督署", lat: 38.8568, lon: 115.4942 },
      { name: "古莲花池", lat: 38.8555, lon: 115.4930 },
      { name: "保定午饭", lat: 38.8580, lon: 115.4938 },
      { name: "暖泉古镇 / 蔚县住宿", lat: 39.7940, lon: 114.5900 }
    ],
    photos: [
      {
        src: "assets/trip/zhili-governor-office.jpg",
        alt: "保定直隶总督署大堂",
        caption: "直隶总督署",
        credit: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/Category:Zhili_Governor%27s_Office"
      },
      {
        src: "assets/trip/ancient-lotus-pond.jpg",
        alt: "保定古莲花池桥景",
        caption: "古莲花池",
        credit: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Baoding_Ancient_Lotus_Pond_bridge.jpg"
      },
      {
        src: "assets/trip/nuanquan-dashuhua.jpg",
        alt: "蔚县暖泉打树花表演",
        caption: "暖泉打树花",
        credit: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Magic_of_Blacksmiths_01.jpg"
      }
    ]
  },
  {
    order: 2,
    label: "D2",
    kicker: "张家口山地自驾线",
    title: "飞狐峪、麻田岭、张家口站返程",
    shortArea: "飞狐峪 / 麻田岭",
    summary: "周日主玩小红书关键词里的飞狐峪和麻田岭，把重点放在自驾风景、高山草甸和少折返返程。",
    crowd: "中",
    mood: "山路风景，返程留余量",
    color: "#2e9561",
    route: ["蔚县 / 暖泉出发", "飞狐峪", "麻田岭", "张家口站"],
    transportNote: "白天走飞狐峪和麻田岭，下午按车次往张家口站回拢；你从张家口方向回太原，朋友从张家口回北京。",
    transit: [
      { title: "蔚县 / 暖泉 -> 飞狐峪", copy: "上午把飞狐峪当自驾风景线，边开边停，不要每个点都耗太久。" },
      { title: "飞狐峪 -> 麻田岭", copy: "中午到下午看高山草甸、山脊线、风车和公路感；天气差就降低深入程度。" },
      { title: "麻田岭 -> 张家口站", copy: "返程票优先看 16:30 以后，太早会压缩山地线游玩时间。" }
    ],
    highlights: ["小阿勒泰关键词", "高山草甸", "白天走山路", "不折返保定"],
    food: [
      { label: "路上补给", name: "蔚县自驾补给", area: "蔚县 / 飞狐峪", url: "https://www.xiaohongshu.com/search_result?keyword=%E8%94%9A%E5%8E%BF%20%E9%A3%9E%E7%8B%90%E5%B3%AA%20%E8%87%AA%E9%A9%BE%20%E8%A1%A5%E7%BB%99" },
      { label: "县城简餐", name: "蔚县县城简餐", area: "蔚县县城", url: "https://www.xiaohongshu.com/search_result?keyword=%E8%94%9A%E5%8E%BF%20%E7%BE%8E%E9%A3%9F" },
      { label: "车站晚饭", name: "张家口站周边晚饭", area: "张家口站", url: "https://www.xiaohongshu.com/search_result?keyword=%E5%BC%A0%E5%AE%B6%E5%8F%A3%E7%AB%99%20%E5%91%A8%E8%BE%B9%E7%BE%8E%E9%A3%9F" }
    ],
    points: [
      { name: "蔚县 / 暖泉出发", lat: 39.8370, lon: 114.5650 },
      { name: "飞狐峪", lat: 39.9250, lon: 114.6550 },
      { name: "麻田岭", lat: 40.0060, lon: 114.6900 },
      { name: "张家口站", lat: 40.7685, lon: 114.8854 }
    ],
    photos: [
      {
        src: "assets/trip/xidianziliang-wind-turbine.jpg",
        alt: "蔚县西甸子梁风车与高山地貌",
        caption: "西甸子梁风车",
        credit: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:%E8%A5%BF%E7%94%B8%E5%AD%90%E6%A2%81%E9%A3%8E%E8%BD%A6.jpg"
      },
      {
        src: "assets/trip/xiaowutai-autumn.jpg",
        alt: "蔚县小五台山秋季山景",
        caption: "小五台山山景",
        credit: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/Category:Mount_Xiaowutai"
      }
    ]
  }
];

function sliceDaySection(markdown, order) {
  const pattern = new RegExp(`^##\\s+\\d+\\.\\s+Day\\s+${order}(?:[｜|].*)?$`, "m");
  const match = markdown.match(pattern);
  if (!match) return "";
  const start = match.index + match[0].length;
  const after = markdown.slice(start);
  const nextHeading = after.search(/^##\s+\d+\.\s+Day\s+/m);
  return (nextHeading === -1 ? after : after.slice(0, nextHeading)).trim();
}

function buildMarkdown(sourceMarkdown, meta) {
  const section = sliceDaySection(sourceMarkdown, meta.order);
  if (section) return section;
  return `### ${meta.title}\n\n${meta.summary}`;
}

const sourceMarkdown = await fs.readFile(sourcePath, "utf8");
const generatedAt = new Date().toLocaleString("zh-CN", { hour12: false });

const data = {
  meta: {
    siteTitle: "北京太原周末自驾汇合路线",
    siteSummary: "一张给周末保定汇合、蔚县暖泉夜宿、飞狐峪麻田岭自驾线准备的手机行程页。",
    panelTitle: "北京太原周末自驾总览",
    panelSummary: "按知识库定稿方案生成：周五保定汇合，周六保定轻量游后去蔚县，周日飞狐峪 + 麻田岭后张家口返程。",
    sourceNote,
    generatedAt,
    heroPills: [
      "2 人汇合",
      "周五晚 - 周日晚",
      "保定 / 蔚县 / 张家口",
      "自驾为主，少折返"
    ],
    sourcePills: [
      "知识库驱动",
      "整体 / Day 切换",
      "地图与攻略联动",
      "支持后续同步"
    ]
  },
  days: dayMeta.map((day) => ({
    ...day,
    markdown: buildMarkdown(sourceMarkdown, day)
  }))
};

await fs.writeFile(outputFile, `window.TRIP_DATA = ${JSON.stringify(data, null, 2)};\n`);
console.log(`Generated ${outputFile}`);
