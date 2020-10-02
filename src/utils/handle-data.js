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