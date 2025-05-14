async function getData() {
    const res = await fetch('http://localhost:1995/roblox', { cache: 'no-store' });
    return res.json();
  } //Todo: Fazer essa com discord xadrez e roblox
  
  export default async function RobloxCard() {
    const resData = await getData();
    const chikitaVoice = resData.dadosJogo.data[0]
  
    return (
      <>
        <p>{chikitaVoice.name}</p>
      </>
    );
  }
  