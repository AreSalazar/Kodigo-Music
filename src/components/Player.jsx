import "../App.css";
import albumImage from "../assets/images/Mt-washington.png";

function App() {
  return (
    <div className="player-container">
      {/*Imagen-álbum*/}
      <div className="album-art">
         <img src={albumImage} alt="Portada del álbum" />
      </div>

      {/*Info de la canción */}
      <div className="song-info">
        <h2>Mt Washington</h2>
        <p>Local Natives</p>
      </div>

      {/*Barra-progreso*/}
      <div className="progress-container">
        <span>0:00</span>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <span>3:45</span>
      </div>

      {/*Controles de repro*/}
      <div className="controls">
        {/* Botón Anterior */}
        <button className="control-btn">
          ⏮
        </button>

        {/*Botón play*/}
        <button className="control-btn play-btn">
          ▶️
        </button>

        {/*Botón next*/}
        <button className="control-btn">
          ⏭
        </button>
      </div>
    </div>
  );
}

export default App;

