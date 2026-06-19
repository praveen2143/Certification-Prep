/* =========================================================
   Learning System — app.js
   No server required. Data lives in data.js as CERT_DATA.
   ========================================================= */

/* ---- State ---- */
let DATA = null;
let activeCertId = null;
let studyQueue = [];
let studyIndex = 0;
let studyAnswerVisible = false;
let knownCards = new Set(JSON.parse(localStorage.getItem('ls_known') || '[]'));
let learningCards = new Set(JSON.parse(localStorage.getItem('ls_learning') || '[]'));
let searchQuery = '';
let diffFilter = 'all';

/* ---- Init ---- */
function init() {
  DATA = CERT_DATA;
  renderSidebar();
  loadCert(DATA.certifications[0].id);
}

/* ---- Sidebar ---- */
function renderSidebar() {
  const nav = document.getElementById('cert-nav');
  nav.innerHTML = '';
  DATA.certifications.forEach(cert => {
    const btn = document.createElement('button');
    btn.className = 'cert-nav-item' + (cert.id === activeCertId ? ' active' : '');
    btn.dataset.certId = cert.id;
    btn.innerHTML = `
      <span class="cert-nav-icon">${cert.icon}</span>
      <span class="cert-nav-info">
        <span class="cert-nav-title">${cert.title}</span>
        <span class="cert-nav-vendor">${cert.vendor} · ${cert.exam_code}</span>
      </span>
      <span class="cert-nav-badge badge-${cert.status}">${cert.status}</span>`;
    btn.onclick = () => loadCert(cert.id);
    nav.appendChild(btn);
  });
  renderOverallProgress();
}

function renderOverallProgress() {
  let total = 0, known = 0;
  DATA.certifications.forEach(c => { total += countCards(c); known += countKnown(c); });
  const pct = total > 0 ? Math.round(known / total * 100) : 0;
  document.getElementById('overall-fill').style.width = pct + '%';
  document.getElementById('overall-known').textContent = known;
  document.getElementById('overall-total').textContent = total;
  document.getElementById('overall-pct').textContent = pct + '%';
}

/* ---- Load Cert ---- */
function loadCert(certId) {
  activeCertId = certId;
  document.querySelectorAll('.cert-nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.certId === certId);
  });
  const cert = DATA.certifications.find(c => c.id === certId);
  if (!cert) return;
  diffFilter = 'all';
  searchQuery = '';
  document.getElementById('search-input').value = '';
  renderMain(cert);
}

/* ---- Render Main ---- */
function renderMain(cert) {
  const main = document.getElementById('main-content');
  if (cert.status === 'planned') {
    main.innerHTML = renderPlannedScreen(cert);
    return;
  }
  const totalCards = countCards(cert);
  const knownCount = countKnown(cert);
  const learningCount = countLearning(cert);
  const pct = totalCards > 0 ? Math.round(knownCount / totalCards * 100) : 0;
  const targetDays = daysUntil(cert.target_date);

  main.innerHTML = `
    <div class="cert-header">
      <div class="cert-header-icon">${cert.icon}</div>
      <div class="cert-header-info">
        <div class="cert-header-title">
          ${cert.title}
          <span class="cert-nav-badge badge-${cert.status}" style="font-size:11px">${cert.status}</span>
        </div>
        <div class="cert-header-meta">
          <span>📋 ${cert.exam_code}</span>
          <span>🏢 ${cert.vendor}</span>
          <span>⏱ ${cert.time_minutes} min</span>
          <span>📝 ${cert.total_questions} questions</span>
          <span>🎯 Pass: ${cert.pass_score}%</span>
          ${cert.target_date ? `<span>📅 ${targetDays >= 0 ? targetDays + ' days left' : 'Overdue'}</span>` : ''}
        </div>
      </div>
    </div>

    <div class="stat-grid">
      <div class="stat-card">
        <div class="stat-card-label">Total cards</div>
        <div class="stat-card-value">${totalCards}</div>
        <div class="stat-card-sub">${cert.topics.length} topics</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-label">Known</div>
        <div class="stat-card-value" style="color:var(--success)">${knownCount}</div>
        <div class="stat-card-sub">${pct}% mastered</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-label">Studying</div>
        <div class="stat-card-value" style="color:var(--warning)">${learningCount}</div>
        <div class="stat-card-sub">in progress</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-label">Remaining</div>
        <div class="stat-card-value" style="color:var(--text-secondary)">${totalCards - knownCount}</div>
        <div class="stat-card-sub">not studied</div>
      </div>
    </div>

    <div>
      <div class="section-header">
        <span class="section-title">Topics & Flashcards</span>
        <div class="section-actions">
          <button class="topbar-btn" onclick="openStudyMode('${cert.id}')">▶ Study All</button>
        </div>
      </div>
      <div class="filter-tabs" id="diff-filter">
        <button class="filter-tab active" onclick="setDiffFilter('all', this)">All</button>
        <button class="filter-tab" onclick="setDiffFilter('beginner', this)">Beginner</button>
        <button class="filter-tab" onclick="setDiffFilter('intermediate', this)">Intermediate</button>
        <button class="filter-tab" onclick="setDiffFilter('advanced', this)">Advanced</button>
      </div>
    </div>

    <div class="topic-list" id="topic-list">
      ${renderTopicList(cert)}
    </div>`;
}

function renderPlannedScreen(cert) {
  return `<div class="planned-screen">
    <div class="planned-icon">${cert.icon}</div>
    <div class="planned-title">${cert.title}</div>
    <div class="planned-sub">This certification is planned for the future. Topics and flashcards will appear here once you add content to <code>data.js</code>.</div>
    <div class="planned-badge">
      📅 Target: ${cert.target_date || 'TBD'} &nbsp;·&nbsp; ${cert.vendor} · ${cert.exam_code}
    </div>
  </div>`;
}

function renderTopicList(cert) {
  if (!cert.topics || cert.topics.length === 0) {
    return `<div class="empty-state">
      <div class="empty-state-icon">📂</div>
      <div class="empty-state-title">No topics yet</div>
      <div class="empty-state-sub">Add topics and cards to data.js to get started.</div>
    </div>`;
  }
  const colors = ['#7c85ff','#4caf7d','#f0a04b','#e05c5c','#a78bfa','#38bdf8','#fb7185','#34d399'];
  return cert.topics.map((topic, i) => {
    const filteredCards = filterCards(topic.cards || []);
    const total = topic.cards ? topic.cards.length : 0;
    const known = (topic.cards || []).filter(c => knownCards.has(c.id)).length;
    const pct = total > 0 ? Math.round(known / total * 100) : 0;
    const color = colors[i % colors.length];
    return `
      <div class="topic-card" id="topic-${topic.id}">
        <div class="topic-header" onclick="toggleTopic('${topic.id}')">
          <div class="topic-color-bar" style="background:${color}"></div>
          <div class="topic-header-info">
            <div class="topic-title">${topic.title}</div>
            <div class="topic-subtitle">${total} cards${topic.weight ? ' · ' + topic.weight + '% weight' : ''}</div>
          </div>
          <div class="topic-progress-wrap">
            <div class="topic-progress-track">
              <div class="topic-progress-fill" style="width:${pct}%;background:${color}"></div>
            </div>
            <div class="topic-progress-pct">${pct}%</div>
          </div>
          <svg class="topic-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
        <div class="cards-area">
          <div class="cards-toolbar">
            <span class="cards-count">${filteredCards.length} of ${total} cards shown</span>
            <button class="fc-btn fc-btn-know" onclick="openStudyMode('${cert.id}', '${topic.id}')">▶ Study topic</button>
          </div>
          <div class="card-stack">
            ${filteredCards.length > 0
              ? filteredCards.map(card => renderCard(card, cert.id)).join('')
              : '<div class="empty-state" style="padding:20px"><div class="empty-state-sub">No cards match the current filter.</div></div>'}
          </div>
        </div>
      </div>`;
  }).join('');
}

function renderCard(card, certId) {
  const statusClass = knownCards.has(card.id) ? 'known' : learningCards.has(card.id) ? 'learning' : '';
  const tags = (card.tags || []).map(t => `<span class="fc-tag">${t}</span>`).join('');
  return `
    <div class="flashcard ${statusClass}" id="fc-${card.id}" onclick="toggleCard('${card.id}')">
      <div class="fc-status"></div>
      ${tags ? `<div class="fc-tags">${tags}</div>` : ''}
      ${card.difficulty ? `<span class="fc-difficulty diff-${card.difficulty}">${card.difficulty}</span>` : ''}
      <div class="fc-question">${card.question}</div>
      <div class="fc-hint">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>
        </svg>
        click to reveal
      </div>
      <div class="fc-answer">${card.answer}</div>
      <div class="fc-actions" onclick="event.stopPropagation()">
        <button class="fc-btn fc-btn-know" onclick="markCard('${card.id}', true)">✓ Got it</button>
        <button class="fc-btn fc-btn-nope" onclick="markCard('${card.id}', false)">✗ Not yet</button>
      </div>
    </div>`;
}

/* ---- Card Interactions ---- */
function toggleCard(cardId) {
  const el = document.getElementById('fc-' + cardId);
  if (el) el.classList.toggle('revealed');
}

function markCard(cardId, isKnown) {
  if (isKnown) { knownCards.add(cardId); learningCards.delete(cardId); }
  else { learningCards.add(cardId); knownCards.delete(cardId); }
  saveProgress();
  const el = document.getElementById('fc-' + cardId);
  if (el) {
    el.classList.toggle('known', isKnown);
    el.classList.toggle('learning', !isKnown);
    el.classList.remove('revealed');
  }
  renderOverallProgress();
  refreshStats();
}

function refreshStats() {
  const cert = DATA.certifications.find(c => c.id === activeCertId);
  if (!cert || cert.status === 'planned') return;
  const totalCards = countCards(cert);
  const knownCount = countKnown(cert);
  const learningCount = countLearning(cert);
  const pct = totalCards > 0 ? Math.round(knownCount / totalCards * 100) : 0;
  const vals = document.querySelectorAll('.stat-card-value');
  const subs = document.querySelectorAll('.stat-card-sub');
  if (vals[1]) vals[1].textContent = knownCount;
  if (vals[2]) vals[2].textContent = learningCount;
  if (vals[3]) vals[3].textContent = totalCards - knownCount;
  if (subs[1]) subs[1].textContent = pct + '% mastered';
}

/* ---- Topic Toggle ---- */
function toggleTopic(topicId) {
  const el = document.getElementById('topic-' + topicId);
  if (el) el.classList.toggle('open');
}

/* ---- Filter & Search ---- */
function setDiffFilter(diff, btn) {
  diffFilter = diff;
  document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  refreshTopicList();
}

function onSearch(val) {
  searchQuery = val.toLowerCase();
  refreshTopicList();
}

function filterCards(cards) {
  return cards.filter(card => {
    const diffOk = diffFilter === 'all' || card.difficulty === diffFilter;
    const searchOk = !searchQuery ||
      card.question.toLowerCase().includes(searchQuery) ||
      card.answer.toLowerCase().includes(searchQuery) ||
      (card.tags || []).some(t => t.includes(searchQuery));
    return diffOk && searchOk;
  });
}

function refreshTopicList() {
  const cert = DATA.certifications.find(c => c.id === activeCertId);
  if (!cert) return;
  const list = document.getElementById('topic-list');
  if (!list) return;
  const openTopics = new Set([...document.querySelectorAll('.topic-card.open')].map(el => el.id.replace('topic-', '')));
  list.innerHTML = renderTopicList(cert);
  openTopics.forEach(id => {
    const el = document.getElementById('topic-' + id);
    if (el) el.classList.add('open');
  });
}

/* ---- Study Mode ---- */
function openStudyMode(certId, topicId = null) {
  const cert = DATA.certifications.find(c => c.id === certId);
  if (!cert) return;
  let cards = [];
  cert.topics.forEach(topic => {
    if (!topicId || topic.id === topicId) {
      (topic.cards || []).forEach(card => cards.push({ ...card, topicTitle: topic.title }));
    }
  });
  // prefer cards not yet known; fall back to all if all known
  const remaining = cards.filter(c => !knownCards.has(c.id));
  studyQueue = shuffleArray(remaining.length > 0 ? remaining : cards);
  studyIndex = 0;
  studyAnswerVisible = false;
  document.getElementById('study-modal').classList.add('open');
  renderStudyCard();
}

function renderStudyCard() {
  if (studyIndex >= studyQueue.length) {
    document.getElementById('study-q').textContent = 'All done! 🎉';
    document.getElementById('study-meta').textContent = `Completed ${studyQueue.length} cards`;
    document.getElementById('study-flip-btn').style.display = 'none';
    document.getElementById('study-answer').classList.remove('visible');
    document.getElementById('study-controls').innerHTML =
      `<button class="study-btn study-btn-skip" onclick="closeStudyMode()">Close</button>`;
    return;
  }
  const card = studyQueue[studyIndex];
  const pct = Math.round(studyIndex / studyQueue.length * 100);
  document.getElementById('study-progress-fill').style.width = pct + '%';
  document.getElementById('study-progress-label').textContent = `${studyIndex + 1} / ${studyQueue.length}`;
  document.getElementById('study-meta').textContent = card.topicTitle + (card.difficulty ? ' · ' + card.difficulty : '');
  document.getElementById('study-q').textContent = card.question;
  document.getElementById('study-answer').textContent = card.answer;
  document.getElementById('study-answer').classList.remove('visible');
  document.getElementById('study-flip-btn').style.display = 'block';
  document.getElementById('study-controls').innerHTML = `
    <button class="study-btn study-btn-know" onclick="studyMark(true)">✓ Got it</button>
    <button class="study-btn study-btn-nope" onclick="studyMark(false)">✗ Not yet</button>
    <button class="study-btn study-btn-skip" onclick="studySkip()">Skip</button>`;
  studyAnswerVisible = false;
}

function flipStudyCard() {
  studyAnswerVisible = true;
  document.getElementById('study-answer').classList.add('visible');
  document.getElementById('study-flip-btn').style.display = 'none';
}

function studyMark(isKnown) {
  markCard(studyQueue[studyIndex].id, isKnown);
  studyIndex++;
  renderStudyCard();
}

function studySkip() { studyIndex++; renderStudyCard(); }
function closeStudyMode() { document.getElementById('study-modal').classList.remove('open'); }

/* ---- Helpers ---- */
function countCards(cert) {
  return cert.topics.reduce((n, t) => n + (t.cards ? t.cards.length : 0), 0);
}
function countKnown(cert) {
  let n = 0;
  cert.topics.forEach(t => (t.cards || []).forEach(c => { if (knownCards.has(c.id)) n++; }));
  return n;
}
function countLearning(cert) {
  let n = 0;
  cert.topics.forEach(t => (t.cards || []).forEach(c => { if (learningCards.has(c.id)) n++; }));
  return n;
}
function daysUntil(dateStr) {
  if (!dateStr) return null;
  return Math.ceil((new Date(dateStr) - new Date()) / (1000 * 60 * 60 * 24));
}
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function saveProgress() {
  localStorage.setItem('ls_known', JSON.stringify([...knownCards]));
  localStorage.setItem('ls_learning', JSON.stringify([...learningCards]));
}

/* ---- Keyboard ---- */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeStudyMode();
  if (e.key === ' ' && document.getElementById('study-modal').classList.contains('open')) {
    e.preventDefault();
    if (!studyAnswerVisible) flipStudyCard();
  }
});

/* ---- Boot ---- */
init();
