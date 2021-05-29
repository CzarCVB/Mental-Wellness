import React , {useState ,useEffect} from 'react'
import './Meditation.scss'
import MinuteMeditationForAnxiety from '../../asset/meditation.mp3'

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);
  
    return [playing, toggle];
};
  

const Meditation = () => {
    const [playing, toggle] = useAudio(MinuteMeditationForAnxiety);
    return (
            <div className='meditation'>
                <div className='meditate-heading'>
                    <h2>Meditate Now</h2>
                    <p>Get mindful with a free meditation. Try today’s meditation on stress right now.</p>
                </div>
                <div className="sound">
                    <div className="heading">
                        <h1>10-Minute <br />Stress Meditation</h1>
                        <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>       
                    </div>
                </div>
            </div>
    )
}

export default Meditation
