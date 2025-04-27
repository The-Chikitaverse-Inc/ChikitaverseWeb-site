import styles from './privacypolicy.module.css'

//! Coponents
import Header from '@/components/layout/Header/Header'
import Section from '@/components/layout/Section/Section'

export default function PrivacyPolicy() {
    return(
        <>
            <Header />
            <Section>
                <article className={styles.privacylaws}>
                    <h2>Discord Bot: Política de Privacidade</h2>
                    <span>
                        <h3>Política de Privacidade — Chikita Bot</h3>
                            <p><strong>Última atualização:</strong> 21 de abril de 2025</p>

                            <p>Olá! Aqui é o Chikita Bot, aquele que te manda memes, imagens engraçadas e responde suas mensagens com muito bom humor. Mas, além da zoeira, a gente leva a sua privacidade a sério.</p>

                        <h4>O que o Chikita Bot coleta?</h4>
                                <p>O Chikita Bot <strong>não coleta</strong> nem armazena dados pessoais sensíveis. Porém, ele pode ter acesso a algumas informações básicas para funcionar direitinho:</p>
                                    <ul>
                                        <li>ID do servidor (guild)</li>
                                        <li>ID do usuário e nome de usuário (username)</li>
                                        <li>Mensagens enviadas que ativam o bot (message content)</li>
                                        <li>Comandos usados</li>
                                    </ul>
                                    
                                    <p>Essas informações são <strong>temporárias</strong>, utilizadas apenas no momento da interação, e <strong>não são salvas</strong> em banco de dados.</p>

                        <h4>O que o bot faz com esses dados?</h4>
                                <p>Apenas o necessário para:</p>
                                    <ul>
                                        <li>Responder comandos e mensagens</li>
                                        <li>Gerar conteúdo engraçado e interativo</li>
                                        <li>Garantir que ele funcione de forma personalizada em cada servidor</li>
                                    </ul>
                                    
                                    <p>Nada de rastrear comportamento, compartilhar info ou vender dados — <strong>isso não rola aqui</strong>.</p>

                        <h4>Armazenamento e segurança</h4>
                            <p>Atualmente, o Chikita Bot <strong>não armazena dados permanentemente</strong>. Se, no futuro, isso mudar (por exemplo, se adicionarmos um sistema de perfil ou configurações salvas), a política será atualizada e você será avisado.</p>

                        <h4>Compartilhamento com terceiros</h4>
                            <p>Zero. Nenhum dado coletado é compartilhado com terceiros.</p>

                        <h4>Seus direitos</h4>
                            <p>Se você quiser saber mais sobre o que o bot faz no seu servidor, ou se quiser que ele seja removido, é só expulsar ele do servidor ou entrar em contato com o criador:</p>
                                <ul>
                                    <li><strong>Contato:</strong> <a className={styles.lawslink} href="mailto:chikitaverso.contato@gmail.com" target="_blank">The Chikitaverse Inc.</a></li>
                                    <li><strong>Código aberto:</strong> <a className={styles.lawslink} href="https://github.com/The-Chikitaverse-Inc/ChikitaBot" target="_blank">GitHub - ChikitaBot</a></li>
                                </ul>

                        <h4>Mudanças nesta Política</h4>
                            <p>Se algo mudar, essa página será atualizada com a nova versão. Você pode sempre ver a última versão aqui ou via comando do bot (em breve).</p>

                    </span>
                </article>
            </Section>
        </>
    )
}