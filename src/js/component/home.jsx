import React, { useState, useEffect } from "react";

//include images into your bundle

//create your first component
const Home = () => {
  const [musicList, setMusicList] = useState([]);
  function agregarCancion() {
    console.log("funciona");
  }
  useEffect(() => {
    //codigo a ejecutar
    console.log("La pagina se ha cargado exitosamente");

    fetch("https://assets.breatheco.de/apis/sound/songs") //1.ir a buscar info en la url
      .then((response) => response.json()) //2.Convierte la respuesta en un json
      .then((data) => setMusicList(data));
	  
	  //3. GUarda el json en un objeto data
  }, []); //cuando el array está vacio el va a cargar el codigo a ejecutar UNA vez cargada la pagina

  console.log(musicList);

  return (
    <div className="container">
      <div id="interface" className="interfaceClass">
        <div id="header" className="headerClass text-light text-center m-auto">
          <h5 className="p-2">BreatheCode Orange Marios Bros Player</h5>
        </div>
        <div id="listGroup" className="listClass m-4">
          <ol className="pb-3 pt-3">
            {musicList.map((item) => (
              <li className="bg-success m-1" key={item.url}>
                {item.name}
                <button onClick={agregarCancion}>🎵</button>
              </li>
            ))}
          </ol>
		  
          <div>
            <audio controls>
              <source
                src="https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3"
                type="audio/ogg"
              />
              Your browser does not support the audio tag.
            </audio>
          </div>
          
          <div id="controlBar" className="d-flex justify-content-center">
		  <button className="roundButton m-1"><i class="fa fa-backward"></i></button>
                <button className="roundButton m-1"><i class="fa fa-play"></i></button>
                <button className="roundButton m-1"><i class="fa fa-forward"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
