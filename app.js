const lessons = [
  {
    id: "daily",
    name: "日常短句",
    items: [
      { text: "今天早餐吃蛋餅和豆漿", zhuyin: "ㄐㄧㄣ ㄊㄧㄢ ㄗㄠˇ ㄘㄢ ㄔ ㄉㄢˋ ㄅㄧㄥˇ ㄏㄜˊ ㄉㄡˋ ㄐㄧㄤ" },
      { text: "捷運站旁邊有一家書店", zhuyin: "ㄐㄧㄝˊ ㄩㄣˋ ㄓㄢˋ ㄆㄤˊ ㄅㄧㄢ ㄧㄡˇ ㄧˋ ㄐㄧㄚ ㄕㄨ ㄉㄧㄢˋ" },
      { text: "下班以後想去夜市散步", zhuyin: "ㄒㄧㄚˋ ㄅㄢ ㄧˇ ㄏㄡˋ ㄒㄧㄤˇ ㄑㄩˋ ㄧㄝˋ ㄕˋ ㄙㄢˋ ㄅㄨˋ" },
      { text: "請幫我把發票放進皮夾", zhuyin: "ㄑㄧㄥˇ ㄅㄤ ㄨㄛˇ ㄅㄚˇ ㄈㄚ ㄆㄧㄠˋ ㄈㄤˋ ㄐㄧㄣˋ ㄆㄧˊ ㄐㄧㄚˊ" }
    ]
  },
  {
    id: "taiwan",
    name: "台灣生活",
    items: [
      { text: "午後的台南巷弄飄著茶香", zhuyin: "ㄨˇ ㄏㄡˋ ㄉㄜ˙ ㄊㄞˊ ㄋㄢˊ ㄒㄧㄤˋ ㄋㄨㄥˋ ㄆㄧㄠ ㄓㄜ˙ ㄔㄚˊ ㄒㄧㄤ" },
      { text: "花蓮海邊的風很清爽", zhuyin: "ㄏㄨㄚ ㄌㄧㄢˊ ㄏㄞˇ ㄅㄧㄢ ㄉㄜ˙ ㄈㄥ ㄏㄣˇ ㄑㄧㄥ ㄕㄨㄤˇ" },
      { text: "週末一起去看棒球比賽", zhuyin: "ㄓㄡ ㄇㄛˋ ㄧˋ ㄑㄧˇ ㄑㄩˋ ㄎㄢˋ ㄅㄤˋ ㄑㄧㄡˊ ㄅㄧˇ ㄙㄞˋ" },
      { text: "便利商店可以繳費也能取貨", zhuyin: "ㄅㄧㄢˋ ㄌㄧˋ ㄕㄤ ㄉㄧㄢˋ ㄎㄜˇ ㄧˇ ㄐㄧㄠˇ ㄈㄟˋ ㄧㄝˇ ㄋㄥˊ ㄑㄩˇ ㄏㄨㄛˋ" }
    ]
  },
  {
    id: "focus",
    name: "易混音",
    items: [
      { text: "資源整理之後再寄給老師", zhuyin: "ㄗ ㄩㄢˊ ㄓㄥˇ ㄌㄧˇ ㄓ ㄏㄡˋ ㄗㄞˋ ㄐㄧˋ ㄍㄟˇ ㄌㄠˇ ㄕ" },
      { text: "吃飯前先洗手比較衛生", zhuyin: "ㄔ ㄈㄢˋ ㄑㄧㄢˊ ㄒㄧㄢ ㄒㄧˇ ㄕㄡˇ ㄅㄧˇ ㄐㄧㄠˋ ㄨㄟˋ ㄕㄥ" },
      { text: "窗外傳來蟬聲和車聲", zhuyin: "ㄔㄨㄤ ㄨㄞˋ ㄔㄨㄢˊ ㄌㄞˊ ㄔㄢˊ ㄕㄥ ㄏㄜˊ ㄔㄜ ㄕㄥ" },
      { text: "請確認資訊是否正確", zhuyin: "ㄑㄧㄥˇ ㄑㄩㄝˋ ㄖㄣˋ ㄗ ㄒㄩㄣˋ ㄕˋ ㄈㄡˇ ㄓㄥˋ ㄑㄩㄝˋ" }
    ]
  }
];

const phraseBank = {
  subjects: [
    z("今天下午", "ㄐㄧㄣ ㄊㄧㄢ ㄒㄧㄚˋ ㄨˇ"),
    z("早上出門", "ㄗㄠˇ ㄕㄤˋ ㄔㄨ ㄇㄣˊ"),
    z("下課以後", "ㄒㄧㄚˋ ㄎㄜˋ ㄧˇ ㄏㄡˋ"),
    z("週末晚上", "ㄓㄡ ㄇㄛˋ ㄨㄢˇ ㄕㄤˋ"),
    z("朋友一起", "ㄆㄥˊ ㄧㄡˇ ㄧˋ ㄑㄧˇ"),
    z("老師正在", "ㄌㄠˇ ㄕ ㄓㄥˋ ㄗㄞˋ"),
    z("家人準備", "ㄐㄧㄚ ㄖㄣˊ ㄓㄨㄣˇ ㄅㄟˋ"),
    z("同事下班", "ㄊㄨㄥˊ ㄕˋ ㄒㄧㄚˋ ㄅㄢ"),
    z("學生每天", "ㄒㄩㄝˊ ㄕㄥ ㄇㄟˇ ㄊㄧㄢ"),
    z("我們正在", "ㄨㄛˇ ㄇㄣ˙ ㄓㄥˋ ㄗㄞˋ")
  ],
  actions: [
    z("去公園散步", "ㄑㄩˋ ㄍㄨㄥ ㄩㄢˊ ㄙㄢˋ ㄅㄨˋ"),
    z("在捷運等車", "ㄗㄞˋ ㄐㄧㄝˊ ㄩㄣˋ ㄉㄥˇ ㄔㄜ"),
    z("買早餐回家", "ㄇㄞˇ ㄗㄠˇ ㄘㄢ ㄏㄨㄟˊ ㄐㄧㄚ"),
    z("整理書桌資料", "ㄓㄥˇ ㄌㄧˇ ㄕㄨ ㄓㄨㄛ ㄗ ㄌㄧㄠˋ"),
    z("練習注音打字", "ㄌㄧㄢˋ ㄒㄧˊ ㄓㄨˋ ㄧㄣ ㄉㄚˇ ㄗˋ"),
    z("準備晚餐水果", "ㄓㄨㄣˇ ㄅㄟˋ ㄨㄢˇ ㄘㄢ ㄕㄨㄟˇ ㄍㄨㄛˇ"),
    z("走到海邊看風景", "ㄗㄡˇ ㄉㄠˋ ㄏㄞˇ ㄅㄧㄢ ㄎㄢˋ ㄈㄥ ㄐㄧㄥˇ"),
    z("坐在窗邊讀書", "ㄗㄨㄛˋ ㄗㄞˋ ㄔㄨㄤ ㄅㄧㄢ ㄉㄨˊ ㄕㄨ"),
    z("討論新的計畫", "ㄊㄠˇ ㄌㄨㄣˋ ㄒㄧㄣ ㄉㄜ˙ ㄐㄧˋ ㄏㄨㄚˋ"),
    z("排隊買熱咖啡", "ㄆㄞˊ ㄉㄨㄟˋ ㄇㄞˇ ㄖㄜˋ ㄎㄚ ㄈㄟ"),
    z("搭公車去市場", "ㄉㄚ ㄍㄨㄥ ㄔㄜ ㄑㄩˋ ㄕˋ ㄔㄤˇ"),
    z("在廚房洗碗盤", "ㄗㄞˋ ㄔㄨˊ ㄈㄤˊ ㄒㄧˇ ㄨㄢˇ ㄆㄢˊ")
  ],
  endings: [
    z("心情很輕鬆", "ㄒㄧㄣ ㄑㄧㄥˊ ㄏㄣˇ ㄑㄧㄥ ㄙㄨㄥ"),
    z("速度越來越穩", "ㄙㄨˋ ㄉㄨˋ ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ ㄨㄣˇ"),
    z("天氣非常舒服", "ㄊㄧㄢ ㄑㄧˋ ㄈㄟ ㄔㄤˊ ㄕㄨ ㄈㄨˊ"),
    z("大家都很開心", "ㄉㄚˋ ㄐㄧㄚ ㄉㄡ ㄏㄣˇ ㄎㄞ ㄒㄧㄣ"),
    z("路上看到彩虹", "ㄌㄨˋ ㄕㄤˋ ㄎㄢˋ ㄉㄠˋ ㄘㄞˇ ㄏㄨㄥˊ"),
    z("手指越打越順", "ㄕㄡˇ ㄓˇ ㄩㄝˋ ㄉㄚˇ ㄩㄝˋ ㄕㄨㄣˋ"),
    z("時間過得很快", "ㄕˊ ㄐㄧㄢ ㄍㄨㄛˋ ㄉㄜ˙ ㄏㄣˇ ㄎㄨㄞˋ"),
    z("窗外風聲很柔", "ㄔㄨㄤ ㄨㄞˋ ㄈㄥ ㄕㄥ ㄏㄣˇ ㄖㄡˊ"),
    z("腦袋越來越清楚", "ㄋㄠˇ ㄉㄞˋ ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ ㄑㄧㄥ ㄔㄨˇ"),
    z("練完覺得很有成就", "ㄌㄧㄢˋ ㄨㄢˊ ㄐㄩㄝˊ ㄉㄜ˙ ㄏㄣˇ ㄧㄡˇ ㄔㄥˊ ㄐㄧㄡˋ")
  ]
};

lessons.push(...buildGeneratedLessons());

const keyboardRows = [
  [
    { key: "1", zhuyin: "ㄅ" },
    { key: "2", zhuyin: "ㄉ" },
    { key: "3", zhuyin: "ˇ" },
    { key: "4", zhuyin: "ˋ" },
    { key: "5", zhuyin: "ㄓ" },
    { key: "6", zhuyin: "ˊ" },
    { key: "7", zhuyin: "˙" },
    { key: "8", zhuyin: "ㄚ" },
    { key: "9", zhuyin: "ㄞ" },
    { key: "0", zhuyin: "ㄢ" },
    { key: "-", zhuyin: "ㄦ" }
  ],
  [
    { key: "q", zhuyin: "ㄆ" },
    { key: "w", zhuyin: "ㄊ" },
    { key: "e", zhuyin: "ㄍ" },
    { key: "r", zhuyin: "ㄐ" },
    { key: "t", zhuyin: "ㄔ" },
    { key: "y", zhuyin: "ㄗ" },
    { key: "u", zhuyin: "ㄧ" },
    { key: "i", zhuyin: "ㄛ" },
    { key: "o", zhuyin: "ㄟ" },
    { key: "p", zhuyin: "ㄣ" }
  ],
  [
    { key: "a", zhuyin: "ㄇ" },
    { key: "s", zhuyin: "ㄋ" },
    { key: "d", zhuyin: "ㄎ" },
    { key: "f", zhuyin: "ㄑ" },
    { key: "g", zhuyin: "ㄕ" },
    { key: "h", zhuyin: "ㄘ" },
    { key: "j", zhuyin: "ㄨ" },
    { key: "k", zhuyin: "ㄜ" },
    { key: "l", zhuyin: "ㄠ" },
    { key: ";", zhuyin: "ㄤ" }
  ],
  [
    { key: "z", zhuyin: "ㄈ" },
    { key: "x", zhuyin: "ㄌ" },
    { key: "c", zhuyin: "ㄏ" },
    { key: "v", zhuyin: "ㄒ" },
    { key: "b", zhuyin: "ㄖ" },
    { key: "n", zhuyin: "ㄙ" },
    { key: "m", zhuyin: "ㄩ" },
    { key: ",", zhuyin: "ㄝ" },
    { key: ".", zhuyin: "ㄡ" },
    { key: "/", zhuyin: "ㄥ" }
  ],
  [
    { key: "space", label: "Space", zhuyin: "空格", wide: true }
  ]
];

const keyboardKeyMap = new Map(
  keyboardRows.flat().map((keyInfo) => [keyInfo.key, keyInfo])
);

const physicalKeyMap = new Map([
  ["Digit1", "1"],
  ["Digit2", "2"],
  ["Digit3", "3"],
  ["Digit4", "4"],
  ["Digit5", "5"],
  ["Digit6", "6"],
  ["Digit7", "7"],
  ["Digit8", "8"],
  ["Digit9", "9"],
  ["Digit0", "0"],
  ["Minus", "-"],
  ["KeyQ", "q"],
  ["KeyW", "w"],
  ["KeyE", "e"],
  ["KeyR", "r"],
  ["KeyT", "t"],
  ["KeyY", "y"],
  ["KeyU", "u"],
  ["KeyI", "i"],
  ["KeyO", "o"],
  ["KeyP", "p"],
  ["KeyA", "a"],
  ["KeyS", "s"],
  ["KeyD", "d"],
  ["KeyF", "f"],
  ["KeyG", "g"],
  ["KeyH", "h"],
  ["KeyJ", "j"],
  ["KeyK", "k"],
  ["KeyL", "l"],
  ["Semicolon", ";"],
  ["KeyZ", "z"],
  ["KeyX", "x"],
  ["KeyC", "c"],
  ["KeyV", "v"],
  ["KeyB", "b"],
  ["KeyN", "n"],
  ["KeyM", "m"],
  ["Comma", ","],
  ["Period", "."],
  ["Slash", "/"],
  ["Space", "space"]
]);

const els = {
  particleBackground: document.querySelector("#particleBackground"),
  themeToggle: document.querySelector("#themeToggle"),
  themeIcon: document.querySelector("#themeIcon"),
  lessonSelect: document.querySelector("#lessonSelect"),
  modeSelect: document.querySelector("#modeSelect"),
  resetButton: document.querySelector("#resetButton"),
  nextButton: document.querySelector("#nextButton"),
  completionModal: document.querySelector("#completionModal"),
  modalAccuracy: document.querySelector("#modalAccuracy"),
  modalTime: document.querySelector("#modalTime"),
  modalSpeed: document.querySelector("#modalSpeed"),
  modalCompleted: document.querySelector("#modalCompleted"),
  leaveButton: document.querySelector("#leaveButton"),
  modalRestartButton: document.querySelector("#modalRestartButton"),
  nextSectionButton: document.querySelector("#nextSectionButton"),
  accuracyStat: document.querySelector("#accuracyStat"),
  speedStat: document.querySelector("#speedStat"),
  timeStat: document.querySelector("#timeStat"),
  streakStat: document.querySelector("#streakStat"),
  lessonName: document.querySelector("#lessonName"),
  progressText: document.querySelector("#progressText"),
  zhuyinPrompt: document.querySelector("#zhuyinPrompt"),
  targetPrompt: document.querySelector("#targetPrompt"),
  typingInput: document.querySelector("#typingInput"),
  feedbackText: document.querySelector("#feedbackText"),
  inputLabel: document.querySelector("#inputLabel"),
  keyGrid: document.querySelector("#keyGrid")
};

const particleScene = {
  ctx: null,
  particles: [],
  width: 0,
  height: 0,
  pixelRatio: 1,
  reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches
};

const state = {
  lessonIndex: 0,
  itemIndex: 0,
  startedAt: null,
  timerId: null,
  autoAdvanceTimer: null,
  typedChars: 0,
  correctChars: 0,
  totalTypedSnapshots: 0,
  totalCorrectSnapshots: 0,
  completedItems: 0,
  streak: 0,
  completed: false,
  composing: false
};

function savedTheme() {
  try {
    return localStorage.getItem("zhuyin-theme");
  } catch {
    return null;
  }
}

function persistTheme(theme) {
  try {
    localStorage.setItem("zhuyin-theme", theme);
  } catch {
    // File URLs can have storage restrictions in some browsers.
  }
}

function applyTheme(theme) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = nextTheme;
  els.themeIcon.textContent = nextTheme === "dark" ? "☾" : "☀";
  els.themeToggle.setAttribute("aria-label", nextTheme === "dark" ? "切換為白天模式" : "切換為黑夜模式");
  els.themeToggle.title = nextTheme === "dark" ? "切換為白天模式" : "切換為黑夜模式";
  persistTheme(nextTheme);
}

function initTheme() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme() || (prefersDark ? "dark" : "light"));
}

function toggleTheme() {
  const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  applyTheme(currentTheme === "dark" ? "light" : "dark");
}

function z(text, zhuyin) {
  return { text, zhuyin };
}

function joinPhrase(...parts) {
  return {
    text: parts.map((part) => part.text).join(""),
    zhuyin: parts.map((part) => part.zhuyin).join(" ")
  };
}

function buildGeneratedLessons() {
  const generatedItems = [];
  phraseBank.subjects.forEach((subject) => {
    phraseBank.actions.forEach((action) => {
      phraseBank.endings.forEach((ending) => {
        generatedItems.push(joinPhrase(subject, action, ending));
      });
    });
  });

  return [
    { id: "bank-1", name: "題庫一：生活節奏", items: generatedItems.slice(0, 30) },
    { id: "bank-2", name: "題庫二：城市日常", items: generatedItems.slice(30, 60) },
    { id: "bank-3", name: "題庫三：學習工作", items: generatedItems.slice(60, 90) },
    { id: "bank-4", name: "題庫四：旅行休閒", items: generatedItems.slice(90, 120) }
  ];
}

function normalizeZhuyin(value) {
  return value.replace(/\s+/g, "");
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function particleCountForSize(width, height) {
  return Math.min(130, Math.max(46, Math.round((width * height) / 18000)));
}

function createParticle(width, height) {
  const speed = randomBetween(0.08, 0.42);
  const angle = randomBetween(0, Math.PI * 2);
  return {
    x: randomBetween(0, width),
    y: randomBetween(0, height),
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    radius: randomBetween(0.8, 2.6),
    alpha: randomBetween(0.32, 0.9),
    pulse: randomBetween(0.006, 0.018),
    phase: randomBetween(0, Math.PI * 2)
  };
}

function resizeParticleScene() {
  if (!els.particleBackground) return;
  particleScene.pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  particleScene.width = window.innerWidth;
  particleScene.height = window.innerHeight;
  els.particleBackground.width = Math.floor(particleScene.width * particleScene.pixelRatio);
  els.particleBackground.height = Math.floor(particleScene.height * particleScene.pixelRatio);
  els.particleBackground.style.width = `${particleScene.width}px`;
  els.particleBackground.style.height = `${particleScene.height}px`;
  particleScene.ctx.setTransform(particleScene.pixelRatio, 0, 0, particleScene.pixelRatio, 0, 0);

  const targetCount = particleCountForSize(particleScene.width, particleScene.height);
  while (particleScene.particles.length < targetCount) {
    particleScene.particles.push(createParticle(particleScene.width, particleScene.height));
  }
  particleScene.particles.length = targetCount;
}

function drawParticles(time = 0) {
  const { ctx, particles, width, height, reducedMotion } = particleScene;
  if (!ctx) return;

  ctx.clearRect(0, 0, width, height);

  particles.forEach((particle) => {
    if (!reducedMotion) {
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x < -12) particle.x = width + 12;
      if (particle.x > width + 12) particle.x = -12;
      if (particle.y < -12) particle.y = height + 12;
      if (particle.y > height + 12) particle.y = -12;
    }

    const shimmer = Math.sin(time * particle.pulse + particle.phase) * 0.22;
    const alpha = Math.max(0.16, Math.min(0.95, particle.alpha + shimmer));
    const glowSize = particle.radius * 7;
    const gradient = ctx.createRadialGradient(
      particle.x,
      particle.y,
      0,
      particle.x,
      particle.y,
      glowSize
    );

    gradient.addColorStop(0, `rgba(87, 255, 186, ${alpha})`);
    gradient.addColorStop(0.38, `rgba(40, 202, 139, ${alpha * 0.36})`);
    gradient.addColorStop(1, "rgba(40, 202, 139, 0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = `rgba(191, 255, 222, ${Math.min(1, alpha + 0.18)})`;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fill();
  });

  for (let i = 0; i < particles.length; i += 1) {
    for (let j = i + 1; j < particles.length; j += 1) {
      const a = particles[i];
      const b = particles[j];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      if (distance > 105) continue;
      ctx.strokeStyle = `rgba(99, 255, 195, ${(1 - distance / 105) * 0.13})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
  }

  if (!reducedMotion) window.requestAnimationFrame(drawParticles);
}

function initParticleBackground() {
  if (!els.particleBackground) return;
  particleScene.ctx = els.particleBackground.getContext("2d");
  resizeParticleScene();
  drawParticles();
  window.addEventListener("resize", resizeParticleScene);
}

function currentLesson() {
  return lessons[state.lessonIndex];
}

function currentItem() {
  return currentLesson().items[state.itemIndex];
}

function currentTarget() {
  const item = currentItem();
  return els.modeSelect.value === "zhuyin" ? normalizeZhuyin(item.zhuyin) : item.text;
}

function renderSelectors() {
  els.lessonSelect.innerHTML = lessons
    .map((lesson, index) => `<option value="${index}">${lesson.name}</option>`)
    .join("");
}

function renderKeys() {
  els.keyGrid.innerHTML = keyboardRows
    .map((row, rowIndex) => `
      <div class="keyboard-row keyboard-row-${rowIndex + 1}">
        ${row.map((keyInfo) => `
          <div
            class="key ${keyInfo.wide ? "key-wide" : ""}"
            data-key="${keyInfo.key}"
            aria-label="${keyInfo.label || keyInfo.key} ${keyInfo.zhuyin}"
          >
            <span class="key-latin">${keyInfo.label || keyInfo.key.toUpperCase()}</span>
            <span class="key-zhuyin">${keyInfo.zhuyin}</span>
          </div>
        `).join("")}
      </div>
    `)
    .join("");
}

function keyFromEvent(event) {
  if (physicalKeyMap.has(event.code)) return physicalKeyMap.get(event.code);
  if (event.key.length === 1) return event.key.toLowerCase();
  return "";
}

function flashVirtualKey(event) {
  const key = keyFromEvent(event);
  if (!keyboardKeyMap.has(key)) return;
  const virtualKey = els.keyGrid.querySelector(`[data-key="${key}"]`);
  if (!virtualKey) return;
  virtualKey.classList.remove("is-active");
  window.requestAnimationFrame(() => {
    virtualKey.classList.add("is-active");
    window.setTimeout(() => virtualKey.classList.remove("is-active"), 180);
  });
}

function renderHanziPairs(item) {
  const sounds = item.zhuyin.split(" ");
  return [...item.text]
    .map((char, index) => `
      <span class="prompt-pair">
        <span class="char-zhuyin">${sounds[index] || ""}</span>
        <span class="target-char" data-index="${index}">${char === " " ? "&nbsp;" : char}</span>
      </span>
    `)
    .join("");
}

function renderZhuyinPairs(item) {
  const sounds = item.zhuyin.split(" ");
  let targetIndex = 0;
  return [...item.text]
    .map((char, charIndex) => {
      const sound = sounds[charIndex] || "";
      const soundChars = [...sound]
        .map((soundChar) => {
          const markup = `<span class="target-char zhuyin-char" data-index="${targetIndex}">${soundChar}</span>`;
          targetIndex += 1;
          return markup;
        })
        .join("");
      return `
        <span class="prompt-pair zhuyin-target">
          <span class="char-zhuyin">${soundChars}</span>
          <span class="hanzi-ref">${char === " " ? "&nbsp;" : char}</span>
        </span>
      `;
    })
    .join("");
}

function renderPrompt() {
  const lesson = currentLesson();
  const item = currentItem();
  els.lessonName.textContent = lesson.name;
  els.progressText.textContent = `${state.itemIndex + 1} / ${lesson.items.length}`;
  els.zhuyinPrompt.textContent = "";
  els.targetPrompt.innerHTML = els.modeSelect.value === "zhuyin"
    ? renderZhuyinPairs(item)
    : renderHanziPairs(item);
  els.inputLabel.textContent = els.modeSelect.value === "zhuyin"
    ? "請直接打出上方注音符號與聲調"
    : "請用台灣繁體注音輸入法打出上方文字";
  updateComparison();
}

function startTimer() {
  if (state.startedAt) return;
  state.startedAt = Date.now();
  state.timerId = window.setInterval(updateStats, 500);
}

function stopTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function elapsedSeconds() {
  if (!state.startedAt) return 0;
  return Math.max(0, Math.floor((Date.now() - state.startedAt) / 1000));
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function updateStats() {
  const seconds = elapsedSeconds();
  const typed = state.totalTypedSnapshots + state.typedChars;
  const correct = state.totalCorrectSnapshots + state.correctChars;
  const accuracy = typed === 0 ? 100 : Math.round((correct / typed) * 100);
  const cpm = seconds === 0 ? 0 : Math.round((correct / seconds) * 60);
  els.accuracyStat.textContent = `${accuracy}%`;
  els.speedStat.textContent = cpm;
  els.timeStat.textContent = formatTime(seconds);
  els.streakStat.textContent = state.streak;
}

function modalStats() {
  const seconds = elapsedSeconds();
  const accuracy = state.totalTypedSnapshots === 0
    ? 100
    : Math.round((state.totalCorrectSnapshots / state.totalTypedSnapshots) * 100);
  const cpm = seconds === 0 ? 0 : Math.round((state.totalCorrectSnapshots / seconds) * 60);
  return { seconds, accuracy, cpm };
}

function showCompletionModal() {
  stopTimer();
  const stats = modalStats();
  els.modalAccuracy.textContent = `${stats.accuracy}%`;
  els.modalTime.textContent = formatTime(stats.seconds);
  els.modalSpeed.textContent = stats.cpm;
  els.modalCompleted.textContent = `${state.completedItems} / ${currentLesson().items.length}`;
  els.completionModal.hidden = false;
  els.nextSectionButton.disabled = lessons.length <= 1;
  els.nextSectionButton.focus();
}

function hideCompletionModal() {
  els.completionModal.hidden = true;
}

function commitCompletedItem() {
  state.totalTypedSnapshots += state.typedChars;
  state.totalCorrectSnapshots += state.correctChars;
  state.completedItems += 1;
}

function advanceAfterCompletion() {
  const lesson = currentLesson();
  if (state.itemIndex >= lesson.items.length - 1) {
    showCompletionModal();
    return;
  }

  state.autoAdvanceTimer = window.setTimeout(() => {
    state.itemIndex += 1;
    state.completed = false;
    state.typedChars = 0;
    state.correctChars = 0;
    els.typingInput.value = "";
    els.feedbackText.textContent = "已自動進入下一題。";
    renderPrompt();
    els.typingInput.focus();
  }, 650);
}

function updateComparison() {
  const target = currentTarget();
  const input = els.modeSelect.value === "zhuyin"
    ? normalizeZhuyin(els.typingInput.value)
    : els.typingInput.value;
  const chars = els.targetPrompt.querySelectorAll(".target-char");
  let correctNow = 0;
  let hasError = false;

  chars.forEach((node, index) => {
    node.classList.remove("correct", "wrong", "current");
    if (index === input.length && input !== target) node.classList.add("current");
    if (input[index] == null) return;
    if (input[index] === target[index]) {
      node.classList.add("correct");
      correctNow += 1;
    } else {
      node.classList.add("wrong");
      hasError = true;
    }
  });

  state.typedChars = input.length;
  state.correctChars = correctNow;

  els.typingInput.classList.toggle("has-error", hasError);

  if (input.length > 0) {
    els.feedbackText.textContent = hasError
      ? "有幾個字或注音不一致，回頭修一下就好。"
      : "目前都正確，保持節奏。";
  }

  if (input === target && !state.completed) {
    els.feedbackText.textContent = "完成！即將自動進入下一題。";
    state.streak += 1;
    state.completed = true;
    commitCompletedItem();
    advanceAfterCompletion();
  }

  updateStats();
}

function handleInput() {
  if (state.composing) return;
  startTimer();
  const target = currentTarget();
  const input = els.modeSelect.value === "zhuyin"
    ? normalizeZhuyin(els.typingInput.value)
    : els.typingInput.value;
  if (input !== target && input.length > 0) {
    state.streak = 0;
    state.completed = false;
    if (state.autoAdvanceTimer) {
      window.clearTimeout(state.autoAdvanceTimer);
      state.autoAdvanceTimer = null;
    }
  }
  updateComparison();
}

function resetRun(keepLesson = true) {
  stopTimer();
  if (state.autoAdvanceTimer) window.clearTimeout(state.autoAdvanceTimer);
  state.autoAdvanceTimer = null;
  state.startedAt = null;
  state.timerId = null;
  state.typedChars = 0;
  state.correctChars = 0;
  state.totalTypedSnapshots = 0;
  state.totalCorrectSnapshots = 0;
  state.completedItems = 0;
  state.streak = 0;
  state.completed = false;
  if (!keepLesson) state.itemIndex = 0;
  els.typingInput.value = "";
  els.feedbackText.textContent = "開始輸入後會自動計時。";
  hideCompletionModal();
  renderPrompt();
  updateStats();
  els.typingInput.focus();
}

function nextItem() {
  const lesson = currentLesson();
  if (state.itemIndex >= lesson.items.length - 1) {
    showCompletionModal();
    return;
  }
  if (state.autoAdvanceTimer) window.clearTimeout(state.autoAdvanceTimer);
  state.autoAdvanceTimer = null;
  state.itemIndex += 1;
  state.completed = false;
  state.typedChars = 0;
  state.correctChars = 0;
  els.typingInput.value = "";
  els.feedbackText.textContent = "新題目來了，穩穩打。";
  renderPrompt();
  els.typingInput.focus();
}

function moveToNextSection() {
  state.lessonIndex = (state.lessonIndex + 1) % lessons.length;
  state.itemIndex = 0;
  els.lessonSelect.value = String(state.lessonIndex);
  resetRun();
}

els.lessonSelect.addEventListener("change", () => {
  state.lessonIndex = Number(els.lessonSelect.value);
  state.itemIndex = 0;
  resetRun();
});

els.modeSelect.addEventListener("change", () => resetRun());
els.themeToggle.addEventListener("click", toggleTheme);
els.resetButton.addEventListener("click", () => resetRun());
els.nextButton.addEventListener("click", nextItem);
els.leaveButton.addEventListener("click", () => {
  hideCompletionModal();
  els.feedbackText.textContent = "挑戰已完成，可以選擇其他課程或重新開始。";
});
els.modalRestartButton.addEventListener("click", () => resetRun());
els.nextSectionButton.addEventListener("click", moveToNextSection);
els.typingInput.addEventListener("compositionstart", () => {
  state.composing = true;
});
els.typingInput.addEventListener("compositionend", () => {
  state.composing = false;
  handleInput();
});
els.typingInput.addEventListener("input", handleInput);
window.addEventListener("keydown", flashVirtualKey, { capture: true });

initTheme();
renderSelectors();
renderKeys();
renderPrompt();
updateStats();
initParticleBackground();
