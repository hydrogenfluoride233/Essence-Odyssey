# Essence Odyssey

<div align="right">

[中文](README.md) · **English**

</div>

[![Version](https://img.shields.io/badge/version-0.2.6-blue.svg)](https://www.curseforge.com/minecraft/modpacks/essence-odyssey)
[![Minecraft](https://img.shields.io/badge/Minecraft-1.21.1-62B47A.svg)](https://www.curseforge.com/minecraft/modpacks/essence-odyssey)
[![NeoForge](https://img.shields.io/badge/NeoForge-21.1-EA6E1E.svg)](https://www.curseforge.com/minecraft/modpacks/essence-odyssey)
[![Download](https://img.shields.io/badge/CurseForge-download-F16436.svg?logo=curseforge&logoColor=white)](https://www.curseforge.com/minecraft/modpacks/essence-odyssey)
[![License](https://img.shields.io/badge/license-CC_BY--NC--SA_4.0-lightgrey.svg)](LICENSE)

This is a modpack built around technology, magic, and adventure. Explore six dimensions, unravel the six primary aspects, establish cross-mod production lines, and progress toward the endgame through rituals and automation. Embark on an odyssey across worlds, and seek the origin of the world.

CurseForge page: <https://www.curseforge.com/minecraft/modpacks/essence-odyssey>

## Development builds / Contributing

This repository is the pack's **development instance** — work in progress lands here directly; **for the stable release, use CurseForge** (badge above).

To run the latest development build or to contribute, see **[`同步说明.md`](同步说明.md)** (Chinese walkthrough): clone the repo, then run `sync-and-play.bat` to fetch every mod and config file. Development builds are **unreleased** content: they may break, and save compatibility is not guaranteed.

Before opening a pull request, read [`.github/CONTRIBUTING.md`](.github/CONTRIBUTING.md) (in Chinese): commit format, what a PR description covers, and which files do not take changes.

## Story

You are an ordinary person in the world of Minecraft. One day you find a note — the world it describes is not quite the one you know: amethyst shards react to something, and the world seems to be responding. You don't know why. But you want to know why. You follow that note and keep walking.

You walk through six dimensions and gather six primary aspects. You find a meteorite. Hidden inside it is a record that belongs to no civilization you know of. You decipher it, and for the first time see how this world works.

Later you begin using technology and magic to turn aspects into other forms, mass-producing them, and combining primary aspects into secondary ones — step by step closing in on the question you could not answer at first: why is the world responding to you?

No one tells you where to go. You have only a note, and a path you walked for yourself.

## Core Gameplay

**1. Six dimensions, six primary aspects**

Overworld = Water ｜ Nether = Fire ｜ Twilight Forest = Earth ｜ The Aether = Air ｜ The End = Chaos ｜ Eternal Starlight = Order

Each dimension has its own way of obtaining aspects. Interact with a dimension using amethyst shards to obtain the matching aspect crystals.

**2. Aspect forms run through the entire progression**

From solid crystals to liquid fluids, and on to gaseous quintessence — with <em>Nature's Aura</em> tokens, <em>Ars Nouveau</em> essences, <em>Neo Vitae</em> inscription tools, and <em>Botania</em> runes appearing in between. Each form has its own way of being obtained and its own uses, opening up layer by layer rather than all at once.

**3. Secondary aspect crafting**

15 combinations, multiple production routes — you can choose a different production method depending on your tech line (not yet complete).

**4. AE2**

AE2 is part of the progression from early on, rather than something unlocked later.

**5. Three threads, interwoven**

Technology, magic, and adventure run in parallel and interweave, rather than standing apart.

## Screenshots

> TODO

## Getting Started

1. Install from the [CurseForge page](https://www.curseforge.com/minecraft/modpacks/essence-odyssey) — Minecraft 1.21.1 + NeoForge
2. Recommended memory allocation: 6–8 GB

## Development Status

This modpack is in early development. Progress currently stands at Chapter 2; the main questline and the endgame are not finished yet. You may run into placeholder content — or the occasional "Intentional Game Design".

During development, the pack ships complete Chinese content and basic English content (English support began with version 0.2.2 and is being expanded over time). English translation and localization will be filled in more thoroughly once the main content and systems are largely complete.

If you run into problems while playing, feedback is welcome via [Issues](https://github.com/hydrogenfluoride233/Essence-Odyssey/issues), the CurseForge page, or the official QQ group (1077071243).

## Credits (in no particular order)

| Role | Contribution | Contact |
|---|---|---|
| **hydrogenfluoride / Cobalt Blue** | Author: design decisions, balancing, KubeJS scripts, lore and copy | [GitHub](https://github.com/hydrogenfluoride233) |
| **sweetcornna** | Contributor: code and design feedback, some art assets | [GitHub](https://github.com/sweetcornna) |
| **剑歇 (Jianxie)** | Contributor: ideas and design suggestions, text integration | [Bilibili](https://space.bilibili.com/433356862) |
| **丘山 (Qiushan)** | Contributor (?): first issue on the core mod | [GitHub](https://github.com/PWJCSqiushan) |
| **萧云 (Xiao Yun)** | Art: title screen illustration | [Bilibili](https://space.bilibili.com/332020920) |
| **外婆家地头的卷心菜** | Testing: play testing in game and gameplay feedback | [Bilibili](https://space.bilibili.com/1916920800) |
| **XiaoY** | Testing: reported 100 stacked logs | [Bilibili](https://space.bilibili.com/631876173) |
| **小岛 (Xiaodao)** | Testing: "the pack was so good that testing turned into stacked logs" | [Bilibili](https://space.bilibili.com/1411422673) |
| **铁陵-irontomb** | Testing: gameplay feedback | [Bilibili](https://space.bilibili.com/1679358153) |
| **陌屿君 (Moyujun)** | Mascot: definitely not slacking off! | [Bilibili](https://space.bilibili.com/499977642) |
| **其琛琛琛** | Mascot: verbal support and encouragement for the blue wolf | [Bilibili](https://space.bilibili.com/541846318) |

## Repository Contents

Only hand-written / hand-edited content is tracked here — KubeJS scripts and supplementary localization, mod configs, multiblock structure definitions and rendering assets, original textures and models. **No third-party mod jars are distributed in this repository** (`mods/` is excluded via `.gitignore`; the only exceptions are the bare jars of `Aether's Delight` and the in-house core mod, see the license table). Please install the pack through CurseForge.

## License

| Scope | License |
|---|---|
| The modpack and everything under `config/`, `defaultconfigs/`, `data/`, `kubejs/` | [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) |
| Original `.js` scripts under `kubejs/` | [MIT](kubejs/LICENSE) |
| The in-house core mod `Essence Odyssey Core` (`essenceodyssey`) | All Rights Reserved; unmodified binaries may be redistributed with this pack, and release builds are also published on CurseForge; not for use in other modpacks; no public API |
| Third-party content (mods, community translations, adapted textures) | Their own licenses — see [THIRD-PARTY.md](THIRD-PARTY.md) |

If you repost or adapt this pack, credit "Essence Odyssey by hydrogenfluoride233", link the license, and state whether you made changes; commercial use is not allowed, and adaptations must be released under the same license. Full text: [LICENSE](LICENSE).
