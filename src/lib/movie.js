const apiKey = '2726feca';

export async function getMovie(t) {
  const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${t}`);
  const data = await res.json();
  return data;
}
