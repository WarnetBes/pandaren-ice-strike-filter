# pandaren-ice-strike-filter

SSF Loot Filter для **PandarenDeepRover** (Monk, Ice Strike Invoker, PoE2 — лига Forbidden Rites) и его соратницы **Чародейки Ткачи бурь** (кооп, билд «Плетение Молний»: мана/молния/CoC-криты).

Кастомный **v9** (эндгейм+левелинг-дуэт L18→100, патч 0.5.5 Forbidden Rites) + левелинг **v2** (этапы 1+2: 27–60) + запасной **NeverSink 0.10.4** (Regular).

## Состав репозитория

| Файл | Что это |
|---|---|
| `ice_strike_filter_v9.filter` | **ФИЛЬТР v9.1 (L18→100 ДУЭТ + ДВЕ ПАЛИТРЫ, РЕКОМЕНДОВАН, патч 0.5.5).** = v8 + левелинг-слой для кооп-соратницы Чародейки (самогаснущийся по **AreaLevel**, канон NeverSink-PoE2: граница левелинг/эндгейм = AL65): **15f** RARE жезлы/кастер-стафы/фокусы всех баз 40pt; **15g** N/M кастер-оружие при `AreaLevel <= 64`; **15h** N/M экипировка при `AreaLevel <= 64`; фляки все (мана-флаконы приоритет — Archmage-ядро, лаванда), life-флаконы гейт AL65. **ДУЭТ-ПАЛИТРЫ (v9.1): женская (роза/магента/лаванда, Pink-иконки) — весь лут Чародейки с тирами: ТИР-1 звук (жезлы/Absent Amulet/Perfect Mind-Iron Rune), ТИР-2 звук (стафы/фокусы/мана-кольца/Greater Mind-Iron), ТИР-3 тихо (rare кастер-оружие, её базы тела/сапог, мана-флаконы); мужская (зелёный/циан/сталь) — Invoker без изменений.** Spellslinger/Sigil of Power = встроенные скиллы баз (Dueling Wand L65 / Chiming Staff L25), ловятся блоками 15c/15d. |
| `ice_strike_currency.filter` | **CURRENCY+CRAFT+MAPS v1.2 (08.11.2026, отдельный фильтр, аудит по base_items 0.5.5).** Видны валюта, крафт-материалы, расходники, ЭЙСТОУНЫ и ТАБЛЕТКИ (гир/гемы/уники/ключи/фляги — скрыты финальным Hide). Покрытие 1284/1284 scope-предметов (Stackable Currency/Omen/Augment/Wombgifts/Breachstones/Trial Coins/Waystones/Tablet), 0 пропусков, автотест (порядок first-match-wins воспроизведён скриптом). Кейсы: валют-фарм-раны, разбор дамп-таба, чистый вид лута. Тиры с поднятым приоритетом против v9: T0 зеркальные (Mirror/Hinekora's/Perfect Exalted/Divine) — звук 5/300 + звезда; T1 топ-орбы (Exalted/Annulment/Vaal/Fracturing/Triskelion/Verisium/Perfect-Greater Jeweller's и др.) — 45pt, звук 5/300 + звезда + луч (в v9 было 2/250 без луча); T2 механо-валюта (Starlit Ore/Catalyst/Breachstone) + сплинтеры 15+ — звук 3/250 (в v9 тишина); C1 Greater/Perfect эссенции — 4/300 + зелёная звезда (в v1.0 тихо); C2 топ-омены (Greater Exaltation/Annulment/Coronation ×2) — 3/250; C3 Perfect-руны (10 шт, Class-gated) — 3/200; C4 Wombgifts — 5/250; C7 Trial Coins/Barya видны; D-секция: вэйстоуны T15/16 — 6/300 + оранжевая звезда, T13–14 — иконка без звонка, T6–12/T1–5 — тише; таблетки (8 видов) — 2/250 + звезда (канон v9, тиры 9a–9d/8 перенесены). Прочие омены/руны/соул-корки — видимы без звука; Gold тихо. ⚠️ «Thaumaturgic Flux»/«Alloy» — мёртвые имена в 0.5.5 (оставлены как безвредный substring на будущие патчи). Опционально закомментирован блок A1 (unique-страховка — уники скрыты НАМЕРЕННО). Валидатор пройден (LF/no BOM/ASCII/кавычки/шрифт ≤45) + автотест покрытия. ⚠️ В игре НЕ подтверждён. |
| `ice_strike_filter_v8.filter` | Эндгейм-фильтр **v8** (первая кооп-версия, без левелинг-слоя; история). |
| `ice_strike_filter_v7.filter` | Эндгейм-фильтр **v7** (соло-Invoker; предъыдущая версия): чармы громко, Djinn Barya, Inscribed Ultimatum + Chronicle of Atzoatl + Audience with the King, Sanctified Relic, Transcendent Arm/Leg (12 баз), Perfect/Greater Jeweller's Orb в T1, точный перечень 20 Greater-рун, сплинтеры 15+ звонок, Uncut Skill Gem L18+, фикс SetFontSize clamp 45. |
| `ice_strike_filter_v5.filter` | Эндгейм-фильтр **v5** (история: базы эталона hVyJaA3I26cF под N/M-крафт). |
| `ice_strike_filter_v2.filter` | Кастомный левелинг-фильтр **v2**. Приоритеты: стафы (топ-базы крит/урон даже Magic — под крафт), Rare-шмот, Uncut Spirit Gem (отсюда Herald of Thunder), ES/EV-базы к билду этапа 2, резисты на кольцах/амулетах/поясах, джувелы, валюта. |
| `ice_strike_filter.filter` | Левелинг-фильтр **v1** (27+). Базовая версия без приоритизации стафов и секции этапа 2. |
| `neversink_regular.filter` | NeverSink 0.10.4 **REGULAR** — оригинальный файл с GitHub (SHA-256 сверен). Запасной/расширенный фильтр. |

## Установка (PoE2)

1. Скопируй файл фильтра в папку (НЕ в `onlinefilters`!):
   ```
   %userprofile%\Documents\My Games\Path of Exile 2\
   ```
2. В игре: `Escape → Options → Game/UI → Loot Filter` → выбери фильтр.
3. Если правил файл вручную — нажми **Reload** в списке (игра не перезагружает фильтр сама).
4. Рекомендуется задать горячую клавишу выделения дропа (Key Pickup / Use Bound Key), чтобы не зажимать Alt/пробел.

## Ссылки

- Целевой билд (PoB 28880): https://poe.ninja/poe2/pob/28880
- NeverSink-оригинал: https://github.com/NeverSinkDev/NeverSink-Filter-for-PoE2
- Кастомизация фильтров: https://filterblade.xyz