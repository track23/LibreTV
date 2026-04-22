const CUSTOMER_SITES = {
  aqy: {
    name: "爱奇艺",
    api: "https://iqiyizyapi.com/api.php/provide/vod",
  },
  lz: {
    name: '量子資源',
    api: 'https://cj.lziapi.com/api.php/provide/vod/from/lzm3u8'
  },
  wl: {
    name: '卧龙资源',
    api: 'https://collect.wolongzyw.com/api.php/provide/vod'
  },
  jy: {
    name: '金鹰资源',
    api: 'https://jyzyapi.com/provide/vod/from/jinyingm3u8'
  },
  360: {
    name: '360|点播',
    api: 'https://360zy.com/api.php/provide/vod'
  },
  ikun: {
    name: 'ikun|点播',
    api: 'https://ikunzyapi.com/api.php/provide/vod'
  },
  bf: {
    name: '暴风|点播',
    api: 'https://bfzyapi.com/api.php/provide/vod'
  },
  pl: {
    name: '飘零|点播',
    api: 'https://p2100.net/api.php/provide/vod'
  },
  wj: {
    name: '无尽|点播',
    api: 'https://api.wujinapi.com/api.php/provide/vod'
  },
  md: {
    name: '魔都|点播',
    api: 'https://caiji.moduapi.cc/api.php/provide/vod'
  },
  ry: {
    name: '如意资源',
    api: 'https://cj.rycjapi.com/api.php/provide/vod'
  },
  zd: {
    name: '最大资源',
    api: 'https://api.zuidapi.com/api.php/provide/vod'
  },
  my: {
    name: '猫眼',
    api: 'https://api.maoyanapi.top/api.php/provide/vod'
  }
};

// 调用全局方法合并
if (window.extendAPISites) {
  window.extendAPISites(CUSTOMER_SITES);
} else {
  console.error("错误：请先加载 config.js！");
}
