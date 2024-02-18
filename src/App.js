import './App.css';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='Cards'>
        <Card
          title="Sonic X"
          imgLink="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8960079_b_v8_ab.jpg"
          description="Ежик супер-герой из одноименной японской видео-игры Sega"
          superPower='Суперсила:скорость'
        />

        <Card
          title="Super Man"
          imgLink='https://img2.reactor.cc/pics/post/Brandon-Harrelson-Superman-DC-Comics-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-3439871.jpeg'
          description="Вселенский супер герой из комиксов вселенной DC"
          superPower='Суперсила: Супер мощь'
        />

        <Card
          title="Catwoman"
          imgLink="https://www.comic-couch.de/fileadmin/_processed_/d/e/csm_DC_Celebration_-_Catwoman_b29dd5bbf2.jpg"
          description="Супер героиня из Готэма"
          superPower='Суперсила: гибкость и хитрость'
        />
      </div>

    </div>
  );
}

export default App;
