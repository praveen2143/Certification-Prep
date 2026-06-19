# CertPath — Certification Learning System

A zero-dependency flashcard system. Works by double-clicking `index.html` —
no server, no build step, deployable to GitHub Pages as-is.

## Files

```
learning-system/
├── index.html   — App shell & study modal
├── style.css    — Dark theme styles
├── app.js       — All UI logic and study mode
└── data.js      — YOUR CONTENT — edit this to add certs, topics, cards
```

> No `data.json` anymore. Data lives in `data.js` as a plain JS variable
> (`CERT_DATA`), so the browser can load it without a server.

## How to run

Just open `index.html` in any browser. Double-click it. No setup needed.

For GitHub Pages: push all four files to any repo, enable Pages on the
branch root, and share the URL.

## How to add content — edit data.js

The entire `CERT_DATA` object in `data.js` is your database. Structure:

```js
const CERT_DATA = {
  "certifications": [
    {
      "id":              "my-cert",          // unique slug, no spaces
      "title":           "My Certification",
      "vendor":          "Vendor Name",
      "exam_code":       "XYZ-000",
      "color":           "#6DB33F",          // any hex color
      "icon":            "☘️",               // emoji shown in sidebar
      "status":          "active",           // "active" | "planned"
      "target_date":     "2025-12-01",       // ISO date, shows days-left
      "pass_score":      76,                 // percentage
      "total_questions": 60,
      "time_minutes":    130,
      "topics": [
        {
          "id":     "topic-slug",            // unique slug within cert
          "title":  "Topic Name",
          "weight": 20,                      // exam weight % (optional)
          "cards": [
            {
              "id":         "t1-001",        // GLOBALLY unique across all certs
              "question":   "What is X?",
              "answer":     "X is ...",
              "tags":       ["tag1", "tag2"],
              "difficulty": "beginner"       // beginner | intermediate | advanced
            }
          ]
        }
      ]
    }
  ]
};
```

**Rules:**
- Card `id` must be unique across ALL certifications (use prefixes like `sc-001`, `j21-001`, `aws-001`)
- Set `status: "planned"` for future certs — shows a placeholder, no cards needed
- Change `status` to `"active"` once you add topics

## Progress storage

Progress is saved in the browser's `localStorage`:
- `ls_known` — card IDs marked "Got it"
- `ls_learning` — card IDs marked "Not yet"

To reset: open DevTools → Application → Local Storage → delete `ls_known` and `ls_learning`.

## Keyboard shortcuts (Study Mode)

| Key     | Action        |
|---------|---------------|
| Space   | Reveal answer |
| Escape  | Close modal   |
