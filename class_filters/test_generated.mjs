// Тест 14 сгенерированных фильтров: (1) аудит против base_items 0.5.5,
// (2) синтакс-лимиты (FontSize<=45, звук 1-16/0-300), (3) стадийная логика.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.join(HERE, "out");

const DATA = JSON.parse(fs.readFileSync("C:/Users/mezhavikiserj/BildPOE2/poe2-kit/packages/core/data/game/base_items.json", "utf8")).base_items;
// DIR определён выше (HERE/out)
const names = new Set(), classNames = new Set();
for (const v of Object.values(DATA)) { names.add(v.name); classNames.add(v.item_class_name); }

const files = fs.readdirSync(DIR).filter(f => f.endsWith(".filter"));
if (files.length !== 14) { console.log("FAIL: файлов " + files.length + ", ожидалось 14"); process.exit(1); }
let problems = 0;

for (const f of files) {
  const text = fs.readFileSync(path.join(DIR, f), "utf8");
  const linesArr = text.split(/\r?\n/);
  const isEnd = f.includes("_endgame");
  // (1) аудит имён
  for (let i = 0; i < linesArr.length; i++) {
    const t = linesArr[i].trim();
    if (t.startsWith("#")) continue;
    const bt = t.match(/^BaseType\s*(==)?\s*(.*)$/), cl = t.match(/^Class\s*(==)?\s*(.*)$/);
    const refs = s => (s.match(/"[^"]+"/g) || []).map(x => x.slice(1, -1));
    if (bt && bt[1] === "==") for (const n of refs(bt[2])) if (!names.has(n)) { console.log(`[ДЕД] ${f}:${i + 1} BaseType "${n}"`); problems++; }
    if (bt && !bt[1]) for (const n of refs(bt[2])) { const m = [...names].filter(x => x.includes(n)).length; if (!m) { console.log(`[ДЕД-sub] ${f}:${i + 1} BaseType "${n}"`); problems++; } }
    if (cl) for (const n of refs(cl[2])) {
      const m = [...classNames].filter(x => x === n || x.includes(n)).length;
      if (!m) { console.log(`[ДЕД] ${f}:${i + 1} Class "${n}"`); problems++; }
    }
  }
  // (2) синтакс-лимиты
  for (const m of text.matchAll(/SetFontSize (\d+)/g)) if (+m[1] > 45) { console.log(`[СИНТ] ${f}: SetFontSize ${m[1]} > 45`); problems++; }
  for (const m of text.matchAll(/PlayAlertSound (\d+) (\d+)/g)) {
    const [id, vol] = [+m[1], +m[2]];
    if (id < 1 || id > 16 || vol < 0 || vol > 300) { console.log(`[СИНТ] ${f}: PlayAlertSound ${id} ${vol}`); problems++; }
  }
  // (3) стадийная логика
  const hasHideNM = /Hide\n\tRarity Normal Magic/.test(text);
  //                           блок 26 duet (ФОН-БЕЗОПАСНОСТЬ) присутствует только в leveling
  const hasBlock26 = text.includes("ФОН-БЕЗОПАСНОСТЬ");
  if (isEnd && !hasHideNM) { console.log(`[СТАДИЯ] ${f}: нет Hide чужого N/M`); problems++; }
  if (!isEnd && !hasBlock26) { console.log(`[СТАДИЯ] ${f}: нет N/M-сетки block 26`); problems++; }
  if (isEnd && hasBlock26) { console.log(`[СТАДИЯ] ${f}: block 26 НЕ должен быть в endgame`); problems++; }
  // заголовок класса фигурирует в фильтре
  const cls = f.replace("class_", "").replace(/\.filter$/, "").replace(/_(leveling|endgame)$/, "");
  if (!text.toUpperCase().includes(cls.toUpperCase())) { console.log(`[КОНФИГ] ${f}: класс ${cls} не найден в тексте`); problems++; }
}
console.log(problems === 0 ? `OK: 14 файлов, 0 проблем` : `FAIL: ${problems} проблем`);
process.exit(problems === 0 ? 0 : 1);
