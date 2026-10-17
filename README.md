# pandaren-ice-strike-filter

SSF Loot Filter для **PandarenDeepRover** (Monk, Ice Strike Invoker, PoE2 — лига Forbidden Rites).

Кастомный **v5** (эндгейм, L80+, актуален под патч 0.5.5 Forbidden Rites) + левелинг **v2** (этапы 1+2: 27–60) + запасной **NeverSink 0.10.4** (Regular).

## Состав репозитория

| Файл | Что это |
|---|---|
| `ice_strike_filter_v5.filter` | **ЭНДГЕЙМ-фильтр v5 (L80+, РЕКОМЕНДОВАН, патч 0.5.5).** Новое против v4: в N/M-подсветку под крафт добавлены базы эталона hVyJaA3I26cF (L93 CI): посох **Sinister Quarterstaff** (Brood Call +5 attack) + Bolting/Razor/Skullcrusher/Warding, тело **Sleek Jacket** (Grim Coat — база текущего Doom Suit владельца), сапоги **Charmed Shoes** (Armageddon Slippers, Deflection) + Wanderer Shoes, кольцо **Unset Ring** (+1 слот скилла — у эталона и владельца ×2), амулеты **Gold Amulet** (Rapture Collar) + Pearlescent/Solar; убран дубль `Omen of Greater Exaltation`. Унаследовано из v4: Wombgifts громко, валюта T0–T3, Breachstones по тирам, Perfect Glacial/Desert Rune звездой, вэйстоуны T15/T16, Omens топ-крафт со звуком. Все имена сверены с base_items 0.5.5 (build 4.5.5.2) и NeverSink-PoE2 0.10.4. |
| `ice_strike_filter_v4.filter` | Эндгейм-фильтр **v4** (L80+, предыдущая версия). |
| `ice_strike_filter_v3.filter` | Эндгейм-фильтр **v3** (L80+, предыдущая версия). |
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