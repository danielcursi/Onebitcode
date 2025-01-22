import Style from "./Style.module.css"
import ImgPoster from "./assets/img-poster.jpg"

export default function Card(){
    return (
        <div className={Style.mainContent}>
            
            <img className={Style.poster} src={ImgPoster} alt="" />
            
            <div className={Style.contentPoster}>
                <h1>Pôster: Star Wars</h1>
                <p>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
                <button>Comprar agora</button>
            </div>

        </div>
    )
}