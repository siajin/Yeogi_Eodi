import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import BottomNav from './components/navs/BottomNav/BottomNav';
import Main from './components/pages/Main/Main';

const App = () => {

  // 샘플데이터

  let routes = [
    {
      name: 'route1',
      eachUnits: [
        {
          type: 'subway',
          num: '5',
          departure: '마천',
          destination: '답십리',
        },
        {
          type: 'bus',
          num: '420',
          departure: '답십리역.동부시장',
          destination: '서울시립대입구',
        },
        {
          type: 'bus',
          num: '420',
          departure: '답십리역.동부시장',
          destination: '서울시립대입구',
        },
      ]
    },
    {
      name: 'route2',
      eachUnits: [
        {
          type: 'bus',
          num: '3315',
          departure: '마천청소년수련관',
          destination: '송파구청.방이맛골',
        },
      ]
    }
  ]

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main routes={routes} />} />
      </Routes>
    </div>
  );
}

export default App;
