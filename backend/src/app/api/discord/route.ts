import axios from "axios";
import { NextResponse, NextRequest} from "next/server";

//Todo: Resolver ainda o problema do 403
export async function GET(request: NextResponse) {
    try {
    const resposta = await axios.get('https://discordapp.com/api/guilds/1311765282389360650/widget.json')
    
    return NextResponse.json({
      serveData: resposta
    })
  } catch (erro) {
    console.error(`Erro ao busca dados da Api: ${erro}`)
    return NextResponse.json(
      { erro: 'Não foi possível puzar dados do Servidor' },
      { status: 500 }
    )
  }
}