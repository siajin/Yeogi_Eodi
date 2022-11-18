import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Main from './components/pages/Main/Main';
import AddRoute from './components/pages/AddRoute/AddRoute';

const App = () => {

  // 샘플데이터
  let routes = [
    {
      name: '집->시립대1',
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
      ]
    },
    {
      name: '집->시립대2',
      eachUnits: [
        {
          type: 'subway',
          num: '5',
          departure: '마천',
          destination: '왕십리',
        },
        {
          type: 'subway',
          num: '경의중앙선',
          departure: '왕십리',
          destination: '회기',
        },
      ]
    },
    {
      name: '집->방산고',
      eachUnits: [
        {
          type: 'bus',
          num: '3315',
          departure: '마천청소년수련관',
          destination: '송파구청.방이맛골',
        },
      ]
    },
  ]

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main routes={routes} />} />
        <Route path='addroute' element={<AddRoute />} />
      </Routes>
    </div>
  );
}

export default App;
