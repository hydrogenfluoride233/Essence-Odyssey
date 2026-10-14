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

- 2026-09-26 逐键比对复核（上游 `main` @ `a7c75a8`）：上列 17 个文件与上游逐字相同或高度重合——其中 10 个字节完全一致（buildinggadgets2、ftbchunks、ftbfiltersystem、ftblibrary、ftbultimine、functionalstorage、justdirethings、naturesaura、pylons、rechiseledcreate），`rechiseled` 3655/3656 键一致（仅 `rechiseled.tooltip.connecting` 改写），`neovitae` 112/116，其余为键集合一致、仅缩进或空白差异。比对明细见 `docs\脚本\汉化来源比对.md`。
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
| `kubejs/assets/kubejs/textures/**`、`kubejs/assets/kubejs/models/**` | 本整合包作者原创 | CC BY-NC-SA 4.0 | — |

- 2026-10-13 全部重绘：符文、倍矿中间物（晶体 / 碎块 / 碎片 / 污浊粉 / 粉）、板材、强化水晶粉、维度预测、无限熔岩元件、精华水晶与方块、元件、印记、仪式假人，以及祭坛、灌注部件的方块模型与贴图，均为逐像素原创。此前登记的 Botania 符文、Mekanism 基材质改编，以及 NeoVitae、HNN、AE2、Modular Machinery 的参考改编素材已全部替换。**星辉魔法（All Rights Reserved）的祭坛模型、大理石、星辉矿等临时占位也已移除**，仓库不再包含星辉魔法素材。
- 为了和对应模组的物品放在一起时协调，部分贴图的配色参照了原模组物品的颜色（如机械动力的锌、石灰岩、熔渣岩，神秘主义的铱，沉浸工程的镍、铝，通用机械的锇、锡，新生魔艺的源石，AE2 的陨石），外形也沿用了原模组的物品类型（如 Mekanism 的倍矿中间物、HNN 的维度预测、ExtendedAE 的无限元件）。这些贴图不含原模组的像素。
- `kubejs:block/imbuement_chamber` 的顶、底面在运行时直接引用新生魔艺自带的 `ars_nouveau:block/smooth_sourcestone_large_bricks`，本仓库不分发该贴图。

**致谢**

> 本整合包的自定义贴图为作者原创。为了和下列模组的物品搭配，部分配色与物品外形参照了它们，特此致谢：
> 机械动力 Create、神秘主义 Occultism、沉浸工程 Immersive Engineering、通用机械 Mekanism、
> 新生魔艺 Ars Nouveau、应用能源 AE2、ExtendedAE、敌对神经网络 Hostile Neural Networks、Actually Additions。

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
