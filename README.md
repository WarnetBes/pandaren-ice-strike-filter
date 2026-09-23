# pandaren-ice-strike-filter

SSF Loot Filter для **PandarenDeepRover** (Monk, Ice Strike Invoker, PoE2 — лига Forbidden Rites).

Кастомный левелинг-фильтр **v2** (этапы 1+2: 27–60) + запасной **NeverSink 0.10.4** (Regular).

## Состав репозитория

| Файл | Что это |
|---|---|
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