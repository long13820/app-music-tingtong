import {useState} from 'react';

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
      mp3_src:"./music/EmLaChauBau-RPTMCKTlinh.mp3"
    },
    {
      title:"Sau Tat-Ca-ERIK",
      artist:"Hoang Dung ft. Hoang Rob ",
      img_src:"./images/",
      mp3_src:""
    },
    {
      title:"Cho Anh Nhe",
      artist:"Hoang Dung ft. Hoang Rob ",
      img_src:"./images/",
      mp3_src:""
    }
  ]);


  return (
    <div className="App">
      Gray
    </div>
  );
}

export default App;
