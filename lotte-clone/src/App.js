import Header from './components/Header/Header'
import './styles/common.css';
import store from './redux/store'
import {Provider} from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header></Header>
      </Provider>
    </div>
  );
}

export default App;
