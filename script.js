const STORAGE = {
  transactions: "serviceProviderFinanceTracker.transactions.v2",
  settings: "serviceProviderFinanceTracker.settings.v2",
  ui: "serviceProviderFinanceTracker.ui.v1"
};

const DEFAULT_SETTINGS = {
  currency: "€",
  businessName: "",
  incomeCategories: [
    "Services",
    "Product sales",
    "Delivery",
    "Consulting",
    "Other"
  ],
  expenseCategories: [
    "Materials",
    "Fuel / transport",
    "Tools",
    "Software",
    "Advertising",
    "Fees",
    "Other"
  ]
};

const TRANSLATIONS = {
  lv: {
    "app.title": "Finance Tracker",
    "actions.settings": "Iestatījumi",
    "actions.addTransaction": "Jauns darījums",
    "actions.importCsv": "Importēt CSV",
    "actions.exportCsv": "Eksportēt CSV",
    "actions.cancel": "Atcelt",
    "actions.saveTransaction": "Saglabāt darījumu",
    "actions.saveSettings": "Saglabāt iestatījumus",
    "actions.resetDefaults": "Atjaunot noklusējumu",
    "actions.deleteAllData": "Dzēst visus darījumus",

    "hero.eyebrow": "Mazā biznesa finanšu pārskats",
    "hero.title": "Redzi, ko nopelni — un kur nauda pazūd.",
    "hero.subtitle": "Vienkārša ienākumu un izdevumu uzskaite pašnodarbinātajiem, frīlanceriem un pakalpojumu sniedzējiem. Dati paliek tikai tavā pārlūkā.",

    "filters.period": "Periods",
    "filters.from": "No",
    "filters.to": "Līdz",
    "filters.search": "Meklēt...",
    "filters.allTypes": "Visi tipi",
    "filters.allCategories": "Visas kategorijas",

    "period.month": "Šis mēnesis",
    "period.year": "Šis gads",
    "period.all": "Viss periods",
    "period.custom": "Pielāgots",

    "summary.income": "Ienākumi",
    "summary.expenses": "Izdevumi",
    "summary.profit": "Peļņa",
    "summary.margin": "Peļņas marža",

    "analytics.cashflow": "Naudas plūsma",
    "analytics.monthly": "Pēdējie 6 mēneši",
    "analytics.expenses": "Izdevumu sadalījums",
    "analytics.categories": "Pēc kategorijām",
    "analytics.noData": "Šajā periodā nav pietiekami daudz datu.",

    "transactions.eyebrow": "Darījumu žurnāls",
    "transactions.title": "Ienākumi un izdevumi",

    "table.date": "Datums",
    "table.description": "Apraksts",
    "table.category": "Kategorija",
    "table.type": "Tips",
    "table.amount": "Summa",
    "table.actions": "Darbības",

    "types.income": "Ienākumi",
    "types.expense": "Izdevumi",

    "empty.title": "Nav atrasts neviens darījums",
    "empty.subtitle": "Pievieno pirmo darījumu vai maini filtrus.",

    "transaction.modalEyebrow": "Darījums",
    "transaction.newTitle": "Jauns darījums",
    "transaction.editTitle": "Labot darījumu",
    "transaction.date": "Datums",
    "transaction.amount": "Summa",
    "transaction.description": "Apraksts",
    "transaction.descriptionPlaceholder": "Piem., zāles pļaušana",
    "transaction.category": "Kategorija",
    "transaction.notes": "Piezīmes",
    "transaction.notesPlaceholder": "Papildu informācija...",

    "settings.eyebrow": "Lietotnes iestatījumi",
    "settings.title": "Iestatījumi",
    "settings.general": "Vispārīgi",
    "settings.currency": "Valūtas simbols",
    "settings.businessName": "Uzņēmuma / darba nosaukums",
    "settings.categories": "Kategorijas",
    "settings.categoriesHelp": "Viena kategorija katrā rindā. Izmaiņas neizdzēsīs kategoriju nosaukumus no jau saglabātiem darījumiem.",
    "settings.incomeCategories": "Ienākumu kategorijas",
    "settings.expenseCategories": "Izdevumu kategorijas",
    "settings.data": "Dati",
    "settings.dataHelp": "Eksportē datus pirms pārlūka datu dzēšanas vai pārcelšanās uz citu ierīci.",

    "theme.dark": "Tumšā tēma",
    "theme.light": "Gaišā tēma",

    "count.one": "1 darījums",
    "count.many": "{count} darījumi",

    "confirm.delete": "Dzēst šo darījumu?",
    "confirm.deleteAll": "Vai tiešām dzēst VISUS saglabātos darījumus? Šo darbību nevar atsaukt.",

    "toast.saved": "Darījums saglabāts.",
    "toast.updated": "Darījums atjaunināts.",
    "toast.deleted": "Darījums dzēsts.",
    "toast.settingsSaved": "Iestatījumi saglabāti.",
    "toast.defaultsRestored": "Atjaunoti noklusējuma iestatījumi.",
    "toast.allDeleted": "Visi darījumi dzēsti.",
    "toast.exported": "CSV fails sagatavots.",
    "toast.imported": "Importēti {count} darījumi.",
    "toast.importFailed": "CSV importēšana neizdevās.",

    "csv.date": "date",
    "csv.type": "type",
    "csv.description": "description",
    "csv.category": "category",
    "csv.amount": "amount",
    "csv.notes": "notes"
  },

  en: {
    "app.title": "Finance Tracker",
    "actions.settings": "Settings",
    "actions.addTransaction": "New transaction",
    "actions.importCsv": "Import CSV",
    "actions.exportCsv": "Export CSV",
    "actions.cancel": "Cancel",
    "actions.saveTransaction": "Save transaction",
    "actions.saveSettings": "Save settings",
    "actions.resetDefaults": "Restore defaults",
    "actions.deleteAllData": "Delete all transactions",

    "hero.eyebrow": "Small business finance overview",
    "hero.title": "See what you earn — and where the money goes.",
    "hero.subtitle": "Simple income and expense tracking for freelancers, sole traders and service providers. Your data stays in your browser.",

    "filters.period": "Period",
    "filters.from": "From",
    "filters.to": "To",
    "filters.search": "Search...",
    "filters.allTypes": "All types",
    "filters.allCategories": "All categories",

    "period.month": "This month",
    "period.year": "This year",
    "period.all": "All time",
    "period.custom": "Custom",

    "summary.income": "Income",
    "summary.expenses": "Expenses",
    "summary.profit": "Profit",
    "summary.margin": "Profit margin",

    "analytics.cashflow": "Cash flow",
    "analytics.monthly": "Last 6 months",
    "analytics.expenses": "Expense breakdown",
    "analytics.categories": "By category",
    "analytics.noData": "There is not enough data for this period.",

    "transactions.eyebrow": "Transaction journal",
    "transactions.title": "Income and expenses",

    "table.date": "Date",
    "table.description": "Description",
    "table.category": "Category",
    "table.type": "Type",
    "table.amount": "Amount",
    "table.actions": "Actions",

    "types.income": "Income",
    "types.expense": "Expense",

    "empty.title": "No transactions found",
    "empty.subtitle": "Add your first transaction or change the filters.",

    "transaction.modalEyebrow": "Transaction",
    "transaction.newTitle": "New transaction",
    "transaction.editTitle": "Edit transaction",
    "transaction.date": "Date",
    "transaction.amount": "Amount",
    "transaction.description": "Description",
    "transaction.descriptionPlaceholder": "e.g. lawn mowing",
    "transaction.category": "Category",
    "transaction.notes": "Notes",
    "transaction.notesPlaceholder": "Additional information...",

    "settings.eyebrow": "Application settings",
    "settings.title": "Settings",
    "settings.general": "General",
    "settings.currency": "Currency symbol",
    "settings.businessName": "Business / work name",
    "settings.categories": "Categories",
    "settings.categoriesHelp": "Use one category per line. Changing this list will not remove category names from existing transactions.",
    "settings.incomeCategories": "Income categories",
    "settings.expenseCategories": "Expense categories",
    "settings.data": "Data",
    "settings.dataHelp": "Export your data before clearing browser storage or moving to another device.",

    "theme.dark": "Dark theme",
    "theme.light": "Light theme",

    "count.one": "1 transaction",
    "count.many": "{count} transactions",

    "confirm.delete": "Delete this transaction?",
    "confirm.deleteAll": "Delete ALL saved transactions? This action cannot be undone.",

    "toast.saved": "Transaction saved.",
    "toast.updated": "Transaction updated.",
    "toast.deleted": "Transaction deleted.",
    "toast.settingsSaved": "Settings saved.",
    "toast.defaultsRestored": "Default settings restored.",
    "toast.allDeleted": "All transactions deleted.",
    "toast.exported": "CSV file prepared.",
    "toast.imported": "Imported {count} transactions.",
    "toast.importFailed": "CSV import failed.",

    "csv.date": "date",
    "csv.type": "type",
    "csv.description": "description",
    "csv.category": "category",
    "csv.amount": "amount",
    "csv.notes": "notes"
  }
};

let transactions = loadJson(STORAGE.transactions, []);
let settings = loadJson(STORAGE.settings, DEFAULT_SETTINGS);
let ui = loadJson(STORAGE.ui, {
  language: "lv",
  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
});

settings = normalizeSettings(settings);

const el = id => document.getElementById(id);
const money = value => `${Number(value).toFixed(2)} ${settings.currency}`;
const numberValue = value => Number.parseFloat(value) || 0;

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function normalizeSettings(value) {
  return {
    ...clone(DEFAULT_SETTINGS),
    ...value,
    incomeCategories: Array.isArray(value?.incomeCategories) && value.incomeCategories.length
      ? value.incomeCategories
      : clone(DEFAULT_SETTINGS.incomeCategories),
    expenseCategories: Array.isArray(value?.expenseCategories) && value.expenseCategories.length
      ? value.expenseCategories
      : clone(DEFAULT_SETTINGS.expenseCategories)
  };
}

function loadJson(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : clone(fallback);
  } catch {
    return clone(fallback);
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function t(key, replacements = {}) {
  let text = TRANSLATIONS[ui.language]?.[key] ?? TRANSLATIONS.lv[key] ?? key;

  Object.entries(replacements).forEach(([name, value]) => {
    text = text.replace(`{${name}}`, value);
  });

  return text;
}

function todayIso() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function uid() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function applyTheme() {
  document.documentElement.dataset.theme = ui.theme;
  el("themeToggleText").textContent = ui.theme === "light" ? t("theme.dark") : t("theme.light");
}

function applyLanguage() {
  document.documentElement.lang = ui.language;

  document.querySelectorAll("[data-i18n]").forEach(node => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(node => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });

  document.querySelectorAll(".language-option").forEach(button => {
    button.classList.toggle("active", button.dataset.lang === ui.language);
  });

  applyTheme();
  renderAll();
}

function openModal(backdrop) {
  backdrop.classList.remove("hidden");
  backdrop.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal(backdrop) {
  backdrop.classList.add("hidden");
  backdrop.setAttribute("aria-hidden", "true");

  if (
    el("transactionBackdrop").classList.contains("hidden") &&
    el("settingsBackdrop").classList.contains("hidden")
  ) {
    document.body.classList.remove("modal-open");
  }
}

function currentType() {
  return document.querySelector('input[name="transactionType"]:checked').value;
}

function getCategoriesForType(type) {
  return type === "income" ? settings.incomeCategories : settings.expenseCategories;
}

function renderTransactionCategoryOptions(selected = "") {
  const type = currentType();
  const categories = [...getCategoriesForType(type)];

  if (selected && !categories.includes(selected)) {
    categories.push(selected);
  }

  el("transactionCategory").innerHTML = categories
    .map(category => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`)
    .join("");

  if (selected) {
    el("transactionCategory").value = selected;
  }
}

function allKnownCategories() {
  return [...new Set([
    ...settings.incomeCategories,
    ...settings.expenseCategories,
    ...transactions.map(item => item.category).filter(Boolean)
  ])].sort((a, b) => a.localeCompare(b));
}

function renderCategoryFilter() {
  const selected = el("categoryFilter").value || "all";
  const categories = allKnownCategories();

  el("categoryFilter").innerHTML =
    `<option value="all">${escapeHtml(t("filters.allCategories"))}</option>` +
    categories.map(category =>
      `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`
    ).join("");

  if (selected === "all" || categories.includes(selected)) {
    el("categoryFilter").value = selected;
  }
}

function getPeriodBounds() {
  const value = el("periodSelect").value;
  const now = new Date();

  if (value === "all") {
    return { from: null, to: null };
  }

  if (value === "custom") {
    return {
      from: el("dateFrom").value || null,
      to: el("dateTo").value || null
    };
  }

  if (value === "year") {
    return {
      from: `${now.getFullYear()}-01-01`,
      to: `${now.getFullYear()}-12-31`
    };
  }

  const month = String(now.getMonth() + 1).padStart(2, "0");
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

  return {
    from: `${now.getFullYear()}-${month}-01`,
    to: `${now.getFullYear()}-${month}-${lastDay}`
  };
}

function withinPeriod(transaction) {
  const { from, to } = getPeriodBounds();

  if (from && transaction.date < from) return false;
  if (to && transaction.date > to) return false;

  return true;
}

function filteredTransactions() {
  const search = el("searchInput").value.trim().toLowerCase();
  const type = el("typeFilter").value;
  const category = el("categoryFilter").value;

  return transactions
    .filter(withinPeriod)
    .filter(item => type === "all" || item.type === type)
    .filter(item => category === "all" || item.category === category)
    .filter(item => {
      if (!search) return true;

      return [
        item.description,
        item.category,
        item.notes,
        item.date
      ].some(value => String(value || "").toLowerCase().includes(search));
    })
    .sort((a, b) => b.date.localeCompare(a.date) || b.createdAt - a.createdAt);
}

function periodTransactions() {
  return transactions.filter(withinPeriod);
}

function calculateSummary(items) {
  const income = items
    .filter(item => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);

  const expenses = items
    .filter(item => item.type === "expense")
    .reduce((sum, item) => sum + item.amount, 0);

  const profit = income - expenses;
  const margin = income > 0 ? (profit / income) * 100 : 0;

  return { income, expenses, profit, margin };
}

function renderSummary() {
  const summary = calculateSummary(periodTransactions());

  el("summaryIncome").textContent = money(summary.income);
  el("summaryExpenses").textContent = money(summary.expenses);
  el("summaryProfit").textContent = money(summary.profit);
  el("summaryMargin").textContent = `${summary.margin.toFixed(1)}%`;

  el("summaryProfit").style.color = summary.profit < 0 ? "var(--expense)" : "";
}

function renderTransactions() {
  const items = filteredTransactions();
  const body = el("transactionBody");

  body.innerHTML = items.map(item => {
    const sign = item.type === "income" ? "+" : "−";
    const note = item.notes
      ? `<small title="${escapeHtml(item.notes)}">${escapeHtml(item.notes)}</small>`
      : "";

    return `
      <tr>
        <td>${escapeHtml(item.date)}</td>
        <td class="transaction-description">
          <strong>${escapeHtml(item.description)}</strong>
          ${note}
        </td>
        <td>${escapeHtml(item.category)}</td>
        <td>
          <span class="type-badge ${item.type}">${escapeHtml(t(`types.${item.type}`))}</span>
        </td>
        <td class="align-right amount-cell ${item.type}">
          ${sign}${escapeHtml(money(item.amount))}
        </td>
        <td class="actions-column">
          <div class="row-actions">
            <button class="row-action" type="button" data-action="edit" data-id="${item.id}" title="Edit">✎</button>
            <button class="row-action" type="button" data-action="delete" data-id="${item.id}" title="Delete">×</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");

  el("emptyState").classList.toggle("hidden", items.length !== 0);
  body.parentElement.classList.toggle("hidden", items.length === 0);

  el("transactionCount").textContent = items.length === 1
    ? t("count.one")
    : t("count.many", { count: items.length });
}

function monthKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function renderMonthlyChart() {
  const now = new Date();
  const months = [];

  for (let i = 5; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);

    months.push({
      key: monthKey(date),
      label: new Intl.DateTimeFormat(ui.language === "lv" ? "lv-LV" : "en-GB", {
        month: "short"
      }).format(date),
      income: 0,
      expense: 0
    });
  }

  const lookup = Object.fromEntries(months.map(month => [month.key, month]));

  transactions.forEach(item => {
    const key = item.date.slice(0, 7);

    if (lookup[key]) {
      lookup[key][item.type] += item.amount;
    }
  });

  const max = Math.max(
    1,
    ...months.flatMap(month => [month.income, month.expense])
  );

  el("monthlyChart").innerHTML = months.map(month => {
    const incomeHeight = Math.max(2, (month.income / max) * 100);
    const expenseHeight = Math.max(2, (month.expense / max) * 100);

    return `
      <div class="month-group">
        <div class="bar-area">
          <div
            class="chart-bar income"
            style="height:${incomeHeight}%"
            title="${escapeHtml(money(month.income))}"
          ></div>
          <div
            class="chart-bar expense"
            style="height:${expenseHeight}%"
            title="${escapeHtml(money(month.expense))}"
          ></div>
        </div>
        <div class="month-label">${escapeHtml(month.label)}</div>
      </div>
    `;
  }).join("");
}

function renderExpenseCategories() {
  const expenses = periodTransactions().filter(item => item.type === "expense");

  const totals = expenses.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + item.amount;
    return acc;
  }, {});

  const rows = Object.entries(totals)
    .sort((a, b) => b[1] - a[1]);

  if (!rows.length) {
    el("expenseCategories").innerHTML =
      `<div class="chart-empty">${escapeHtml(t("analytics.noData"))}</div>`;
    return;
  }

  const max = rows[0][1];

  el("expenseCategories").innerHTML = rows.slice(0, 6).map(([category, amount]) => `
    <div class="category-row">
      <div class="category-row-header">
        <span>${escapeHtml(category)}</span>
        <strong>${escapeHtml(money(amount))}</strong>
      </div>
      <div class="category-track">
        <div class="category-fill" style="width:${(amount / max) * 100}%"></div>
      </div>
    </div>
  `).join("");
}

function renderAll() {
  renderCategoryFilter();
  renderSummary();
  renderTransactions();
  renderMonthlyChart();
  renderExpenseCategories();

  el("currencyUnit").textContent = settings.currency;
  document.title = settings.businessName
    ? `${settings.businessName} — Service Provider Finance Tracker`
    : "Service Provider Finance Tracker";
}

function showToast(message) {
  const toast = el("toast");
  toast.textContent = message;
  toast.classList.remove("hidden");

  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.add("hidden"), 2600);
}

function openNewTransaction() {
  el("transactionForm").reset();
  el("transactionId").value = "";
  el("transactionDate").value = todayIso();
  document.querySelector('input[name="transactionType"][value="income"]').checked = true;
  el("transactionModalTitle").textContent = t("transaction.newTitle");
  renderTransactionCategoryOptions();
  openModal(el("transactionBackdrop"));
  el("transactionDescription").focus();
}

function openEditTransaction(id) {
  const item = transactions.find(transaction => transaction.id === id);
  if (!item) return;

  el("transactionId").value = item.id;
  el("transactionDate").value = item.date;
  el("transactionAmount").value = item.amount;
  el("transactionDescription").value = item.description;
  el("transactionNotes").value = item.notes || "";
  document.querySelector(`input[name="transactionType"][value="${item.type}"]`).checked = true;

  renderTransactionCategoryOptions(item.category);

  el("transactionModalTitle").textContent = t("transaction.editTitle");
  openModal(el("transactionBackdrop"));
}

function saveTransaction(event) {
  event.preventDefault();

  const id = el("transactionId").value;
  const existing = transactions.find(item => item.id === id);

  const transaction = {
    id: id || uid(),
    date: el("transactionDate").value,
    type: currentType(),
    description: el("transactionDescription").value.trim(),
    category: el("transactionCategory").value,
    amount: numberValue(el("transactionAmount").value),
    notes: el("transactionNotes").value.trim(),
    createdAt: existing?.createdAt || Date.now(),
    updatedAt: Date.now()
  };

  if (
    !transaction.date ||
    !transaction.description ||
    !transaction.category ||
    transaction.amount <= 0
  ) {
    el("transactionForm").reportValidity();
    return;
  }

  if (existing) {
    transactions = transactions.map(item => item.id === id ? transaction : item);
  } else {
    transactions.push(transaction);
  }

  saveJson(STORAGE.transactions, transactions);
  closeModal(el("transactionBackdrop"));
  renderAll();
  showToast(t(existing ? "toast.updated" : "toast.saved"));
}

function deleteTransaction(id) {
  if (!confirm(t("confirm.delete"))) return;

  transactions = transactions.filter(item => item.id !== id);
  saveJson(STORAGE.transactions, transactions);
  renderAll();
  showToast(t("toast.deleted"));
}

function populateSettingsForm() {
  el("settingCurrency").value = settings.currency;
  el("settingBusinessName").value = settings.businessName || "";
  el("settingIncomeCategories").value = settings.incomeCategories.join("\n");
  el("settingExpenseCategories").value = settings.expenseCategories.join("\n");
}

function cleanCategoryLines(value) {
  return [...new Set(
    value
      .split(/\r?\n/)
      .map(item => item.trim())
      .filter(Boolean)
  )];
}

function saveSettings(event) {
  event.preventDefault();

  const incomeCategories = cleanCategoryLines(el("settingIncomeCategories").value);
  const expenseCategories = cleanCategoryLines(el("settingExpenseCategories").value);

  settings = {
    currency: el("settingCurrency").value.trim() || "€",
    businessName: el("settingBusinessName").value.trim(),
    incomeCategories: incomeCategories.length ? incomeCategories : clone(DEFAULT_SETTINGS.incomeCategories),
    expenseCategories: expenseCategories.length ? expenseCategories : clone(DEFAULT_SETTINGS.expenseCategories)
  };

  saveJson(STORAGE.settings, settings);
  closeModal(el("settingsBackdrop"));
  renderAll();
  showToast(t("toast.settingsSaved"));
}

function csvEscape(value) {
  const string = String(value ?? "");

  if (/[",\n\r]/.test(string)) {
    return `"${string.replaceAll('"', '""')}"`;
  }

  return string;
}

function exportCsv() {
  const headers = ["date", "type", "description", "category", "amount", "notes"];

  const lines = [
    headers.join(","),
    ...transactions
      .slice()
      .sort((a, b) => a.date.localeCompare(b.date))
      .map(item => headers.map(key => csvEscape(item[key])).join(","))
  ];

  const blob = new Blob(["\uFEFF" + lines.join("\n")], {
    type: "text/csv;charset=utf-8"
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `finance-tracker-${todayIso()}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);

  showToast(t("toast.exported"));
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (inQuotes) {
      if (char === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
    } else if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field.replace(/\r$/, ""));
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }

  row.push(field.replace(/\r$/, ""));
  if (row.some(value => value !== "")) rows.push(row);

  return rows;
}

async function importCsvFile(file) {
  try {
    const text = (await file.text()).replace(/^\uFEFF/, "");
    const rows = parseCsv(text);

    if (rows.length < 2) throw new Error("No data");

    const headers = rows[0].map(header => header.trim().toLowerCase());
    const required = ["date", "type", "description", "category", "amount"];

    if (!required.every(header => headers.includes(header))) {
      throw new Error("Missing headers");
    }

    const imported = rows.slice(1).map(row => {
      const record = Object.fromEntries(headers.map((header, index) => [header, row[index] ?? ""]));
      const type = record.type.trim().toLowerCase();

      if (!["income", "expense"].includes(type)) return null;

      const amount = numberValue(record.amount);
      if (!record.date || !record.description || !record.category || amount <= 0) return null;

      return {
        id: uid(),
        date: record.date,
        type,
        description: record.description.trim(),
        category: record.category.trim(),
        amount,
        notes: (record.notes || "").trim(),
        createdAt: Date.now(),
        updatedAt: Date.now()
      };
    }).filter(Boolean);

    if (!imported.length) throw new Error("No valid rows");

    transactions.push(...imported);
    saveJson(STORAGE.transactions, transactions);
    renderAll();
    showToast(t("toast.imported", { count: imported.length }));
  } catch (error) {
    console.error(error);
    showToast(t("toast.importFailed"));
  } finally {
    el("csvFileInput").value = "";
  }
}

function resetSettings() {
  settings = clone(DEFAULT_SETTINGS);
  saveJson(STORAGE.settings, settings);
  populateSettingsForm();
  renderAll();
  showToast(t("toast.defaultsRestored"));
}

function deleteAllTransactions() {
  if (!confirm(t("confirm.deleteAll"))) return;

  transactions = [];
  saveJson(STORAGE.transactions, transactions);
  renderAll();
  showToast(t("toast.allDeleted"));
}

el("openTransaction").addEventListener("click", openNewTransaction);

document.querySelectorAll(".close-transaction").forEach(button => {
  button.addEventListener("click", () => closeModal(el("transactionBackdrop")));
});

el("transactionBackdrop").addEventListener("click", event => {
  if (event.target === el("transactionBackdrop")) {
    closeModal(el("transactionBackdrop"));
  }
});

el("transactionForm").addEventListener("submit", saveTransaction);

document.querySelectorAll('input[name="transactionType"]').forEach(input => {
  input.addEventListener("change", () => renderTransactionCategoryOptions());
});

el("transactionBody").addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  if (button.dataset.action === "edit") {
    openEditTransaction(button.dataset.id);
  }

  if (button.dataset.action === "delete") {
    deleteTransaction(button.dataset.id);
  }
});

el("openSettings").addEventListener("click", () => {
  populateSettingsForm();
  openModal(el("settingsBackdrop"));
});

el("closeSettings").addEventListener("click", () => closeModal(el("settingsBackdrop")));

el("settingsBackdrop").addEventListener("click", event => {
  if (event.target === el("settingsBackdrop")) {
    closeModal(el("settingsBackdrop"));
  }
});

el("settingsForm").addEventListener("submit", saveSettings);
el("resetSettings").addEventListener("click", resetSettings);
el("deleteAllData").addEventListener("click", deleteAllTransactions);

el("themeToggle").addEventListener("click", () => {
  ui.theme = ui.theme === "light" ? "dark" : "light";
  saveJson(STORAGE.ui, ui);
  applyTheme();
});

document.querySelectorAll(".language-option").forEach(button => {
  button.addEventListener("click", () => {
    ui.language = button.dataset.lang;
    saveJson(STORAGE.ui, ui);
    applyLanguage();
  });
});

el("periodSelect").addEventListener("change", () => {
  el("customPeriod").classList.toggle("hidden", el("periodSelect").value !== "custom");
  renderAll();
});

["dateFrom", "dateTo", "searchInput", "typeFilter", "categoryFilter"].forEach(id => {
  el(id).addEventListener(id === "searchInput" ? "input" : "change", renderAll);
});

el("exportCsv").addEventListener("click", exportCsv);
el("importCsv").addEventListener("click", () => el("csvFileInput").click());
el("csvFileInput").addEventListener("change", event => {
  const file = event.target.files?.[0];
  if (file) importCsvFile(file);
});

document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;

  if (!el("transactionBackdrop").classList.contains("hidden")) {
    closeModal(el("transactionBackdrop"));
  } else if (!el("settingsBackdrop").classList.contains("hidden")) {
    closeModal(el("settingsBackdrop"));
  }
});

applyTheme();
applyLanguage();
