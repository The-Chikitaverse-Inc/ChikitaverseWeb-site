require('dotenv').config()

export default async function getData(api) {
    const res = await fetch(`${api}`, 
      { 
        cache: 'no-store',
        headers: {
          "key": process.env.KEYACCES
        }
     });
    return res.json();
  }