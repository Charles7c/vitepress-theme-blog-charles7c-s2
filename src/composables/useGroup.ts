import type { Post, Group } from '../types';

export const useGroup = (posts: Post[], type: string) => {
  const data: Group = {};
  posts.forEach((post) => {
    if (type === 'archive') {
      const year = new Date(post.datetime.time).getFullYear();
      addToData(data, year, post);
    } else if (type === 'category') {
      const category = post.category;
      addToData(data, category, post);
    } else if (type === 'tag') {
      const tags = post.tags;
      tags && tags.forEach((tag) => addToData(data, tag, post));
    }
  });

  const keys = Object.keys(data).sort((a, b) => {
    if (type === 'tag' || type === 'category') {
      if (data[a].length === data[b].length) {
        return a.localeCompare(b);
      }
      return data[b].length - data[a].length;
    }
    return parseInt(b) - parseInt(a);
  });

  return { keys, data };
};

function addToData(obj: Group, key: any, value: Post) {
  if (key) {
    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(value);
  }
}
