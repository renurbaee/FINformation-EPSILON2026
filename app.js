/**
 * FIN-formation Application Logic
 * National Statistics Infographic Competition (NSIC) - EPSILON UNP 2026
 * Pure Montserrat Typography, Zero Emoticons, Faithfully Matching FINformation UI
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // STATE MANAGEMENT
  // =========================================================================
  const state = {
    currentScreen: 'login-screen',
    selectedProvinceId: 'dki-jakarta',
    selectedProvinceIndex: 0,
    moduleSource: 'nav', // 'detail' or 'nav'
    activeModuleCluster: 3, // default DI Yogyakarta (Klaster 4)
    activeModuleProvinceName: 'DI Yogyakarta',
    searchFilter: 'all',
    searchQuery: '',
    quiz: {
      currentIndex: 0,
      score: 0,
      answered: false
    },
    completedModules: (() => {
      try {
        return JSON.parse(localStorage.getItem('fin_completed_modules') || '[]');
      } catch (e) {
        return [];
      }
    })()
  };

  // =========================================================================
  // DOM ELEMENTS
  // =========================================================================
  const screens = {
    login: document.getElementById('login-screen'),
    home: document.getElementById('home-screen'),
    province: document.getElementById('province-screen'),
    modules: document.getElementById('modules-screen'),
    profile: document.getElementById('profile-screen')
  };

  const bottomNav = document.getElementById('bottom-nav-bar');
  const navTabs = document.querySelectorAll('.nav-tab-item');

  // Modals
  const searchModal = document.getElementById('search-modal');
  const dsrModal = document.getElementById('calc-dsr-modal');
  const emergencyModal = document.getElementById('calc-emergency-modal');
  const quizModal = document.getElementById('quiz-modal');
  const readerModal = document.getElementById('module-reader-modal');

  // =========================================================================
  // SCREEN ROUTER
  // =========================================================================
  function switchScreen(targetScreenId) {
    // Hide all screens
    Object.values(screens).forEach(screen => {
      if (screen) screen.classList.remove('active');
    });

    // Show target screen
    const targetScreen = document.getElementById(targetScreenId);
    if (targetScreen) {
      targetScreen.classList.add('active');
      state.currentScreen = targetScreenId;
      targetScreen.scrollTop = 0;
      window.scrollTo(0, 0);
    }

    // Toggle bottom nav visibility
    // In FINformation mockup: bottom nav is only shown on Home, Modules, Profile
    // On Login and Detail Page, bottom nav is hidden!
    if (targetScreenId === 'login-screen' || targetScreenId === 'province-screen') {
      bottomNav.style.display = 'none';
    } else {
      bottomNav.style.display = 'flex';
      
      // Update nav button active states
      navTabs.forEach(tab => {
        if (tab.getAttribute('data-target') === targetScreenId) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });
    }
  }

  // =========================================================================
  // DISPLAY VIEWPORT TOGGLE (PHONE / DESKTOP FULLSCREEN)
  // =========================================================================
  // LOGIN SCREEN LOGIC (Matches FINformation - Login Page.png)
  // =========================================================================
  const loginForm = document.getElementById('login-form');
  const btnLoginSubmit = document.getElementById('btn-login-submit');
  const linkLoginDaftar = document.getElementById('link-login-daftar');
  const linkLoginForgot = document.getElementById('link-login-forgot');

  const inputLoginUsername = document.getElementById('input-login-username');
  const profileUserName = document.getElementById('profile-user-name');
  const profileDisplayFullname = document.getElementById('profile-display-fullname');

  function handleLogin(e) {
    if (e) e.preventDefault();
    if (inputLoginUsername && inputLoginUsername.value.trim()) {
      const enteredName = inputLoginUsername.value.trim();
      if (profileUserName) profileUserName.textContent = enteredName;
      if (profileDisplayFullname) profileDisplayFullname.textContent = enteredName;
    }
    switchScreen('home-screen');
  }

  if (loginForm) loginForm.addEventListener('submit', handleLogin);
  if (btnLoginSubmit) btnLoginSubmit.addEventListener('click', handleLogin);

  if (linkLoginDaftar) {
    linkLoginDaftar.addEventListener('click', (e) => {
      handleLogin(e);
    });
  }

  if (linkLoginForgot) {
    linkLoginForgot.addEventListener('click', (e) => {
      handleLogin(e);
    });
  }

  // =========================================================================
  // HOMEPAGE LOGIC (Matches FINformation - Homepage.png)
  // =========================================================================
  const btnKenaliDaerah = document.getElementById('btn-kenali-daerah');
  const bannerKenaliDaerah = document.getElementById('banner-kenali-daerah');

  function openProvinceDetail(provinceId) {
    if (provinceId) {
      const idx = PROVINCES_DATA.findIndex(p => p.id === provinceId);
      if (idx !== -1) {
        state.selectedProvinceIndex = idx;
        state.selectedProvinceId = provinceId;
      }
    }
    renderProvinceDetail();
    switchScreen('province-screen');
  }
  window.openProvinceDetail = openProvinceDetail;

  if (btnKenaliDaerah) {
    btnKenaliDaerah.addEventListener('click', (e) => {
      e.stopPropagation();
      openProvinceDetail(state.selectedProvinceId || 'dki-jakarta');
    });
  }

  if (bannerKenaliDaerah) {
    bannerKenaliDaerah.addEventListener('click', () => {
      openProvinceDetail(state.selectedProvinceId || 'dki-jakarta');
    });
  }

  // =========================================================================
  // DETAIL PAGE LOGIC (Matches FINformation - Detail Page.png)
  // =========================================================================
  const btnBackToHome = document.getElementById('btn-back-to-home');
  const btnGantiDaerah = document.getElementById('btn-ganti-daerah');
  const btnToModulesFromDetail = document.getElementById('btn-to-modules-from-detail');
  const btnBackFromModules = document.getElementById('btn-back-from-modules');

  if (btnBackToHome) {
    btnBackToHome.addEventListener('click', () => {
      switchScreen('home-screen');
    });
  }

  if (btnGantiDaerah) {
    btnGantiDaerah.addEventListener('click', () => {
      openSearchModal();
    });
  }

  if (btnToModulesFromDetail) {
    btnToModulesFromDetail.addEventListener('click', () => {
      const p = PROVINCES_DATA[state.selectedProvinceIndex] || PROVINCES_DATA[0];
      state.moduleSource = 'detail';
      state.activeModuleCluster = p.cluster;
      state.activeModuleProvinceName = p.nama;
      if (btnBackFromModules) btnBackFromModules.style.display = 'flex';
      renderModulesScreen();
      switchScreen('modules-screen');
    });
  }

  if (btnBackFromModules) {
    btnBackFromModules.addEventListener('click', () => {
      switchScreen('province-screen');
    });
  }

  function renderProvinceDetail() {
    const p = PROVINCES_DATA[state.selectedProvinceIndex] || PROVINCES_DATA[0];

    // Province banner elements
    const heroCard = document.getElementById('detail-hero-card');
    const heroName = document.getElementById('detail-prov-name');
    const clusterPill = document.getElementById('detail-cluster-pill');
    const clusterDesc = document.getElementById('detail-cluster-desc');

    // 6 Metrics elements
    const valPinjaman = document.getElementById('detail-val-pinjaman');
    const capPinjaman = document.getElementById('detail-cap-pinjaman');

    const valMerchant = document.getElementById('detail-val-merchant');
    const capMerchant = document.getElementById('detail-cap-merchant');

    const valTwp90 = document.getElementById('detail-val-twp90');
    const capTwp90 = document.getElementById('detail-cap-twp90');

    const valLiterasi = document.getElementById('detail-val-literasi');
    const capLiterasi = document.getElementById('detail-cap-literasi');

    const valInklusi = document.getElementById('detail-val-inklusi');
    const capInklusi = document.getElementById('detail-cap-inklusi');

    const valImdi = document.getElementById('detail-val-imdi');
    const capImdi = document.getElementById('detail-cap-imdi');

    // Narratives elements
    const insightText = document.getElementById('detail-insight-text');
    const kokBisa = document.getElementById('detail-kok-bisa');
    const harusApa = document.getElementById('detail-harus-apa');

    // Populate Banner
    if (heroCard && p.heroImage) {
      heroCard.style.backgroundImage = `url('${p.heroImage}')`;
    }
    if (heroName) heroName.textContent = p.nama;

    // Cluster Status Pill
    if (clusterPill) {
      clusterPill.textContent = p.clusterBadge || `Cluster ${p.cluster + 1}`;
      clusterPill.className = `detail-cluster-pill badge-c${p.cluster + 1}`;
    }

    // Standardized Cluster Explanations
    const clusterStandardDescs = {
      0: 'dikelompokkan ke dalam <strong>Klaster 1</strong>, yaitu wilayah dengan aktivitas transaksi keuangan digital dan tingkat literasi tinggi, namun memiliki risiko kredit bermasalah (TWP90) yang tinggi di atas ambang batas aman.',
      1: 'dikelompokkan ke dalam <strong>Klaster 2</strong>, yaitu wilayah dengan penetrasi layanan keuangan digital dan tingkat literasi yang masih dalam tahap berkembang.',
      2: 'dikelompokkan ke dalam <strong>Klaster 3</strong>, yaitu wilayah dengan aktivitas transaksi keuangan digital dan tingkat literasi kategori sedang, serta rasio kredit bermasalah yang tergolong aman.',
      3: 'dikelompokkan ke dalam <strong>Klaster 4</strong>, yaitu wilayah dengan aktivitas transaksi keuangan digital dan tingkat literasi tinggi, serta rasio kredit bermasalah yang terkendali aman.'
    };

    // Helper for interpreting metric values meaningfully (matching FINformation - Detail Page.png)
    function getMetricCaption(type, value) {
      if (type === 'pinjaman') {
        if (value >= 150) return 'Aktivitas peminjam aktif tergolong masif';
        if (value >= 80) return 'Aktivitas peminjam aktif tergolong tinggi';
        if (value >= 40) return 'Aktivitas peminjam aktif tergolong moderat';
        return 'Aktivitas peminjam aktif masih terbatas';
      }
      if (type === 'merchant') {
        if (value >= 200) return 'Ekosistem usaha digital tergolong prima';
        if (value >= 100) return 'Ekosistem usaha digital cukup berkembang';
        return 'Ekosistem usaha digital masih bertumbuh';
      }
      if (type === 'twp90') {
        if (value > 5.0) return 'Tingkat Kredit Macet tergolong kritis (>5%)';
        if (value >= 3.0) return 'Tingkat Kredit Macet tergolong waspada (3-5%)';
        return 'Tingkat Kredit Macet terkendali aman (<5%)';
      }
      if (type === 'literasi') {
        if (value >= 70.0) return 'Masyarakatnya sudah cakap keuangan';
        if (value >= 55.0) return 'Pemahaman produk keuangan tergolong moderat';
        return 'Pemahaman produk keuangan masih berkembang';
      }
      if (type === 'inklusi') {
        if (value >= 90.0) return 'Masyarakatnya sudah terinklusi secara keuangan';
        if (value >= 80.0) return 'Akses produk keuangan cukup luas';
        return 'Akses produk keuangan masih terbatas';
      }
      if (type === 'imdi') {
        if (value >= 50.0) return 'Masyarakatnya sudah cakap digital';
        if (value >= 42.0) return 'Keterampilan digital tergolong memadai';
        return 'Keterampilan digital masih perlu ditingkatkan';
      }
      return '';
    }

    // Cluster Description Paragraph (Uniform & Objective)
    if (clusterDesc) {
      const standardDesc = clusterStandardDescs[p.cluster] || clusterStandardDescs[2];
      clusterDesc.innerHTML = `<strong>Provinsi ${p.nama}</strong> ${standardDesc}`;
    }

    // 6 Metric Indicators (Formatted clean with uniform threshold explanations)
    if (valPinjaman) valPinjaman.textContent = p.rekeningPer1000.toFixed(2);
    if (capPinjaman) capPinjaman.textContent = getMetricCaption('pinjaman', p.rekeningPer1000);

    if (valMerchant) valMerchant.textContent = p.merchantPer1000.toFixed(2);
    if (capMerchant) capMerchant.textContent = getMetricCaption('merchant', p.merchantPer1000);

    if (valTwp90) valTwp90.textContent = `${p.twp90.toFixed(2)}%`;
    if (capTwp90) capTwp90.textContent = getMetricCaption('twp90', p.twp90);

    if (valLiterasi) valLiterasi.textContent = `${p.literasi.toFixed(2)}%`;
    if (capLiterasi) capLiterasi.textContent = getMetricCaption('literasi', p.literasi);

    if (valInklusi) valInklusi.textContent = `${p.inklusi.toFixed(2)}%`;
    if (capInklusi) capInklusi.textContent = getMetricCaption('inklusi', p.inklusi);

    if (valImdi) valImdi.textContent = p.skorImdi.toFixed(2);
    if (capImdi) capImdi.textContent = getMetricCaption('imdi', p.skorImdi);

    // Insight Box (Objective Statistical Summary)
    if (insightText) {
      const riskStatus = p.twp90 > 5.0
        ? 'Rasio kredit macet (TWP90) berada di atas ambang batas aman 5%, sehingga memerlukan pengawasan risiko kredit yang lebih ketat.'
        : 'Rasio kredit macet (TWP90) berada dalam kategori terkendali di bawah ambang batas waspada 5%.';

      insightText.innerHTML = `<strong>Provinsi ${p.nama}</strong> memiliki tingkat inklusi keuangan sebesar <strong>${p.inklusi.toFixed(2)}%</strong> dan tingkat literasi keuangan sebesar <strong>${p.literasi.toFixed(2)}%</strong>. Densitas merchant QRIS tercatat sebesar <strong>${p.merchantPer1000.toFixed(2)}</strong> per 1.000 penduduk dengan rasio pinjaman aktif sebesar <strong>${p.rekeningPer1000.toFixed(2)}</strong> per 1.000 penduduk. ${riskStatus}`;
    }

    // Two Comparison Cards
    if (kokBisa) kokBisa.textContent = p.akarMasalah || 'Akses fasilitas digital perlu diimbangi dengan kehati-hatian dalam mengelola arus kas bulanan.';
    if (harusApa) harusApa.textContent = p.rekomendasi || 'Batasi total cicilan maksimal 30% dari penghasilan bulanan dan hindari skema gali lubang tutup lubang.';
  }

  // =========================================================================
  // BOTTOM NAVIGATION TAB SWITCHING
  // =========================================================================
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');
      if (targetId) {
        if (targetId === 'modules-screen') {
          // Nav bar direct access: default to DI Yogyakarta (Klaster 4) & hide Back button
          state.moduleSource = 'nav';
          state.activeModuleCluster = 3;
          state.activeModuleProvinceName = 'DI Yogyakarta';
          if (btnBackFromModules) btnBackFromModules.style.display = 'none';
          renderModulesScreen();
        }
        switchScreen(targetId);
      }
    });
  });

  // Profile screen logout button
  const btnProfileLogout = document.getElementById('btn-profile-logout');
  if (btnProfileLogout) {
    btnProfileLogout.addEventListener('click', () => {
      switchScreen('login-screen');
    });
  }

  // =========================================================================
  // MODAL 1: GANTI DAERAH (38 PROVINSI)
  // =========================================================================
  const btnCloseSearch = document.getElementById('btn-close-search-modal');
  const searchInput = document.getElementById('input-province-search');
  const filterPills = document.querySelectorAll('.filter-pill');
  const provinceListContainer = document.getElementById('province-list-items');

  function updateFilterPillCounts() {
    const counts = { all: PROVINCES_DATA.length, 0: 0, 1: 0, 2: 0, 3: 0 };
    PROVINCES_DATA.forEach(p => {
      if (counts[p.cluster] !== undefined) {
        counts[p.cluster]++;
      }
    });

    filterPills.forEach(pill => {
      const f = pill.getAttribute('data-filter');
      if (f === 'all') pill.textContent = `Semua (${counts.all})`;
      else if (f === '0') pill.textContent = `Cluster 1 (${counts[0]})`;
      else if (f === '1') pill.textContent = `Cluster 2 (${counts[1]})`;
      else if (f === '2') pill.textContent = `Cluster 3 (${counts[2]})`;
      else if (f === '3') pill.textContent = `Cluster 4 (${counts[3]})`;
    });
  }

  function openSearchModal() {
    if (searchModal) {
      searchModal.classList.add('active');
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      state.searchFilter = 'all';
      state.searchQuery = '';
      updateFilterPillCounts();
      filterPills.forEach(pill => {
        if (pill.getAttribute('data-filter') === 'all') pill.classList.add('active');
        else pill.classList.remove('active');
      });
      renderProvinceList();
    }
  }

  function closeSearchModal() {
    if (searchModal) searchModal.classList.remove('active');
  }

  if (btnCloseSearch) btnCloseSearch.addEventListener('click', closeSearchModal);
  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearchModal();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderProvinceList();
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.searchFilter = pill.getAttribute('data-filter');
      renderProvinceList();
    });
  });

  function renderProvinceList() {
    if (!provinceListContainer) return;
    provinceListContainer.innerHTML = '';

    const filtered = PROVINCES_DATA.filter(p => {
      const matchQuery = p.nama.toLowerCase().includes(state.searchQuery);
      let matchCluster = true;
      if (state.searchFilter !== 'all') {
        matchCluster = String(p.cluster) === state.searchFilter;
      }
      return matchQuery && matchCluster;
    });

    if (filtered.length === 0) {
      provinceListContainer.innerHTML = `
        <div style="text-align: center; padding: 24px; color: #64748b; font-size: 12.5px;">
          Tidak ditemukan provinsi dengan kata kunci tersebut.
        </div>
      `;
      return;
    }

    filtered.forEach(p => {
      const item = document.createElement('div');
      item.className = 'prov-list-card';

      const cInfo = (typeof CLUSTERS_CONFIG !== 'undefined' && CLUSTERS_CONFIG[p.cluster]) 
        ? CLUSTERS_CONFIG[p.cluster] 
        : { color: '#2563eb', badgeLabel: `Cluster ${p.cluster + 1}` };
      const badgeBg = cInfo.color;
      const clusterName = cInfo.badgeLabel;

      item.innerHTML = `
        <div class="prov-card-left">
          <img src="${p.heroImage}" alt="${p.nama}" class="prov-thumb-img">
          <div class="prov-card-info">
            <h4>${p.nama}</h4>
            <span>TWP90: ${p.twp90.toFixed(2)}% &bull; Literasi: ${p.literasi.toFixed(1)}%</span>
          </div>
        </div>
        <div class="prov-card-badge" style="background-color: ${badgeBg};">
          ${clusterName}
        </div>
      `;

      item.addEventListener('click', () => {
        const fullIndex = PROVINCES_DATA.findIndex(itemProv => itemProv.id === p.id);
        state.selectedProvinceIndex = fullIndex !== -1 ? fullIndex : 0;
        state.selectedProvinceId = p.id;
        renderProvinceDetail();
        closeSearchModal();
        switchScreen('province-screen');
      });

      provinceListContainer.appendChild(item);
    });
  }

  // =========================================================================
  // MODUL SCREEN: CURRICULUM & MYTHS RENDERER
  // =========================================================================
  const curriculumListContainer = document.getElementById('curriculum-module-list');
  const mythsContainer = document.getElementById('myths-cards-container');

  function renderModulesScreen() {
    const clusterId = state.activeModuleCluster !== undefined ? state.activeModuleCluster : 3;
    const clusterConfig = (typeof ADAPTIVE_CLUSTER_MODULES !== 'undefined' && ADAPTIVE_CLUSTER_MODULES[clusterId])
      ? ADAPTIVE_CLUSTER_MODULES[clusterId]
      : null;

    // Update Adaptive Module Banner
    const bannerBadge = document.getElementById('adaptive-cluster-badge');
    const bannerSource = document.getElementById('adaptive-source-text');
    const bannerTitle = document.getElementById('adaptive-cluster-title');
    const bannerGoal = document.getElementById('adaptive-cluster-goal');

    if (clusterConfig) {
      if (bannerBadge) {
        bannerBadge.textContent = clusterConfig.clusterLabel;
        bannerBadge.className = `adaptive-cluster-badge ${clusterConfig.clusterBadgeClass}`;
      }
      if (bannerSource) {
        if (state.moduleSource === 'detail' && state.activeModuleProvinceName) {
          bannerSource.textContent = `Profil Rujukan: ${state.activeModuleProvinceName}`;
        } else {
          bannerSource.textContent = 'Rekomendasi Utama: DI Yogyakarta';
        }
      }
      if (bannerTitle) bannerTitle.textContent = clusterConfig.clusterTitle;
      if (bannerGoal) bannerGoal.textContent = clusterConfig.clusterGoal;
    }

    // Render Curriculum Modules
    if (curriculumListContainer) {
      curriculumListContainer.innerHTML = '';
      const modulesList = clusterConfig ? clusterConfig.modules : (typeof FINANCIAL_MODULES !== 'undefined' ? FINANCIAL_MODULES : []);
      
      modulesList.forEach((mod, idx) => {
        const card = document.createElement('div');
        card.className = 'module-item-card';
        card.innerHTML = `
          <div class="module-item-info">
            <div class="module-item-tag">Modul ${idx + 1} &bull; ${mod.category}</div>
            <div class="module-item-title">${mod.title}</div>
            ${mod.badge ? `<div class="module-item-time">${mod.badge}</div>` : ''}
          </div>
          <div class="module-item-arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        `;
        card.addEventListener('click', () => openModuleReader(mod));
        curriculumListContainer.appendChild(card);
      });
    }

    // Render Myths
    if (mythsContainer && typeof MYTHS_FACTS !== 'undefined') {
      mythsContainer.innerHTML = '';
      MYTHS_FACTS.forEach(item => {
        const mythCard = document.createElement('div');
        mythCard.className = 'myth-card-clean';
        mythCard.innerHTML = `
          <div class="myth-category-tag">${item.category}</div>
          <div class="myth-title-line">Mitos: ${item.myth}</div>
          <div class="fact-title-line">Fakta: ${item.fact}</div>
        `;
        mythsContainer.appendChild(mythCard);
      });
    }
  }
  renderModulesScreen();

  // Module Reader Modal
  const btnCloseReader = document.getElementById('btn-close-reader-modal');
  const readerTitle = document.getElementById('reader-module-title');
  const readerBody = document.getElementById('reader-module-body');

  function openModuleReader(moduleData) {
    if (readerModal && readerTitle && readerBody) {
      readerTitle.textContent = moduleData.title;
      let html = `<div class="reader-summary-box">${moduleData.summary}</div>`;
      if (moduleData.chapters) {
        moduleData.chapters.forEach(chap => {
          html += `
            <div class="reader-chapter-card">
              <h4 class="reader-chapter-title">${chap.title}</h4>
              <div class="reader-chapter-body">${chap.content}</div>
            </div>
          `;
        });
      }
      readerBody.innerHTML = html;
      readerBody.scrollTop = 0;
      readerModal.classList.add('active');
    }
  }

  if (btnCloseReader && readerModal) {
    btnCloseReader.addEventListener('click', () => readerModal.classList.remove('active'));
    readerModal.addEventListener('click', (e) => {
      if (e.target === readerModal) readerModal.classList.remove('active');
    });
  }

  // =========================================================================
  // MODAL 2: KALKULATOR DSR (30%)
  // =========================================================================
  const btnOpenDsr = document.getElementById('btn-open-dsr-calc');
  const btnCloseDsr = document.getElementById('btn-close-dsr-modal');
  const sliderDsrIncome = document.getElementById('dsr-income-slider');
  const sliderDsrDebt = document.getElementById('dsr-debt-slider');
  const dispDsrIncome = document.getElementById('disp-dsr-income');
  const dispDsrDebt = document.getElementById('disp-dsr-debt');
  const dsrResultVal = document.getElementById('dsr-result-val');
  const dsrResultStatus = document.getElementById('dsr-result-status');
  const dsrResultAdvice = document.getElementById('dsr-result-advice');

  if (btnOpenDsr && dsrModal) {
    btnOpenDsr.addEventListener('click', () => dsrModal.classList.add('active'));
  }
  if (btnCloseDsr && dsrModal) {
    btnCloseDsr.addEventListener('click', () => dsrModal.classList.remove('active'));
    dsrModal.addEventListener('click', (e) => {
      if (e.target === dsrModal) dsrModal.classList.remove('active');
    });
  }

  function updateDsrCalc() {
    if (!sliderDsrIncome || !sliderDsrDebt) return;
    const income = parseFloat(sliderDsrIncome.value);
    const debt = parseFloat(sliderDsrDebt.value);

    dispDsrIncome.textContent = `Rp ${income.toLocaleString('id-ID')}`;
    dispDsrDebt.textContent = `Rp ${debt.toLocaleString('id-ID')}`;

    const ratio = (debt / income) * 100;
    dsrResultVal.textContent = `${ratio.toFixed(2)}%`;

    if (ratio <= 30.0) {
      dsrResultStatus.className = 'calc-status-badge status-safe';
      dsrResultStatus.textContent = 'STATUS: SEHAT & AMAN (≤ 30%)';
      dsrResultAdvice.textContent = 'Bagus! Cicilan utang Anda masih dalam koridor aman finansial. Pertahankan disiplin ini.';
    } else if (ratio <= 50.0) {
      dsrResultStatus.className = 'calc-status-badge status-warning';
      dsrResultStatus.textContent = 'STATUS: WASPADA (31% - 50%)';
      dsrResultAdvice.textContent = 'Perhatian: Beban utang Anda mulai menekan arus kas. Hindari mengambil pinjaman baru atau PayLater.';
    } else {
      dsrResultStatus.className = 'calc-status-badge status-danger';
      dsrResultStatus.textContent = 'STATUS: BAHAYA KRITIS (> 50%)';
      dsrResultAdvice.textContent = 'Peringatan keras: Lebih dari separuh penghasilan habis untuk cicilan. Segera lakukan restrukturisasi utang.';
    }
  }

  if (sliderDsrIncome) sliderDsrIncome.addEventListener('input', updateDsrCalc);
  if (sliderDsrDebt) sliderDsrDebt.addEventListener('input', updateDsrCalc);

  // =========================================================================
  // MODAL 3: KALKULATOR DANA DARURAT
  // =========================================================================
  const btnOpenEmg = document.getElementById('btn-open-emergency-calc');
  const btnCloseEmg = document.getElementById('btn-close-emergency-modal');
  const sliderEmgExpense = document.getElementById('emg-expense-slider');
  const selectEmgStatus = document.getElementById('emg-status');
  const dispEmgExpense = document.getElementById('disp-emg-expense');
  const emgResultVal = document.getElementById('emg-result-val');

  if (btnOpenEmg && emergencyModal) {
    btnOpenEmg.addEventListener('click', () => emergencyModal.classList.add('active'));
  }
  if (btnCloseEmg && emergencyModal) {
    btnCloseEmg.addEventListener('click', () => emergencyModal.classList.remove('active'));
    emergencyModal.addEventListener('click', (e) => {
      if (e.target === emergencyModal) emergencyModal.classList.remove('active');
    });
  }

  function updateEmgCalc() {
    if (!sliderEmgExpense || !selectEmgStatus) return;
    const expense = parseFloat(sliderEmgExpense.value);
    const multiplier = parseFloat(selectEmgStatus.value);
    dispEmgExpense.textContent = `Rp ${expense.toLocaleString('id-ID')}`;

    const totalIdeal = expense * multiplier;
    emgResultVal.textContent = `Rp ${totalIdeal.toLocaleString('id-ID')}`;
  }

  if (sliderEmgExpense) sliderEmgExpense.addEventListener('input', updateEmgCalc);
  if (selectEmgStatus) selectEmgStatus.addEventListener('change', updateEmgCalc);

  // =========================================================================
  // MODAL 4: KUIS CERDAS FINANSIAL (EVALUASI PEMAHAMAN PENGETAHUAN)
  // =========================================================================
  const btnOpenQuiz = document.getElementById('btn-open-quiz');
  const btnCloseQuiz = document.getElementById('btn-close-quiz-modal');
  const quizQContainer = document.getElementById('quiz-question-container');
  const quizRContainer = document.getElementById('quiz-result-container');
  const quizProgressText = document.getElementById('quiz-progress-text');
  const quizScoreBadge = document.getElementById('quiz-score-badge');
  const quizQText = document.getElementById('quiz-question-text');
  const quizOptionsList = document.getElementById('quiz-options-list');
  const quizExpBox = document.getElementById('quiz-explanation-box');
  const quizFinalScore = document.getElementById('quiz-final-score');
  const quizCorrectCount = document.getElementById('quiz-correct-count');
  const quizLevelText = document.getElementById('quiz-level-text');
  const quizFinalFeedback = document.getElementById('quiz-final-feedback');
  const quizResultGradeTag = document.getElementById('quiz-result-grade-tag');
  const btnRetryQuiz = document.getElementById('btn-retry-quiz');
  const btnFinishQuiz = document.getElementById('btn-finish-quiz');

  function startQuiz() {
    state.quiz.currentIndex = 0;
    state.quiz.score = 0;
    state.quiz.answered = false;
    if (quizQContainer) quizQContainer.style.display = 'block';
    if (quizRContainer) quizRContainer.style.display = 'none';
    if (quizModal) quizModal.classList.add('active');
    renderQuizQuestion();
  }

  if (btnOpenQuiz) btnOpenQuiz.addEventListener('click', startQuiz);
  if (btnCloseQuiz && quizModal) {
    btnCloseQuiz.addEventListener('click', () => quizModal.classList.remove('active'));
    quizModal.addEventListener('click', (e) => {
      if (e.target === quizModal) quizModal.classList.remove('active');
    });
  }

  if (btnRetryQuiz) {
    btnRetryQuiz.addEventListener('click', startQuiz);
  }

  if (btnFinishQuiz && quizModal) {
    btnFinishQuiz.addEventListener('click', () => {
      quizModal.classList.remove('active');
    });
  }

  function renderQuizQuestion() {
    if (typeof QUIZ_QUESTIONS === 'undefined') return;
    const cur = QUIZ_QUESTIONS[state.quiz.currentIndex];
    state.quiz.answered = false;

    if (quizProgressText) quizProgressText.textContent = `Pertanyaan ${state.quiz.currentIndex + 1} dari ${QUIZ_QUESTIONS.length}`;
    if (quizScoreBadge) quizScoreBadge.textContent = `Skor: ${state.quiz.score}`;
    if (quizQText) quizQText.textContent = cur.question;
    if (quizExpBox) quizExpBox.style.display = 'none';

    if (quizOptionsList) {
      quizOptionsList.innerHTML = '';
      cur.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'module-item-card';
        btn.style.width = '100%';
        btn.style.textAlign = 'left';
        btn.style.padding = '10px 14px';
        btn.innerHTML = `<span style="font-weight: 600; font-size: 12.5px; color: #0d1e44;">${opt}</span>`;

        btn.addEventListener('click', () => {
          if (state.quiz.answered) return;
          state.quiz.answered = true;

          if (idx === cur.correctIndex) {
            btn.style.backgroundColor = '#dcfce7';
            btn.style.borderColor = '#16a34a';
            state.quiz.score += 20;
          } else {
            btn.style.backgroundColor = '#fee2e2';
            btn.style.borderColor = '#dc2626';
          }

          if (quizExpBox) {
            quizExpBox.innerHTML = `<strong>Pembahasan:</strong> ${cur.explanation}`;
            quizExpBox.style.display = 'block';
          }

          setTimeout(() => {
            state.quiz.currentIndex++;
            if (state.quiz.currentIndex < QUIZ_QUESTIONS.length) {
              renderQuizQuestion();
            } else {
              // Quiz Finished - Pure Knowledge Evaluation
              if (quizQContainer) quizQContainer.style.display = 'none';
              if (quizRContainer) quizRContainer.style.display = 'block';
              if (quizFinalScore) quizFinalScore.textContent = `${state.quiz.score} / 100`;

              const correctAnswers = Math.round(state.quiz.score / 20);
              if (quizCorrectCount) {
                quizCorrectCount.textContent = `${correctAnswers} dari ${QUIZ_QUESTIONS.length} Soal`;
              }

              if (state.quiz.score >= 80) {
                if (quizResultGradeTag) {
                  quizResultGradeTag.textContent = 'SANGAT CAKAP';
                  quizResultGradeTag.style.background = '#dcfce7';
                  quizResultGradeTag.style.color = '#166534';
                  quizResultGradeTag.style.borderColor = '#22c55e';
                }
                if (quizLevelText) quizLevelText.textContent = 'Sangat Tinggi (Literasi Unggul)';
                if (quizFinalFeedback) {
                  quizFinalFeedback.textContent = 'Luar biasa! Anda menguasai pemahaman manajemen rasio utang 30%, mitigasi pinjol ilegal CAMILAN, alokasi 50/30/20, dan rasio TWP90 dengan sangat matang.';
                }
              } else if (state.quiz.score >= 60) {
                if (quizResultGradeTag) {
                  quizResultGradeTag.textContent = 'CAKAP FINANSIAL';
                  quizResultGradeTag.style.background = '#fef3c7';
                  quizResultGradeTag.style.color = '#92400e';
                  quizResultGradeTag.style.borderColor = '#d97706';
                }
                if (quizLevelText) quizLevelText.textContent = 'Baik (Cukup Terampil)';
                if (quizFinalFeedback) {
                  quizFinalFeedback.textContent = 'Bagus! Wawasan keuangan Anda sudah baik, namun perhatikan kembali batasan rasio utang dan ciri-ciri pinjol legal vs ilegal agar proteksi finansial Anda semakin kuat.';
                }
              } else {
                if (quizResultGradeTag) {
                  quizResultGradeTag.textContent = 'PERLU PENGUATAN';
                  quizResultGradeTag.style.background = '#fee2e2';
                  quizResultGradeTag.style.color = '#991b1b';
                  quizResultGradeTag.style.borderColor = '#ef4444';
                }
                if (quizLevelText) quizLevelText.textContent = 'Perlu Belajar Lebih Lanjut';
                if (quizFinalFeedback) {
                  quizFinalFeedback.textContent = 'Yuk perdalam lagi pemahaman Anda melalui 5 Modul Pembelajaran Terstruktur di layar Modul untuk menghindari risiko jebakan finansial digital.';
                }
              }
            }
          }, 1800);
        });

        quizOptionsList.appendChild(btn);
      });
    }
  }
  // =========================================================================
  // PROFILE SCREEN QUICK PROVINCE LINK
  // =========================================================================
  const profileBtnViewDiy = document.getElementById('profile-btn-view-diy');
  if (profileBtnViewDiy) {
    profileBtnViewDiy.addEventListener('click', () => {
      openProvinceDetail('di-yogyakarta');
    });
  }

  // Initial render of default province (DKI Jakarta) & ensure start on login screen
  renderProvinceDetail();
  switchScreen('login-screen');
});
