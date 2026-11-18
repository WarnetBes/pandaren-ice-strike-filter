// Генератор класс-фильтров PoE2 0.5.5: 7 классов × 2 стадии (leveling/endgame) = 14 файлов.
// Источник блоков — ice_strike_duet.filter (нарезка по маркерам, verbatim; asserts ловят рассинхрон).
// Запуск: node generate.mjs  → файлы в out\
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DUET = process.env.USERPROFILE + "\\Documents\\My Games\\Path of Exile 2\\ice_strike_duet.filter";
const OUT = path.join(HERE, "out");
fs.mkdirSync(OUT, { recursive: true });

const src = fs.readFileSync(DUET, "utf8");
const lines = src.split(/\r?\n/);

// --- нарезка duet по маркерам (строки-заголовки комментариев) ---
function find(marker, from = 0) {
  const i = lines.findIndex((l, k) => k >= from && l.includes(marker));
  if (i < 0) throw new Error("маркер не найден в duet: " + marker);
  return i;
}
const iBlock0   = find("#--- 0. T0");
const iBlock7   = find("#--- 7. АУГМЕНТЫ");       // начало палитр владельцев (выбрасываем)
const iBlock7b2 = find("#-- 7b2.");               //_generic greater runes — оставляем
const iWeapSec   = find(">>>>> ОРУЖИЕ");           // начало класс-специфики дуэта (выбрасываем)
const iBlock22   = find("#--- 22. RARE-ЦЕЛО");
const iBlock25   = find("#--- 25. Прочий контент");
const iQuest     = find("#--- 25b. КВЕСТ");
const iBlock26   = find("#--- 26. ФОН-БЕЗОПАСНОСТЬ");
// asserts: ожидаемый порядок
if (!(iBlock0 < iBlock7 && iBlock7 < iBlock7b2 && iBlock7b2 < iWeapSec && iWeapSec < iBlock22 && iBlock22 < iBlock25 && iBlock25 < iQuest && iQuest < iBlock26)) throw new Error("порядок маркеров duet нарушен");

const sectCurrency = lines.slice(iBlock0, iBlock7).join("\n");      // T0..омены (7 не включён)
const sectAugment  = lines.slice(iBlock7b2, iWeapSec).join("\n");    // 7b2, 7c, 8..14 уники
const sectGear     = lines.slice(iBlock22, iBlock25).join("\n");     // 22 rare-гир, 23 чармы/фляки, 24 редкое оружие
const sectContent  = lines.slice(iBlock25, iQuest).join("\n");       // 25 контент-классы
const sectQuest    = lines.slice(iQuest, iBlock26).join("\n");       // 25b квест
const sectHide     = "Hide\n\tSetFontSize 10\n\tSetTextColor 100 100 100 255";

// --- конфиг классов (игровое знание PoE2 0.5.5; правится одной строкой) ---
const CLASSES = {
  warrior:    { weapons: ["One Hand Maces", "Two Hand Maces", "One Hand Axes", "Two Hand Axes"], offhand: ["Shields", "Bucklers"] },
  witch:      { weapons: ["Wands", "Sceptres"], offhand: ["Foci"] },
  sorceress:  { weapons: ["Wands", "Staves"], offhand: ["Foci"] },
  ranger:     { weapons: ["Bows"], offhand: ["Quivers", "Bucklers"] },
  monk:       { weapons: ["Quarterstaves"], offhand: ["Foci", "Bucklers"] },
  mercenary:  { weapons: ["Crossbows", "Spears"], offhand: ["Bucklers"] },
  huntress:   { weapons: ["Spears", "Flails"], offhand: ["Bucklers"] },
};

const q = (a) => a.map(x => `"${x}"`).join(" ");
// блок «своё оружие» — канал ВЛАДЕЛЕЦ, палитра циан (как 15a duet), без звука
const ownWeaponBlock = (cls) =>
`#--- C. СВОЁ ОРУЖИЕ класса ${cls.toUpperCase()} (N/M под крафт) — канал ВЛАДЕЛЕЦ, циан, без звука ----
Show
	Class == ${q(CLASSES[cls].weapons)}
	Rarity Normal Magic
	SetFontSize 23
	SetTextColor 120 255 255 255
	SetBorderColor 0 220 220 255
	SetBackgroundColor 0 40 50 255
	MinimapIcon 1 Cyan Diamond

#--- C2. СВОЙ offhand класса ${cls.toUpperCase()} (N/M под крафт) -------------------------------------
Show
	Class == ${q(CLASSES[cls].offhand)}
	Rarity Normal Magic
	SetFontSize 20
	SetTextColor 120 220 255 255
	SetBorderColor 60 160 200 255
	MinimapIcon 1 Blue Diamond
`;

const header = (cls, stage) =>
`#===============================================================================================================
# CLASS FILTER: ${cls.toUpperCase()} — ${stage === "leveling" ? "LEVELING (кампания → первый эндгейм)" : "ENDGAME (карты)"}
# Сгенерировано generate.mjs 18.11.2026 из ice_strike_duet.filter (лестница тиров T0–T5 — verbatim, см. duet).
# ${stage === "leveling" ? "Стадия LEVELING: гемы/квест/валюта ярко, весь N/M гир виден тускло (блок 26 duet), своё оружие — ярче."
                        : "Стадия ENDGAME: чужое N/M оружие скрыто (Hide), своё N/M = крафт-базы (циан), все Rare гир/оружие видны."}
# Оружие класса: ${q(CLASSES[cls].weapons)} | offhand: ${q(CLASSES[cls].offhand)}
# В игре: Options -> UI -> Loot Filter -> class_${cls}_${stage} -> Reload
#===============================================================================================================
`;

const make = (cls, stage) => {
  let tail;
  if (stage === "leveling") {
    // свой оружие-блок + сетка N/M duet (весь N/M виден тускло) + Hide
    tail = ownWeaponBlock(cls)
      + "\n" + lines.slice(iBlock26).join("\n").split(/\r?\n/).filter(Boolean).join("\n");
  } else {
    // свой оружие-блок + Hide чужого N/M + Hide
    tail = ownWeaponBlock(cls)
      + `\n#--- E. ЧУЖОЕ N/M (эндгейм: не свой класс) — скрыто --------------------------------
Hide
	Rarity Normal Magic
	SetFontSize 10
	SetTextColor 100 100 100 255

${sectHide}
`;
  }
  return header(cls, stage) + "\n" + [sectCurrency, sectAugment, sectGear, sectContent, sectQuest].join("\n") + "\n" + tail + "\n";
};

let n = 0;
for (const cls of Object.keys(CLASSES)) {
  for (const stage of ["leveling", "endgame"]) {
    const name = `class_${cls}_${stage}.filter`;
    fs.writeFileSync(path.join(OUT, name), make(cls, stage), "utf8");
    n++;
    console.log(name + "  " + String(fs.readFileSync(path.join(OUT, name), "utf8").split("\n").length).padStart(4) + " строк");
  }
}
console.log("OK: " + n + " файлов в " + OUT);
