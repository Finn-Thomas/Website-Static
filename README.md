# Adeptus Academicus — Hugo (Material Design / Materialize) DE/EN

Diese Variante orientiert sich stärker an **klassischem Material Design** (Materialize CSS), wie in deiner ersten Nachricht gewünscht:
- helles UI
- Cards, Chips, Collapsible FAQ, Slider
- schlank: Hugo + CDN (Materialize) + kleines Override-CSS

## Start
```bash
hugo server -D
```

## Sprachen
- Inhalte: `content/de` und `content/en`
- Umschaltung über Flag-Buttons (oben + im Mobile-Menü)

## Betreuer-Seite
- `/betreuer/` (nicht im Hauptmenü – nur über Startseite/Footers)

## Workshop
- `/angebot/workshop/`

## Bilder
- Platzhalter in `static/images/placeholders/*.svg` (bitte nach Bedarf ersetzen)

## Formulare
- `hugo.yaml -> params.forms.contactAction` setzen (Formspree/Netlify etc.)
- Wenn leer: Mailto-Fallback.
