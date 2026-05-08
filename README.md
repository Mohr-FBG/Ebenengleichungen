# ARES-7 · Mathematik EscapeRoom
## Ebenen im Raum — GitHub Pages Website

Dieser EscapeRoom ist eine interaktive Mathematik-Lernwebsite für den 
Leistungskurs Q1 zum Thema **Ebenen im Raum**.

### Dateien

| Datei | Inhalt |
|-------|--------|
| `index.html` | Startseite / Missionsübersicht |
| `station1.html` | Station 1: Ebenengleichung aufstellen |
| `station2.html` | Station 2: Lage Punkt/Gerade zur Ebene |
| `station3.html` | Station 3: Schnittgerade zweier Ebenen |
| `station4.html` | Station 4: Abstand Punkt–Ebene (HNF) |
| `finales.html` | Finale: Code-Eingabe & Freischaltung |
| `shared.css` | Gemeinsame Styles |
| `shared.js` | Gemeinsames JavaScript (Starfield, Spoiler) |

### Freischaltcodes (für Lehrkräfte)

- Station 01: **ALPHA**
- Station 02: **BETA**
- Station 03: **GAMMA**
- Station 04: **DELTA**

---

## GitHub Pages Einrichtung (Schritt-für-Schritt)

### 1. GitHub-Konto & Repository erstellen

1. Falls noch nicht vorhanden: Konto auf [github.com](https://github.com) erstellen.
2. Oben rechts auf **„+"** klicken → **„New repository"**.
3. Repository-Name eingeben, z.B. `ares7-escaperoom`.
4. **„Public"** wählen (für GitHub Pages kostenlos erforderlich).
5. Auf **„Create repository"** klicken.

### 2. Dateien hochladen

**Option A — Direkt im Browser (einfachste Methode):**

1. Im neu erstellten Repository auf **„uploading an existing file"** klicken 
   (oder den Button „Add file" → „Upload files").
2. Alle Dateien aus dem Ordner per Drag & Drop ins Browserfenster ziehen:
   - `index.html`
   - `station1.html`
   - `station2.html`
   - `station3.html`
   - `station4.html`
   - `finales.html`
   - `shared.css`
   - `shared.js`
3. Unten auf **„Commit changes"** klicken (Nachricht kann leer bleiben).

**Option B — Per GitHub Desktop App (empfohlen für regelmäßige Updates):**

1. [GitHub Desktop](https://desktop.github.com) herunterladen und installieren.
2. Repository klonen: „Clone repository" → euer neues Repo wählen.
3. Dateien in den geklonten Ordner kopieren.
4. In GitHub Desktop: Commit-Nachricht eingeben → „Commit to main" → „Push origin".

### 3. GitHub Pages aktivieren

1. Im Repository auf den Reiter **„Settings"** klicken.
2. In der linken Seitenleiste: **„Pages"** auswählen.
3. Unter **„Branch"**: `main` (oder `master`) auswählen, Ordner auf `/ (root)` lassen.
4. Auf **„Save"** klicken.
5. Nach ca. 1–2 Minuten erscheint oben die fertige URL:  
   `https://DEIN-USERNAME.github.io/ares7-escaperoom/`

### 4. Link an Schüler:innen verteilen

Die fertige URL kann direkt geteilt werden — z.B. per:
- SchulMoodle / Teams-Link
- QR-Code (auf [qr-code-generator.com](https://www.qr-code-generator.com) kostenlos erstellen)
- Direkt in den Unterricht projizieren

### Hinweise

- Die Website funktioniert **ohne Internet-Verbindung nicht vollständig** 
  (MathJax und Google Fonts werden von externen CDNs geladen).
- Für eine vollständig offline-fähige Version müssten diese Bibliotheken 
  lokal eingebunden werden.
- Die Spoiler-/Lösungsbuttons sind standardmäßig versteckt — 
  Schüler:innen müssen aktiv darauf klicken.
- Die Codes auf der Finalseite sind im JavaScript hart kodiert 
  (`ALPHA, BETA, GAMMA, DELTA`) und können bei Bedarf geändert werden.

---

*Erstellt für den Mathematik-Leistungskurs Q1 · NRW Kernlehrplan · Ebenen im Raum*
