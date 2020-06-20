import React, {useState} from 'react';
import ErrorComponent from './Error.component';

const FormComponent = props => {

    const [search, setSearchState] = useState(
        {
           artist:'',
           song:''
        }
      );

    const [error, setErrorState] = useState(false);

    const onChangeForm = event => {
        setSearchState({
            ...search,
            // adding the form info to the state
            [event.target.name]: event.target.value
        });
    } 

    const onSubmit = event => {
        event.preventDefault();
        // validation
        if (search.artist.trim() ==='' || 
        search.song.trim() ==='' ){
        
            setErrorState(true);
            return;
        }
        setErrorState(false);

        props.setFormSearchedState(search);

        setSearchState({ 
            artist:'',
            song:''
        });
    }

  return (
     <div className="bg-info">
        {/** if - error message with Bootstrap*/}
        {error ?
          <ErrorComponent message="All filds are required"/>
          : null
        }
       <div className="container">
         <div className="row">
           <form onSubmit={onSubmit}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
           >
             <fieldset>
               <legend className="text-center">Search music by lyrics</legend>

               <div className="row">
                   {/** Division */}
                 <div className="col-md-6">
                    <div className="form-group">
                        <label>Artist </label>
                        <input type="text"
                        className="form-control"
                        name= "artist"
                        onChange={onChangeForm}
                        placeholder="Ex. Shakira"
                        value={search.artist}
                        />
                    </div>
                 </div>

                 <div className="col-md-6">
                    <div className="form-group">
                        <label>Song Lyric </label>
                        <input type="text"
                        className="form-control"
                        name= "song"
                        onChange={onChangeForm}
                        placeholder="Ex. Hips Don't Lie"
                        value={search.song}
                        />
                    </div>
                 </div>

                </div>
             {/** Button */}
             <button type="submit"
              className="btn btn-primary float-right">
                Search
             </button>     

             </fieldset>

           </form>
        </div>
       </div>
     </div>
  )
}

export default FormComponent;
