import {
  BracesIcon as Braces,
  BinaryIcon as Binary,
  Clock3Icon as Clock3,
  KeyRoundIcon as KeyRound,
  LanguagesIcon as Languages,
  FileTextIcon as FileText,
  ImageIcon as Image,
  FileType2Icon as FileType2,
  Grid3X3Icon as Grid3X3,
  PipetteIcon as Pipette,
} from '@lucide/vue'

export const categories = ['全部', '开发', '文本', '图像', '文档', '生活']

export const tools = [
  { slug: 'json', index: '01', name: 'JSON 格式化', summary: '格式化、压缩并验证 JSON 数据', category: '开发', icon: Braces, color: 'red', ready: true },
  { slug: 'base64', index: '02', name: 'Base64 编解码', summary: '文本与 Base64 安全互转，支持 Unicode', category: '开发', icon: Binary, color: 'blue', ready: true },
  { slug: 'timestamp', index: '03', name: '时间戳转换', summary: '时间戳与本地日期双向转换', category: '开发', icon: Clock3, color: 'ochre', ready: true },
  { slug: 'password', index: '04', name: '随机密码', summary: '在本地生成高强度随机密码', category: '生活', icon: KeyRound, color: 'green', ready: true },
  { slug: 'translate', index: '05', name: '在线翻译', summary: '快速翻译文本并保留原始格式', category: '文本', icon: Languages, color: 'blue' },
  { slug: 'markdown', index: '06', name: 'Markdown 编辑器', summary: '实时预览与导出 Markdown 文档', category: '文本', icon: FileText, color: 'ochre' },
  { slug: 'image', index: '07', name: '图片处理', summary: '压缩、裁剪与格式转换', category: '图像', icon: Image, color: 'green' },
  { slug: 'pdf', index: '08', name: 'PDF 工具', summary: '合并、拆分与页面整理', category: '文档', icon: FileType2, color: 'red' },
  { slug: 'pixel-beads', index: '09', name: '像素拼豆图纸', summary: '照片转网格图纸，精准匹配拼豆色号', category: '图像', icon: Grid3X3, color: 'special' },
  { slug: 'color', index: '10', name: '颜色工具', summary: '取色、转换与调色板生成', category: '开发', icon: Pipette, color: 'blue' },
]

export const findTool = (slug) => tools.find((tool) => tool.slug === slug)
