import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';
import photo from '../../assets/icons/danca.jpeg'

const Danca = () => {
    const {url} = useUrlContext();
    const {data, loading} = useFetch(url);
  return (
    <>
      {!loading && (<div className='postes' id="dance">
        <h1>{data.danc}</h1>
        <p className="descricao">{data.danca}</p>
        <img src={photo} alt="foto" className='flag'/>
      </div>)}
    </>
  )
}

export default Danca