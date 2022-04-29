const List = () => {
    const items = [
        {
        id: 1,
        name: "Joao",
    },
    {
        id: 2,
        name: "Carlos",
    },
    {
        id: 3,
        name: "Ted",
    },
    ];

    return ( 
        <div>
            {items.map((item) => (
        <p key={item.id}>
        {item.id} - {item.name}
        </p>

        ))}
    </div>
    );
};
       

export default List;