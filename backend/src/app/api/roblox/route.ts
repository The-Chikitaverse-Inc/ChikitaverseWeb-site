import axios from "axios";
import { NextResponse} from "next/server";

//Todo: Resolver ainda o problema do 403
export async function GET() {
  try {
    const resposta = await axios.get('https://games.roblox.com/v1/games', {
      params: {
        universeIds: '91016125083941'
      }
    })

      return NextResponse.json({
        robloxData: resposta.data
      })
    
  } catch (erro) {
    console.error(`Erro ao busca dados da Api: ${erro}`)
    return NextResponse.json(
      { erro: 'Não foi possível puzar dados do Servidor' },
      { status: 500 }
    )
  }
}