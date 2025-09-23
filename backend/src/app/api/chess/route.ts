import axios from "axios";
import { NextResponse} from "next/server";

//Todo: Resolver ainda o problema do 403
export async function GET() {
  try {
    const resposta = await axios.get('https://api.chess.com/pub/club/the-chikitaverse-inc')

      return NextResponse.json({
        dataChess: resposta.data
      })
    
  } catch (erro) {
    console.error(`Erro ao busca dados da Api: ${erro}`)
    return NextResponse.json(
      { erro: 'Não foi possível puzar dados do Servidor' },
      { status: 500 }
    )
  }
}