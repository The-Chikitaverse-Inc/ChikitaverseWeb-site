async function getData() {
    const res = await fetch('http://localhost:1995/roblox', { cache: 'no-store' });
    return res.json();
  } //Todo: Fazer essa com discord xadrez e roblox
  
  export default async function RobloxCard() {
    const chikita = await getData();
  
    return (
      <>
        <p></p>
      </>
    );
  }
  