const translations = {
  ja: {
    ui: { tap: "tap" },
    nav: { about: "自己紹介", works: "制作", travel: "旅行", dog: "モコ" },
    about: {
      eyebrow: "About",
      title: "サイト紹介",
      copy1: "Codexを使いながら、制作物・旅行写真・愛犬モコの写真をまとめたポートフォリオサイトを作りました。",
      copy2: "写真、余白、やさしい色を中心に、シンプルに見やすく整えています。",
      copy3: "HTML、CSS、JavaScriptをベースに、CanvasやCSSアニメーション、多言語切り替えを加え、Codexで構成やデザインを調整しながら制作しました。",
    },
    travel: {
      eyebrow: "Travel",
      title: "旅の記録",
    },
    dog: {
      eyebrow: "Dogs",
      title: "愛犬モコ",
    },
    works: {
      eyebrow: "Works",
      title: "制作実績",
      link: "成果物を見る",
      project1: {
        tag: "スライド",
        title: "杭州スライド — Hangzhou Slides",
        description: "スライド表示用の静的デモ。デザインとレスポンシブ対応の確認ができます。",
      },
      project2: {
        tag: "Webアプリ",
        title: "予約アプリ — Yoyaku App",
        description: "予約フローを示すデモアプリ。フォームやUIの挙動を確認できます。",
      },
      project3: {
        tag: "旅行計画記録",
        title: "Trip Plan Yes",
        description: "旅行プラン作成ツールのデモサイト。ルート・日程のUIを実装しています。",
      },
    },
    photos: {
      travel1: {
        title: "太平洋フェリーで仙台から名古屋に乗船",
        note: "酔い止めを持参しなかったので、結構キツい場面もあった",
      },
      travel2: {
        title: "いわき市のアクアマリンふくしま",
        note: "土日だとこの水槽の目の前で寿司が食べれるらしい。",
      },
      travel3: {
        title: "北海道稚内市の宗谷岬",
        note: "最果ての地で人もあまりいなくてとても良かった",
      },
      travel4: {
        title: "イギリス南部のセブンシスターズ",
        note: "いっぱい歩いた。いい運動になった。",
      },
      travel5: {
        title: "スコットランドのエディンバラ",
        note: "エディンバラの街並みが見渡せて絶景だった",
      },
      travel6: {
        title: "タイのアユタヤ",
        note: "暑かった。遺跡に圧倒された。",
      },
    },
  },
  en: {
    ui: { tap: "tap" },
    nav: { about: "about", works: "works", travel: "travel", dog: "moco" },
    about: {
      eyebrow: "About",
      title: "Site Intro",
      copy1: "I built this portfolio with Codex to bring together my works, travel photos, and photos of my dog Moco.",
      copy2: "The site keeps things simple, with photos, spacing, and soft colors at the center.",
      copy3: "It is built with HTML, CSS, and JavaScript, with Canvas animation, CSS motion, and language switching.",
    },
    travel: {
      eyebrow: "Travel",
      title: "Travel Notes",
    },
    dog: {
      eyebrow: "Dogs",
      title: "Moco",
    },
    works: {
      eyebrow: "Works",
      title: "Projects",
      link: "View project",
      project1: {
        tag: "Slides",
        title: "Hangzhou Slides",
        description: "A static demo for slide-style presentation, built to check design and responsive behavior.",
      },
      project2: {
        tag: "Web app",
        title: "Yoyaku App",
        description: "A demo app for a reservation flow, including form behavior and UI interactions.",
      },
      project3: {
        tag: "Travel planning",
        title: "Trip Plan Yes",
        description: "A demo travel-planning site with route and schedule UI elements.",
      },
    },
    photos: {
      travel1: {
        title: "Taiheiyo Ferry from Sendai to Nagoya",
        note: "I forgot to bring motion sickness medicine, so some parts were pretty rough.",
      },
      travel2: {
        title: "Aquamarine Fukushima in Iwaki",
        note: "Apparently, on weekends you can eat sushi right in front of this tank.",
      },
      travel3: {
        title: "Cape Soya in Wakkanai, Hokkaido",
        note: "It felt like the edge of the world, quiet and not crowded. I really liked it.",
      },
      travel4: {
        title: "Seven Sisters in southern England",
        note: "I walked a lot. It turned into good exercise.",
      },
      travel5: {
        title: "Edinburgh, Scotland",
        note: "The view over the city was beautiful.",
      },
      travel6: {
        title: "Ayutthaya, Thailand",
        note: "It was hot. The ruins were overwhelming.",
      },
    },
  },
  zh: {
    ui: { tap: "查看" },
    nav: { about: "关于", works: "作品", travel: "旅行", dog: "小狗" },
    about: {
      eyebrow: "About",
      title: "网站介绍",
      copy1: "我使用 Codex 制作了这个作品集网站，用来整理作品、旅行照片和爱犬 Moco 的照片。",
      copy2: "整体以照片、留白和柔和的颜色为中心，保持简单易读。",
      copy3: "网站基于 HTML、CSS 和 JavaScript 制作，并加入 Canvas 动画、CSS 动效和多语言切换。",
    },
    travel: {
      eyebrow: "Travel",
      title: "旅行记录",
    },
    dog: {
      eyebrow: "Dogs",
      title: "爱犬 Moco",
    },
    works: {
      eyebrow: "Works",
      title: "制作作品",
      link: "查看作品",
      project1: {
        tag: "幻灯片",
        title: "杭州幻灯片 — Hangzhou Slides",
        description: "用于幻灯片展示的静态 Demo，可确认设计与响应式效果。",
      },
      project2: {
        tag: "Web 应用",
        title: "预约应用 — Yoyaku App",
        description: "展示预约流程的 Demo 应用，可确认表单和 UI 的操作效果。",
      },
      project3: {
        tag: "旅行计划记录",
        title: "Trip Plan Yes",
        description: "旅行计划制作工具的 Demo 网站，实现了路线与日程相关的 UI。",
      },
    },
    photos: {
      travel1: {
        title: "乘坐太平洋渡轮从仙台前往名古屋",
        note: "没有带晕船药，所以有些时候还挺难受。",
      },
      travel2: {
        title: "磐城市的 Aquamarine Fukushima",
        note: "听说周末可以在这个水槽前吃寿司。",
      },
      travel3: {
        title: "北海道稚内市的宗谷岬",
        note: "像是最北端的地方，人也不多，感觉很好。",
      },
      travel4: {
        title: "英国南部的七姐妹白崖",
        note: "走了很多路，算是很好的运动。",
      },
      travel5: {
        title: "苏格兰爱丁堡",
        note: "可以俯瞰爱丁堡的街景，风景非常美。",
      },
      travel6: {
        title: "泰国大城",
        note: "很热。遗迹的气势让人印象深刻。",
      },
    },
  },
};

const canvas = document.querySelector(".snow-canvas");
const shouldSnow = document.body.classList.contains("home-page");
const ctx = shouldSnow ? canvas.getContext("2d") : null;
const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = [...document.querySelectorAll("main section[id]")];
const revealItems = [...document.querySelectorAll(".reveal")];
const photoDialog = document.querySelector(".photo-dialog");
const dialogTitle = photoDialog?.querySelector(".photo-dialog-title");
const dialogNote = photoDialog?.querySelector(".photo-dialog-note");
const dialogClose = photoDialog?.querySelector(".dialog-close");
const languageButtons = [...document.querySelectorAll("[data-lang]")];

let width = 0;
let height = 0;
let flakes = [];
let pointerX = 0;
function readSavedLanguage() {
  try {
    return localStorage.getItem("portfolioLang") || "ja";
  } catch {
    return "ja";
  }
}

function saveLanguage(lang) {
  try {
    localStorage.setItem("portfolioLang", lang);
  } catch {
    // Some browsing contexts block localStorage. Language switching still works for the current page.
  }
}

let currentLang = readSavedLanguage();

function getTranslation(key, lang = currentLang) {
  return key.split(".").reduce((value, part) => value?.[part], translations[lang]);
}

function setLanguage(lang) {
  currentLang = translations[lang] ? lang : "ja";
  saveLanguage(currentLang);
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : currentLang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getTranslation(element.dataset.i18n);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === currentLang);
  });

  document.querySelectorAll(".photo-card").forEach((card) => {
    card.dataset.actionLabel = translations[currentLang].ui.tap;
  });
}

const flakeCount = () => Math.min(190, Math.floor(window.innerWidth / 8));

function resizeCanvas() {
  if (!shouldSnow) return;
  const ratio = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  flakes = Array.from({ length: flakeCount() }, createFlake);
}

function createFlake() {
  const radius = Math.random() * 3.2 + 1.1;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    radius,
    speed: Math.random() * 1.15 + 0.45,
    sway: Math.random() * 1.4 + 0.3,
    phase: Math.random() * Math.PI * 2,
    opacity: Math.random() * 0.55 + 0.28,
  };
}

function drawSnow() {
  if (!shouldSnow) return;
  ctx.clearRect(0, 0, width, height);
  const wind = (pointerX - width / 2) * 0.0008;

  flakes.forEach((flake) => {
    flake.phase += 0.012;
    flake.y += flake.speed;
    flake.x += Math.sin(flake.phase) * flake.sway + wind;

    if (flake.y > height + 12) {
      flake.y = -12;
      flake.x = Math.random() * width;
    }

    if (flake.x < -12) flake.x = width + 12;
    if (flake.x > width + 12) flake.x = -12;

    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
    ctx.shadowColor = "rgba(255, 255, 255, 0.65)";
    ctx.shadowBlur = 8;
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.shadowBlur = 0;
  requestAnimationFrame(drawSnow);
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.18 }
);

const navObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.hash === `#${visible.target.id}`);
    });
  },
  { threshold: [0.42, 0.62] }
);

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

if (shouldSnow) {
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
  });
}

revealItems.forEach((item) => revealObserver.observe(item));
sections.forEach((section) => navObserver.observe(section));

revealItems.forEach((item) => {
  const rect = item.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    item.classList.add("is-visible");
  }
});

document.querySelectorAll(".photo-card").forEach((card) => {
  card.addEventListener("click", () => {
    if (!photoDialog || !dialogTitle || !dialogNote) return;
    const photo = translations[currentLang].photos?.[card.dataset.photo];
    dialogTitle.textContent = photo?.title || card.dataset.titleJa || "";
    dialogNote.textContent = photo?.note || card.dataset.noteJa || "";
    if (typeof photoDialog.showModal === "function") {
      photoDialog.showModal();
    } else {
      photoDialog.setAttribute("open", "");
    }
  });
});

dialogClose?.addEventListener("click", () => {
  photoDialog?.close();
});

photoDialog?.addEventListener("click", (event) => {
  if (event.target === photoDialog) {
    photoDialog.close();
  }
});

setLanguage(currentLang);
resizeCanvas();
drawSnow();
