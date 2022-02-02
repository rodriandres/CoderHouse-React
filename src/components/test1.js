import vader from '../vader.png'

const Test1Jsx = () =>{
    const src = vader

    return (
        <picture>
            <img src={src} alt={`Sith 1`} />
            Darth Vader
        </picture>
    )
}

export default Test1Jsx;