async function getData() {
    const res = await fetch('http://localhost:1995/roblox', { cache: 'no-store' });
    return res.json();
  }
  
  export default async function Test() {
    const chikita = await getData();
  
    return (
      <>
        <p></p>
      </>
    );
  }
  