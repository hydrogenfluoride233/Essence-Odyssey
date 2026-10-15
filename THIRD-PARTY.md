# 第三方内容与致谢 · Third-Party Content & Credits

本仓库**不包含任何模组本体**（`mods/` 已在 `.gitignore` 中排除）。下面列出仓库中涉及
第三方作品的部分、来源与许可。

⚠️ 这些内容**不受**本仓库 [LICENSE](LICENSE) 的 CC BY-NC-SA 4.0 覆盖，版权归各自作者，
使用前请遵守其原始许可。

---

## 一、汉化译文

| 项目 | 内容 |
|---|---|
| 位置 | `kubejs/assets/i18n/lang/zh_cn.json`（补译键统一合并在这一份里）、`kubejs/assets/<modid>/lang/zh_cn.json`（中英都有的键留在原命名空间） |
| 来源 | 星野夢華 (Hoshino Yumeka)《All the Mods 10 汉化补丁 —— 绿油油版》<https://github.com/chiba233/atm10-zh-cn>；该作品译文部分亦含 **CFPA 社区翻译**（Minecraft-Mod-Language-Package，<https://cfpa.site/>）的成分 |
| 许可 | **CC BY-NC-SA 4.0**（署名—非商业性使用—相同方式共享） |
| 使用方式 | 部分直接使用，部分按本整合包的口径改写了用词 |

- 与上游逐字重合的程度、上游 commit 与抽样范围见内部记录 `docs\脚本\汉化来源比对.md`（2026-10-15 复核）。
- 整合包中另有大量键在汉化补丁里没有对应项（自定义内容，以及各模组自带 `zh_cn` 未覆盖的部分），这部分为本整合包自写。
- 上游不含 `en_us`，本仓库各 `en_us.json` 均无对应来源。
- 按 CC BY-NC-SA 4.0 的要求，使用这些文件时需：**署名原作者与 CFPA、附协议链接、标明是否修改**，并以相同协议发布改编版。

**关于游戏里启用的汉化资源包**

游戏内启用的 `Minecraft-Mod-Language-Modpack-Converted-1.21.1.zip`（CFPA 社区汉化包）**由玩家自行通过 I18nUpdateMod 下载安装，不由本整合包分发**；它按资源包机制生效，署名与许可见该包内的 `LICENSE` / `README.txt` 与 <https://cfpa.site/>。

**建议署名文字**

> 本整合包部分模组的汉化来自 / 改编自 星野夢華 (Hoshino Yumeka) 制作的《All the Mods 10
> 汉化补丁 —— 绿油油版》（https://github.com/chiba233/atm10-zh-cn），该作品译文部分含
> CFPA 社区翻译（Minecraft-Mod-Language-Package）成分，以 CC BY-NC-SA 4.0 授权，
> 本整合包中相关译文亦以相同协议提供。

---

## 二、贴图与模型

| 位置 / 文件 | 来源 | 许可 | 使用方式 |
|---|---|---|---|
| `kubejs/assets/kubejs/textures/item/rune_{aqua,ignis,terra,spring,summer,autumn,winter}.png` | **植物魔法 Botania**（作者 Vazkii） | Botania License | 使用原图（`rune_aqua`／`ignis`／`terra` 分别由 Botania 的 `rune_water`／`fire`／`earth` 改名而来） |
| `kubejs/assets/kubejs/textures/item/rune_{aer,perditio,ordo}.png` | **植物魔法 Botania**（作者 Vazkii） | Botania License | 由 Botania 的 `rune_air`／`gluttony`／`sloth` 换色改编 |
| `kubejs/assets/kubejs/textures/item/{clump_*, dirty_dust_*, shard_*, dust_*}.png` | **通用机械 Mekanism** | MIT | 基于其同类贴图换色改编 |
| `kubejs/assets/kubejs/textures/item/{ordo,perditio}_scribe_tool.png` | **命血术 Neo Vitae** | MIT | 接其铭文工具套系新增 |
| `kubejs/assets/kubejs/textures/item/token_{confusion,serenity,delirium,equanimity}.png` | **自然灵气 Nature's Aura** | MIT | 接其印记套系新增 |
| `kubejs/assets/kubejs/textures/item/{ordo,perditio}_essence.png` | **新生魔艺 Ars Nouveau** | Apache-2.0（jar 内 `META-INF/LICENSE.txt`） | 接其精华套系新增 |
| `kubejs/assets/kubejs/textures/item/{aether,eternal_starlight}_prediction.png` | **敌对神经网络 Hostile Neural Networks** | MIT | 接其预测产物套系新增 |
| `kubejs/assets/kubejs/textures/item/infinity_lava_cell.png` | **ExtendedAE** | LGPL-3.0 | 照其无限元件（`infinity_cell_water.png`）换色 |
| `kubejs/assets/kubejs/textures/block/sky_stone_starmetal_ore.png` | **应用能源2（AE2）** | 见其项目页（jar 内声明为「See GitHub repository for details」） | 以 AE2 的陨石（`sky_stone_block`）为底图，矿石点自绘 |
| `kubejs/assets/kubejs/textures/**` 其余贴图与模型 | 本整合包作者与贡献者绘制与改编 | CC BY-NC-SA 4.0 | — |

许可一列取自各模组 jar 内的声明（`META-INF/mods.toml`、`META-INF/LICENSE.txt`），最终以各项目页为准。

**Botania License 的额外要求**：署名 Vazkii、注明改动；使用方项目需开源并允许再分发与修改。

**建议署名文字**

> 本整合包部分贴图使用或改编自以下作品，特此致谢：植物魔法 Botania（作者 Vazkii，
> 符文贴图，部分经改名与改编）、通用机械 Mekanism、命血术 Neo Vitae、
> 自然灵气 Nature's Aura、新生魔艺 Ars Nouveau、敌对神经网络 Hostile Neural Networks、
> ExtendedAE、应用能源2（AE2）。

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

本整合包的贴图与模型由作者与贡献者共同绘制、改编与调色，功能与本地化也有贡献者参与；参与者的提交记录见仓库的 commit 历史与 PR。

同时也一并感谢所有为 Minecraft 模组与汉化社区付出的作者与贡献者。
