import React, {useState, useEffect} from 'react';
import FormComponent from './components/Form.component';


function App() {

  const [formSearched, setFormSearchedState] = useState({});

  const [apiResult, setApiResultState] = useState([]);

  useEffect(() => {
    const checkingApi = async () =>{
      if(formSearched.artist === '' || formSearched.song === '') return;
      
    }
  }, [])

  return (
    <>
      <FormComponent
      setFormSearchedState={setFormSearchedState}
      />
    </>
  );
}

export default App;
