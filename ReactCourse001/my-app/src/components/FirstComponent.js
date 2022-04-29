import AnotherComponent from "./AnotherComponent";

function FirstComponent(){

    // comentario
    const name = "React";
    return (
        <div className="firstcomponent">
            {/* comentario no JSX */}
            <p>Primeiro Componente</p>
        {2 + 2}
        <p>Nome: {name}</p>
        <frameElement />
        </div>
    );
}
export default FirstComponent