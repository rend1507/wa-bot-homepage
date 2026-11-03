(() => {
  const STORAGE_KEY = "waPromoDemo.v2";

  const MENU_TEXT = [
    "MENU",
    "1. Jam operasional",
    "2. Alamat",
    "3. Bicara dengan staf",
    "",
    "Ketik angka 1, 2, atau 3.",
  ].join("\n");

  const SEED_THREADS = () => {
    const now = Date.now();
    return [
      {
        id: "t_main",
        phone: "+628110000001",
        short: "01",
        title: "Pengunjung Anda",
        mode: "bot",
        messages: [
          {
            id: "m0",
            role: "bot",
            text: `Halo. Saya bot demo.\n\n${MENU_TEXT}`,
            ts: now - 60000,
          },
        ],
      },
      {
        id: "t_sample_admin",
        phone: "+628110000002",
        short: "02",
        title: "Contoh · mode admin",
        mode: "admin",
        messages: [
          { id: "a1", role: "user", text: "Mau order untuk kantor.", ts: now - 86400000 },
          {
            id: "a2",
            role: "bot",
            text: "Baik. Untuk jumlah dan alamat pengiriman bisa disebutkan?",
            ts: now - 86300000,
          },
          { id: "a3", role: "user", text: "Ada diskon untuk pembelian banyak?", ts: now - 3600000 },
          {
            id: "a4",
            role: "system",
            text: "Anda terhubung dengan petugas. Mohon tunggu sebentar.",
            ts: now - 3500000,
          },
          { id: "a5", role: "staff", text: "Ya, untuk order kantor bisa kami hitung.", ts: now - 3400000 },
        ],
      },
      {
        id: "t_sample_bot",
        phone: "+628110000003",
        short: "03",
        title: "Contoh · mode bot",
        mode: "bot",
        messages: [
          { id: "b1", role: "user", text: "Jam buka hari ini?", ts: now - 7200000 },
          {
            id: "b2",
            role: "bot",
            text: "Senin–Jumat 08.00–16.00 WIB. Ketik MENU untuk pilihan lain.",
            ts: now - 7100000,
          },
          { id: "b3", role: "user", text: "Oke, nanti saya chat lagi.", ts: now - 7000000 },
        ],
      },
    ];
  };

  function uid(prefix) {
    return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;
  }

  function defaultState() {
    return {
      threads: SEED_THREADS(),
      activeId: "t_main",
      filter: "all",
      search: "",
    };
  }

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.threads) || parsed.threads.length === 0) {
        return defaultState();
      }
      return {
        threads: parsed.threads,
        activeId: parsed.activeId || parsed.threads[0].id,
        filter: parsed.filter || "all",
        search: parsed.search || "",
      };
    } catch {
      return defaultState();
    }
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  let state = load();

  const userLog = document.getElementById("user-log");
  const staffLog = document.getElementById("staff-log");
  const chatList = document.getElementById("chat-list");
  const formUser = document.getElementById("form-user");
  const inputUser = document.getElementById("input-user");
  const inputStaff = document.getElementById("input-staff");
  const btnReply = document.getElementById("btn-reply");
  const btnTakeover = document.getElementById("btn-takeover");
  const btnReturnBot = document.getElementById("btn-return-bot");
  const btnReset = document.getElementById("btn-reset");
  const threadHead = document.getElementById("thread-head");
  const threadName = document.getElementById("thread-name");
  const headMode = document.getElementById("head-mode");
  const modeBanner = document.getElementById("mode-banner");
  const searchInbox = document.getElementById("search-inbox");
  const paneUser = document.getElementById("pane-user");
  const paneInbox = document.getElementById("pane-inbox");
  const viewTabs = document.querySelectorAll(".view-switch .tab");
  const filterChips = document.querySelectorAll(".list-filters .chip");
  const nAll = document.getElementById("n-all");
  const nWait = document.getElementById("n-wait");
  const nAdmin = document.getElementById("n-admin");
  const nBot = document.getElementById("n-bot");

  function mainThread() {
    return state.threads.find((t) => t.id === "t_main") || state.threads[0];
  }

  function activeThread() {
    return state.threads.find((t) => t.id === state.activeId) || null;
  }

  function formatTime(ts) {
    try {
      return new Date(ts).toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return "";
    }
  }

  function roleLabel(role) {
    if (role === "user") return "Kontak";
    if (role === "staff") return "Admin";
    if (role === "system") return "Sistem";
    return "Bot";
  }

  function pushMsg(thread, role, text) {
    thread.messages.push({
      id: uid("m"),
      role,
      text,
      ts: Date.now(),
    });
  }

  function renderUserChat() {
    const thread = mainThread();
    userLog.innerHTML = "";
    thread.messages.forEach((msg) => {
      const wrap = document.createElement("div");
      wrap.className = `msg ${msg.role}`;
      const body = document.createElement("div");
      body.className = "body";
      body.textContent = msg.text;
      const meta = document.createElement("div");
      meta.className = "meta";
      meta.textContent = `${roleLabel(msg.role)} · ${formatTime(msg.ts)}`;
      wrap.append(body, meta);
      userLog.appendChild(wrap);
    });
    userLog.scrollTop = userLog.scrollHeight;
  }

  function counts() {
    let wait = 0;
    let admin = 0;
    let bot = 0;
    state.threads.forEach((t) => {
      if (t.mode === "wait") wait += 1;
      else if (t.mode === "admin") admin += 1;
      else bot += 1;
    });
    return { all: state.threads.length, wait, admin, bot };
  }

  function filteredThreads() {
    const q = state.search.trim().toLowerCase();
    return state.threads.filter((t) => {
      if (state.filter === "wait" && t.mode !== "wait") return false;
      if (state.filter === "admin" && t.mode !== "admin") return false;
      if (state.filter === "bot" && t.mode !== "bot") return false;
      if (!q) return true;
      const last = t.messages[t.messages.length - 1];
      const hay = `${t.phone} ${t.title} ${last ? last.text : ""}`.toLowerCase();
      return hay.includes(q);
    });
  }

  function renderList() {
    const c = counts();
    nAll.textContent = String(c.all);
    nWait.textContent = String(c.wait);
    nAdmin.textContent = String(c.admin);
    nBot.textContent = String(c.bot);

    filterChips.forEach((chip) => {
      const f = chip.getAttribute("data-filter");
      chip.classList.toggle("on", f === state.filter);
    });

    const rows = filteredThreads();
    chatList.innerHTML = "";

    if (rows.length === 0) {
      const empty = document.createElement("p");
      empty.className = "empty";
      empty.textContent = "Tidak ada chat di filter ini.";
      chatList.appendChild(empty);
      return;
    }

    rows.forEach((thread) => {
      const last = thread.messages[thread.messages.length - 1];
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `item st-${thread.mode}`;
      if (thread.id === state.activeId) btn.classList.add("active");

      const av = document.createElement("span");
      av.className = `avatar ${thread.mode}`;
      av.textContent = thread.short || "??";

      const main = document.createElement("div");
      main.className = "item-main";

      const top = document.createElement("div");
      top.className = "top-line";
      const wa = document.createElement("span");
      wa.className = "wa";
      wa.textContent = thread.phone;
      const time = document.createElement("span");
      time.className = "time";
      time.textContent = last ? formatTime(last.ts) : "";
      top.append(wa, time);

      const preview = document.createElement("p");
      preview.className = "preview";
      preview.textContent = last ? last.text.replace(/\s+/g, " ").slice(0, 72) : "Tanpa pesan";

      const pills = document.createElement("div");
      pills.className = "pills";
      const modePill = document.createElement("span");
      modePill.className = `pill ${thread.mode}`;
      modePill.textContent =
        thread.mode === "admin" ? "ADMIN" : thread.mode === "wait" ? "MENUNGGU" : "BOT";
      pills.appendChild(modePill);

      main.append(top, preview, pills);
      btn.append(av, main);
      btn.addEventListener("click", () => {
        state.activeId = thread.id;
        save();
        renderAll();
      });
      chatList.appendChild(btn);
    });
  }

  function setActionVisibility(takeover, returnBot) {
    btnTakeover.hidden = !takeover;
    btnTakeover.style.display = takeover ? "inline-flex" : "none";
    btnReturnBot.hidden = !returnBot;
    btnReturnBot.style.display = returnBot ? "inline-flex" : "none";
  }

  function setThreadChrome(thread) {
    if (!thread) {
      threadHead.className = "thread-head is-empty";
      threadName.textContent = "Pilih chat";
      headMode.textContent = "";
      modeBanner.hidden = true;
      modeBanner.textContent = "";
      setActionVisibility(false, false);
      inputStaff.disabled = true;
      btnReply.disabled = true;
      inputStaff.placeholder = "Pilih chat di kiri…";
      return;
    }

    threadName.textContent = thread.phone;
    const mode = thread.mode;
    threadHead.className = `thread-head is-${mode}`;

    if (mode === "admin") {
      headMode.textContent = "MODE ADMIN (MANUAL)";
      modeBanner.hidden = false;
      modeBanner.className = "mode-banner is-admin";
      modeBanner.innerHTML =
        '<span class="tag">ADMIN</span><span>Mode admin aktif. Bot tidak membalas otomatis di thread ini.</span>';
      setActionVisibility(false, true);
      inputStaff.disabled = false;
      btnReply.disabled = false;
      inputStaff.placeholder = "Ketik pesan admin…";
    } else if (mode === "wait") {
      headMode.textContent = "MENUNGGU STAF";
      modeBanner.hidden = false;
      modeBanner.className = "mode-banner is-wait";
      modeBanner.innerHTML =
        '<span class="tag">MENUNGGU</span><span>Pengunjung minta bicara dengan staf. Ambil alih untuk membalas.</span>';
      setActionVisibility(true, false);
      inputStaff.disabled = true;
      btnReply.disabled = true;
      inputStaff.placeholder = "Ambil alih dulu untuk membalas…";
    } else {
      headMode.textContent = "MODE BOT";
      modeBanner.hidden = false;
      modeBanner.className = "mode-banner is-bot";
      modeBanner.innerHTML =
        '<span class="tag">BOT</span><span>Bot menjawab otomatis. Ambil alih jika perlu balasan manual.</span>';
      setActionVisibility(true, false);
      inputStaff.disabled = true;
      btnReply.disabled = true;
      inputStaff.placeholder = "Ambil alih dulu untuk membalas…";
    }
  }

  function renderStaffChat() {
    const thread = activeThread();
    setThreadChrome(thread);
    staffLog.innerHTML = "";

    if (!thread) {
      const empty = document.createElement("p");
      empty.className = "empty";
      empty.textContent = "Pilih percakapan di daftar kiri.";
      staffLog.appendChild(empty);
      return;
    }

    thread.messages.forEach((msg) => {
      const wrap = document.createElement("div");
      wrap.className = `msg ${msg.role}`;
      const body = document.createElement("div");
      body.className = "body";
      body.textContent = msg.text;
      const meta = document.createElement("div");
      meta.className = "meta";
      meta.textContent = `${roleLabel(msg.role)} · ${formatTime(msg.ts)}`;
      wrap.append(body, meta);
      staffLog.appendChild(wrap);
    });
    staffLog.scrollTop = staffLog.scrollHeight;
  }

  function renderAll() {
    renderUserChat();
    renderList();
    renderStaffChat();
  }

  function normalize(text) {
    return text.trim().toLowerCase();
  }

  function botReply(raw) {
    const thread = mainThread();
    const n = normalize(raw);
    if (!n) return;

    pushMsg(thread, "user", raw.trim());

    if (n === "menu" || n === "0" || n === "help" || n === "bantuan") {
      pushMsg(thread, "bot", MENU_TEXT);
      finishUser();
      return;
    }

    if (
      n === "3" ||
      n.includes("staf") ||
      n.includes("admin") ||
      n.includes("manusia") ||
      n.includes("diskusidenganadmin")
    ) {
      if (thread.mode !== "admin") {
        thread.mode = "admin";
        pushMsg(thread, "system", "Anda terhubung dengan petugas. Mohon tunggu sebentar.");
      }
      state.activeId = thread.id;
      finishUser();
      return;
    }

    if (thread.mode === "admin" || thread.mode === "wait") {
      finishUser();
      return;
    }

    if (n === "1" || n.includes("jam")) {
      pushMsg(thread, "bot", "Jam operasional demo: Senin–Jumat 08.00–16.00 WIB.");
      finishUser();
      return;
    }

    if (n === "2" || n.includes("alamat") || n.includes("lokasi")) {
      pushMsg(thread, "bot", "Alamat demo: Jl. Contoh No. 1, Malang (data contoh).");
      finishUser();
      return;
    }

    pushMsg(
      thread,
      "bot",
      "Maaf, saya belum punya jawaban untuk itu.\nKetik MENU atau 3 untuk bicara dengan staf."
    );
    finishUser();
  }

  function finishUser() {
    save();
    renderAll();
  }

  formUser.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = inputUser.value;
    inputUser.value = "";
    botReply(value);
    inputUser.focus();
  });

  btnReply.addEventListener("click", () => {
    const thread = activeThread();
    const text = inputStaff.value.trim();
    if (!thread || thread.mode !== "admin" || !text) return;
    pushMsg(thread, "staff", text);
    inputStaff.value = "";
    save();
    renderAll();
  });

  inputStaff.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      btnReply.click();
    }
  });

  btnTakeover.addEventListener("click", () => {
    const thread = activeThread();
    if (!thread) return;
    thread.mode = "admin";
    pushMsg(thread, "system", "Anda terhubung dengan petugas. Mohon tunggu sebentar.");
    save();
    renderAll();
    inputStaff.focus();
  });

  btnReturnBot.addEventListener("click", () => {
    const thread = activeThread();
    if (!thread) return;
    thread.mode = "bot";
    pushMsg(thread, "system", "Anda terhubung kembali dengan asisten otomatis.");
    save();
    renderAll();
  });

  btnReset.addEventListener("click", () => {
    if (!confirm("Hapus data demo di perangkat ini dan mulai ulang?")) return;
    localStorage.removeItem(STORAGE_KEY);
    state = defaultState();
    save();
    renderAll();
  });

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      state.filter = chip.getAttribute("data-filter") || "all";
      save();
      renderList();
    });
  });

  searchInbox.addEventListener("input", () => {
    state.search = searchInbox.value;
    save();
    renderList();
  });

  function setMobileView(name) {
    const showUser = name === "user";
    viewTabs.forEach((tab) => {
      const on = tab.getAttribute("data-view") === name;
      tab.classList.toggle("is-active", on);
      tab.setAttribute("aria-selected", on ? "true" : "false");
    });
    paneUser.hidden = !showUser;
    paneUser.classList.toggle("is-on", showUser);
    paneInbox.hidden = showUser;
    paneInbox.classList.toggle("is-active", !showUser);
  }

  viewTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      setMobileView(tab.getAttribute("data-view") || "user");
    });
  });

  searchInbox.value = state.search || "";
  setMobileView("user");
  renderAll();
})();
