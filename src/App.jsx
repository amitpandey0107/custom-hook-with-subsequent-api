import './App.css'
import Cards from './Cards';
import { useFetch } from './customHooks/useFetch';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon';
  const { data, isPending, error } = useFetch(url);
  return (
    <div className='screen'>
      <div className='mid'>
        {isPending && <div className='loaderWrap'><span className="loader"></span></div>}
        {error && <div className='errorWrap'>{error}</div>}
        <div className='productWrapper'>
          <Cards pokemon={data?.results} />
        </div>
      </div>
    </div>
  )
}

export default App
