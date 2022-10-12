type Props = {
    name: string;
    age: number;
}

export const Header = ({name, age}: Props) => {
    return (
        <header>
            <h1>Seu nick é {name} voce tem {age} anos</h1>
        </header>
    )
}

