# Pixel Beads 模块

此目录保存与 Vue 组件解耦的拼豆领域逻辑。浏览器中的原始图片不会通过 API 上传。

## 当前边界

- `core/palettes.js`：品牌色板注册表；每个颜色使用稳定的 `id/code/name/hex`。
- `core/mardPalette.js`：MARD 291 色社区校准数据，来源与 MIT 许可证见 `THIRD_PARTY_NOTICES.md`。
- `core/color.js`：sRGB → CIE Lab 与最近色匹配。
- `core/image.js`：图片解码、焦点裁剪与网格量化。
- `core/render.js`：Canvas 拼豆/网格渲染和颜色用量统计。
- `core/export.js`：本地 PNG 与单页 PDF 导出。
- `components/tools/PixelBeadsTool.vue`：Vue 交互状态，不承载颜色算法。

## 后续扩展

新增 Hama 或 Artkal 时，在 `palettes.js` 注册同构色板即可。颜色量化、去杂色、对称轴与图层应分别新增独立 core 模块，不把算法塞回 Vue 组件。工程保存应序列化网格尺寸、色板 ID、颜色索引、图层和编辑参数，不保存原始图片，除非用户明确选择嵌入。
