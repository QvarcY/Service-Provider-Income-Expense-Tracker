# Service Provider Finance Tracker

A privacy-friendly income and expense tracker for freelancers, sole traders, contractors and small service businesses.

This repository started as a tiny table-based income/expense experiment in 2024 and was later rebuilt into a practical browser-based finance tracker.

## Features

### Dashboard

- Total income
- Total expenses
- Net profit
- Profit margin
- Six-month income vs. expense chart
- Expense breakdown by category

### Transactions

- Add income and expenses
- Edit existing transactions
- Delete transactions
- Date, description, amount, category and notes
- Search transactions
- Filter by type
- Filter by category
- Filter by current month, current year, all time or a custom date range

### Data

- Automatic saving with `localStorage`
- CSV export
- CSV import
- No account required
- No backend
- No database
- Data remains in the user's browser unless exported

### Customization

- Custom currency symbol
- Custom income categories
- Custom expense categories
- Optional business/work name
- Latvian and English interface
- Light and dark themes
- Language and theme preferences are remembered

## Run locally

No build step or package manager is required.

```bash
git clone https://github.com/QvarcY/Service-Provider-Income-Expense-Tracker.git
cd Service-Provider-Income-Expense-Tracker
```

Open `index.html` directly in a browser or use the VS Code Live Server extension.

## CSV format

Exports use the following columns:

```text
date,type,description,category,amount,notes
```

`type` must be either:

```text
income
expense
```

The same format can be imported back into the application.

## Tech

- HTML5
- CSS3
- Vanilla JavaScript
- localStorage
- Blob API for CSV exports
- No framework
- No external dependencies

## Privacy

All finance data is stored locally in the browser. The application does not send transaction data to a server.

Clearing browser storage may permanently delete locally stored transactions, so regular CSV exports are recommended.

## Disclaimer

This application is a personal finance and business cash-flow tracking tool. It is not accounting, tax or legal software and should not be treated as a substitute for professional bookkeeping or statutory accounting records.
