import PropTypes from "prop-types"

Game.propTypes = {
    title: PropTypes.string,
    cover: PropTypes.string,
    onRemove: PropTypes.func
}

export default function Game({title, cover, onRemove}) {
    return (
        <div>
            <img src={cover} alt="" />
            <div>
                <h2>{title}</h2>
                {/* Chamando funcao de remover item e passando o id pra ela */}
                <button onClick={onRemove}>
                    Remover
                </button>
            </div>
        </div>
    )
}
