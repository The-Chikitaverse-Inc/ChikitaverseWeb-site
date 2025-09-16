import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: NextResponse) {
    const key = request.headers.get('key')
    if (key !== process.env.KEYASSC) {
        return NextResponse.json({
            message: 'Acesso negado',
            code: 403,
        }, 
          { status: 403 }
        )
    }  

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