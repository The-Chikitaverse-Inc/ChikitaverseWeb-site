import '@/components/css/theme.css'
import styles from './termsofservice.module.css'

//! Coponents
import Header from '@/components/layout/Header/Header'
import Section from '@/components/layout/Section/Section'

export default function TermsOfService() {
    return (
        <>
            <Header/>
            <Section>
                <article className={`${styles.lawsservice} textcolor`}>
                    <h2>Discord Bot: Termos de Serviço</h2>
                        <span>
                            <h2>Termos de Serviço — Chikita Bot</h2>
                                <p><strong>Última atualização:</strong> 22 de abril de 2025</p>
                                <p>Seja bem-vindo aos Termos de Serviço do <strong>Chikita Bot</strong>. Ao adicionar e usar o bot no seu servidor Discord, você concorda com os termos abaixo.</p>

                            <h3>Uso do Bot</h3>
                                <p>Você está autorizado a usar o Chikita Bot em servidores do Discord, desde que siga as regras da plataforma (Discord Terms of Service e Community Guidelines) e não tente quebrar ou abusar das funções do bot.</p>
                                <p><strong>Você <em>não pode</em>:</strong></p>
                                
                                <ul>
                                    <li>Usar o bot para fins ilegais ou mal-intencionados</li>
                                    <li>Tentar explorar falhas ou forçar sobrecarga no sistema</li>
                                    <li>Usar o bot para enviar spam ou conteúdo malicioso</li>
                                    <li>Fingir que você é o criador ou um representante oficial</li>
                                </ul>

                            <h3>Funcionamento e Disponibilidade</h3>
                                <p>O Chikita Bot é oferecido "como está" — ou seja, pode ficar offline, mudar funcionalidades, ou até ser desativado sem aviso prévio (mas a gente sempre tenta avisar). Bugs podem acontecer, e estamos sempre tentando melhorar.</p>

                            <h3>Atualizações e Alterações</h3>
                                <p>O bot pode passar por atualizações a qualquer momento. Com isso, esses Termos também podem ser alterados. Sempre que rolar alguma mudança importante, vamos tentar comunicar no GitHub ou via comando dentro do bot.</p>

                            <h3>Privacidade</h3>
                                <p>Não coletamos dados sensíveis, nem armazenamos info pessoal de forma permanente. Pra mais detalhes, veja a <a className={styles.lawslink} href="/discordbot/privacypolicy">Política de Privacidade</a>.</p>

                            <h3>Contato</h3>
                                <p>Achou um bug? Quer sugerir algo novo? Ou só quer trocar ideia? Chama o dev:</p>
                                
                                <ul>
                                    <li>Email: <a className={styles.lawslink} href="mailto:chikitaverso.contato@gmail.com" target="_blank">The Chikitaverse Inc.</a></li>
                                </ul>

                            <h3>Finalizando</h3>
                                <p>Ao usar o Chikita Bot, você aceita esses termos. Se não concordar, é só remover o bot do seu servidor</p>

                        </span>
                </article>
            </Section>
        </>
    )
}