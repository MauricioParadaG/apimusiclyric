import React, {useState, useEffect} from 'react';
import FormComponent from './components/Form.component';
import axios from 'axios';
import SongComponent from './components/Song.component';
import ArtistComponent from './components/Artist.component';


function App() {

  const [formSearched, setFormSearchedState] = useState({});

  const [apiLyricResult, setApiLyricResultState] = useState('');

  const [apiArtistResult, setApiArtistResultState] = useState({});
  

  useEffect(() => {
    const checkingLyricApi = async () =>{
      if(Object.keys(formSearched).length === 0) return;
      
      const url = `https://api.lyrics.ovh/v1/${formSearched.artist}/${formSearched.song}`;

      const urlArtist = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${formSearched.artist}`;

      // Getting 2 answers, promise 2 urls query
      const [urlRes, urlArtistRes] = await Promise.all([
        axios.get(url),
        axios.get(urlArtist)
      ]);
      
      setApiLyricResultState(urlRes.data.lyrics);
      setApiArtistResultState(urlArtistRes.data.artists[0]);

      //setApiLyricResultState(res.data.lyrics);
    };
    checkingLyricApi();
  }, [formSearched])

  return (
    <>
      <FormComponent
      setFormSearchedState={setFormSearchedState}
      />

      <div className="container mt-5">
        <div className="row">
          
          <div className="col-md-6">
            <ArtistComponent
            apiArtistResultState={apiArtistResult}
            />
          </div>

          <div className="col-md-6">
            <SongComponent
            apiLyricResultState={apiLyricResult}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
