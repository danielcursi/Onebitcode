function group(){
    console.log("Export nomeado non-inline")
}

function exportDefault(){
    console.log("Export exportDefault non-inline")
}

export { group }
export default exportDefault