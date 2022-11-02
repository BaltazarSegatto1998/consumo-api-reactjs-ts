import { useState, useEffect } from "react";
type Movie = {
  titulo: string;
  avatar: string;
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMovies();
  },[])


 
  const loadMovies = async () => {
   try {
    setLoading(true);
    let response = await fetch('https://api.b7web.com.br/cinema/');
    let json = await response.json();
    setLoading(false);
    setMovies(json);
   } catch(e){
   
   }
 }

  return (
    <div className="p-5">

      {loading &&
        <div>Carregando...</div>
      }

      <div className="grid grid-cols-3 gap-10">
        {movies.map((item, index) => (
            <div className="">
              <img src={item.avatar} alt="movie" className=""/>
              <h2>{index}-{item.titulo}</h2>
            </div>
        ))}
      </div>
    </div>
  )
}

export default App