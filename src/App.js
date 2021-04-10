import { BrowserRouter, Route } from 'react-router-dom'
import BTChonXeRouting from './Component/BTChonXeRouting';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Route path="/baitapchonxe" exact component={BTChonXeRouting} />
      </div>
    </BrowserRouter>
  );
}

export default App;
