import React ,{useEffect,useState}from 'react';
import axios from '../../axios';
import YouTube from 'react-youtube';
import { imageUrl} from '../../constant/constant';
import "./RowPosters.css"
import { API_KEY } from '../../constant/constant';

function RowPoster(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response=>{
   
      setMovies(response.data.results)

    }).catch(err=>{
      // alert(err)
    })
  
  }, [])
 
      const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMoves=(id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
         
          if(response.data.results.length!==0){
            setUrlId(response.data.results[0])
          }else{
            console.log("Trailer is not available")
          }
          
        })
      }
  
  return( <div className='rows'>
        <h2>{props.title}</h2>
        <div className="posters">
          {
            movies.map((obj)=>
              <img onClick={()=>handleMoves(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="Posters" />
            
            )
          }
         
        </div>
        { urlId &&  <YouTube opts={opts} videoId={urlId.key}   /> } 
  </div>);
}

export default RowPoster;
