import PropTypes from "prop-types"

Input.proTypes={
    passwordSize: PropTypes.number.isRequired,
    setPasswordSize: PropTypes.func
}

export default function Input(props) {
    return (
        <input
            type="number"
            id="number"
            min={12}
            value={props.passwordSize}
            onChange={(ev) => props.setPasswordSize(ev.target.value)}
        />
    )
}
