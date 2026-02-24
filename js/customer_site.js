const CUSTOMER_SITES = {
  feifan: {
    api: 'http://cj.ffzyapi.com/api.php/provide/vod/',
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
  tiankong: {
    api: 'http://m3u8.tiankongapi.com/api.php/provide/vod/from/tkm3u8',
    name: '天空資源',
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
  ffzy: {
    api: 'http://ffzy5.tv/api.php/provide/vod',
    name: '非凡影视',
    detail: 'http://ffzy5.tv',
  },
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
