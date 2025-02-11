import './App.css'
import { useFetch } from "./customHooks/useFetch";
export default function Details(props) {
    const { data, isPending, error } = useFetch(props?.url);
    return (
        <>
            {isPending && <div className='loaderWrap'>Loading...</div>}
            {error && <div className='errorWrap'>{error}</div>}
            <div className='pokemonImage'>
                <img src={data?.sprites?.other?.home?.front_default} alt={data?.name} />
            </div>
            <div className="pokemonDetails">
                <h3>{data?.name}</h3>
                <h4>Weight: {data?.weight} lb</h4>
            </div>
        </>
    )
}