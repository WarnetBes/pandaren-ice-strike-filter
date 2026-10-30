# pandaren-ice-strike-filter

SSF Loot Filter для **PandarenDeepRover** (Monk, Ice Strike Invoker, PoE2 — лига Forbidden Rites) и его соратницы **Чародейки Ткачи бурь** (кооп, билд «Плетение Молний»: мана/молния/CoC-криты).

Кастомный **v9** (эндгейм+левелинг-дуэт L18→100, патч 0.5.5 Forbidden Rites) + левелинг **v2** (этапы 1+2: 27–60) + запасной **NeverSink 0.10.4** (Regular).

## Состав репозитория

| Файл | Что это |
|---|---|
| `ice_strike_filter_v9.filter` | **ФИЛЬТР v9 (L18→100 ДУЭТ, РЕКОМЕНДОВАН, патч 0.5.5).** = v8 + левелинг-слой для кооп-соратницы Чародейки (самогаснущийся по **AreaLevel**, канон NeverSink-PoE2: граница левелинг/эндгейм = AL65): **15f** RARE жезлы/кастер-стафы/фокусы всех баз 40pt; **15g** N/M кастер-оружие при `AreaLevel <= 64`; **15h** N/M экипировка при `AreaLevel <= 64`; фляки все (мана-флаконы приоритет — Archmage-ядро), life-флаконы гейт AL65 (в картах мусор). Секция соратницы из v8 (жезлы/стафы/фокусы топ-баз, Mnemonic Ring, Absent Amulet, Perfect Mind/Iron Rune, Int-базы) — без изменений. Spellslinger/Sigil of Power = встроенные скиллы баз (Dueling Wand L65 / Chiming Staff L25), ловятся блоками 15c/15d. |
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