import fetch from 'isomorphic-unfetch';

export default async function (host, options) {
  const response = await fetch(host, options);
  const data = await response.json();

  return data;
}
