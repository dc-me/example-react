const apiKey = '8a8905c2c5b148efa4c547296c4dbc4d';

export async function getHeadlines(params = {}) {
  const { country = 'us', category, q } = params;
  let url = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}`;
  if (country) {
    url += `&country=${country}`;
  }
  if (category) {
    url += `&category=${category}`;
  }
  if (q) {
    url += `&q=${q}`;
  }
  const res = await fetch(url);
  const data = res.json();
  return data;
}
