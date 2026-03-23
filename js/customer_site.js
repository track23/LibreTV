const CUSTOMER_SITES = {
  feifan: {
    api: 'https://cj.ffzyapi.com/api.php/provide/vod/',
    name: '非凡|点播',
  },
  liangzi2: {
    api: 'https://cj.lziapi.com/api.php/provide/vod/',
    name: '量子|点播',
  },
  baofeng: {
    api: 'https://bfzyapi.com/api.php/provide/vod/',
    name: '暴风|点播',
  },
  shandian2: {
    api: 'http://sdzyapi.com/api.php/provide/vod',
    name: '闪电资源',
  },
  senlin: {
    api: 'http://slapibf.com/api.php/provide/vod',
    name: '森林资源',
  },
    ruyi: {
    api: 'https://cj.rycjapi.com/api.php/provide/vod',
    name: '如意资源',
  },
  aidan: {
    api: 'http://lovedan.net/api.php/provide/vod',
    name: '艾旦影视',
  },
  ffzy: {
    api: 'http://ffzy5.tv/api.php/provide/vod',
    name: '非凡影视',
    detail: 'http://ffzy5.tv',
  },
  hongniu: {
    api: 'http://hongniuzy2.com/api.php/provide/vod/from/hnm3u8',
    name: '紅牛資源',
  },
  guangsu: {
    api: 'http://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8',
    name: '光速资源',
  },
  xinlang: {
    api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod/',
    name: '新浪|点播',
  },
  uku2: {
    api: 'https://api.ukuapi.com/api.php/provide/vod/',
    name: 'U酷|点播',
  },
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
