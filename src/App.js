import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import JobSearchPage from './JobSearchPage';

function App() {
  return (
    <Provider store={store} >
      <JobSearchPage/>
    </Provider>
  );
}

export default App;