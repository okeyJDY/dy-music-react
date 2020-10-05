// 歌单 - 选择分类数据
export const handleSongCategory = (data = {}) => {
  const category = data.categories;

  const categories = Object.entries(category).map(([key, value]) => {
    return {
      name: value,
      subs: []
    }
  });

  for (let item of data.sub) {
    categories[item.category].subs.push(item);
  }

  return categories;
}

// 获取歌手字母列表
export const singerAlphas = (() => {
  const alphabets = ["-1"];
  const start = "A".charCodeAt(0);
  const last = "Z".charCodeAt(0);
  for (let i = start; i <= last; i++) {
    alphabets.push(String.fromCharCode(i));
  }
  alphabets.push("0");
  return alphabets;
})();
