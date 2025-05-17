export default async function getData(api) {
    const res = await fetch(`${api}`, { cache: 'no-store' });
    return res.json();
  }