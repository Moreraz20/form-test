import React, {useState} from "react";
import archivoJson from '../api.json'
import '../App.css';

const Buscador = () =>{

    var countries = archivoJson;
    const [selectCountry,setCountry] = useState("");

    return (
        
        <div>
            <div className="colsutarDiv">
                <select 
                name='Paises' 
                className='form'
                onChange={(e) => setCountry(e.target.value)}>
                    <option>Seleccione un País</option>

                    {countries.map((country) => (


                        <option  key={country.cca3} value={country.flags.png}>
                            
                            {country.translations.spa.common}
                            
                        </option>

                    ))}  
                </select>
            </div>    
            
            <div className="imgDiv">
                <img src={selectCountry}></img>
            </div>

        </div>

        
    );
}

export default Buscador;
