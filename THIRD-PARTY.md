# 第三方内容与致谢 · Third-Party Content & Credits

本仓库**不包含任何模组本体**（`mods/` 已在 `.gitignore` 中排除）。下面列出仓库中涉及
第三方作品的部分、来源与许可。

⚠️ 这些内容**不受**本仓库 [LICENSE](LICENSE) 的 CC BY-NC-SA 4.0 覆盖，版权归各自作者，
使用前请遵守其原始许可。

---

## 一、汉化译文

| 位置 | 来源 | 许可 |
|---|---|---|
| `kubejs/assets/{accessories, apothic_attributes, apothic_enchanting, buildinggadgets2, ftbchunks, ftbfiltersystem, ftblibrary, ftbquests, ftbteams, ftbultimine, functionalstorage, justdirethings, naturesaura, neovitae, pylons, rechiseled, rechiseledcreate}/lang/zh_cn.json` | 星野夢華 (Hoshino Yumeka)《All the Mods 10 汉化补丁 —— 绿油油版》<https://github.com/chiba233/atm10-zh-cn>；该作品译文部分亦含 **CFPA 社区翻译**（Minecraft-Mod-Language-Package）的成分 | **CC BY-NC-SA 4.0**（署名—非商业性使用—相同方式共享） |

- 2026-09-26 逐键比对复核（上游 `main` @ `a7c75a8`）：上列 17 个文件与上游逐字相同或高度重合——其中 10 个字节完全一致（buildinggadgets2、ftbchunks、ftbfiltersystem、ftblibrary、ftbultimine、functionalstorage、justdirethings、naturesaura、pylons、rechiseledcreate），`rechiseled` 3655/3656 键一致（仅 `rechiseled.tooltip.connecting` 改写），`neovitae` 112/116，其余为键集合一致、仅缩进或空白差异。比对明细见 `docs\脚本与手册\汉化来源比对.md`。
- 未列入上表的其余语言文件：或上游无对应文件（`deep_aether`、`jeimultiblocks`、`mbd2`、`rechiseledae2`、`sanguine_networks` 等），或仅有极少共同键（`ae2`、`hostilenetworks`、`kubejs`、`occultism` 的 `zh_cn` 属本整合包自定义键的少量覆盖），或部分重合（`modularrouters` 139/369）。上游不含 `en_us`，本仓库各 `en_us.json` 均无对应来源。
- 按 CC BY-NC-SA 4.0 的要求，使用这些文件时需：**署名原作者与 CFPA、附协议链接、标明是否修改**，并以相同协议发布改编版。

**建议署名文字**

> 本整合包部分模组的汉化来自 / 改编自 星野夢華 (Hoshino Yumeka) 制作的《All the Mods 10
> 汉化补丁 —— 绿油油版》（https://github.com/chiba233/atm10-zh-cn），该作品译文部分含
> CFPA 社区翻译（Minecraft-Mod-Language-Package）成分，以 CC BY-NC-SA 4.0 授权，
> 本整合包中相关译文亦以相同协议提供。

---

## 二、贴图与模型

| 位置 / 文件 | 来源 | 许可 | 使用方式 |
|---|---|---|---|
| `kubejs/assets/kubejs/textures/item/rune_{spring,summer,autumn,winter}.png` | **植物魔法 Botania**（作者 Vazkii） | Botania License | 使用原图 |
| `kubejs/assets/kubejs/textures/item/rune_{aqua,ignis,terra,aer,perditio,ordo}.png` | **植物魔法 Botania**（作者 Vazkii） | Botania License | 由 Botania 的 `rune_water/fire/earth/air/gluttony/sloth` 改名并改编 |
| `kubejs/assets/kubejs/textures/item/{clump_*, dirty_dust_*, shard_*, dust_*}.png` | **通用机械 Mekanism** | MIT | 基于其基材质改编 |
| 部分物品及方块贴图 | **NeoVitae**、**敌对神经网络 Hostile Neural Networks**、**应用能源 AE2**、**模块化机械 Modular Machinery** | NeoVitae / HNN 为 **MIT**；AE2 为 **LGPL-3.0**；Modular Machinery（含社区版）为 **GPL-3.0**（仓库 `LICENCE` 为 GNU GPL v3 全文），素材条款见各自项目页 | 参考与改编 |
| 星辉魔法相关素材 | **星辉魔法 Astral Sorcery** | **All Rights Reserved** | **开发期临时占位；待星辉魔法发布 1.21.1 正式版后再行替换** |
| `kubejs/assets/kubejs/textures/**` 其余贴图、模型、语言文件 | 本整合包作者自绘 | CC BY-NC-SA 4.0 | — |

**Botania License 的额外要求**：署名 Vazkii、注明改动；使用方项目需开源并允许再分发与修改。

**建议署名文字**

> 本整合包部分贴图使用或改编自以下作品，特此致谢：植物魔法 Botania（作者 Vazkii，
> 符文贴图，部分经改名与改编）、通用机械 Mekanism、NeoVitae、
> 敌对神经网络 Hostile Neural Networks、应用能源 AE2、模块化机械 Modular Machinery。
> 星辉魔法相关素材为开发期临时占位，待其 1.21.1 正式版发布后再行替换。

---

## 三、模组本体与非 CurseForge 模组

- 本仓库**不分发任何模组 jar**，游玩请通过 CurseForge 获取整合包；各模组版权归其作者，
  许可见各自项目页。
- 非 CurseForge 托管的模组：**Aether's Delight** by zjjohn121110
  （<https://modrinth.com/mod/the-aethers-delight>）——以包内手动文件形式随包分发
  （packwiz 索引中只有文件与哈希、无 `.pw.toml` 元数据，故不走 CurseForge 自动更新）。
- 各模组自带的默认配置模板、字体与其他第三方素材，版权归各自作者。

---

## 四、本仓库自身的授权

| 范围 | 许可 |
|---|---|
| 整合包本体与仓库其余内容 | [CC BY-NC-SA 4.0](LICENSE) |
| `kubejs/` 下作者原创脚本 | [MIT](kubejs/LICENSE) |

---

## 五、其他致谢

本清单由作者依据自己的记录整理，可能仍有遗漏。若你是本整合包中某个素材、译文或代码的作者而未被列入，或希望以别的方式处理你的作品，请通过项目页或仓库 Issue 联系，我会补充署名，或按你的意愿替换 / 移除。

同时也一并感谢所有为 Minecraft 模组与汉化社区付出的作者与贡献者。
