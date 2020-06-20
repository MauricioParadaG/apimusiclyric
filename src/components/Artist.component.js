import React from 'react';

const ArtistComponent = props => {

    if(Object.keys(props.apiArtistResultState).length === 0) return null;

    return (
        <>
          <div className="card border-light">
              <div className="card-header bg-primary text-light font-weight-bold">
                Artist Information
              </div>
              <div className="card-body">
                  <img src={props.apiArtistResultState.strArtistThumb} 
                  alt="Artist Logo"/>

                  <p className="card-text">Genre: {props.apiArtistResultState.strGenre}</p>
                  <h2 className="card-text">Biography: </h2>
                  <p className="card-text">{props.apiArtistResultState.strBiographyDE}</p>

                  <p className="card-text">
                    <a href={`https://${props.apiArtistResultState.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${props.apiArtistResultState.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${props.apiArtistResultState.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                  </p>
              </div>
          </div>  
        </>
    )
}

export default ArtistComponent;
