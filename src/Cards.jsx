import './App.css'
import Details from "./Details";
export default function Cards(props) {
    const pokemon = props?.pokemon
    return (
        <>
            {
                pokemon && pokemon.length > 0 ?
                    pokemon.map((item, index) => (
                        <div className='cards' key={index}>
                            <Details url={item?.url} />
                        </div>
                    ))
                    :
                    <h3>No Data as of now</h3>
            }
        </>
    )
}