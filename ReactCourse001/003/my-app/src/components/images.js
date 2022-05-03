import rctimg from "../assets/react2.jpg";

const Images = () => {
    return (
        <div>
            <img src="/react1.png" />
            <img src={rctimg} />
        </div>
    );
};

export default Images;