# pandaren-ice-strike-filter

Loot-фильтры PoE2 (патч 0.5.5 Forbidden Rites) для владельца **PandarenDeepRover** (Monk, Ice Strike / Flicker-CI Invoker) + его соратницы **Чародейки Ткачи бурь** (билд «Плетение Молний»: мана/молния/CoC-криты).

**Три фильтра, все XCOMPACT** (надписи лута макс 28pt — под малый монитор, решение владельца 09.11.2026). Устаревшие версии v1/v2/v3/v5/v8 и NeverSink-зеркало удалены из репо (история — в git и в релизах до v1.9.0 включительно).

## Состав репозитория

| Файл | Роль |
|---|---|
| `ice_strike_filter_v7.filter` | **СОЛО-МОНАХ ФЛИКЕР (одиночная игра).** Эндгейм Invoker: чармы громко, Djinn Barya, Inscribed Ultimatum + Chronicle of Atzoatl + Audience with the King, Sanctified Relic, Transcendent Arm/Leg (12 баз), Perfect/Greater Jeweller's Orb в T1, точный перечень 20 Greater-рун, сплинтеры StackSize 15+ звонок, Uncut Skill Gem GemLevel 18+, уники громко. Синтаксис сверен с официальным /item-filter/about. |
| `ice_strike_filter_v9.filter` | **ПАРНЫЙ ДУЭТ (монах + чародейка на одном экране). РЕКОМЕНДОВАН для кооп-игры.** = v7 + соратница Чародейка + левелинг-слой: самогаснущиеся по **AreaLevel** блоки (канон NeverSink-PoE2: граница левелинг/эндгейм = AL65) — N/M кастер-оружие и экипировка при `AreaLevel <= 64`, фляки всех уровней (мана-приоритет — Archmage-ядро). **ДУЭТ-ПАЛИТРЫ v9.1:** женская (роза/магента/лаванда, Pink-иконки, тиры со звуком) — весь лут Чародейки (жезлы/кастер-стафы/фокусы — базы её билда Damnation Cry / Rapture Bane / Sphere of the Dead, мана-кольца Mnemonic, Absent Amulet, Mind-Iron руны); мужская (зелёный/циан/сталь) — Invoker. Цвет на полу = чей лут. Spellslinger/Sigil of Power = встроенные скиллы баз (Dueling Wand L65 / Chiming Staff L25). |
| `ice_strike_currency.filter` | **ВАЛЮТНЫЙ (currency/craft/maps).** Видны ТОЛЬКО валюта, крафт-материалы, расходники, вэйстоуны и таблетки; гир/гемы/уники/руны/ключи/фляги/чармы — скрыты финальным Hide. Аудит против base_items 0.5.5 (5496 записей), автотест first-match-wins: 0 видимых рун, 48/48 соул-корков, все вэйстоуны/таблетки покрыты. Тиры: T0 зеркальные и T1 топ-орбы — звук 5/300 + звезда + луч (в дуэте было 2/250); Greater/Perfect эссенции — 4/300; топ-омены — 3/250; Wombgifts — 5/250; вэйстоуны T15/16 — 6/300; таблетки — 2/250; Barya видимы; руны скрыты по решению владельца; Gold тихо. Уники скрыты НАМЕРЕННО (в файле закомментирован блок A1 «unique-страховка»). ✅ Подтверждён в игре. |

Общее: валидация скриптами (кавычки/BOM/LF/шрифт); при патчах GGG — перегнать автотест по свежему base_items (poe2-kit датасет).

## Установка (PoE2)

1. Скачай нужный `.filter` и скопируй в (НЕ в `onlinefilters`!):
   ```
   %userprofile%\Documents\My Games\Path of Exile 2\
   ```
2. В игре: `Escape → Options → Game/UI → Loot Filter` → выбери фильтр.
3. Если правил файл вручную — нажми **Reload** в списке (игра не перезагружает фильтр сама).
4. Рекомендуется задать горячую клавишу выделения дропа (Key Pickup / Use Bound Key), чтобы не зажимать Alt/пробел.

## Ссылки

- Целевой билд (PoB 28880): https://poe.ninja/poe2/pob/28880
- NeverSink-оригинал (внешний, репо больше не зеркалит): https://github.com/NeverSinkDev/NeverSink-Filter-for-PoE2
- Кастомизация фильтров: https://filterblade.xyz
