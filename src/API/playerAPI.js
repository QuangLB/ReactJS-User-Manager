import instance from "./instance";

export const getAll = () => {
  const url = `/players`;
  return instance.get(url);
};

export const get = (id) => {
  const url = `/players/${id}`;
  return instance.get(url);
};

export const add = (players) => {
  const url = `/players`;
  return instance.post(url, players);
};

export const remove = (id) => {
  const url = `/players/${id}`;
  return instance.delete(url);
};

export const update = (players) => {
  const url = `/players/${players.id}`;
  return instance.put(url, players);
};
