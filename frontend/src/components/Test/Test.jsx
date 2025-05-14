async function getData() {
    const res = await fetch('http://localhost:1995/roblox', { cache: 'no-store' });
    return res.json();
  }
  
  export default async function Test() {
    const resData = await getData();
    const chikitaVoice = resData.dadosJogo.data[0]

    return (
      <>
        <p>{chikitaVoice.name}</p>
      </>
    );
  }
  