import { useEffect, useState } from 'react'
import './App.css'

function App() {
   const generateNumber = ()=> Math.floor(Math.random()*1000) + 1;

   const [secretNumber, setSecretNumber] = useState(generateNumber);// Yukarıda ki random üretilen sayı
   const [guess, setGuess] = useState(""); // input tan girilen value
   const [message, setMessage] = useState(""); 
   const [attemps, setAttemps] = useState(0);  //deneme sayısı
   const [gameOver, setGameOver] = useState(false); 
   const [startTime, setStartTime] = useState(null);
   const [lastTime, setLastTime] = useState(0);
   const [playerName, setPlayerName] = useState("");
   const [currentPlayer, setCurrentPlayer] = useState("");
   const [players, setPlayers] = useState ([]);
   const [scores, setScores] = useState ([]);

   useEffect(()=>{
    let timer;
    if (startTime && !gameOver) {
      timer = setInterval(() =>{
        setLastTime(Math.floor((Date.now() - startTime) /1000));
      },1000);
    }
    return () => clearInterval(timer);
   },[startTime,gameOver]);

   const handleGuess = () => {
      const num = parseInt(guess);
      if (isNaN(num)){
        setMessage("Lütfen bir sayı gir!");
        return;
      }
      if (!startTime) {
        setStartTime(Date.now());
      }
      setAttemps((prev) => prev + 1 );
   
   if (num === secretNumber){
    setMessage(`Doğru! ${attemps + 1} denemede, ${lastTime} saniyede bildin.`);
    setGameOver(true);
    setScores((prev) =>[
      ...prev,
      {name: currentPlayer, attemps:attemps + 1, time:lastTime}
    ]);
   }
   else if (num < secretNumber){
    setMessage("Daha yüksek bir sayı dene.");
   }
   else {
    setMessage("Daha düşük bir sayı dene.");
   }
   setGuess("");
   };

   const restartGame = () =>{
    setSecretNumber(generateNumber());
    setGuess("");
    setMessage("");
    setAttemps(0);
    setGameOver(false);
    setStartTime(null);
    setLastTime(0);

   };

  return (
    <div className='container'>
      <div>
        <label> Oyuncu: </label>
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder='Oyuncu...'
          />
          <button className='player-btn'
          onClick={()=>{
            if (!playerName) return;
            setCurrentPlayer(playerName); // aktif oyuncu
            if (!players.includes(playerName)) {
              setPlayers([...players, playerName]); // yeni ism ekle
            }
            setPlayerName("");
          }}> Başla</button>
          <select 
           onChange={(e) => setCurrentPlayer(e.target.value)}
           value={currentPlayer}>
            <option value="">Oyuncu Seç</option>
            {players.map((player, index)=>(
              <option value={player} key={index}>{player}</option>
            ))}

          </select>
     </div>
     <h1>Sayı Tahmin Oyunu</h1>
     <div className="score-container">
      <h3>Skorlar</h3>
  <ul>
    {scores.map((s, i) => (
      <li key={i}>
        {s.name}: {s.attemps} deneme, {s.time} sn
      </li>
    ))}
  </ul>
     </div>
     {!gameOver ? (
      <div>
        <p> 1 ile 1000 arasında sayı tuttum. Tahmin et!</p>
        <input style={{marginRight:"10px"}}
         type="number" 
         value={guess}
         onChange={(e)=> setGuess(e.target.value)}
         placeholder='Tahmin gir'
         onKeyDown={(e) => e.key === "Enter" && handleGuess()}
        />
        <button onClick={handleGuess}>Tahmin Et</button>
        <p style={{color:"red"}}>{message}</p>
        <p>Toplam Deneme: {attemps}</p>
        <p>Toplam Süre: {lastTime} sn</p>

      </div>
     ) : (
      <div>
        <p>{message}</p>
        <button onClick={restartGame}>Yeniden Oyna</button>
      </div>
     )
    }
    </div> 
  );
}

export default App
