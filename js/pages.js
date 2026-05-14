/* ========================================
   影子 ShadowLens - Pages JavaScript
   ======================================== */

// ========================================
// SVG Icons
// ========================================
const icons = {
  search: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>',
  heart: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  heartFill: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  bookmark: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',
  share: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
  camera: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
  tag: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
  grid: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
  list: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
  close: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  eye: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  filter: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>'
};

// ========================================
// Hierarchical Category System
// ========================================
const categoryHierarchy = {
  landscape: {
    zh: '风景', en: 'Landscape',
    desc: { zh: '山川湖海，天地大美', en: 'Mountains, lakes, and the beauty of nature' },
    icon: 'landscape',
    subs: {
      mountain: { zh: '山川', en: 'Mountains' },
      lake: { zh: '湖泊', en: 'Lakes' },
      sunset: { zh: '日落日出', en: 'Sunset & Sunrise' },
      sky: { zh: '天空', en: 'Sky' },
      ocean: { zh: '海景', en: 'Ocean' }
    }
  },
  portrait: {
    zh: '人像', en: 'Portrait',
    desc: { zh: '光影之间，灵魂的肖像', en: 'Between light and shadow, portraits of the soul' },
    icon: 'portrait',
    subs: {
      light: { zh: '光影人像', en: 'Light Portrait' },
      bw: { zh: '黑白', en: 'Black & White' },
      env: { zh: '环境人像', en: 'Environmental' },
      creative: { zh: '创意', en: 'Creative' },
      mood: { zh: '情绪', en: 'Mood' }
    }
  },
  street: {
    zh: '街拍', en: 'Street',
    desc: { zh: '城市脉搏，街头诗篇', en: 'City pulse, street poetry' },
    icon: 'street',
    subs: {
      city: { zh: '城市', en: 'City' },
      night: { zh: '夜景', en: 'Night' },
      culture: { zh: '人文', en: 'Culture' },
      arch: { zh: '建筑', en: 'Architecture' },
      doc: { zh: '纪实', en: 'Documentary' }
    }
  },
  nature: {
    zh: '自然', en: 'Nature',
    desc: { zh: '万物有灵，自然之声', en: 'All things have spirit, the voice of nature' },
    icon: 'nature',
    subs: {
      flower: { zh: '花卉', en: 'Flowers' },
      animal: { zh: '动物', en: 'Animals' },
      macro: { zh: '微距', en: 'Macro' },
      forest: { zh: '森林', en: 'Forest' },
      weather: { zh: '天气', en: 'Weather' }
    }
  },
  architecture: {
    zh: '建筑', en: 'Architecture',
    desc: { zh: '凝固的音乐，空间的诗', en: 'Frozen music, poetry of space' },
    icon: 'architecture',
    subs: {
      geometric: { zh: '几何', en: 'Geometric' },
      modern: { zh: '现代', en: 'Modern' },
      classical: { zh: '古典', en: 'Classical' },
      interior: { zh: '室内', en: 'Interior' },
      industrial: { zh: '工业', en: 'Industrial' }
    }
  },
  night: {
    zh: '夜景', en: 'Night',
    desc: { zh: '夜的幕布，光的画笔', en: 'Curtain of night, brush of light' },
    icon: 'night',
    subs: {
      citylight: { zh: '城市灯光', en: 'City Lights' },
      starry: { zh: '星空', en: 'Starry Sky' },
      moon: { zh: '月色', en: 'Moonlight' },
      startrail: { zh: '星轨', en: 'Star Trails' },
      neon: { zh: '霓虹', en: 'Neon' }
    }
  },
  travel: {
    zh: '旅行', en: 'Travel',
    desc: { zh: '脚步丈量世界，镜头记录远方', en: 'Measuring the world with steps, recording distance with lens' },
    icon: 'travel',
    subs: {
      lakeside: { zh: '湖畔', en: 'Lakeside' },
      road: { zh: '公路', en: 'Road Trip' },
      alley: { zh: '古巷', en: 'Ancient Alley' },
      exotic: { zh: '异域', en: 'Exotic' },
      wild: { zh: '荒野', en: 'Wilderness' }
    }
  },
  abstract: {
    zh: '抽象', en: 'Abstract',
    desc: { zh: '超越具象，直抵心灵', en: 'Beyond the concrete, straight to the soul' },
    icon: 'abstract',
    subs: {
      color: { zh: '色彩', en: 'Color' },
      texture: { zh: '纹理', en: 'Texture' },
      light: { zh: '光影', en: 'Light' },
      ink: { zh: '水墨', en: 'Ink Wash' },
      geometric: { zh: '几何', en: 'Geometric' }
    }
  },
  vintage: {
    zh: '老照片', en: 'Vintage',
    desc: { zh: '时光的印记，记忆的温度', en: 'Marks of time, warmth of memory' },
    icon: 'vintage',
    subs: {
      film: { zh: '胶片', en: 'Film' },
      faded: { zh: '褪色', en: 'Faded' },
      grain: { zh: '颗粒感', en: 'Grain' },
      retro: { zh: '怀旧', en: 'Retro' },
      darkroom: { zh: '暗房', en: 'Darkroom' }
    }
  },
  minimal: {
    zh: '极简', en: 'Minimal',
    desc: { zh: '少即是多，空即是色', en: 'Less is more, emptiness is color' },
    icon: 'minimal',
    subs: {
      space: { zh: '留白', en: 'White Space' },
      line: { zh: '线条', en: 'Lines' },
      sunrise: { zh: '日出', en: 'Sunrise' },
      sky: { zh: '天空', en: 'Sky' },
      geometric: { zh: '几何', en: 'Geometric' }
    }
  },
  film: {
    zh: '胶片', en: 'Film',
    desc: { zh: '菲林的温度，数码无法复制', en: 'The warmth of film, impossible to replicate digitally' },
    icon: 'film',
    subs: {
      grain: { zh: '颗粒', en: 'Grain' },
      roll: { zh: '菲林', en: 'Film Roll' },
      color: { zh: '色彩', en: 'Colors' },
      negative: { zh: '底片', en: 'Negative' },
      sunset: { zh: '日落', en: 'Sunset' }
    }
  }
};

// Flat category lookup
const categoryNames = {};
Object.entries(categoryHierarchy).forEach(([key, cat]) => {
  categoryNames[key] = { zh: cat.zh, en: cat.en };
  if (cat.subs) {
    Object.entries(cat.subs).forEach(([subKey, sub]) => {
      categoryNames[`${key}_${subKey}`] = { zh: sub.zh, en: sub.en };
    });
  }
});

// ========================================
// Photo Data - 60 photos across all categories
// ========================================
const allPhotos = [
  // === LANDSCAPE (6) ===
  {
    id: 1, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    title: '山巅之上', titleEn: 'Above the Mountains', author: 'Alex Chen', authorId: 'alex',
    category: 'landscape', sub: 'mountain', likes: 1234, views: 5678, aspect: '3/4',
    tags: ['山脉', '云海', '日出'], date: '2024-01-15', style: '光影',
    description: '清晨站在山巅，云海翻涌如潮', camera: 'Sony A7R IV'
  },
  {
    id: 5, url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
    title: '山谷之光', titleEn: 'Valley Light', author: 'David Wilson', authorId: 'david',
    category: 'landscape', sub: 'mountain', likes: 2100, views: 6543, aspect: '4/3',
    tags: ['山谷', '光线', '自然'], date: '2024-02-20', style: '光影',
    description: '阳光穿透山谷，洒下金色的光', camera: 'Canon EOS R5'
  },
  {
    id: 7, url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80',
    title: '日落时分', titleEn: 'Sunset Hour', author: 'Tom Martinez', authorId: 'tom',
    category: 'landscape', sub: 'sunset', likes: 3200, views: 8765, aspect: '16/9',
    tags: ['日落', '黄昏', '剪影'], date: '2024-03-10', style: '光影',
    description: '日落时分，万物披上金色的外衣', camera: 'Nikon Z7 II'
  },
  {
    id: 10, url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    title: '山峰', titleEn: 'Peak', author: 'Kevin Zhang', authorId: 'kevin',
    category: 'landscape', sub: 'mountain', likes: 2890, views: 7654, aspect: '3/4',
    tags: ['山峰', '壮丽', '远景'], date: '2024-04-05', style: '极简',
    description: '巍峨山峰直插云霄', camera: 'Sony A7R IV'
  },
  {
    id: 4, url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80',
    title: '海的呼吸', titleEn: 'Ocean Breath', author: 'Emily Brown', authorId: 'emily',
    category: 'landscape', sub: 'ocean', likes: 1567, views: 4321, aspect: '16/9',
    tags: ['海洋', '波浪', '蓝色'], date: '2024-05-12', style: '极简',
    description: '海浪轻拍沙滩，如大地的呼吸', camera: 'Fujifilm GFX 100S'
  },
  {
    id: 60, url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80',
    title: '飞瀑流泉', titleEn: 'Cascading Falls', author: 'James Liu', authorId: 'james',
    category: 'landscape', sub: 'mountain', likes: 1890, views: 5432, aspect: '3/4',
    tags: ['瀑布', '水流', '自然'], date: '2024-06-18', style: '光影',
    description: '飞瀑直下，水雾弥漫', camera: 'Canon EOS R5'
  },

  // === NATURE (6) ===
  {
    id: 2, url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
    title: '晨雾森林', titleEn: 'Morning Mist', author: 'Sarah Kim', authorId: 'sarah',
    category: 'nature', sub: 'forest', likes: 892, views: 3456, aspect: '4/3',
    tags: ['森林', '晨雾', '绿色'], date: '2024-01-20', style: '光影',
    description: '晨雾笼罩森林，如梦似幻', camera: 'Nikon Z7 II'
  },
  {
    id: 3, url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    title: '光之森林', titleEn: 'Forest Light', author: 'Mike Johnson', authorId: 'mike',
    category: 'nature', sub: 'forest', likes: 2345, views: 7890, aspect: '3/4',
    tags: ['森林', '光线', '丁达尔效应'], date: '2024-02-14', style: '光影',
    description: '光线穿透树冠，形成神圣的光柱', camera: 'Sony A7R IV'
  },
  {
    id: 11, url: 'https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?w=800&q=80',
    title: '极光', titleEn: 'Aurora', author: 'Sophie Chen', authorId: 'sophie',
    category: 'nature', sub: 'weather', likes: 5678, views: 15432, aspect: '16/9',
    tags: ['极光', '星空', '北极'], date: '2024-03-01', style: '光影',
    description: '极光舞动，如天幕上的绸带', camera: 'Sony A7S III'
  },
  {
    id: 12, url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80',
    title: '瀑布', titleEn: 'Waterfall', author: 'James Liu', authorId: 'james',
    category: 'nature', sub: 'macro', likes: 3456, views: 9876, aspect: '3/4',
    tags: ['瀑布', '水流', '长曝光'], date: '2024-03-25', style: '光影',
    description: '飞瀑如练，水声如雷', camera: 'Canon EOS R5'
  },
  {
    id: 61, url: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&q=80',
    title: '秋叶', titleEn: 'Autumn Leaves', author: 'Anna Lee', authorId: 'anna',
    category: 'nature', sub: 'flower', likes: 1234, views: 4567, aspect: '4/3',
    tags: ['秋天', '落叶', '色彩'], date: '2024-04-15', style: '极简',
    description: '秋叶如火，铺满小径', camera: 'Fujifilm X-T5'
  },
  {
    id: 62, url: 'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?w=800&q=80',
    title: '原野', titleEn: 'Open Fields', author: 'David Wilson', authorId: 'david',
    category: 'nature', sub: 'weather', likes: 987, views: 3210, aspect: '16/9',
    tags: ['原野', '绿色', '开阔'], date: '2024-05-20', style: '极简',
    description: '无边原野，风吹草低', camera: 'Nikon Z7 II'
  },

  // === PORTRAIT (6) ===
  {
    id: 6, url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    title: '人像', titleEn: 'Portrait', author: 'Lisa Anderson', authorId: 'lisa',
    category: 'portrait', sub: 'light', likes: 1890, views: 5432, aspect: '3/4',
    tags: ['人像', '光影', '侧脸'], date: '2024-01-28', style: '光影',
    description: '光影交织，勾勒出人物轮廓', camera: 'Sony A7R IV'
  },
  {
    id: 63, url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
    title: '凝视', titleEn: 'The Gaze', author: 'Lisa Anderson', authorId: 'lisa',
    category: 'portrait', sub: 'bw', likes: 2345, views: 6789, aspect: '3/4',
    tags: ['人像', '眼神', '黑白'], date: '2024-02-10', style: '极简',
    description: '深邃的眼神，诉说着无声的故事', camera: 'Leica M11'
  },
  {
    id: 64, url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
    title: '微笑', titleEn: 'Smile', author: 'Sarah Kim', authorId: 'sarah',
    category: 'portrait', sub: 'light', likes: 1567, views: 4321, aspect: '3/4',
    tags: ['人像', '微笑', '自然光'], date: '2024-03-05', style: '光影',
    description: '自然的微笑，最动人的瞬间', camera: 'Canon EOS R5'
  },
  {
    id: 65, url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
    title: '光影人像', titleEn: 'Light Portrait', author: 'Mike Johnson', authorId: 'mike',
    category: 'portrait', sub: 'light', likes: 2100, views: 5678, aspect: '3/4',
    tags: ['人像', '光影', '明暗'], date: '2024-04-12', style: '光影',
    description: '明暗之间，光影塑造灵魂', camera: 'Sony A7R IV'
  },
  {
    id: 66, url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80',
    title: '侧颜', titleEn: 'Profile', author: 'Emily Brown', authorId: 'emily',
    category: 'portrait', sub: 'mood', likes: 1890, views: 5432, aspect: '3/4',
    tags: ['人像', '侧颜', '柔光'], date: '2024-05-08', style: '极简',
    description: '侧颜如画，柔光如诗', camera: 'Fujifilm GFX 100S'
  },
  {
    id: 67, url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80',
    title: '沉思', titleEn: 'Contemplation', author: 'Tom Martinez', authorId: 'tom',
    category: 'portrait', sub: 'bw', likes: 2456, views: 7890, aspect: '3/4',
    tags: ['人像', '沉思', '黑白'], date: '2024-06-01', style: '极简',
    description: '沉思的瞬间，时间仿佛静止', camera: 'Leica M11'
  },

  // === NIGHT (5) ===
  {
    id: 9, url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
    title: '星空', titleEn: 'Starry Night', author: 'Chris Wang', authorId: 'chris',
    category: 'night', sub: 'starry', likes: 4567, views: 12345, aspect: '16/9',
    tags: ['星空', '银河', '长曝光'], date: '2024-01-08', style: '光影',
    description: '银河横跨天际，繁星点点', camera: 'Sony A7S III'
  },
  {
    id: 68, url: 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=800&q=80',
    title: '城市夜景', titleEn: 'City Lights', author: 'Chris Wang', authorId: 'chris',
    category: 'night', sub: 'citylight', likes: 3210, views: 8765, aspect: '16/9',
    tags: ['城市', '夜景', '灯光'], date: '2024-02-28', style: '光影',
    description: '万家灯火，城市的另一种美', camera: 'Nikon Z7 II'
  },
  {
    id: 69, url: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80',
    title: '东京之夜', titleEn: 'Tokyo Night', author: 'Kevin Zhang', authorId: 'kevin',
    category: 'night', sub: 'neon', likes: 2890, views: 7654, aspect: '3/4',
    tags: ['东京', '霓虹', '街景'], date: '2024-03-18', style: '街拍',
    description: '霓虹闪烁，东京不眠', camera: 'Sony A7C II'
  },
  {
    id: 70, url: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800&q=80',
    title: '月光', titleEn: 'Moonlight', author: 'Sophie Chen', authorId: 'sophie',
    category: 'night', sub: 'moon', likes: 1567, views: 4321, aspect: '16/9',
    tags: ['月亮', '夜晚', '宁静'], date: '2024-04-22', style: '极简',
    description: '月光如水，洒满大地', camera: 'Canon EOS R5'
  },
  {
    id: 71, url: 'https://images.unsplash.com/photo-1505322022379-7c3353ee6291?w=800&q=80',
    title: '星轨', titleEn: 'Star Trails', author: 'Chris Wang', authorId: 'chris',
    category: 'night', sub: 'startrail', likes: 3456, views: 9876, aspect: '16/9',
    tags: ['星轨', '长曝光', '夜空'], date: '2024-05-15', style: '光影',
    description: '星轨如画，时间的痕迹', camera: 'Sony A7S III'
  },

  // === TRAVEL (5) ===
  {
    id: 8, url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
    title: '远方', titleEn: 'Distance', author: 'Anna Lee', authorId: 'anna',
    category: 'travel', sub: 'road', likes: 1456, views: 4567, aspect: '4/3',
    tags: ['旅行', '远方', '公路'], date: '2024-02-05', style: '极简',
    description: '路在脚下，远方在心中', camera: 'Fujifilm X-T5'
  },
  {
    id: 72, url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
    title: '湖畔', titleEn: 'Lakeside', author: 'Anna Lee', authorId: 'anna',
    category: 'travel', sub: 'lakeside', likes: 1234, views: 3456, aspect: '16/9',
    tags: ['湖泊', '旅行', '倒影'], date: '2024-03-12', style: '极简',
    description: '湖面如镜，映照着天空', camera: 'Sony A7R IV'
  },
  {
    id: 73, url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
    title: '在路上', titleEn: 'On the Road', author: 'Tom Martinez', authorId: 'tom',
    category: 'travel', sub: 'road', likes: 2100, views: 5678, aspect: '16/9',
    tags: ['公路', '旅行', '自由'], date: '2024-04-08', style: '极简',
    description: '在路上，是最美的状态', camera: 'Canon EOS R5'
  },
  {
    id: 74, url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
    title: '古巷', titleEn: 'Ancient Alley', author: 'Kevin Zhang', authorId: 'kevin',
    category: 'travel', sub: 'alley', likes: 1890, views: 5432, aspect: '3/4',
    tags: ['古巷', '旅行', '历史'], date: '2024-05-25', style: '复古',
    description: '古巷深深，时光悠悠', camera: 'Fujifilm X-T5'
  },
  {
    id: 75, url: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80',
    title: '异域', titleEn: 'Exotic', author: 'Emily Brown', authorId: 'emily',
    category: 'travel', sub: 'exotic', likes: 1567, views: 4321, aspect: '4/3',
    tags: ['异域', '文化', '色彩'], date: '2024-06-10', style: '街拍',
    description: '异域风情，色彩斑斓', camera: 'Nikon Z7 II'
  },

  // === STREET (5) ===
  {
    id: 76, url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
    title: '城市脉搏', titleEn: 'City Pulse', author: 'Tom Martinez', authorId: 'tom',
    category: 'street', sub: 'city', likes: 1890, views: 5432, aspect: '16/9',
    tags: ['城市', '街拍', '建筑'], date: '2024-01-22', style: '街拍',
    description: '城市的脉搏，永不停歇', camera: 'Leica Q3'
  },
  {
    id: 77, url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
    title: '雨中漫步', titleEn: 'Rain Walk', author: 'Sarah Kim', authorId: 'sarah',
    category: 'street', sub: 'culture', likes: 1567, views: 4321, aspect: '3/4',
    tags: ['雨天', '街拍', '伞'], date: '2024-02-18', style: '街拍',
    description: '雨中的城市，别有一番风味', camera: 'Fujifilm X100V'
  },
  {
    id: 78, url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&q=80',
    title: '霓虹', titleEn: 'Neon', author: 'Chris Wang', authorId: 'chris',
    category: 'street', sub: 'night', likes: 2345, views: 6789, aspect: '3/4',
    tags: ['霓虹', '夜景', '城市'], date: '2024-03-28', style: '街拍',
    description: '霓虹闪烁，城市不眠', camera: 'Sony A7C II'
  },
  {
    id: 79, url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
    title: '天际线', titleEn: 'Skyline', author: 'Kevin Zhang', authorId: 'kevin',
    category: 'street', sub: 'arch', likes: 2100, views: 5678, aspect: '16/9',
    tags: ['天际线', '城市', '建筑'], date: '2024-04-30', style: '极简',
    description: '天际线勾勒出城市的轮廓', camera: 'Nikon Z7 II'
  },
  {
    id: 80, url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80',
    title: '巷弄', titleEn: 'Alleyway', author: 'Anna Lee', authorId: 'anna',
    category: 'street', sub: 'doc', likes: 1234, views: 3456, aspect: '3/4',
    tags: ['巷弄', '街拍', '日常'], date: '2024-05-28', style: '街拍',
    description: '巷弄深处，藏着生活的故事', camera: 'Fujifilm X100V'
  },

  // === ARCHITECTURE (5) ===
  {
    id: 81, url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    title: '几何之美', titleEn: 'Geometry', author: 'Mike Johnson', authorId: 'mike',
    category: 'architecture', sub: 'geometric', likes: 1890, views: 5432, aspect: '3/4',
    tags: ['建筑', '几何', '线条'], date: '2024-01-30', style: '极简',
    description: '几何线条，建筑的灵魂', camera: 'Canon EOS R5'
  },
  {
    id: 82, url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
    title: '穹顶', titleEn: 'Dome', author: 'David Wilson', authorId: 'david',
    category: 'architecture', sub: 'classical', likes: 2345, views: 6789, aspect: '3/4',
    tags: ['穹顶', '建筑', '对称'], date: '2024-02-25', style: '极简',
    description: '穹顶之下，是人类的智慧', camera: 'Sony A7R IV'
  },
  {
    id: 83, url: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=800&q=80',
    title: '光影建筑', titleEn: 'Light Architecture', author: 'Lisa Anderson', authorId: 'lisa',
    category: 'architecture', sub: 'modern', likes: 1567, views: 4321, aspect: '4/3',
    tags: ['建筑', '光影', '结构'], date: '2024-03-15', style: '光影',
    description: '光影赋予建筑生命', camera: 'Leica M11'
  },
  {
    id: 84, url: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?w=800&q=80',
    title: '现代线条', titleEn: 'Modern Lines', author: 'Mike Johnson', authorId: 'mike',
    category: 'architecture', sub: 'modern', likes: 2100, views: 5678, aspect: '3/4',
    tags: ['现代', '线条', '建筑'], date: '2024-04-20', style: '极简',
    description: '现代建筑的极简美学', camera: 'Fujifilm GFX 100S'
  },
  {
    id: 85, url: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&q=80',
    title: '古典', titleEn: 'Classical', author: 'Tom Martinez', authorId: 'tom',
    category: 'architecture', sub: 'classical', likes: 1890, views: 5432, aspect: '4/3',
    tags: ['古典', '建筑', '历史'], date: '2024-05-30', style: '复古',
    description: '古典建筑，凝固的时光', camera: 'Nikon Z7 II'
  },

  // === ABSTRACT (5) ===
  {
    id: 86, url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80',
    title: '色彩流动', titleEn: 'Color Flow', author: 'Sophie Chen', authorId: 'sophie',
    category: 'abstract', sub: 'color', likes: 2345, views: 6789, aspect: '1/1',
    tags: ['抽象', '色彩', '流动'], date: '2024-02-08', style: '抽象',
    description: '色彩如水，自由流淌', camera: 'Canon EOS R5'
  },
  {
    id: 87, url: 'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=800&q=80',
    title: '纹理', titleEn: 'Texture', author: 'Emily Brown', authorId: 'emily',
    category: 'abstract', sub: 'texture', likes: 1567, views: 4321, aspect: '1/1',
    tags: ['抽象', '纹理', '质感'], date: '2024-03-22', style: '抽象',
    description: '纹理之中，藏着另一个世界', camera: 'Sony A7R IV'
  },
  {
    id: 88, url: 'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=800&q=80',
    title: '光影抽象', titleEn: 'Light Abstract', author: 'Chris Wang', authorId: 'chris',
    category: 'abstract', sub: 'light', likes: 1890, views: 5432, aspect: '16/9',
    tags: ['抽象', '光影', '线条'], date: '2024-04-18', style: '抽象',
    description: '光影交错，抽象的诗意', camera: 'Fujifilm GFX 100S'
  },
  {
    id: 89, url: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=80',
    title: '水墨', titleEn: 'Ink Wash', author: 'Kevin Zhang', authorId: 'kevin',
    category: 'abstract', sub: 'ink', likes: 2100, views: 5678, aspect: '3/4',
    tags: ['抽象', '水墨', '黑白'], date: '2024-05-22', style: '抽象',
    description: '如水墨般晕染开来', camera: 'Leica M11'
  },
  {
    id: 90, url: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80',
    title: '几何抽象', titleEn: 'Geometric', author: 'Lisa Anderson', authorId: 'lisa',
    category: 'abstract', sub: 'geometric', likes: 1234, views: 3456, aspect: '1/1',
    tags: ['抽象', '几何', '色彩'], date: '2024-06-15', style: '抽象',
    description: '几何与色彩的碰撞', camera: 'Canon EOS R5'
  },

  // === VINTAGE / OLD PHOTOS (6) ===
  {
    id: 91, url: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&q=80',
    title: '旧时光', titleEn: 'Old Times', author: 'Anna Lee', authorId: 'anna',
    category: 'vintage', sub: 'retro', likes: 3456, views: 9876, aspect: '4/3',
    tags: ['复古', '胶片', '怀旧'], date: '2024-01-10', style: '复古',
    description: '泛黄的记忆，温暖的旧时光', camera: 'Rolleiflex 2.8F'
  },
  {
    id: 92, url: 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&q=80',
    title: '胶片记忆', titleEn: 'Film Memory', author: 'Tom Martinez', authorId: 'tom',
    category: 'vintage', sub: 'grain', likes: 2890, views: 7654, aspect: '3/4',
    tags: ['胶片', '复古', '颗粒感'], date: '2024-02-15', style: '复古',
    description: '胶片的颗粒感，是时间的印记', camera: 'Hasselblad 500C/M'
  },
  {
    id: 93, url: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=80',
    title: '褪色', titleEn: 'Faded', author: 'Sarah Kim', authorId: 'sarah',
    category: 'vintage', sub: 'faded', likes: 2345, views: 6789, aspect: '4/3',
    tags: ['褪色', '复古', '怀旧'], date: '2024-03-08', style: '复古',
    description: '褪色的照片，不褪色的记忆', camera: 'Pentax 67'
  },
  {
    id: 94, url: 'https://images.unsplash.com/photo-1504297050568-910d24c426d3?w=800&q=80',
    title: '旧物', titleEn: 'Vintage Objects', author: 'Emily Brown', authorId: 'emily',
    category: 'vintage', sub: 'retro', likes: 1890, views: 5432, aspect: '3/4',
    tags: ['旧物', '复古', '静物'], date: '2024-04-10', style: '复古',
    description: '旧物无声，却诉说着故事', camera: 'Leica M6'
  },
  {
    id: 95, url: 'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=800&q=80',
    title: '老街', titleEn: 'Old Street', author: 'Kevin Zhang', authorId: 'kevin',
    category: 'vintage', sub: 'darkroom', likes: 2100, views: 5678, aspect: '4/3',
    tags: ['老街', '复古', '街景'], date: '2024-05-05', style: '复古',
    description: '老街悠悠，岁月如歌', camera: 'Nikon FM2'
  },
  {
    id: 96, url: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=800&q=80',
    title: '光影旧梦', titleEn: 'Light Dreams', author: 'David Wilson', authorId: 'david',
    category: 'vintage', sub: 'film', likes: 2567, views: 7234, aspect: '3/4',
    tags: ['光影', '复古', '梦境'], date: '2024-06-08', style: '复古',
    description: '光影中的旧梦，朦胧而美好', camera: 'Mamiya RB67'
  },

  // === MINIMAL (5) ===
  {
    id: 97, url: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&q=80',
    title: '留白', titleEn: 'White Space', author: 'Lisa Anderson', authorId: 'lisa',
    category: 'minimal', sub: 'space', likes: 3210, views: 8765, aspect: '16/9',
    tags: ['极简', '留白', '空间'], date: '2024-01-25', style: '极简',
    description: '留白，是最高的艺术', camera: 'Leica Q3'
  },
  {
    id: 98, url: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80',
    title: '线条', titleEn: 'Lines', author: 'Mike Johnson', authorId: 'mike',
    category: 'minimal', sub: 'line', likes: 2890, views: 7654, aspect: '3/4',
    tags: ['极简', '线条', '几何'], date: '2024-02-22', style: '极简',
    description: '简洁的线条，无穷的力量', camera: 'Sony A7R IV'
  },
  {
    id: 99, url: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&q=80',
    title: '日出极简', titleEn: 'Sunrise Minimal', author: 'Alex Chen', authorId: 'alex',
    category: 'minimal', sub: 'sunrise', likes: 2345, views: 6789, aspect: '16/9',
    tags: ['极简', '日出', '海平面'], date: '2024-03-18', style: '极简',
    description: '日出海平面，极简之美', camera: 'Canon EOS R5'
  },
  {
    id: 100, url: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80',
    title: '极简空间', titleEn: 'Minimal Space', author: 'Chris Wang', authorId: 'chris',
    category: 'minimal', sub: 'space', likes: 1890, views: 5432, aspect: '4/3',
    tags: ['极简', '空间', '光影'], date: '2024-04-25', style: '极简',
    description: '空间的呼吸，光影的对话', camera: 'Fujifilm GFX 100S'
  },
  {
    id: 101, url: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&q=80',
    title: '极简天空', titleEn: 'Minimal Sky', author: 'Sophie Chen', authorId: 'sophie',
    category: 'minimal', sub: 'sky', likes: 1567, views: 4321, aspect: '16/9',
    tags: ['极简', '天空', '云'], date: '2024-05-18', style: '极简',
    description: '天空之下，万物归简', camera: 'Nikon Z7 II'
  },

  // === FILM (5) ===
  {
    id: 102, url: 'https://images.unsplash.com/photo-1552168324-d612d77725e3?w=800&q=80',
    title: '胶片质感', titleEn: 'Film Grain', author: 'Sarah Kim', authorId: 'sarah',
    category: 'film', sub: 'grain', likes: 2345, views: 6789, aspect: '3/4',
    tags: ['胶片', '质感', '复古'], date: '2024-02-12', style: '复古',
    description: '胶片的质感，是数码无法复制的温度', camera: 'Contax T2'
  },
  {
    id: 103, url: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&q=80',
    title: '菲林', titleEn: 'Film Roll', author: 'Tom Martinez', authorId: 'tom',
    category: 'film', sub: 'roll', likes: 1890, views: 5432, aspect: '4/3',
    tags: ['胶片', '菲林', '怀旧'], date: '2024-03-28', style: '复古',
    description: '每一卷菲林，都是一段旅程', camera: 'Olympus mju II'
  },
  {
    id: 104, url: 'https://images.unsplash.com/photo-1476611317561-60117649dd94?w=800&q=80',
    title: '胶片色彩', titleEn: 'Film Colors', author: 'Emily Brown', authorId: 'emily',
    category: 'film', sub: 'color', likes: 2100, views: 5678, aspect: '3/4',
    tags: ['胶片', '色彩', '温暖'], date: '2024-04-15', style: '复古',
    description: '胶片的色彩，温暖而真实', camera: 'Yashica T4'
  },
  {
    id: 105, url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80',
    title: '底片', titleEn: 'Negative', author: 'David Wilson', authorId: 'david',
    category: 'film', sub: 'negative', likes: 1567, views: 4321, aspect: '4/3',
    tags: ['胶片', '底片', '暗房'], date: '2024-05-22', style: '复古',
    description: '底片中的世界，颠倒而迷人', camera: 'Nikon F3'
  },
  {
    id: 106, url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80',
    title: '胶片日落', titleEn: 'Film Sunset', author: 'Anna Lee', authorId: 'anna',
    category: 'film', sub: 'sunset', likes: 2890, views: 7654, aspect: '16/9',
    tags: ['胶片', '日落', '暖调'], date: '2024-06-12', style: '复古',
    description: '胶片下的日落，格外温柔', camera: 'Pentax MX'
  }
];

// ========================================
// Photographer Data
// ========================================
const photographers = {
  alex: {
    name: 'Alex Chen', bio: '专业风景摄影师，捕捉大自然的壮丽瞬间',
    photos: 156, followers: 2345, following: 89,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80',
    theme: 'light', tags: ['风景', '自然', '光影']
  },
  sarah: {
    name: 'Sarah Kim', bio: '用镜头记录生活中的美好',
    photos: 89, followers: 1234, following: 56,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    cover: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&q=80',
    theme: 'light', tags: ['自然', '街拍', '胶片']
  },
  mike: {
    name: 'Mike Johnson', bio: '探索自然与光影的奥秘',
    photos: 234, followers: 3456, following: 123,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
    cover: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80',
    theme: 'dark', tags: ['光影', '建筑', '极简']
  },
  emily: {
    name: 'Emily Brown', bio: '海洋与风景摄影爱好者',
    photos: 67, followers: 890, following: 45,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    cover: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1600&q=80',
    theme: 'light', tags: ['海洋', '风景', '旅行']
  },
  david: {
    name: 'David Wilson', bio: '用摄影表达对自然的敬畏',
    photos: 178, followers: 2100, following: 78,
    avatar: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=200&q=80',
    cover: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80',
    theme: 'light', tags: ['风景', '自然', '胶片']
  },
  lisa: {
    name: 'Lisa Anderson', bio: '人像摄影师，捕捉人物的灵魂',
    photos: 145, followers: 1890, following: 67,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80',
    theme: 'dark', tags: ['人像', '光影', '极简']
  },
  tom: {
    name: 'Tom Martinez', bio: '旅行摄影师，记录世界的美',
    photos: 312, followers: 4567, following: 156,
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80',
    cover: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1600&q=80',
    theme: 'light', tags: ['旅行', '街拍', '风景']
  },
  anna: {
    name: 'Anna Lee', bio: '用镜头讲述故事',
    photos: 98, followers: 1456, following: 89,
    avatar: 'https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?w=200&q=80',
    cover: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80',
    theme: 'light', tags: ['旅行', '复古', '故事']
  },
  chris: {
    name: 'Chris Wang', bio: '夜景与星空摄影师',
    photos: 76, followers: 4567, following: 34,
    avatar: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=200&q=80',
    cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=80',
    theme: 'dark', tags: ['夜景', '星空', '城市']
  },
  kevin: {
    name: 'Kevin Zhang', bio: '山川湖海，皆是风景',
    photos: 201, followers: 2890, following: 112,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    cover: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80',
    theme: 'light', tags: ['风景', '旅行', '建筑']
  },
  sophie: {
    name: 'Sophie Chen', bio: '追逐极光的摄影师',
    photos: 54, followers: 5678, following: 23,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    cover: 'https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?w=1600&q=80',
    theme: 'dark', tags: ['极光', '星空', '自然']
  },
  james: {
    name: 'James Liu', bio: '瀑布与水流摄影专家',
    photos: 87, followers: 3456, following: 67,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
    cover: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1600&q=80',
    theme: 'light', tags: ['瀑布', '水流', '自然']
  }
};

// ========================================
// Search Functions
// ========================================
function searchPhotos(query) {
  if (!query || !query.trim()) return [];
  const q = query.toLowerCase().trim();

  // Get user tags map
  let userTagsMap = {};
  try {
    userTagsMap = JSON.parse(localStorage.getItem('sl_user_tags') || '{}');
  } catch(e) {}

  // Include user posts
  let userPosts = [];
  try { userPosts = JSON.parse(localStorage.getItem('sl_user_posts') || '[]'); } catch(e) {}
  const allSearchable = [...userPosts, ...allPhotos];

  return allSearchable.filter(photo => {
    const systemMatch = photo.title.includes(q) ||
      photo.titleEn.toLowerCase().includes(q) ||
      photo.author.toLowerCase().includes(q) ||
      photo.category.includes(q) ||
      (photo.style && photo.style.includes(q)) ||
      (photo.description && photo.description.includes(q)) ||
      (photo.tags && photo.tags.some(tag => tag.includes(q)));

    // Check user tags
    const photoUserTags = userTagsMap[photo.id] || [];
    const userMatch = photoUserTags.some(tag => tag.includes(q));

    return systemMatch || userMatch;
  });
}

function getSearchHistory() {
  try {
    return JSON.parse(localStorage.getItem('sl_search_history') || '[]');
  } catch (e) { return []; }
}

function addSearchHistory(query) {
  if (!query || !query.trim()) return;
  let history = getSearchHistory();
  history = history.filter(h => h !== query.trim());
  history.unshift(query.trim());
  if (history.length > 10) history = history.slice(0, 10);
  localStorage.setItem('sl_search_history', JSON.stringify(history));
}

function clearSearchHistory() {
  localStorage.removeItem('sl_search_history');
}

// ========================================
// Tag Functions
// ========================================
function getAllTags() {
  const tagMap = {};

  // Include user posts
  let userPosts = [];
  try { userPosts = JSON.parse(localStorage.getItem('sl_user_posts') || '[]'); } catch(e) {}
  const allPhotosList = [...userPosts, ...allPhotos];

  allPhotosList.forEach(photo => {
    if (photo.tags) {
      photo.tags.forEach(tag => {
        tagMap[tag] = (tagMap[tag] || 0) + 1;
      });
    }
  });
  // Include user-created tags
  try {
    const userTags = JSON.parse(localStorage.getItem('sl_user_tags') || '{}');
    Object.values(userTags).forEach(tags => {
      tags.forEach(tag => {
        tagMap[tag] = (tagMap[tag] || 0) + 1;
      });
    });
  } catch(e) {}
  return Object.entries(tagMap).sort((a, b) => b[1] - a[1]);
}

function getPhotosByTag(tag) {
  // Include user posts
  let userPosts = [];
  try { userPosts = JSON.parse(localStorage.getItem('sl_user_posts') || '[]'); } catch(e) {}
  const allSearchable = [...userPosts, ...allPhotos];

  const matches = allSearchable.filter(photo => photo.tags && photo.tags.includes(tag));

  // Also find photos with user tags
  try {
    const userTags = JSON.parse(localStorage.getItem('sl_user_tags') || '{}');
    Object.entries(userTags).forEach(([photoId, tags]) => {
      if (tags.includes(tag)) {
        const photo = allSearchable.find(p => p.id === parseInt(photoId));
        if (photo && !matches.find(p => p.id === photo.id)) {
          matches.push(photo);
        }
      }
    });
  } catch(e) {}

  return matches;
}

// ========================================
// Explore Page
// ========================================
function initExplorePage() {
  const grid = document.getElementById('photoGrid');
  if (!grid) return;

  // Load user posts from localStorage
  let userPosts = [];
  try {
    userPosts = JSON.parse(localStorage.getItem('sl_user_posts') || '[]');
  } catch(e) {}

  // Merge: user posts first, then system photos
  const allDisplayPhotos = [...userPosts, ...allPhotos];

  // Render filter tabs from hierarchy
  const tabsContainer = document.getElementById('filterTabs');
  if (tabsContainer && typeof categoryHierarchy !== 'undefined') {
    let tabsHtml = '<button class="filter-tab active" data-filter="all">全部</button>';
    Object.entries(categoryHierarchy).forEach(([key, cat]) => {
      tabsHtml += `<button class="filter-tab" data-filter="${key}">${cat.zh}</button>`;
    });
    tabsContainer.innerHTML = tabsHtml;
  }

  // Show initial batch (12 photos)
  const initialBatch = allDisplayPhotos.slice(0, 12);
  initialBatch.forEach(photo => {
    grid.innerHTML += createPhotoCard(photo);
  });

  initPhotoCardEvents();
  initFilterTabs();
}

// ========================================
// Filter Tabs
// ========================================
function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  const grid = document.getElementById('photoGrid');
  if (!tabs.length || !grid) return;

  // Include user posts
  let userPosts = [];
  try { userPosts = JSON.parse(localStorage.getItem('sl_user_posts') || '[]'); } catch(e) {}
  const allDisplayPhotos = [...userPosts, ...allPhotos];

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;
      const filtered = filter === 'all'
        ? allDisplayPhotos
        : allDisplayPhotos.filter(p => p.category === filter);

      grid.innerHTML = '';
      filtered.forEach(photo => {
        grid.innerHTML += createPhotoCard(photo);
      });
      initPhotoCardEvents();
    });
  });
}

// ========================================
// Category Page
// ========================================
function initCategoryPage() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get('cat') || 'landscape';
  const subFilter = params.get('sub');
  const catData = categoryHierarchy[category];

  // Set category theme on body and hero
  document.body.dataset.category = category;
  const hero = document.getElementById('categoryHero');
  if (hero && catData) {
    hero.dataset.category = category;
    const titleEl = document.getElementById('catTitle');
    const subtitleEl = document.getElementById('catSubtitle');
    const descEl = document.getElementById('catDesc');
    if (titleEl) titleEl.textContent = catData.zh;
    if (subtitleEl) subtitleEl.textContent = catData.en;
    if (descEl) descEl.textContent = catData.desc.zh;
  }

  // Render subcategory nav
  const subNav = document.getElementById('subNav');
  if (subNav && catData && catData.subs) {
    let navHtml = `<a href="category.html?cat=${category}" class="sub-nav-item ${!subFilter ? 'active' : ''}">全部</a>`;
    Object.entries(catData.subs).forEach(([subKey, sub]) => {
      const isActive = subFilter === subKey ? 'active' : '';
      navHtml += `<a href="category.html?cat=${category}&sub=${subKey}" class="sub-nav-item ${isActive}">${sub.zh}</a>`;
    });
    subNav.innerHTML = navHtml;
  }

  // Filter photos (include user posts)
  const grid = document.getElementById('photoGrid');
  if (!grid) return;

  let userPosts = [];
  try { userPosts = JSON.parse(localStorage.getItem('sl_user_posts') || '[]'); } catch(e) {}
  const allDisplay = [...userPosts, ...allPhotos];

  let filtered = allDisplay.filter(p => p.category === category);
  if (subFilter) {
    filtered = filtered.filter(p => p.sub === subFilter);
  }

  filtered.forEach(photo => {
    grid.innerHTML += createPhotoCard(photo);
  });

  initPhotoCardEvents();
}

// ========================================
// Vintage Category Page
// ========================================
function initVintagePage() {
  const grid = document.getElementById('vintageGrid');
  if (!grid) return;

  let userPosts = [];
  try { userPosts = JSON.parse(localStorage.getItem('sl_user_posts') || '[]'); } catch(e) {}
  const vintagePhotos = [...userPosts, ...allPhotos].filter(p => p.category === 'vintage');
  vintagePhotos.forEach((photo, index) => {
    const rotation = (Math.random() - 0.5) * 4;
    grid.innerHTML += `
      <div class="vintage-card" style="transform: rotate(${rotation}deg);">
        <div class="vintage-photo-wrap">
          <img src="${photo.url}" alt="${photo.title}" loading="lazy">
          <div class="vintage-grain"></div>
        </div>
        <div class="vintage-info">
          <div class="vintage-title">${photo.title}</div>
          <div class="vintage-author">${photo.author}</div>
          <div class="vintage-date">${photo.date}</div>
        </div>
      </div>
    `;
  });
}

// ========================================
// Rankings Page
// ========================================
function initRankingsPage() {
  const container = document.getElementById('rankings');
  if (!container) return;

  let userPosts = [];
  try { userPosts = JSON.parse(localStorage.getItem('sl_user_posts') || '[]'); } catch(e) {}
  const allData = [...userPosts, ...allPhotos];

  function renderRankings(period) {
    let sorted;
    switch (period) {
      case 'daily':
        sorted = [...allData].sort((a, b) => b.views - a.views);
        break;
      case 'monthly':
        sorted = [...allData].sort((a, b) => (b.likes + b.views) - (a.likes + a.views));
        break;
      default: // weekly
        sorted = [...allData].sort((a, b) => b.likes - a.likes);
    }

    container.innerHTML = sorted.map((photo, index) => `
      <div class="ranking-item">
        <div class="ranking-number">${String(index + 1).padStart(2, '0')}</div>
        <a href="photo.html?id=${photo.id}">
          <img src="${photo.url}" alt="${photo.title}" class="ranking-photo">
        </a>
        <div class="ranking-info">
          <a href="photo.html?id=${photo.id}" class="ranking-title">${photo.title}</a>
          <a href="photographer.html?id=${photo.authorId}" class="ranking-author">${photo.author}</a>
        </div>
        <div class="ranking-stats">
          <span>${icons.heart} ${photo.likes.toLocaleString()}</span>
          <span>${icons.eye} ${photo.views.toLocaleString()}</span>
        </div>
      </div>
    `).join('');
  }

  // Initial render
  renderRankings('weekly');

  // Filter tabs
  const tabs = document.querySelectorAll('.filter-tabs .filter-tab');
  const periodMap = { '每周': 'weekly', '每日': 'daily', '每月': 'monthly' };
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderRankings(periodMap[tab.textContent] || 'weekly');
    });
  });
}

// ========================================
// Photo Detail Page
// ========================================
// ========================================
// User Tag Functions
// ========================================
function getUserTags(photoId) {
  try {
    const allTags = JSON.parse(localStorage.getItem('sl_user_tags') || '{}');
    return allTags[photoId] || [];
  } catch(e) { return []; }
}

function addUserTag(photoId, tag) {
  if (!tag || !tag.trim()) return false;
  const allTags = JSON.parse(localStorage.getItem('sl_user_tags') || '{}');
  if (!allTags[photoId]) allTags[photoId] = [];
  if (allTags[photoId].includes(tag.trim())) return false;
  allTags[photoId].push(tag.trim());
  localStorage.setItem('sl_user_tags', JSON.stringify(allTags));
  return true;
}

function removeUserTag(photoId, tag) {
  const allTags = JSON.parse(localStorage.getItem('sl_user_tags') || '{}');
  if (!allTags[photoId]) return;
  allTags[photoId] = allTags[photoId].filter(t => t !== tag);
  if (allTags[photoId].length === 0) delete allTags[photoId];
  localStorage.setItem('sl_user_tags', JSON.stringify(allTags));
}

function getCurrentUser() {
  try { return JSON.parse(localStorage.getItem('sl_current_user')); } catch(e) { return null; }
}

function renderUserTags(photoId) {
  const userTags = getUserTags(photoId);
  if (userTags.length === 0) return '';
  return userTags.map(tag =>
    `<span class="tag user-tag">${tag}<span class="tag-remove" data-tag="${tag}">&times;</span></span>`
  ).join('');
}

// ========================================
// Photo Detail Page
// ========================================
function initPhotoPage() {
  const params = new URLSearchParams(window.location.search);
  const photoId = parseInt(params.get('id')) || 1;

  // Search both system photos and user posts
  let userPosts = [];
  try { userPosts = JSON.parse(localStorage.getItem('sl_user_posts') || '[]'); } catch(e) {}
  const allSearchable = [...userPosts, ...allPhotos];
  const photo = allSearchable.find(p => p.id === photoId) || allSearchable[0];
  const detail = document.getElementById('photoDetail');
  if (!detail) return;

  const tagsHtml = (photo.tags || []).map(tag =>
    `<a href="tags.html?tag=${encodeURIComponent(tag)}" class="tag">${tag}</a>`
  ).join('');
  const userTagsHtml = renderUserTags(photoId);
  const user = getCurrentUser();

  // Related works (same category, different photo)
  const related = allSearchable.filter(p => p.category === photo.category && p.id !== photo.id).slice(0, 4);
  const relatedHtml = related.map(p => `
    <a href="photo.html?id=${p.id}" class="related-card">
      <img src="${p.url}" alt="${p.title}" loading="lazy">
      <div class="related-card-overlay">
        <span class="related-card-title">${p.title}</span>
      </div>
    </a>
  `).join('');

  // Simulated comments
  const comments = getSimulatedComments(photoId);

  detail.innerHTML = `
    <img src="${photo.url}" alt="${photo.title}" class="photo-detail-img" id="mainPhotoImg">
    <div class="photo-detail-info">
      <div>
        <h1 class="photo-detail-title">${photo.title}</h1>
        <p class="photo-detail-author">
          摄影师：<a href="photographer.html?id=${photo.authorId}">${photo.author}</a>
        </p>
        ${photo.description ? `<p class="photo-detail-desc">${photo.description}</p>` : ''}
      </div>
      <div class="photo-detail-stats">
        <span>${icons.heart} <span id="likeCount">${photo.likes.toLocaleString()}</span> 点赞</span>
        <span>${icons.eye} ${photo.views.toLocaleString()} 浏览</span>
      </div>
    </div>
    <div class="photo-detail-actions">
      <button class="action-btn like-btn like-burst">${icons.heart} 点赞</button>
      <button class="action-btn bookmark-btn">${icons.bookmark} 收藏</button>
      <button class="action-btn share-btn">${icons.share} 分享</button>
    </div>
    <div class="photo-detail-tags">
      ${tagsHtml}${userTagsHtml}
      ${user ? `
        <div class="user-tag-input-wrap">
          <input type="text" class="user-tag-input" id="userTagInput" placeholder="添加自定义标签..." maxlength="20">
          <button class="user-tag-btn" id="addTagBtn">添加</button>
        </div>
      ` : `
        <p style="font-size: 0.75rem; color: var(--color-text-muted); margin-top: 0.75rem;">
          <a href="login.html" style="color: var(--color-text); text-decoration: none;">登录</a> 后可添加自定义标签
        </p>
      `}
    </div>
    <div class="photo-detail-meta">
      <p>分类：${categoryNames[photo.category] ? categoryNames[photo.category].zh : photo.category}</p>
      ${photo.style ? `<p>风格：${photo.style}</p>` : ''}
      ${photo.camera ? `<p>相机：${photo.camera}</p>` : ''}
      <p>上传时间：${photo.date || '2024年1月15日'}</p>
    </div>

    <!-- Comments Section -->
    <div class="comments-section">
      <div class="comments-header">
        <h3 class="comments-title">评论</h3>
        <span class="comments-count">${comments.length}</span>
      </div>
      <div id="commentsList">
        ${comments.map((c, i) => renderComment(c, i)).join('')}
      </div>
      ${user ? `
        <div class="comment-input-wrap">
          <input type="text" class="comment-input" id="commentInput" placeholder="写下你的评论..." maxlength="200">
          <button class="comment-submit" id="commentSubmit">发送</button>
        </div>
      ` : `
        <p style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 1.5rem; text-align: center;">
          <a href="login.html" style="color: var(--color-text); text-decoration: none;">登录</a> 后可评论
        </p>
      `}
    </div>

    <!-- Related Works -->
    ${related.length > 0 ? `
      <div class="related-section">
        <h3 class="related-title">相关作品</h3>
        <div class="related-grid">
          ${relatedHtml}
        </div>
      </div>
    ` : ''}
  `;

  // Lightbox
  const mainImg = document.getElementById('mainPhotoImg');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  if (mainImg && lightbox) {
    mainImg.addEventListener('click', () => {
      lightboxImg.src = photo.url;
      lightbox.classList.add('active');
    });
    lightboxClose.addEventListener('click', () => lightbox.classList.remove('active'));
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('active');
    });
  }

  // Like button with persistence
  const likeBtn = detail.querySelector('.like-btn');
  if (likeBtn) {
    // Restore liked state from localStorage
    let likedPhotos = [];
    try { likedPhotos = JSON.parse(localStorage.getItem('sl_liked_photos') || '[]'); } catch(e) {}
    if (likedPhotos.includes(photoId)) {
      likeBtn.classList.add('liked');
      likeBtn.innerHTML = `${icons.heartFill} 已点赞`;
    }

    likeBtn.addEventListener('click', () => {
      let likedPhotos = [];
      try { likedPhotos = JSON.parse(localStorage.getItem('sl_liked_photos') || '[]'); } catch(e) {}
      const isLiked = likedPhotos.includes(photoId);

      if (isLiked) {
        likedPhotos = likedPhotos.filter(id => id !== photoId);
        likeBtn.classList.remove('liked');
        likeBtn.innerHTML = `${icons.heart} 点赞`;
      } else {
        likedPhotos.push(photoId);
        likeBtn.classList.add('liked');
        likeBtn.innerHTML = `${icons.heartFill} 已点赞`;
      }
      localStorage.setItem('sl_liked_photos', JSON.stringify(likedPhotos));

      likeBtn.classList.add('active');
      setTimeout(() => likeBtn.classList.remove('active'), 600);
    });
  }

  // Bookmark button with persistence
  const bookmarkBtn = detail.querySelector('.bookmark-btn');
  if (bookmarkBtn) {
    // Restore bookmarked state from localStorage
    let bookmarkedPhotos = [];
    try { bookmarkedPhotos = JSON.parse(localStorage.getItem('sl_bookmarked_photos') || '[]'); } catch(e) {}
    if (bookmarkedPhotos.includes(photoId)) {
      bookmarkBtn.classList.add('liked');
      bookmarkBtn.innerHTML = `${icons.bookmark} 已收藏`;
    }

    bookmarkBtn.addEventListener('click', () => {
      let bookmarkedPhotos = [];
      try { bookmarkedPhotos = JSON.parse(localStorage.getItem('sl_bookmarked_photos') || '[]'); } catch(e) {}
      const isBookmarked = bookmarkedPhotos.includes(photoId);

      if (isBookmarked) {
        bookmarkedPhotos = bookmarkedPhotos.filter(id => id !== photoId);
        bookmarkBtn.classList.remove('liked');
        bookmarkBtn.innerHTML = `${icons.bookmark} 收藏`;
      } else {
        bookmarkedPhotos.push(photoId);
        bookmarkBtn.classList.add('liked');
        bookmarkBtn.innerHTML = `${icons.bookmark} 已收藏`;
      }
      localStorage.setItem('sl_bookmarked_photos', JSON.stringify(bookmarkedPhotos));
    });
  }

  // Share button
  const shareBtn = detail.querySelector('.share-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      if (navigator.share) {
        navigator.share({ title: photo.title, url: window.location.href });
      } else {
        navigator.clipboard.writeText(window.location.href);
        shareBtn.innerHTML = `${icons.share} 已复制链接`;
        setTimeout(() => shareBtn.innerHTML = `${icons.share} 分享`, 2000);
      }
    });
  }

  // Comment submit
  const commentInput = document.getElementById('commentInput');
  const commentSubmit = document.getElementById('commentSubmit');
  if (commentInput && commentSubmit) {
    const doComment = () => {
      const text = commentInput.value.trim();
      if (!text) return;
      const newComment = {
        author: user.name,
        text: text,
        time: '刚刚'
      };
      comments.push(newComment);
      saveComments(photoId, comments);
      const list = document.getElementById('commentsList');
      list.innerHTML += renderComment(newComment, comments.length - 1);
      commentInput.value = '';
      document.querySelector('.comments-count').textContent = comments.length;
    };
    commentSubmit.addEventListener('click', doComment);
    commentInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') doComment();
    });
  }

  // Add user tag
  const addTagBtn = document.getElementById('addTagBtn');
  const tagInput = document.getElementById('userTagInput');
  if (addTagBtn && tagInput) {
    const doAddTag = () => {
      const tag = tagInput.value.trim();
      if (!tag) return;
      if (addUserTag(photoId, tag)) {
        tagInput.value = '';
        refreshTags(photoId, detail);
      }
    };
    addTagBtn.addEventListener('click', doAddTag);
    tagInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') doAddTag();
    });
  }

  // Remove user tag
  detail.addEventListener('click', (e) => {
    if (e.target.classList.contains('tag-remove')) {
      const tag = e.target.dataset.tag;
      removeUserTag(photoId, tag);
      refreshTags(photoId, detail);
    }
  });
}

// Simulated comments data
function getSimulatedComments(photoId) {
  const stored = localStorage.getItem('sl_comments_' + photoId);
  if (stored) {
    try { return JSON.parse(stored); } catch(e) {}
  }
  // Default simulated comments
  const defaults = [
    { author: 'Sarah Kim', text: '光影的处理太棒了，构图非常精妙', time: '2小时前' },
    { author: 'Mike Johnson', text: '这个角度很独特，学到了', time: '5小时前' },
    { author: 'Emily Brown', text: '色彩很有层次感，喜欢这种调子', time: '1天前' },
    { author: 'David Wilson', text: '拍摄时机把握得真好', time: '2天前' }
  ];
  return defaults;
}

function saveComments(photoId, comments) {
  localStorage.setItem('sl_comments_' + photoId, JSON.stringify(comments));
}

function renderComment(comment, index) {
  const initial = comment.author.charAt(0);
  return `
    <div class="comment-item" style="animation-delay: ${index * 0.05}s">
      <div class="comment-avatar">${initial}</div>
      <div class="comment-body">
        <div class="comment-meta">
          <span class="comment-author">${comment.author}</span>
          <span class="comment-time">${comment.time}</span>
        </div>
        <div class="comment-text">${comment.text}</div>
        <div class="comment-actions">
          <button class="comment-action">${icons.heart} 赞</button>
          <button class="comment-action">回复</button>
        </div>
      </div>
    </div>
  `;
}

function refreshTags(photoId, detail) {
  const tagsContainer = detail.querySelector('.photo-detail-tags');
  if (!tagsContainer) return;

  let userPosts = [];
  try { userPosts = JSON.parse(localStorage.getItem('sl_user_posts') || '[]'); } catch(e) {}
  const photo = [...userPosts, ...allPhotos].find(p => p.id === photoId);
  if (!photo) return;

  const tagsHtml = (photo.tags || []).map(tag =>
    `<a href="tags.html?tag=${encodeURIComponent(tag)}" class="tag">${tag}</a>`
  ).join('');
  const userTagsHtml = renderUserTags(photoId);
  const user = getCurrentUser();

  tagsContainer.innerHTML = `
    ${tagsHtml}${userTagsHtml}
    ${user ? `
      <div class="user-tag-input-wrap">
        <input type="text" class="user-tag-input" id="userTagInput" placeholder="添加自定义标签..." maxlength="20">
        <button class="user-tag-btn" id="addTagBtn">添加</button>
      </div>
    ` : ''}
  `;

  // Re-bind events
  const addTagBtn = document.getElementById('addTagBtn');
  const tagInput = document.getElementById('userTagInput');
  if (addTagBtn && tagInput) {
    const doAddTag = () => {
      const tag = tagInput.value.trim();
      if (!tag) return;
      if (addUserTag(photoId, tag)) {
        tagInput.value = '';
        refreshTags(photoId, detail);
      }
    };
    addTagBtn.addEventListener('click', doAddTag);
    tagInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') doAddTag();
    });
  }
}

// ========================================
// Search Page
// ========================================
function initSearchPage() {
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  const historyContainer = document.getElementById('searchHistory');
  if (!input || !results) return;

  // Show search history
  renderSearchHistory();

  // URL query
  const params = new URLSearchParams(window.location.search);
  const q = params.get('q');
  if (q) {
    input.value = q;
    performSearch(q);
  }

  // Input event
  let debounceTimer;
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      performSearch(input.value);
    }, 300);
  });

  // Enter key
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value.trim()) {
      addSearchHistory(input.value.trim());
      renderSearchHistory();
      performSearch(input.value);
    }
  });

  function performSearch(query) {
    if (!query || !query.trim()) {
      results.innerHTML = '';
      return;
    }
    const found = searchPhotos(query);
    if (found.length === 0) {
      results.innerHTML = `
        <div class="search-empty">
          <p>未找到与"${query}"相关的作品</p>
        </div>
      `;
    } else {
      results.innerHTML = `
        <div class="search-count">找到 ${found.length} 个结果</div>
        <div class="photo-grid">
          ${found.map(photo => createPhotoCard(photo)).join('')}
        </div>
      `;
      initPhotoCardEvents();
    }
  }

  function renderSearchHistory() {
    if (!historyContainer) return;
    const history = getSearchHistory();
    if (history.length === 0) {
      historyContainer.innerHTML = '';
      return;
    }
    historyContainer.innerHTML = `
      <div class="search-history-header">
        <span>搜索历史</span>
        <button onclick="clearSearchHistory(); initSearchPage();" class="search-history-clear">清除</button>
      </div>
      <div class="search-history-tags">
        ${history.map(h => `<a href="search.html?q=${encodeURIComponent(h)}" class="tag">${h}</a>`).join('')}
      </div>
    `;
  }
}

// ========================================
// Tags Page
// ========================================
function initTagsPage() {
  const container = document.getElementById('tagsContainer');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const activeTag = params.get('tag');

  if (activeTag) {
    // Show photos for specific tag
    const photos = getPhotosByTag(activeTag);
    container.innerHTML = `
      <div class="tags-header">
        <a href="tags.html" class="tags-back">&larr; 所有标签</a>
        <h1 class="page-title">${activeTag}</h1>
        <p class="page-subtitle">${photos.length} 张作品</p>
      </div>
      <div class="photo-grid">
        ${photos.map(photo => createPhotoCard(photo)).join('')}
      </div>
    `;
    initPhotoCardEvents();
  } else {
    // Show all tags
    const allTags = getAllTags();
    const maxCount = allTags.length > 0 ? allTags[0][1] : 1;

    container.innerHTML = `
      <div class="tags-header">
        <h1 class="page-title">标签</h1>
        <p class="page-subtitle">Tags</p>
      </div>
      <div class="tags-cloud">
        ${allTags.map(([tag, count]) => {
          const size = 0.75 + (count / maxCount) * 1;
          return `<a href="tags.html?tag=${encodeURIComponent(tag)}" class="tag-cloud-item" style="font-size: ${size}rem;">${tag} <span class="tag-count">${count}</span></a>`;
        }).join('')}
      </div>
    `;
  }
}

// ========================================
// Photographer Page
// ========================================
function initPhotographerPage() {
  const params = new URLSearchParams(window.location.search);
  const authorId = params.get('id') || 'alex';

  // Include user posts for stats calculation
  let userPosts = [];
  try { userPosts = JSON.parse(localStorage.getItem('sl_user_posts') || '[]'); } catch(e) {}

  let photographer = photographers[authorId];

  // If not in hardcoded list, build dynamic profile from user posts
  if (!photographer) {
    const userPhotos = userPosts.filter(p => p.authorId === authorId);
    if (userPhotos.length > 0) {
      photographer = {
        name: userPhotos[0].author,
        bio: '社区摄影师',
        photos: userPhotos.length,
        followers: 0, following: 0,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
        cover: userPhotos[0]?.url || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80',
        theme: 'light',
        tags: [...new Set(userPhotos.flatMap(p => p.tags || []))].slice(0, 5)
      };
    } else {
      photographer = photographers.alex;
    }
  }

  // Compute actual photo count including user posts
  const allAuthorPhotos = [...userPosts, ...allPhotos].filter(p => p.authorId === authorId);
  const actualPhotoCount = allAuthorPhotos.length;

  const isDark = photographer.theme === 'dark';

  const header = document.getElementById('photographerHeader');
  if (header) {
    header.style.backgroundImage = `url(${photographer.cover})`;
    header.classList.add(isDark ? 'theme-dark' : 'theme-light');

    const tagsHtml = (photographer.tags || []).map(tag =>
      `<span class="photographer-tag">${tag}</span>`
    ).join('');

    header.innerHTML = `
      <div class="photographer-cover-overlay"></div>
      <div class="photographer-3d-wrap">
        <div class="photographer-avatar">
          <img src="${photographer.avatar}" alt="${photographer.name}">
        </div>
      </div>
      <h1 class="photographer-name">${photographer.name}</h1>
      <p class="photographer-bio">${photographer.bio}</p>
      <div class="photographer-tags">${tagsHtml}</div>
      <div class="photographer-stats">
        <div class="stat-item">
          <div class="stat-number">${actualPhotoCount}</div>
          <div class="stat-label">作品</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">${photographer.followers.toLocaleString()}</div>
          <div class="stat-label">粉丝</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">${photographer.following}</div>
          <div class="stat-label">关注</div>
        </div>
      </div>
      <div class="photographer-actions">
        <button class="follow-btn" id="followBtn">关注</button>
        <div class="layout-switch">
          <button class="layout-btn active" data-layout="grid" onclick="switchLayout('grid')">${icons.grid}</button>
          <button class="layout-btn" data-layout="list" onclick="switchLayout('list')">${icons.list}</button>
        </div>
      </div>
    `;
  }

  const grid = document.getElementById('photoGrid');
  if (!grid) return;

  allAuthorPhotos.forEach(photo => {
    grid.innerHTML += createPhotoCard(photo);
  });

  initPhotoCardEvents();

  // Follow button with persistence
  const followBtn = document.getElementById('followBtn');
  if (followBtn) {
    let followedPhotographers = [];
    try { followedPhotographers = JSON.parse(localStorage.getItem('sl_followed') || '[]'); } catch(e) {}
    if (followedPhotographers.includes(authorId)) {
      followBtn.textContent = '已关注';
      followBtn.classList.add('followed');
    }

    followBtn.addEventListener('click', () => {
      let followed = [];
      try { followed = JSON.parse(localStorage.getItem('sl_followed') || '[]'); } catch(e) {}
      const isFollowing = followed.includes(authorId);

      if (isFollowing) {
        followed = followed.filter(id => id !== authorId);
        followBtn.textContent = '关注';
        followBtn.classList.remove('followed');
      } else {
        followed.push(authorId);
        followBtn.textContent = '已关注';
        followBtn.classList.add('followed');
      }
      localStorage.setItem('sl_followed', JSON.stringify(followed));
    });
  }
}

function switchLayout(layout) {
  const grid = document.getElementById('photoGrid');
  const btns = document.querySelectorAll('.layout-btn');
  if (!grid) return;

  btns.forEach(b => b.classList.remove('active'));
  document.querySelector(`[data-layout="${layout}"]`)?.classList.add('active');

  if (layout === 'list') {
    grid.classList.add('layout-list');
  } else {
    grid.classList.remove('layout-list');
  }
}

// ========================================
// Helper Functions
// ========================================
function createPhotoCard(photo) {
  return `
    <a href="photo.html?id=${photo.id}" class="photo-card">
      <img src="${photo.url}" alt="${photo.title}" loading="lazy" style="aspect-ratio: ${photo.aspect}; object-fit: cover;">
      <div class="photo-overlay">
        <div class="photo-info">
          <div class="photo-title">${photo.title}</div>
          <div class="photo-author">${photo.author}</div>
        </div>
        <div class="photo-likes">${icons.heart} ${photo.likes.toLocaleString()}</div>
      </div>
    </a>
  `;
}

function initPhotoCardEvents() {
  // Scroll reveal for new cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.photo-card:not(.visible)').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// ========================================
// Search Navbar Interaction
// ========================================
function initSearchToggle() {
  const searchBtn = document.getElementById('searchToggle');
  if (!searchBtn) return;

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'search.html';
  });
}

// ========================================
// Language Switch for inner pages
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  // Inject noise overlay for texture if not already present
  if (!document.querySelector('.noise-overlay')) {
    const noise = document.createElement('div');
    noise.className = 'noise-overlay';
    document.body.prepend(noise);
  }

  initSearchToggle();

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  // Update nav login button with user state
  const navLoginBtn = document.querySelector('.nav-login');
  const currentUser = getCurrentUser();
  if (navLoginBtn && currentUser) {
    navLoginBtn.textContent = currentUser.name;
    navLoginBtn.href = 'login.html';

    // Add "New Post" button next to login if not already present
    const navRight = navLoginBtn.parentElement;
    if (navRight && !navRight.querySelector('.nav-post-btn')) {
      const postBtn = document.createElement('a');
      postBtn.href = 'post.html';
      postBtn.className = 'nav-post-btn';
      postBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> 发布';
      navRight.insertBefore(postBtn, navLoginBtn);
    }
  }

  const langBtns = document.querySelectorAll('.lang-btn');

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const lang = btn.dataset.lang;

      // Update nav links
      const navLinks = document.querySelectorAll('.nav-link');
      if (lang === 'en') {
        navLinks[0].textContent = 'Explore';
        navLinks[1].textContent = 'Categories';
        navLinks[2].textContent = 'Rankings';
      } else {
        navLinks[0].textContent = '发现';
        navLinks[1].textContent = '分类';
        navLinks[2].textContent = '排行榜';
      }

      // Update page title
      const pageTitle = document.querySelector('.page-title');
      const pageSubtitle = document.querySelector('.page-subtitle');
      if (pageTitle && pageSubtitle) {
        const titles = {
          '发现': { zh: '发现', en: 'Explore' },
          '分类': { zh: '分类', en: 'Categories' },
          '排行榜': { zh: '排行榜', en: 'Rankings' },
          '标签': { zh: '标签', en: 'Tags' },
          '搜索': { zh: '搜索', en: 'Search' },
          '老照片': { zh: '老照片', en: 'Vintage' }
        };
        if (titles[pageTitle.textContent]) {
          pageTitle.textContent = lang === 'en' ? titles[pageTitle.textContent].en : titles[pageTitle.textContent].zh;
          pageSubtitle.textContent = lang === 'en' ? titles[pageTitle.textContent].zh : titles[pageTitle.textContent].en;
        }
      }

      // Update footer
      const footerText = document.querySelector('.footer-text');
      if (footerText) {
        footerText.textContent = lang === 'en' ? 'Discover the art of photography' : '发现摄影的艺术';
      }

      // Update login button
      const loginBtn = document.querySelector('.nav-login');
      if (loginBtn) {
        loginBtn.textContent = lang === 'en' ? 'Login' : '登录';
      }

      // Update search placeholder
      const searchInput = document.getElementById('searchInput');
      if (searchInput) {
        searchInput.placeholder = lang === 'en' ? 'Search photos, tags, photographers...' : '搜索照片、标签、摄影师...';
      }
    });
  });
});
