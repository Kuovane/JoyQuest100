export interface Game {
  id: number;
  title: string;
  category: string;
  ageRange: string;
  duration: string;
  difficulty: 'easy' | 'medium' | 'hard';
  description: string;
  materials: string[];
  steps: string[];
  image: string;
  benefits: string[];
}

export const games: Game[] = [
  {
    id: 1,
    title: '创意绘画比赛',
    category: '创造力游戏',
    ageRange: '3-6岁',
    duration: '30分钟',
    difficulty: 'easy',
    description: '让孩子自由发挥想象力，用各种颜色和工具创作独特的画作。',
    materials: ['画纸', '水彩笔', '蜡笔', '颜料', '调色盘'],
    steps: [
      '准备好绘画材料',
      '给孩子一个主题，比如\"我的梦想世界\"',
      '让孩子自由创作30分钟',
      '一起欣赏作品，鼓励孩子讲述画中的故事'
    ],
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop',
    benefits: ['培养创造力', '锻炼手部协调能力', '激发想象力', '提升表达能力']
  },
  {
    id: 2,
    title: '障碍跑酷',
    category: '运动游戏',
    ageRange: '4-8岁',
    duration: '45分钟',
    difficulty: 'medium',
    description: '在家中或户外设置简单的障碍物，让孩子穿越，锻炼平衡和协调能力。',
    materials: ['椅子', '绳子', '呼啦圈', '靠垫', '胶带'],
    steps: [
      '用椅子和靠垫设置起始和终点',
      '用胶带在地上画出跳跃线',
      '设置钻爬区和跨越区',
      '让孩子依次通过所有障碍',
      '可以计时增加挑战性'
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    benefits: ['增强体质', '提高平衡感', '锻炼反应速度', '培养勇气']
  },
  {
    id: 3,
    title: '拼图大挑战',
    category: '智力游戏',
    ageRange: '5-10岁',
    duration: '60分钟',
    difficulty: 'medium',
    description: '选择一幅有趣的拼图，和孩子一起完成，培养耐心和观察力。',
    materials: ['拼图（50-200片）', '平整的桌面'],
    steps: [
      '将所有拼图块倒在桌面上',
      '先找出四个角的拼图',
      '再拼边框部分',
      '根据颜色和图案分类拼图块',
      '逐步完成整个拼图'
    ],
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
    benefits: ['提高观察力', '培养耐心', '锻炼空间思维', '增强专注力']
  },
  {
    id: 4,
    title: '家庭寻宝游戏',
    category: '协作游戏',
    ageRange: '4-12岁',
    duration: '60分钟',
    difficulty: 'easy',
    description: '设计一系列线索，让家庭成员合作寻找宝藏，增进亲子关系。',
    materials: ['小礼物作为宝藏', '纸条写线索', '信封'],
    steps: [
      '准备3-5个寻宝线索',
      '将第一个线索放在显眼位置',
      '每个线索指向一个地点',
      '最后找到宝藏',
      '一起分享胜利的喜悦'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    benefits: ['培养团队合作', '锻炼推理能力', '增进亲子关系', '增加乐趣']
  },
  {
    id: 5,
    title: '手工制作贺卡',
    category: '艺术游戏',
    ageRange: '3-10岁',
    duration: '45分钟',
    difficulty: 'easy',
    description: '用彩纸和装饰品制作精美的贺卡，可以送给家人或朋友。',
    materials: ['彩色卡纸', '剪刀', '胶水', '彩笔', '贴纸', '亮片'],
    steps: [
      '将卡纸对折成贺卡形状',
      '设计贺卡封面',
      '用彩笔画上图案',
      '添加贴纸和亮片装饰',
      '在里面写上祝福语'
    ],
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&h=600&fit=crop',
    benefits: ['培养动手能力', '激发创造力', '学习表达情感', '培养审美']
  },
  {
    id: 6,
    title: '水的科学实验',
    category: '科学探索',
    ageRange: '5-12岁',
    duration: '40分钟',
    difficulty: 'medium',
    description: '进行简单的水相关科学实验，了解水的特性和科学原理。',
    materials: ['透明杯子', '水', '食盐', '食用油', '色素', '冰块'],
    steps: [
      '观察冰融化成水的过程',
      '尝试盐溶解在水中',
      '观察油和水的分离',
      '用色素做彩色水实验',
      '讨论实验现象和原理'
    ],
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
    benefits: ['激发科学兴趣', '培养探索精神', '学习科学知识', '提高观察力']
  },
  {
    id: 7,
    title: '树叶拼贴画',
    category: '户外游戏',
    ageRange: '3-8岁',
    duration: '60分钟',
    difficulty: 'easy',
    description: '去公园收集各种树叶，然后用树叶拼贴成有趣的图案。',
    materials: ['收集的树叶', '胶水', '画纸', '彩笔'],
    steps: [
      '去户外收集不同形状和颜色的树叶',
      '回家后将树叶洗净擦干',
      '在画纸上设计想要的图案',
      '用胶水将树叶粘贴成画',
      '可以用彩笔添加细节'
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    benefits: ['亲近自然', '培养创造力', '锻炼动手能力', '学习植物知识']
  },
  {
    id: 8,
    title: '枕头大战',
    category: '室内游戏',
    ageRange: '4-12岁',
    duration: '20分钟',
    difficulty: 'easy',
    description: '在安全的环境中进行枕头大战，释放能量，增进感情。',
    materials: ['软枕头', '安全的空间'],
    steps: [
      '清理场地，确保没有危险物品',
      '制定简单的游戏规则',
      '开始愉快的枕头大战',
      '注意安全，避免受伤',
      '结束后一起整理房间'
    ],
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
    benefits: ['释放压力', '增进亲子关系', '锻炼身体', '增加乐趣']
  },
  {
    id: 9,
    title: '故事接龙',
    category: '创造力游戏',
    ageRange: '5-12岁',
    duration: '30分钟',
    difficulty: 'easy',
    description: '每个人轮流说一句话，共同编一个有趣的故事。',
    materials: ['纸和笔（可选）'],
    steps: [
      '一个人开头说第一句话',
      '下一个人接着编故事',
      '轮流进行，让故事继续发展',
      '可以加入有趣的角色和情节',
      '最后一起回顾完整的故事'
    ],
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
    benefits: ['培养想象力', '提高语言表达', '锻炼思维敏捷', '增进亲子互动']
  },
  {
    id: 10,
    title: '跳绳比赛',
    category: '运动游戏',
    ageRange: '6-12岁',
    duration: '30分钟',
    difficulty: 'medium',
    description: '进行跳绳游戏，可以单人跳、双人跳，或者进行跳绳比赛。',
    materials: ['跳绳'],
    steps: [
      '热身运动，活动关节',
      '练习基本跳绳动作',
      '尝试不同的跳绳方式',
      '进行小比赛，看谁跳得多',
      '记录进步，鼓励坚持'
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    benefits: ['增强心肺功能', '提高协调性', '锻炼节奏感', '培养毅力']
  },
  {
    id: 11,
    title: '记忆力大挑战',
    category: '智力游戏',
    ageRange: '4-10岁',
    duration: '25分钟',
    difficulty: 'easy',
    description: '玩记忆力游戏，锻炼孩子的短期记忆和注意力。',
    materials: ['10-20件小物品', '毛巾'],
    steps: [
      '将物品整齐摆放在桌面上',
      '让孩子观察1分钟',
      '用毛巾盖住所有物品',
      '让孩子说出记住的物品',
      '逐渐增加物品数量提高难度'
    ],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    benefits: ['提高记忆力', '增强专注力', '锻炼观察力', '培养耐心']
  },
  {
    id: 12,
    title: '家庭角色扮演',
    category: '协作游戏',
    ageRange: '3-10岁',
    duration: '45分钟',
    difficulty: 'easy',
    description: '扮演医生、厨师、老师等角色，体验不同的职业场景。',
    materials: ['简单的道具', '衣服', '玩具'],
    steps: [
      '选择想要扮演的角色',
      '准备相应的道具和服装',
      '设定游戏场景',
      '开始角色扮演',
      '结束后讨论角色感受'
    ],
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&h=600&fit=crop',
    benefits: ['培养同理心', '提高社交能力', '激发想象力', '学习社会规则']
  },
  {
    id: 13,
    title: '彩色橡皮泥创作',
    category: '艺术游戏',
    ageRange: '3-8岁',
    duration: '40分钟',
    difficulty: 'easy',
    description: '用橡皮泥捏出各种形状和小动物，锻炼手部精细动作。',
    materials: ['彩色橡皮泥', '橡皮泥工具', '硬纸板'],
    steps: [
      '选择喜欢的颜色',
      '先揉一揉橡皮泥让它变软',
      '尝试捏出简单的形状',
      '创作小动物或其他物品',
      '展示作品，互相欣赏'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    benefits: ['锻炼精细动作', '培养创造力', '增强手眼协调', '激发想象力']
  },
  {
    id: 14,
    title: '种植小盆栽',
    category: '科学探索',
    ageRange: '5-12岁',
    duration: '30分钟（持续观察）',
    difficulty: 'easy',
    description: '一起种植小植物，观察它的生长过程，学习植物知识。',
    materials: ['小花盆', '泥土', '种子或小苗', '浇水壶'],
    steps: [
      '准备花盆和泥土',
      '将种子种入土中',
      '浇适量的水',
      '放在阳光充足的地方',
      '每天观察并记录生长情况'
    ],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
    benefits: ['学习植物知识', '培养责任感', '体验生命成长', '亲近自然']
  },
  {
    id: 15,
    title: '骑自行车',
    category: '户外游戏',
    ageRange: '5-12岁',
    duration: '60分钟',
    difficulty: 'medium',
    description: '到户外安全的地方骑自行车，享受运动的快乐。',
    materials: ['儿童自行车', '头盔', '护具'],
    steps: [
      '检查自行车是否安全',
      '戴好头盔和护具',
      '在安全的场地骑行',
      '学习刹车和转弯技巧',
      '慢慢增加骑行距离'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    benefits: ['增强体质', '提高平衡能力', '亲近自然', '培养自信心']
  },
  {
    id: 16,
    title: '电影之夜',
    category: '室内游戏',
    ageRange: '4-12岁',
    duration: '90分钟',
    difficulty: 'easy',
    description: '在家中布置一个小影院，一起看喜欢的电影。',
    materials: ['投影仪或电视', '零食', '靠垫', '毯子'],
    steps: [
      '一起选择想看的电影',
      '准备零食和饮料',
      '布置观影环境',
      '关灯开始观影',
      '看完后讨论电影内容'
    ],
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop',
    benefits: ['增进亲子关系', '放松心情', '共享美好时光', '培养审美']
  },
  {
    id: 17,
    title: '制作手工面具',
    category: '创造力游戏',
    ageRange: '4-10岁',
    duration: '45分钟',
    difficulty: 'easy',
    description: '用彩纸和各种材料制作有趣的面具，然后玩角色扮演。',
    materials: ['硬卡纸', '剪刀', '胶水', '彩笔', '羽毛', '亮片', '橡皮筋'],
    steps: [
      '在卡纸上画出面具形状',
      '剪下面具并剪出眼睛洞',
      '用彩笔和材料装饰面具',
      '在两侧固定橡皮筋',
      '戴上面具开始角色扮演'
    ],
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop',
    benefits: ['培养创造力', '锻炼动手能力', '激发想象力', '增加乐趣']
  },
  {
    id: 18,
    title: '投球游戏',
    category: '运动游戏',
    ageRange: '3-10岁',
    duration: '30分钟',
    difficulty: 'easy',
    description: '设置一个目标，练习投球，提高手眼协调能力。',
    materials: ['小球', '篮子或桶', '粉笔'],
    steps: [
      '用粉笔在地上画出投掷线',
      '将篮子放在适当距离',
      '练习从近到远投球',
      '可以计分增加趣味性',
      '轮流投球，互相鼓励'
    ],
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba821?w=800&h=600&fit=crop',
    benefits: ['锻炼手眼协调', '提高专注力', '增强上肢力量', '培养竞争意识']
  },
  {
    id: 19,
    title: '数学小游戏',
    category: '智力游戏',
    ageRange: '5-10岁',
    duration: '30分钟',
    difficulty: 'medium',
    description: '通过游戏的方式学习数学，让学习变得有趣。',
    materials: ['扑克牌', '骰子', '小物件（如积木）'],
    steps: [
      '用扑克牌玩24点游戏',
      '用骰子玩加法游戏',
      '用小物件学习数数和分类',
      '玩数字接龙游戏',
      '设置小奖励增加动力'
    ],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    benefits: ['提高数学能力', '培养逻辑思维', '激发学习兴趣', '锻炼反应速度']
  },
  {
    id: 20,
    title: '家庭乐队',
    category: '协作游戏',
    ageRange: '3-12岁',
    duration: '40分钟',
    difficulty: 'easy',
    description: '用家里的物品制作乐器，组成家庭乐队一起演奏。',
    materials: ['锅碗瓢盆', '筷子', '空瓶子', '橡皮筋'],
    steps: [
      '收集可以发声的物品',
      '制作简单的乐器',
      '选择一首熟悉的歌曲',
      '分工合作开始演奏',
      '录制视频留作纪念'
    ],
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=600&fit=crop',
    benefits: ['培养音乐感', '促进团队合作', '激发创造力', '增加家庭乐趣']
  },
  {
    id: 21,
    title: '手指画创作',
    category: '艺术游戏',
    ageRange: '2-6岁',
    duration: '30分钟',
    difficulty: 'easy',
    description: '用手指蘸颜料直接在纸上作画，体验不同的创作方式。',
    materials: ['可水洗颜料', '画纸', '湿纸巾', '围裙'],
    steps: [
      '穿上围裙，准备好材料',
      '将颜料挤在调色盘上',
      '用手指蘸颜料创作',
      '尝试不同的手印和指纹',
      '完成后洗手清洁'
    ],
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop',
    benefits: ['感知不同材质', '培养创造力', '锻炼手部肌肉', '激发艺术兴趣']
  },
  {
    id: 22,
    title: '简单的化学小实验',
    category: '科学探索',
    ageRange: '6-12岁',
    duration: '40分钟',
    difficulty: 'medium',
    description: '进行安全的家庭化学小实验，观察神奇的化学反应。',
    materials: ['小苏打', '白醋', '食用色素', '杯子', '漏斗'],
    steps: [
      '在杯子里放一些小苏打',
      '加入几滴色素',
      '慢慢倒入白醋',
      '观察气泡产生的现象',
      '讨论实验原理'
    ],
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
    benefits: ['激发科学兴趣', '培养探索精神', '学习化学知识', '提高观察力']
  },
  {
    id: 23,
    title: '放风筝',
    category: '户外游戏',
    ageRange: '5-12岁',
    duration: '60分钟',
    difficulty: 'medium',
    description: '在有风的日子去公园放风筝，享受户外活动的乐趣。',
    materials: ['风筝', '开阔的场地'],
    steps: [
      '选择一个有风的好天气',
      '去开阔的公园或草坪',
      '组装好风筝',
      '学习放风筝的技巧',
      '享受风筝在天空飞翔的快乐'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    benefits: ['亲近自然', '锻炼手眼协调', '培养耐心', '体验成功的快乐']
  },
  {
    id: 24,
    title: '家庭卡拉OK',
    category: '室内游戏',
    ageRange: '4-12岁',
    duration: '60分钟',
    difficulty: 'easy',
    description: '在家中举办卡拉OK，一起唱歌跳舞，享受音乐时光。',
    materials: ['麦克风（可选）', '音乐播放器', '歌词'],
    steps: [
      '准备喜欢的歌曲',
      '布置简单的舞台',
      '轮流唱歌',
      '可以加入舞蹈动作',
      '录制表演视频'
    ],
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=600&fit=crop',
    benefits: ['培养音乐感', '增强自信心', '增进亲子关系', '释放压力']
  },
  {
    id: 25,
    title: '建造纸城堡',
    category: '创造力游戏',
    ageRange: '4-10岁',
    duration: '60分钟',
    difficulty: 'medium',
    description: '用废纸箱和纸张建造一座属于自己的城堡。',
    materials: ['废纸箱', '剪刀', '胶水', '彩纸', '彩笔'],
    steps: [
      '收集废纸箱和纸张',
      '设计城堡的样子',
      '用纸箱搭建城堡主体',
      '用彩纸装饰城堡',
      '在城堡里玩角色扮演'
    ],
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
    benefits: ['培养创造力', '锻炼动手能力', '学习空间规划', '激发想象力']
  },
  {
    id: 26,
    title: '踢毽子',
    category: '运动游戏',
    ageRange: '6-12岁',
    duration: '30分钟',
    difficulty: 'medium',
    description: '学习踢毽子，提高身体协调性和灵活性。',
    materials: ['毽子'],
    steps: [
      '学习基本的踢毽子动作',
      '从用手抛接开始练习',
      '尝试用脚踢',
      '慢慢增加连续踢的次数',
      '可以比赛看谁踢得多'
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    benefits: ['提高协调性', '锻炼反应速度', '增强下肢力量', '培养毅力']
  },
  {
    id: 27,
    title: '猜谜语游戏',
    category: '智力游戏',
    ageRange: '5-12岁',
    duration: '30分钟',
    difficulty: 'easy',
    description: '互相猜谜语，锻炼思维能力和想象力。',
    materials: ['谜语书或手机'],
    steps: [
      '准备一些适合的谜语',
      '轮流出谜语让对方猜',
      '可以给提示',
      '猜对了给予小奖励',
      '最后一起分享最喜欢的谜语'
    ],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    benefits: ['锻炼思维能力', '提高想象力', '增加知识', '培养幽默感']
  },
  {
    id: 28,
    title: '家庭厨房小帮手',
    category: '协作游戏',
    ageRange: '5-12岁',
    duration: '60分钟',
    difficulty: 'medium',
    description: '让孩子参与简单的烹饪过程，学习厨艺并享受美食。',
    materials: ['简单的食材', '儿童安全刀具', '围裙'],
    steps: [
      '选择简单安全的食谱',
      '清洗双手，穿好围裙',
      '让孩子参与准备工作',
      '一起完成烹饪',
      '共同享用劳动成果'
    ],
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    benefits: ['学习生活技能', '培养责任感', '增进亲子合作', '享受美食']
  },
  {
    id: 29,
    title: '彩色玻璃画',
    category: '艺术游戏',
    ageRange: '5-12岁',
    duration: '45分钟',
    difficulty: 'medium',
    description: '用透明塑料片和颜料制作漂亮的玻璃画效果。',
    materials: ['透明塑料片', '丙烯颜料', '细画笔', '黑色马克笔'],
    steps: [
      '用黑色马克笔画出轮廓',
      '用颜料填充颜色',
      '等待颜料干透',
      '放在窗户上欣赏阳光透过的效果',
      '可以做成挂饰'
    ],
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop',
    benefits: ['培养艺术感', '锻炼精细动作', '学习色彩搭配', '创作美丽作品']
  },
  {
    id: 30,
    title: '影子游戏',
    category: '科学探索',
    ageRange: '3-10岁',
    duration: '30分钟',
    difficulty: 'easy',
    description: '在阳光下或灯光下玩影子游戏，了解光影原理。',
    materials: ['手电筒', '白色墙壁或幕布'],
    steps: [
      '在暗处打开手电筒',
      '用手做出各种动物影子',
      '用物品创作有趣的影子',
      '观察影子的变化',
      '讨论影子形成的原因'
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    benefits: ['学习科学知识', '激发想象力', '锻炼动手能力', '了解光影关系']
  },
  {
    id: 31,
    title: '野餐之旅',
    category: '户外游戏',
    ageRange: '3-12岁',
    duration: '90分钟',
    difficulty: 'easy',
    description: '准备简单的食物，去公园野餐，享受户外时光。',
    materials: ['野餐垫', '简单食物', '饮料', '垃圾袋'],
    steps: [
      '一起准备野餐食物',
      '选择一个美丽的公园',
      '铺上野餐垫开始用餐',
      '餐后玩一些小游戏',
      '整理场地，带走垃圾'
    ],
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop',
    benefits: ['亲近自然', '增进亲子关系', '享受美食', '放松心情']
  },
  {
    id: 32,
    title: '拼字游戏',
    category: '室内游戏',
    ageRange: '6-12岁',
    duration: '40分钟',
    difficulty: 'medium',
    description: '玩拼字游戏，学习汉字或英语单词。',
    materials: ['拼字游戏板', '字母卡片'],
    steps: [
      '准备拼字游戏材料',
      '讲解游戏规则',
      '开始游戏，轮流拼字',
      '可以适当给提示',
      '结束后总结学到的字词'
    ],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    benefits: ['学习字词', '锻炼思维', '培养耐心', '增加词汇量']
  },
  {
    id: 33,
    title: '废纸变艺术品',
    category: '创造力游戏',
    ageRange: '4-12岁',
    duration: '50分钟',
    difficulty: 'medium',
    description: '用旧报纸、杂志等废纸制作各种艺术品，环保又有创意。',
    materials: ['旧报纸', '杂志', '胶水', '剪刀', '彩笔'],
    steps: [
      '收集各种废纸材料',
      '构思想要制作的作品',
      '用剪、贴、卷等方法创作',
      '可以添加其他装饰',
      '展示并讲述创作理念'
    ],
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop',
    benefits: ['培养环保意识', '激发创造力', '锻炼动手能力', '变废为宝']
  },
  {
    id: 34,
    title: '平衡木挑战',
    category: '运动游戏',
    ageRange: '4-10岁',
    duration: '30分钟',
    difficulty: 'medium',
    description: '用胶带在地上画平衡木或使用木板，练习平衡行走。',
    materials: ['胶带或木板', '开阔的空间'],
    steps: [
      '用胶带在地上画出平衡木',
      '练习在上面行走',
      '可以增加难度，比如蒙眼或拿东西',
      '确保周围安全',
      '鼓励孩子挑战自我'
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    benefits: ['提高平衡能力', '增强专注力', '培养自信心', '锻炼身体协调']
  },
  {
    id: 35,
    title: '找不同游戏',
    category: '智力游戏',
    ageRange: '4-10岁',
    duration: '25分钟',
    difficulty: 'easy',
    description: '找两幅相似图片中的不同之处，锻炼观察力。',
    materials: ['找不同的书或图片'],
    steps: [
      '准备找不同的图片',
      '仔细观察两张图片',
      '找出所有的不同点',
      '可以计时增加挑战',
      '完成后给小奖励'
    ],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    benefits: ['提高观察力', '培养专注力', '锻炼耐心', '增强细节感知']
  },
  {
    id: 36,
    title: '家庭辩论赛',
    category: '协作游戏',
    ageRange: '8-12岁',
    duration: '45分钟',
    difficulty: 'hard',
    description: '选择一个有趣的话题，进行家庭辩论赛，锻炼思辨能力。',
    materials: ['计时器', '评分表'],
    steps: [
      '选择一个适合的辩题',
      '分成正反两方',
      '准备辩论材料',
      '按照规则进行辩论',
      '结束后总结，增进理解'
    ],
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
    benefits: ['锻炼思辨能力', '提高表达能力', '学会多角度思考', '增进沟通']
  },
  {
    id: 37,
    title: '制作手工香皂',
    category: '艺术游戏',
    ageRange: '6-12岁',
    duration: '60分钟',
    difficulty: 'medium',
    description: '用皂基制作手工香皂，可以添加颜色和香味。',
    materials: ['皂基', '色素', '香精', '模具', '微波炉'],
    steps: [
      '将皂基切成小块',
      '用微波炉融化皂基',
      '加入色素和香精',
      '倒入模具中',
      '等待凝固后取出'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    benefits: ['学习手工制作', '培养创造力', '体验化学变化', '制作实用物品']
  },
  {
    id: 38,
    title: '天气观察日记',
    category: '科学探索',
    ageRange: '5-12岁',
    duration: '持续7天',
    difficulty: 'easy',
    description: '每天观察天气并记录，学习气象知识。',
    materials: ['笔记本', '彩笔', '温度计（可选）'],
    steps: [
      '准备观察记录本',
      '每天固定时间观察天气',
      '记录温度、阴晴等',
      '用图画表示天气',
      '一周后总结天气变化'
    ],
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
    benefits: ['学习气象知识', '培养观察力', '养成记录习惯', '了解自然规律']
  },
  {
    id: 39,
    title: '足球游戏',
    category: '户外游戏',
    ageRange: '5-12岁',
    duration: '45分钟',
    difficulty: 'medium',
    description: '在户外踢足球，享受团队运动的快乐。',
    materials: ['足球', '开阔场地', '简易球门'],
    steps: [
      '热身运动',
      '练习基本的踢球动作',
      '玩简单的足球游戏',
      '可以分组比赛',
      '结束后放松拉伸'
    ],
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop',
    benefits: ['增强体质', '培养团队精神', '提高协调性', '享受运动']
  },
  {
    id: 40,
    title: '家庭棋类大赛',
    category: '室内游戏',
    ageRange: '5-12岁',
    duration: '60分钟',
    difficulty: 'medium',
    description: '选择几种棋类游戏，举办家庭棋类比赛。',
    materials: ['各种棋类（象棋、五子棋、飞行棋等）'],
    steps: [
      '选择要玩的棋类',
      '讲解游戏规则',
      '开始比赛',
      '可以设置简单的奖励',
      '友谊第一，比赛第二'
    ],
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
    benefits: ['锻炼思维能力', '培养策略思维', '增进家庭互动', '学会输赢']
  },
  {
    id: 41,
    title: '纸箱隧道',
    category: '创造力游戏',
    ageRange: '2-6岁',
    duration: '45分钟',
    difficulty: 'easy',
    description: '用大纸箱制作隧道，让孩子爬着玩，增加乐趣。',
    materials: ['大纸箱', '剪刀', '胶带', '彩纸'],
    steps: [
      '收集几个大纸箱',
      '去掉纸箱的顶部和底部',
      '用胶带把纸箱连起来',
      '用彩纸装饰隧道',
      '让孩子在隧道里爬行玩耍'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    benefits: ['锻炼大肌肉', '培养创造力', '增加乐趣', '促进空间感知']
  },
  {
    id: 42,
    title: '接力跑',
    category: '运动游戏',
    ageRange: '5-12岁',
    duration: '30分钟',
    difficulty: 'easy',
    description: '进行接力跑比赛，培养团队合作精神。',
    materials: ['接力棒或小物品', '开阔场地'],
    steps: [
      '分成几个小组',
      '确定接力路线',
      '讲解接力规则',
      '开始接力比赛',
      '为每一队加油喝彩'
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    benefits: ['增强体质', '培养团队精神', '提高反应速度', '增加集体荣誉感']
  },
  {
    id: 43,
    title: '填字游戏',
    category: '智力游戏',
    ageRange: '7-12岁',
    duration: '40分钟',
    difficulty: 'medium',
    description: '玩填字游戏，增加词汇量和知识面。',
    materials: ['填字游戏书或打印的题目'],
    steps: [
      '准备适合的填字游戏',
      '一起思考答案',
      '可以查阅资料',
      '完成后核对答案',
      '学习新的词汇和知识'
    ],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    benefits: ['增加词汇量', '锻炼思维能力', '学习新知识', '培养耐心']
  },
  {
    id: 44,
    title: '家庭电影拍摄',
    category: '协作游戏',
    ageRange: '6-12岁',
    duration: '90分钟',
    difficulty: 'hard',
    description: '一起编写剧本、拍摄和制作一个小电影。',
    materials: ['手机或相机', '简单道具', '服装'],
    steps: [
      '一起讨论电影剧情',
      '编写简单的剧本',
      '分配角色',
      '开始拍摄',
      '一起观看拍摄成果'
    ],
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop',
    benefits: ['培养创造力', '学习团队合作', '提高表达能力', '留下美好回忆']
  },
  {
    id: 45,
    title: '制作手绳',
    category: '艺术游戏',
    ageRange: '6-12岁',
    duration: '45分钟',
    difficulty: 'medium',
    description: '用彩绳编织手绳，学习编织技巧。',
    materials: ['彩色编织绳', '剪刀', '珠子（可选）'],
    steps: [
      '选择喜欢的颜色搭配',
      '学习基本的编织方法',
      '开始编织手绳',
      '可以添加珠子装饰',
      '完成后互相赠送'
    ],
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
    benefits: ['锻炼精细动作', '培养耐心', '学习手工技巧', '制作礼物']
  },
  {
    id: 46,
    title: '磁铁探索',
    category: '科学探索',
    ageRange: '4-10岁',
    duration: '30分钟',
    difficulty: 'easy',
    description: '用磁铁探索什么东西能被吸引，学习磁的知识。',
    materials: ['磁铁', '各种小物件'],
    steps: [
      '收集各种小物件',
      '用磁铁测试哪些能被吸引',
      '将物品分类',
      '讨论磁铁的特性',
      '尝试其他磁铁玩法'
    ],
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
    benefits: ['激发科学兴趣', '了解磁力特性', '培养探索精神', '提高分类能力']
  },
  {
    id: 47,
    title: '捡贝壳',
    category: '户外游戏',
    ageRange: '3-12岁',
    duration: '60分钟',
    difficulty: 'easy',
    description: '去海边捡贝壳，感受大海的魅力。',
    materials: ['小袋子装贝壳', '防晒霜', '帽子'],
    steps: [
      '选择适合赶海的时间',
      '去海边沙滩',
      '寻找漂亮的贝壳',
      '注意安全，保护环境',
      '回家后可以用贝壳做手工'
    ],
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&h=600&fit=crop',
    benefits: ['亲近自然', '感受大海', '培养审美', '收集纪念品']
  },
  {
    id: 48,
    title: '家庭读书会',
    category: '室内游戏',
    ageRange: '4-12岁',
    duration: '45分钟',
    difficulty: 'easy',
    description: '一起阅读好书，分享阅读的快乐。',
    materials: ['适合的书籍', '舒适的环境'],
    steps: [
      '选择大家都喜欢的书',
      '营造舒适的阅读环境',
      '可以轮流朗读',
      '讨论书中的内容',
      '分享阅读感受'
    ],
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
    benefits: ['培养阅读习惯', '增加知识', '提高语言能力', '增进亲子交流']
  },
  {
    id: 49,
    title: '折纸艺术',
    category: '创造力游戏',
    ageRange: '5-12岁',
    duration: '45分钟',
    difficulty: 'medium',
    description: '学习折纸，制作各种动物和物品。',
    materials: ['彩色折纸', '折纸教程'],
    steps: [
      '准备彩色折纸',
      '选择简单的折纸作品',
      '跟着教程一步步折',
      '练习直到熟练',
      '尝试自己创作'
    ],
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
    benefits: ['锻炼精细动作', '培养耐心', '学习空间思维', '创作艺术品']
  },
  {
    id: 50,
    title: '玩滑板',
    category: '运动游戏',
    ageRange: '7-12岁',
    duration: '45分钟',
    difficulty: 'hard',
    description: '在安全的地方学习玩滑板，锻炼身体平衡能力。',
    materials: ['滑板', '头盔', '护具'],
    steps: [
      '选择安全平整的场地',
      '戴好护具和头盔',
      '先学习在滑板上站稳',
      '慢慢学习滑行',
      '注意安全，不要急于求成'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    benefits: ['提高平衡能力', '锻炼勇气', '增强自信心', '体验新技能']
  },
  {
    id: 51,
    title: '脑筋急转弯',
    category: '智力游戏',
    ageRange: '6-12岁',
    duration: '30分钟',
    difficulty: 'easy',
    description: '玩脑筋急转弯，锻炼思维灵活性。',
    materials: ['脑筋急转弯书籍'],
    steps: [
      '准备脑筋急转弯题目',
      '轮流出题',
      '鼓励多角度思考',
      '公布有趣的答案',
      '享受思考的乐趣'
    ],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    benefits: ['锻炼思维灵活性', '培养幽默感', '提高反应速度', '激发思考兴趣']
  },
  {
    id: 52,
    title: '一起做家务',
    category: '协作游戏',
    ageRange: '4-12岁',
    duration: '60分钟',
    difficulty: 'easy',
    description: '分工合作做家务，让家务变成有趣的游戏。',
    materials: ['清洁工具', '家务分工表'],
    steps: [
      '列出需要做的家务',
      '分配各自的任务',
      '可以播放音乐',
      '比赛看谁做得又快又好',
      '一起享受整洁的家'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    benefits: ['培养责任感', '学习生活技能', '增进亲子合作', '创造整洁环境']
  },
  {
    id: 53,
    title: '自制纸风筝',
    category: '艺术游戏',
    ageRange: '6-12岁',
    duration: '60分钟',
    difficulty: 'medium',
    description: '自己动手制作一个纸风筝，然后去放飞。',
    materials: ['竹条', '纸张', '线', '剪刀', '胶水', '颜料'],
    steps: [
      '用竹条制作风筝骨架',
      '用纸糊在骨架上',
      '装饰风筝',
      '系好风筝线',
      '去户外放飞风筝'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    benefits: ['锻炼动手能力', '培养创造力', '学习传统工艺', '享受成就感']
  },
  {
    id: 54,
    title: '植物观察记录',
    category: '科学探索',
    ageRange: '5-12岁',
    duration: '持续观察',
    difficulty: 'easy',
    description: '观察植物的生长变化，记录观察日记。',
    materials: ['盆栽植物', '观察记录本', '彩笔'],
    steps: [
      '选择一盆植物进行观察',
      '定期观察植物变化',
      '用图画和文字记录',
      '测量植物高度',
      '总结植物生长规律'
    ],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
    benefits: ['学习植物知识', '培养科学态度', '提高观察力', '养成记录习惯']
  },
  {
    id: 55,
    title: '登山远足',
    category: '户外游戏',
    ageRange: '5-12岁',
    duration: '半天',
    difficulty: 'medium',
    description: '去登山或远足，亲近大自然，锻炼身体。',
    materials: ['舒适的鞋子', '水', '小零食', '帽子'],
    steps: [
      '选择难度适中的路线',
      '准备好必要的物品',
      '慢慢登山，欣赏风景',
      '适当休息补充能量',
      '到达山顶庆祝胜利'
    ],
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&h=600&fit=crop',
    benefits: ['增强体质', '亲近自然', '培养毅力', '欣赏美景']
  },
  {
    id: 56,
    title: '做手工蜡烛',
    category: '室内游戏',
    ageRange: '7-12岁',
    duration: '60分钟',
    difficulty: 'medium',
    description: '制作漂亮的手工蜡烛，需要大人陪同。',
    materials: ['蜡', '蜡芯', '模具', '色素', '香精', '锅'],
    steps: [
      '将蜡块融化（大人操作）',
      '加入色素和香精',
      '固定蜡芯在模具中',
      '倒入融化的蜡',
      '等待凝固后取出'
    ],
    image: 'https://images.unsplash.com/photo-1518604665362-3e3080890a07?w=800&h=600&fit=crop',
    benefits: ['学习手工制作', '培养创造力', '了解物质变化', '制作美丽物品']
  },
  {
    id: 57,
    title: '讲故事画图画',
    category: '创造力游戏',
    ageRange: '4-10岁',
    duration: '40分钟',
    difficulty: 'easy',
    description: '一边讲故事一边画画，或者听完故事后画出故事内容。',
    materials: ['画纸', '彩笔', '故事书'],
    steps: [
      '选择一个有趣的故事',
      '听故事或读故事',
      '回忆故事中的场景',
      '画出自己喜欢的部分',
      '讲述画中的故事'
    ],
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
    benefits: ['培养想象力', '提高绘画能力', '锻炼理解能力', '增强表达力']
  },
  {
    id: 58,
    title: '呼啦圈游戏',
    category: '运动游戏',
    ageRange: '4-12岁',
    duration: '30分钟',
    difficulty: 'easy',
    description: '玩呼啦圈，尝试不同的玩法。',
    materials: ['呼啦圈'],
    steps: [
      '学习转动呼啦圈',
      '尝试用腰、手、腿等部位',
      '玩呼啦圈传递游戏',
      '用呼啦圈做跳跃游戏',
      '发明新的玩法'
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    benefits: ['锻炼身体协调', '增强柔韧性', '提高平衡感', '增添运动乐趣']
  },
  {
    id: 59,
    title: '数字迷宫',
    category: '智力游戏',
    ageRange: '6-12岁',
    duration: '30分钟',
    difficulty: 'medium',
    description: '玩数字迷宫游戏，锻炼逻辑思维能力。',
    materials: ['迷宫书或打印的迷宫'],
    steps: [
      '准备适合的数字迷宫',
      '理解游戏规则',
      '尝试找出正确路线',
      '可以从简单到困难',
      '完成后给予鼓励'
    ],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    benefits: ['锻炼逻辑思维', '提高专注力', '培养耐心', '增强问题解决能力']
  },
  {
    id: 60,
    title: '家庭时装秀',
    category: '协作游戏',
    ageRange: '4-12岁',
    duration: '60分钟',
    difficulty: 'easy',
    description: '用家里的衣服进行创意搭配，举办家庭时装秀。',
    materials: ['各种衣服', '配饰', '音乐'],
    steps: [
      '收集可以用的衣服和配饰',
      '设计独特的造型',
      '准备背景音乐',
      '轮流走秀展示',
      '拍照录像留念'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    benefits: ['培养审美能力', '激发创造力', '增加自信', '享受表演乐趣']
  },
  {
    id: 61,
    title: '制作书签',
    category: '艺术游戏',
    ageRange: '5-12岁',
    duration: '35分钟',
    difficulty: 'easy',
    description: '设计并制作漂亮的书签，让阅读更有乐趣。',
    materials: ['硬卡纸', '彩笔', '贴纸', '缎带', '胶水'],
    steps: [
      '将卡纸剪成书签形状',
      '设计书签图案',
      '用彩笔和贴纸装饰',
      '在书签上打洞系缎带',
      '用自己制作的书签阅读'
    ],
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop',
    benefits: ['培养创造力', '锻炼动手能力', '美化阅读', '实用手工']
  },
  {
    id: 62,
    title: '水的三态变化',
    category: '科学探索',
    ageRange: '6-12岁',
    duration: '45分钟',
    difficulty: 'medium',
    description: '观察水变成冰、冰变成水、水变成水蒸气的过程。',
    materials: ['水', '冰格', '锅', '炉子'],
    steps: [
      '将水倒入冰格放入冰箱',
      '观察水结成冰',
      '将冰放在室温下融化',
      '把水加热观察水蒸气',
      '讨论水的三态变化'
    ],
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
    benefits: ['学习科学知识', '观察物质变化', '培养探索精神', '理解自然规律']
  },
  {
    id: 63,
    title: '公园植物认知',
    category: '户外游戏',
    ageRange: '4-12岁',
    duration: '60分钟',
    difficulty: 'easy',
    description: '去公园认识各种植物，收集树叶制作标本。',
    materials: ['小本子', '笔', '手机（查资料）', '收集袋'],
    steps: [
      '去公园观察各种植物',
      '认识不同的树叶和花朵',
      '收集一些落叶',
      '记录植物的特点',
      '回家制作植物标本'
    ],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
    benefits: ['亲近自然', '学习植物知识', '培养观察力', '制作标本']
  },
  {
    id: 64,
    title: '电子积木',
    category: '室内游戏',
    ageRange: '6-12岁',
    duration: '45分钟',
    difficulty: 'medium',
    description: '玩电子积木，学习简单的电路知识。',
    materials: ['电子积木套装'],
    steps: [
      '熟悉电子积木组件',
      '按照说明书搭建简单电路',
      '制作小风扇、收音机等',
      '理解电路原理',
      '尝试自己创新'
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    benefits: ['学习电路知识', '培养动手能力', '激发科学兴趣', '创新思维']
  },
  {
    id: 65,
    title: '制作故事书',
    category: '创造力游戏',
    ageRange: '5-12岁',
    duration: '90分钟',
    difficulty: 'medium',
    description: '自己编故事、画插图，制作一本故事书。',
    materials: ['空白本子', '彩笔', '胶水', '剪刀', '彩纸'],
    steps: [
      '构思一个有趣的故事',
      '写出故事内容',
      '为故事画插图',
      '设计封面和装订',
      '分享自己的故事书'
    ],
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
    benefits: ['培养创造力', '提高写作能力', '锻炼绘画技巧', '获得成就感']
  },
  {
    id: 66,
    title: '打羽毛球',
    category: '运动游戏',
    ageRange: '6-12岁',
    duration: '45分钟',
    difficulty: 'medium',
    description: '学习打羽毛球，享受挥拍运动的快乐。',
    materials: ['羽毛球拍', '羽毛球', '开阔场地'],
    steps: [
      '学习正确的握拍姿势',
      '练习发球动作',
      '练习接球',
      '慢慢开始对打',
      '享受运动乐趣'
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    benefits: ['增强体质', '提高反应速度', '锻炼手眼协调', '增进亲子互动']
  },
  {
    id: 67,
    title: '逻辑推理题',
    category: '智力游戏',
    ageRange: '8-12岁',
    duration: '40分钟',
    difficulty: 'hard',
    description: '做逻辑推理题，锻炼逻辑思维能力。',
    materials: ['逻辑题书籍或打印的题目'],
    steps: [
      '选择适合的逻辑题目',
      '仔细阅读题目',
      '分析推理找出答案',
      '可以一起讨论',
      '完成后总结方法'
    ],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    benefits: ['锻炼逻辑思维', '提高分析能力', '培养推理能力', '增强思维能力']
  },
  {
    id: 68,
    title: '一起种蔬菜',
    category: '协作游戏',
    ageRange: '5-12岁',
    duration: '持续照料',
    difficulty: 'medium',
    description: '在阳台或院子里种蔬菜，体验种植的乐趣。',
    materials: ['蔬菜种子', '花盆', '泥土', '浇水壶'],
    steps: [
      '选择适合种植的蔬菜',
      '准备好花盆和泥土',
      '播下种子或种小苗',
      '定期浇水施肥',
      '观察生长并记录',
      '收获自己种的蔬菜'
    ],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
    benefits: ['学习种植知识', '培养责任感', '体验劳动乐趣', '获得成就感']
  },
  {
    id: 69,
    title: '扎染艺术',
    category: '艺术游戏',
    ageRange: '7-12岁',
    duration: '60分钟',
    difficulty: 'medium',
    description: '学习简单的扎染技法，制作独特的染布作品。',
    materials: ['白色布料', '扎染染料', '橡皮筋', '手套', '塑料布'],
    steps: [
      '将布料用橡皮筋扎起来',
      '调配染料颜色',
      '给布料上色',
      '等待染料固定',
      '洗净晾干，解开橡皮筋'
    ],
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop',
    benefits: ['学习传统工艺', '培养创造力', '体验色彩艺术', '创作独特作品']
  },
  {
    id: 70,
    title: '星空观察',
    category: '科学探索',
    ageRange: '6-12岁',
    duration: '60分钟',
    difficulty: 'medium',
    description: '在晴朗的夜晚观察星空，认识星座。',
    materials: ['星空图', '望远镜（可选）', '手电筒'],
    steps: [
      '选择晴朗无云的夜晚',
      '找一个光污染少的地方',
      '对照星空图找星座',
      '识别常见的星星',
      '讨论宇宙的奥秘'
    ],
    image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=800&h=600&fit=crop',
    benefits: ['学习天文知识', '激发探索欲望', '感受宇宙神奇', '培养科学兴趣']
  },
  {
    id: 71,
    title: '玩沙子',
    category: '户外游戏',
    ageRange: '2-10岁',
    duration: '60分钟',
    difficulty: 'easy',
    description: '在沙坑玩沙子，建造城堡和各种造型。',
    materials: ['沙坑或沙滩', '挖沙工具', '小模具'],
    steps: [
      '带上挖沙工具去沙坑',
      '用沙子堆出各种造型',
      '建造沙堡和城池',
      '可以加入小装饰',
      '享受玩沙的乐趣'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    benefits: ['锻炼创造力', '感受自然材质', '促进手眼协调', '享受户外时光']
  },
  {
    id: 72,
    title: '家庭图书馆',
    category: '室内游戏',
    ageRange: '4-12岁',
    duration: '50分钟',
    difficulty: 'easy',
    description: '整理家里的书籍，布置一个温馨的阅读角。',
    materials: ['书籍', '书架', '靠垫', '小台灯'],
    steps: [
      '一起整理家里的书籍',
      '按类别或大小摆放书籍',
      '布置舒适的阅读角',
      '每个人选一本喜欢的书',
      '享受阅读时光'
    ],
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
    benefits: ['培养阅读习惯', '学习分类整理', '创造阅读环境', '享受阅读乐趣']
  },
  {
    id: 73,
    title: '数字画',
    category: '创造力游戏',
    ageRange: '5-10岁',
    duration: '40分钟',
    difficulty: 'easy',
    description: '用数字和形状创作有趣的画，学习数字的同时培养创造力。',
    materials: ['画纸', '彩笔', '铅笔'],
    steps: [
      '在纸上写一些数字',
      '用数字为基础画图形',
      '添加更多细节',
      '涂上漂亮的颜色',
      '讲述画作中的故事'
    ],
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop',
    benefits: ['学习数字', '培养创造力', '锻炼想象力', '增添学习乐趣']
  },
  {
    id: 74,
    title: '跳绳花样',
    category: '运动游戏',
    ageRange: '7-12岁',
    duration: '35分钟',
    difficulty: 'medium',
    description: '学习不同的跳绳花样，增加跳绳的趣味性。',
    materials: ['跳绳'],
    steps: [
      '先练习基本的跳绳',
      '学习交叉跳',
      '尝试双脚交换跳',
      '学习多人跳绳',
      '展示学会的花样'
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    benefits: ['提高协调性', '增强节奏感', '锻炼身体', '增加运动乐趣']
  },
  {
    id: 75,
    title: '图形拼接',
    category: '智力游戏',
    ageRange: '4-10岁',
    duration: '30分钟',
    difficulty: 'easy',
    description: '用各种几何图形拼出不同的图案和形状。',
    materials: ['几何图形积木', '七巧板'],
    steps: [
      '认识不同的几何图形',
      '尝试用图形拼简单物品',
      '拼出动物或建筑',
      '自己创作图案',
      '展示并讲解作品'
    ],
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
    benefits: ['认识图形', '锻炼空间思维', '培养创造力', '提高智力']
  },
  {
    id: 76,
    title: '一起烘焙',
    category: '协作游戏',
    ageRange: '6-12岁',
    duration: '90分钟',
    difficulty: 'medium',
    description: '一起制作简单的烘焙食品，享受烘焙的乐趣。',
    materials: ['面粉', '鸡蛋', '糖', '烘焙工具'],
    steps: [
      '选择简单的食谱',
      '准备材料和工具',
      '一起动手制作',
      '等待美食出炉',
      '一起享用美食'
    ],
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    benefits: ['学习烘焙', '培养耐心', '增进亲子合作', '享受美食']
  },
  {
    id: 77,
    title: '串珠制作',
    category: '艺术游戏',
    ageRange: '5-12岁',
    duration: '45分钟',
    difficulty: 'easy',
    description: '用珠子串成项链、手链等饰品，培养耐心和专注力。',
    materials: ['各种珠子', '线', '小饰品'],
    steps: [
      '选择喜欢的珠子',
      '设计串珠的图案',
      '开始串珠',
      '完成后系好线',
      '佩戴或赠送'
    ],
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
    benefits: ['锻炼精细动作', '培养耐心', '提高审美', '制作饰品']
  },
  {
    id: 78,
    title: '声音识别游戏',
    category: '科学探索',
    ageRange: '4-10岁',
    duration: '30分钟',
    difficulty: 'easy',
    description: '听声音猜是什么发出的，训练听力和观察力。',
    materials: ['能发出声音的物品'],
    steps: [
      '收集各种能发声的物品',
      '一个人发出声音',
      '其他人闭上眼睛听',
      '猜是什么发出的声音',
      '轮流出声让别人猜'
    ],
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=600&fit=crop',
    benefits: ['训练听力', '培养观察力', '提高专注力', '增加科学知识']
  },
  {
    id: 79,
    title: '自行车骑行',
    category: '户外游戏',
    ageRange: '5-12岁',
    duration: '60分钟',
    difficulty: 'medium',
    description: '去安全的地方骑自行车，享受骑行的快乐。',
    materials: ['儿童自行车', '头盔', '护具'],
    steps: [
      '检查自行车是否安全',
      '戴好头盔和护具',
      '在安全的地方骑行',
      '慢慢增加骑行距离',
      '享受户外骑行'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    benefits: ['增强体质', '提高平衡', '亲近自然', '培养独立性']
  },
  {
    id: 80,
    title: '家庭记忆相册',
    category: '室内游戏',
    ageRange: '5-12岁',
    duration: '90分钟',
    difficulty: 'medium',
    description: '一起整理照片，制作家庭记忆相册。',
    materials: ['照片', '相册', '彩笔', '贴纸'],
    steps: [
      '一起整理家庭照片',
      '选择喜欢的照片',
      '按时间或事件分类',
      '装饰相册页面',
      '写下照片的故事'
    ],
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop',
    benefits: ['珍惜家庭回忆', '增进亲情', '培养动手能力', '学习整理']
  },
  {
    id: 81,
    title: '废物利用小制作',
    category: '创造力游戏',
    ageRange: '5-12岁',
    duration: '50分钟',
    difficulty: 'medium',
    description: '用废品制作有用的东西，培养环保意识。',
    materials: ['空瓶子', '纸箱', '剪刀', '胶水', '彩纸'],
    steps: [
      '收集可回收的废品',
      '讨论可以做什么',
      '设计制作方案',
      '开始动手制作',
      '展示制作成果'
    ],
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
    benefits: ['培养环保意识', '锻炼创造力', '变废为宝', '节约资源']
  },
  {
    id: 82,
    title: '做瑜伽',
    category: '运动游戏',
    ageRange: '4-12岁',
    duration: '30分钟',
    difficulty: 'easy',
    description: '学习简单的瑜伽动作，锻炼身体柔韧性。',
    materials: ['瑜伽垫', '舒适的衣服'],
    steps: [
      '准备瑜伽垫',
      '学习简单的瑜伽动作',
      '模仿动物姿势',
      '配合呼吸',
      '享受放松时光'
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    benefits: ['提高柔韧性', '培养专注力', '学习放松', '锻炼身体']
  },
  {
    id: 83,
    title: '词语接龙',
    category: '智力游戏',
    ageRange: '5-12岁',
    duration: '25分钟',
    difficulty: 'easy',
    description: '玩词语接龙游戏，增加词汇量。',
    materials: ['不需要特殊材料'],
    steps: [
      '一个人先说一个词语',
      '下一个人用前一个词的最后一个字开头',
      '轮流接龙',
      '不会时可以提示',
      '看谁能接得最长'
    ],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    benefits: ['增加词汇量', '锻炼反应力', '提高语言能力', '增加知识']
  },
  {
    id: 84,
    title: '家庭会议',
    category: '协作游戏',
    ageRange: '6-12岁',
    duration: '40分钟',
    difficulty: 'easy',
    description: '定期召开家庭会议，一起讨论家庭事务。',
    materials: ['笔记本', '笔'],
    steps: [
      '确定会议时间',
      '每个人都可以发言',
      '讨论家庭计划',
      '记录重要事项',
      '一起做出决定'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    benefits: ['增进沟通', '培养责任感', '学习民主', '家庭和谐']
  },
  {
    id: 85,
    title: '纸浆画',
    category: '艺术游戏',
    ageRange: '5-12岁',
    duration: '60分钟',
    difficulty: 'medium',
    description: '用纸浆制作独特的画作，体验不同的艺术形式。',
    materials: ['废纸', '水', '颜料', '硬纸板', '胶水'],
    steps: [
      '将废纸泡在水里',
      '撕成纸浆',
      '加入颜料',
      '用彩纸浆在纸板上作画',
      '等待晾干'
    ],
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop',
    benefits: ['锻炼动手能力', '培养创造力', '体验新材料', '创作艺术品']
  },
  {
    id: 86,
    title: '种植豆芽',
    category: '科学探索',
    ageRange: '4-12岁',
    duration: '持续一周',
    difficulty: 'easy',
    description: '种植豆芽，观察豆子发芽的过程。',
    materials: ['绿豆', '盘子', '湿布'],
    steps: [
      '挑选健康的豆子',
      '用水浸泡豆子',
      '放在湿盘子里',
      '每天浇水观察',
      '记录生长过程',
      '等待豆芽长成'
    ],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
    benefits: ['观察生命', '培养责任感', '学习种植', '获得成就感']
  },
  {
    id: 87,
    title: '户外野餐',
    category: '户外游戏',
    ageRange: '3-12岁',
    duration: '90分钟',
    difficulty: 'easy',
    description: '去户外野餐，享受大自然和美食。',
    materials: ['野餐垫', '食物', '饮料', '游戏用品'],
    steps: [
      '一起准备野餐食物',
      '选择美丽的地方',
      '享受美食',
      '玩一些户外游戏',
      '整理场地带回家'
    ],
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop',
    benefits: ['亲近自然', '享受美食', '增进亲情', '放松心情']
  },
  {
    id: 88,
    title: '家庭手账',
    category: '室内游戏',
    ageRange: '6-12岁',
    duration: '45分钟',
    difficulty: 'easy',
    description: '一起制作家庭手账，记录家庭生活点滴。',
    materials: ['手账本', '彩笔', '贴纸', '照片'],
    steps: [
      '准备手账材料',
      '设计手账页面',
      '记录家庭日常',
      '添加装饰元素',
      '定期更新内容'
    ],
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop',
    benefits: ['记录生活', '培养习惯', '锻炼创造力', '珍惜回忆']
  },
  {
    id: 89,
    title: '想象画画',
    category: '创造力游戏',
    ageRange: '4-12岁',
    duration: '40分钟',
    difficulty: 'easy',
    description: '给出一个主题，自由想象并画出来。',
    materials: ['画纸', '彩笔', '油画棒'],
    steps: [
      '确定一个画画主题',
      '让孩子自由想象',
      '开始创作',
      '讲述画中的故事',
      '展示并鼓励'
    ],
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop',
    benefits: ['培养想象力', '锻炼绘画', '提高表达', '激发创意']
  },
  {
    id: 90,
    title: '乒乓球游戏',
    category: '运动游戏',
    ageRange: '6-12岁',
    duration: '40分钟',
    difficulty: 'medium',
    description: '打乒乓球，或者玩乒乓球相关的小游戏。',
    materials: ['乒乓球拍', '乒乓球', '桌子'],
    steps: [
      '学习握拍和基本动作',
      '练习颠球',
      '对墙击球练习',
      '慢慢开始对打',
      '享受运动乐趣'
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    benefits: ['锻炼反应', '提高协调', '增强体质', '增进互动']
  },
  {
    id: 91,
    title: '算24点',
    category: '智力游戏',
    ageRange: '8-12岁',
    duration: '30分钟',
    difficulty: 'hard',
    description: '用4张扑克牌通过加减乘除算出24点，锻炼数学思维。',
    materials: ['扑克牌'],
    steps: [
      '准备一副扑克牌',
      '任意抽出4张牌',
      '用加减乘除计算',
      '每张牌只能用一次',
      '看谁先算出24点'
    ],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    benefits: ['提高计算能力', '锻炼思维', '培养数感', '增进反应']
  },
  {
    id: 92,
    title: '家庭树制作',
    category: '协作游戏',
    ageRange: '6-12岁',
    duration: '60分钟',
    difficulty: 'medium',
    description: '一起制作家庭树，了解家庭历史和亲情。',
    materials: ['大纸张', '彩笔', '照片', '胶水'],
    steps: [
      '准备制作材料',
      '讨论家庭关系',
      '画出家庭树',
      '贴上家人照片',
      '分享家庭故事'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    benefits: ['了解家庭', '增进亲情', '学习历史', '培养归属感']
  },
  {
    id: 93,
    title: '自制书签',
    category: '艺术游戏',
    ageRange: '5-12岁',
    duration: '35分钟',
    difficulty: 'easy',
    description: '设计并制作独特的书签，让阅读更有趣。',
    materials: ['硬卡纸', '彩笔', '贴纸', '缎带'],
    steps: [
      '将卡纸剪成书签形状',
      '设计自己喜欢的图案',
      '用彩笔和贴纸装饰',
      '可以写一些名言',
      '在阅读中使用'
    ],
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop',
    benefits: ['培养艺术', '锻炼动手', '增加阅读', '实用手工']
  },
  {
    id: 94,
    title: '彩虹雨实验',
    category: '科学探索',
    ageRange: '5-12岁',
    duration: '30分钟',
    difficulty: 'easy',
    description: '做简单的彩虹雨实验，观察神奇的现象。',
    materials: ['透明杯子', '食用油', '水', '食用色素'],
    steps: [
      '在杯子里倒一些油',
      '加入几滴不同颜色的色素',
      '倒入一杯水',
      '观察彩虹雨现象',
      '讨论实验原理'
    ],
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
    benefits: ['激发科学', '培养探索', '观察现象', '学习原理']
  },
  {
    id: 95,
    title: '滑板车',
    category: '户外游戏',
    ageRange: '4-12岁',
    duration: '45分钟',
    difficulty: 'easy',
    description: '玩滑板车，享受速度和平衡的乐趣。',
    materials: ['滑板车', '头盔', '护具'],
    steps: [
      '选择安全的场地',
      '佩戴好护具',
      '学习上下车',
      '慢慢滑行',
      '享受户外时光'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    benefits: ['锻炼平衡', '增强体质', '亲近自然', '享受运动']
  },
  {
    id: 96,
    title: '家庭手工日',
    category: '室内游戏',
    ageRange: '4-12岁',
    duration: '90分钟',
    difficulty: 'medium',
    description: '设定一个手工日，一起做各种有趣的手工。',
    materials: ['各种手工材料'],
    steps: [
      '设定手工日',
      '准备各种材料',
      '选择想做的手工',
      '一起动手制作',
      '展示作品'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    benefits: ['培养创造', '锻炼动手', '增进亲情', '享受乐趣']
  },
  {
    id: 97,
    title: '制作贺卡',
    category: '创造力游戏',
    ageRange: '4-12岁',
    duration: '40分钟',
    difficulty: 'easy',
    description: '为家人或朋友制作手工贺卡，表达心意。',
    materials: ['彩纸', '剪刀', '胶水', '彩笔', '贴纸'],
    steps: [
      '准备制作材料',
      '设计贺卡样式',
      '写上祝福语',
      '装饰贺卡',
      '送给想送的人'
    ],
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&h=600&fit=crop',
    benefits: ['学会表达', '培养感恩', '锻炼创造', '增加亲情']
  },
  {
    id: 98,
    title: '游泳',
    category: '运动游戏',
    ageRange: '5-12岁',
    duration: '60分钟',
    difficulty: 'medium',
    description: '去游泳池游泳，享受水中的快乐。',
    materials: ['泳衣', '泳镜', '游泳圈', '浴巾'],
    steps: [
      '准备好游泳用品',
      '做好热身运动',
      '在浅水区适应',
      '学习游泳动作',
      '注意安全'
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    benefits: ['增强体质', '学习技能', '享受清凉', '锻炼胆量']
  },
  {
    id: 99,
    title: '猜字谜',
    category: '智力游戏',
    ageRange: '6-12岁',
    duration: '35分钟',
    difficulty: 'easy',
    description: '玩猜字谜游戏，学习汉字，增加乐趣。',
    materials: ['字谜书籍或手机'],
    steps: [
      '准备一些字谜',
      '轮流出题猜谜',
      '可以给提示',
      '猜对给小奖励',
      '分享有趣的字谜'
    ],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    benefits: ['学习汉字', '锻炼思维', '增加知识', '培养兴趣']
  },
  {
    id: 100,
    title: '家庭时光胶囊',
    category: '协作游戏',
    ageRange: '5-12岁',
    duration: '60分钟',
    difficulty: 'medium',
    description: '一起制作时光胶囊，记录现在的生活，给未来的自己。',
    materials: ['密封盒子', '照片', '信件', '小物件'],
    steps: [
      '准备时光胶囊盒子',
      '一起写一封给未来的信',
      '放入现在的照片',
      '加入有意义的小物件',
      '密封好，约定打开时间'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    benefits: ['珍惜当下', '记录成长', '增进亲情', '期待未来']
  }
];
