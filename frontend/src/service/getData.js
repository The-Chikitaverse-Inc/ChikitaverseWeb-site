require('dotenv').config()

export default async function getData(api) {
    const res = await fetch(`https://chikitaverse-api-production.up.railway.app/${api}` || `https://api.chikitaverse.com/${api}`,
      { 
        cache: 'no-store',
        headers: {
          "key": `${process.env.KEYACCES}`
        }
     });
    return res.json();
  }