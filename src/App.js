import './App.css';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <Card
        title="Sonic X"
        imgLink='./images/sonic.jpg'
        description="Ежик супер-герой из одноименной японской видео-игры Sega"
        superPower='Суперсила: скорость'
      />

      <Card
        title="Super Man"
        imgLink='./images/227px-Superman01.jpg'
        description="Вселенский супер герой из комиксов вселенной DC"
        superPower='Суперсила: Супер мощь'
      />

      <Card
        title="Catwoman"
        imgLink='./images/Catwoman.jpg'
        description="Супер героиня из Готэма"
        superPower='Суперсила: гибкость и хитрость'
      />


    </div>
  );
}

export default App;
