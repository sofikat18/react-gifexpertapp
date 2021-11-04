export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=1F78pmYQNz8nc8C3KwtWD5R2aIcrtMe5`;
  const resp = await fetch(url);
  //Hay que desestructurar la data, para usarla, en este ob Json
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
