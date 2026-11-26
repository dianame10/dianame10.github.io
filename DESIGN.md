# DESIGN.md: Dianame Altalim portfolio

## Brief

- **Subject:** Dianame Altalim, .NET / full-stack engineer at Xero (Bank Reconciliation team), Wellington NZ.
  Builds C# services where numbers must reconcile; after hours ships React products used by real
  people (a retail POS running a 20-staff store, a 400-guest wedding check-in app).
- **Audience:** recruiters, hiring managers and engineers reviewing her for her next role.
- **Job of the site:** get hired. Within 3 s: name, what she does, where to read more, how to email.
- **Assets:** CV only. No images. Contact: email, LinkedIn, GitHub (username not given yet).
- **Language:** English (NZ spelling where it shows).

## Concepts

| | Idea | Anchor | Signature | O / F / Fe / P |
|---|---|---|---|---|
| A. Material | **Customer copy.** The site is a thermal receipt feeding out of a till printer at the bottom of the screen. The printer is the navigation | she built a POS that prints receipts at 4 cashier lanes, and her day job is matching bank statement lines | paper feeds up out of the printer slot as you scroll; page changes are the printer feeding a fresh sheet and tearing the old one off | 4 / 4 / 5 / 2 |
| B. Process | **On call.** The site is a status page: uptime, incidents, deploys | she is on call; "the lights have to stay on" | a live status board that resolves into her CV | 3 / 4 / 4 / 3 |
| C. Formal | **Reconciled.** Every section is two halves that slide into agreement | bank reconciliation | the name splits and matches | 3 / 5 / 4 / 2, but too close to a known double-entry concept, rejected |

**Pick A.** It ties both halves of her work (money that must reconcile, and the shop floor she
built for) into one physical object, gives a full rule system (paper, printer, line items, totals,
tear-offs) and costs almost nothing in JS. Stolen from B for the idle state: the printer's clock
shows Wellington time, live.

## Concept card

```
Idea:        Her portfolio is a receipt, printed for you, line by line.
Metaphor:    a till printer at a shop counter (thermal paper, line items, dotted leaders, reverse print, tear-off edge)
Signature:   the printer is fixed at the bottom of the viewport; the page is paper feeding out of its slot as you scroll.
             Page transitions: the printer feeds a fresh sheet over the screen, the old one is torn away.
Emotion:     precise, warm, a little playful; "this person gets the details right"
Motion verb: feed and print (things advance upward in short mechanical moves; hovers reverse-print row by row)
Screenshot:  DIANAME / ALTALIM in double-width mono, a perfect 7 x 2 block, printed on paper rising out of a dark printer
```

## Palette

| Role | Hex | Use |
|---|---|---|
| counter (ground) | `#16181A` | the shop counter behind the paper; html background |
| paper | `#F3F4F1` | thermal paper, slightly cool (not cream) |
| ink | `#18191B` | thermal black |
| muted | `#5B5E61` | secondary text on paper (6.2:1) |
| line | `rgb(24 25 27 / 0.28)` | dotted leaders and rules |
| housing | `#25282B` | printer body |
| on-dark | `#E8E9E5` | text on counter / printer |
| accent | `#C8174F` | end-of-roll stripe, focus ring, the lit LED. Used rarely |

## Type

- **Martian Mono** (Google, variable `wdth` 75 to 112.5, `wght` 100 to 800). The printer's voice:
  display at `wdth 112.5 / wght 800` (a receipt's double-width mode), meta lines uppercase at
  `wdth 87.5 / wght 450`, 12 to 14 px, tracking +0.04em. Numbers always tabular.
- **Switzer** (Fontshare 400/500). Reading text and statements. Body 17 to 18 px, leading 1.5.
- Display tracking: mega -0.02em (mono must not collide), xl -0.015em.
- `DIANAME` and `ALTALIM` are both seven letters: in a mono face they stack into an exact block.
  That's the hero.

## Grid & rhythm

- Paper width `min(100vw - 2 * gutter, 72rem)`, centered over the printer slot. Inside, 12 columns.
- Alignment: receipt header blocks are centered (as receipts are); everything else hangs from
  paper column 1 or column 5.
- Rhythm moods: tight (dotted rule sections), normal (item list), airy (statement), full (hero).

## Shape

Paper is cut, never rounded (radius 0, zig-zag tear edges). Only printer hardware is rounded (12 px).

## Motion language

- Ease family: engine `expo` for transitions; `power2.inOut` for paper feeds (a motor, not a throw).
- Feed: paper moves up. Never sideways. Page intro = the sheet feeds up out of the slot (1.1 s).
- Reveals: **none on scroll.** The printer housing covers the bottom of the screen, so text appears by
  coming out of the slot. That is the reveal. No fade-ups.
- Hover, primary rows and CTAs: **reverse print.** An ink block prints down the row in 8 steps
  (printhead rows), text flips to paper colour, arrow advances.
- Hover, printer keys: **key press + line feed.** Key drops 2 px, label feeds up one line.
- Inline links: dotted underline at rest, turns solid and thick.
- Idle: none since 26 Nov 2026 (the live clock was removed at Dianame's request). See Decisions.

## Composition plan

```
HOME
[counter band]
/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\  tear edge
|        CUSTOMER COPY         |   receipt header, centered (Poster)
|  D I A N A M E               |
|  A L T A L I M               |   h1, mega, 7x2 block
|  FULL-STACK SOFTWARE ENGINEER|
|  WELLINGTON, NEW ZEALAND     |
| ............................ |
| DATE 26/11/26   TIME 14:32:07|   live Wellington time
| ............................ |
| Statement, Switzer t-l, cols 1-10                 (Statement)
| ITEMS                                             (Index list)
| Retail point of sale ........... 32,000 products ->
| Wedding guest app ................... 400 guests ->
| Bank reconciliation at Xero ........ since 2021 ->
| XERO, BANK RECONCILIATION         (asymmetric pair: text col 1-5, timeline 6-12)
| INTERN ......... NOV 2021 to FEB 2022 ...
| [reverse-printed TOTALS block: 4 big real numbers] (Data)
| DEPARTMENTS: 4 skill columns                       (Gallery wall of lists)
| Thank you for reading  [QR]  [EMAIL ME]            (Footer finale)
| ████ end-of-roll stripe ████
\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/   tear edge
colophon on counter
[======== PRINTER: DA | WLG 14:32:07 | Work About Email ========]  fixed

CASE
tear / ITEM n OF 3 / h1 t-xl / summary / meta rows with leaders /
reverse-printed spec figure (real numbers or QR) / context / idea / craft list / outcome /
NEXT ITEM row (reverse print) / tear

ABOUT
tear / h1 / bio statement / departments / education & awards / volunteering / contact / tear

404
tear / ITEM NOT ON FILE / ERROR 404 in mega / one line / back link / tear
```

## Genericness test

- A generic model would land on "dark tech portfolio, mono font, green accent". Changed: the mono
  face is a *printer*, the accent is the pink end-of-roll stripe, and the whole layout is paper.
- A generic model would fade-up every section. Changed: no scroll reveals at all, the printer does it.
- A generic model would put nav top-right. Changed: nav is the printer's keys, in the thumb zone on phones.

## Decisions

- No loader: the paper feed is the intro, and the h1 is real text in the first paint.
- No WebGL: the concept is paper and type; GL would add weight and nothing true.
- No project images: placeholders would be fake screenshots. Figures are typographic (real numbers,
  a real scannable QR code).
- **Idle state:** the page is still at rest, on purpose. The live Wellington clock was removed at
  Dianame's request (26 Nov 2026). A till printer at rest is still, and a decorative drift would be a
  lie about the object. The life comes from the feed on arrival, the card and dock hovers and the
  "Printing" transition. `shoot.mjs` reports `idleMotion: false`, which is this decision.

## Restyle (26 Nov 2026): poster colour and type

Requested by Dianame, using ledboise.com as the reference for **type and colour only**.
- Type: Archivo variable (Google, OFL). Display at `font-stretch: 62%` / 900, uppercase, leading 0.84,
  as a free stand-in for the reference's licensed Elza Condensed. Text at normal width, 500.
- Palette: cobalt `#3b7cd1` ground (lifted from the reference's #3170c2 so black body text passes AA),
  black ink, pink `#e480c0`, mustard `#d8b545`, green `#3db769`, ultramarine `#2a23c6`, tomato `#e35d29`.
  Each section is one colour field.
- Shapes: poster cards tilted with a 10 px hard black shadow; D-shaped (stadium) panels and portrait frame.
- Kept from the receipt concept: the dock as the nav (the "printer"), page feed-in and the "Printing"
  sheet transition (now mustard), line items with leaders, Totals, "End of roll". (The live clock was later removed.)
- Portrait: `site.portrait.src` in `src/data/site.ts`; a DA monogram fills the frame while it is empty.

## Changes (26 Nov 2026, round 2)

- Removed the local time from the hero and the dock.
- "See the work" and other same-page `#` links scroll through Lenis (capture-phase handler in
  `src/motion/setup.ts`, because the ClientRouter swallowed them).
- Card titles scale to the card width (`container-type: inline-size`, `12.5cqi` cap).
- Card link label is "See what I built" (was "Read the case").
- New ultramarine "How I build" section (`approach` in `site.ts`): software anyone can understand.
- POS marked "Still growing": still in active development.
- Footer ("End of roll", colophon, copyright) removed at Dianame's request (27 Nov 2026); the last section now carries the dock clearance.
