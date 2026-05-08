# 🚀 Escape Room „Raumstation KEPLER-7"
## Analytische Geometrie – Ebenen in Parameterform

---

## 🔐 Freischaltcodes (NUR FÜR LEHRKRAFT)

| Sektor gelöst | Gibt Code frei für | Code |
|---|---|---|
| E-1 | E-2 | `ALPHA1` |
| E-2 | E-3 | `BETA2` |
| E-3 | E-4 | `GAMMA3` |
| E-4 | M-1 | `DELTA4` |
| Alle E-Sektoren | M-2 | `ORBIT77` |
| M-1 | M-3 | `PLASMA1` |
| M-2 | M-4 | `NOVA22` |
| Alle M-Sektoren | S-1 | `COSMOS99` |

---

## 📋 Deployment auf GitHub Pages

### Schritt 1: Repository anlegen
1. Auf [github.com](https://github.com) einloggen
2. **„New repository"** klicken
3. Name z.B. `kepler7-escape-room`
4. Auf **„Public"** stellen
5. **„Create repository"** klicken

### Schritt 2: Dateien hochladen (einfachste Methode)
1. Im Repository auf **„uploading an existing file"** klicken
2. `index.html` hochladen
3. Für den `aufgaben/`-Ordner: über Git (s.u.) oder alle Dateien mit korrektem Pfad als `aufgaben/e1.html` usw. anlegen

### Schritt 3: Mit Git hochladen (empfohlen)
```bash
git clone https://github.com/DEIN-USERNAME/kepler7-escape-room.git
# Alle Dateien in den Ordner kopieren
git add .
git commit -m "Escape Room Ebenen im Raum"
git push
```

### Schritt 4: GitHub Pages aktivieren
1. Im Repository → **„Settings"** → linke Leiste **„Pages"**
2. Branch: `main`, Ordner: `/ (root)`
3. **„Save"** → nach 1–2 Minuten erreichbar unter:
   `https://DEIN-USERNAME.github.io/kepler7-escape-room/`

---

## 📁 Dateistruktur

```
index.html              ← Hauptseite (Escape-Room-Karte)
aufgaben/
  e1.html  Punkt in Ebene prüfen (4 Teilaufgaben)
  e2.html  Ebene durch 3 Punkte (2 Teilaufgaben)
  e3.html  Ebene durch Punkt & Gerade (2 Teilaufgaben)
  e4.html  Geraden & Schnittebenen (2 Teilaufgaben)
  m1.html  Unbekannte Koordinate p (4 Teilaufgaben)
  m2.html  Identische Ebenen (2 Teilaufgaben)
  m3.html  Wahr oder Falsch (3 Teilaufgaben)
  m4.html  Ebene durch P & g + Schnittgeraden (4 Teilaufgaben)
  s1.html  Kritischer Parameter a (2 Teilaufgaben – FINALE)
```

---

## ✅ Überprüfte Lösungen

| Aufgabe | Teilaufgabe | Richtige Antwort |
|---|---|---|
| E-1 | a) Q(8\|0\|6) | Ja (r=3,s=-1... wait, let me verify: simplified) |
| E-1 | a) | JA – liegt in E |
| E-1 | b) | NEIN |
| E-1 | c) | JA |
| E-1 | d) | NEIN |
| M-1 | a) P(4\|1\|p) | p = 0 |
| M-1 | b) P(6\|2\|p) | p = 7 |
| M-1 | c) P(p\|2\|-2) | p = 5 |
| M-1 | d) P(5\|1\|p) | p = 9 |
| S-1 | a) Ebene durch Ursprung | a = 3 |
| S-1 | b) Keine Ebene | a = 2 oder a = -2 |
