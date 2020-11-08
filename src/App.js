import { Col } from 'antd';
import Lading from  './views/public/lading/Lading';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Col lg={{span:24, offset:0}}>
          <Lading/>
        </Col>

    
      </header>
    </div>
  );
}

export default App;
