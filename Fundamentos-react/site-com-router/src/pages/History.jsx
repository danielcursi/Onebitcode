import { useContext } from "react"
import UserContext from "../UseContext"

export default function History() {
    const images = useContext(UserContext)
    return (
        <section>
            <h2>Criação do personagem</h2>
            <div>
                <p>Stan Lee queria repetir o sucesso da revista do Quarteto Fantástico e procurava um novo conceito para um herói. A solução foi criar Peter Parker, um personagem com o qual os leitores adolescentes seriam capazes de se identificar, um estudante inseguro, com problemas românticos, tímido e até meio neurótico.</p>
                <p>Sua primeira história foi uma experiência. Lee, que além de escritor era o editor das revistas, precisava da aprovação de Martin Goodman, o dono da editora – que na época ainda se chamava oficialmente Atlas, embora a Marvel Comics já fosse o principal selo de quadrinhos da companhia. Depois de muitos argumentos, Goodman consentiu a publicação da HQ, na última edição de Amazing Fantasy.</p>
                <p>O Homem-Aranha teve muitos pais e diversas influências. Segundo Lee, uma delas foi o herói pulp The Spider (O Aranha, cuja identidade secreta era Richard Wentworth). O autor também declarou em diversas entrevistas que a ideia surgiu quando viu uma aranha escalar uma parede. Anos depois, contudo, ele mesmo colocou em dúvida esta última observação, dizendo que havia contado isso tantas vezes que já não sabia mais se era realmente verdade.</p>
            </div>
            <div style={{display: "flex", justifyContent: "center", margin: "3rem"}}>
                <img src={images.StanLee} alt="" style={{maxWidth: "20rem", height: "25rem"}}/>
                <img src={images.TheSpider} alt="" style={{maxWidth: "20rem", height: "25rem"}}/>
            </div>

            <div>
                <p>O primeiro artista procurado por Stan Lee para colocar o Homem-Aranha no papel foi, obviamente, Jack Kirby, seu grande parceiro e cocriador do Quarteto Fantástico.</p>
                <p>Kirby tinha um personagem similar, The Silver Spider, desenvolvido com Joe Simon, na década de 1950. Era um garoto órfão que vivia com um casal idoso e encontrava um anel mágico que lhe dava grandes poderes. Ele foi criado para a editora Crestwood, para ser publicado na revista Black Magic, mas nunca chegou a ser utilizado.</p>
                <p>A história da criação do herói da Marvel está envolta numa pequena controvérsia. Jack Kirby afirmava que o seu personagem foi a origem do Homem-Aranha, contrariando a versão de Stan Lee.  E Joe Simon, cocriador do Silver Spider, desmentiu a versão de Kirby em sua autobiografia de 1990, dizendo que foi ele quem criou o nome “Homem-Aranha”, posteriormente modificado para Silver Spider. Segundo Simon, esse personagem teria sido usado como inspiração, pela Archie Comics, para criar o herói The Fly.</p>
                <p>Por outro lado, o desenhista Steve Ditko declarou que Lee gostava do nome Hawkman (Gavião Negro, da DC Comics, que significa, literalmente, Homem-Falcão) e foi isso que o motivou a escolher Homem-Aranha.</p>
                <p>Na opinião do especialista Mark Evanier, é muito provável que uma das razões pelas quais o personagem foi modificado, resultando no aracnídeo que conhecemos hoje, tenha sido uma intervenção editorial de Goodman. Ele queria evitar semelhanças com The Fly, publicado por um de seus concorrentes, e um possível processo jurídico. Ditko havia mencionado essas semelhanças a Stan Lee, levando o editor a conversar com Kirby sobre o assunto.</p>
            </div>
            <div style={{display: "flex", justifyContent: "center", margin: "3rem"}}>
                <img src={images.TheFly} alt="" style={{maxWidth: "20rem", height: "25rem"}}/>
                <img src={images.SilverSpider} alt="" style={{maxWidth: "20rem", height: "25rem"}}/>
            </div>

        </section>
    )
}