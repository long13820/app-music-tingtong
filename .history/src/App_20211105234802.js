import {useState} from 'react';
import {Pla}
function App() {
  const [song, setSong] = useState([
    {
      title:"Cho Anh Nhe",
      artist:"Hoang Dung ft. Hoang Rob ",
      img_src:"./images/cho-anh-nhe-hoang-dung.jpg",
      mp3_src:"./music/Cho-Anh-Nhe-Hoang-Dung-Hoang-Rob.mp3"
    },
    {
      title:"Em La Chau Bau",
      artist:"TLinh MCK ft.CB ",
      img_src:"./images/em-la-chau-bau-tlinh-mck.jpg",
      mp3_src:"./music/Em-La-Chau-Bau-RPT-MCK-Tlinh.mp3"
    },
    {
      title:"Sau Tat Ca",
      artist:"Erik ",
      img_src:"./images/sau-tat-ca-erik.jpg",
      mp3_src:"./music/Sau-Tat-Ca-ERIK.mp3"
    },
    {
      title:"The Gioi Thu 4",
      artist:"Chi Dan",
      img_src:"./images/the-gioi-thu-4-chi-dan.jpg",
      mp3_src:"./music/The-Gioi-Thu-4-Tu-Yeu-Chinh-Minh-Chi-Dan.mp3"
    }
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <div className="App">
      Gray
    </div>
  );
}

export default App;
