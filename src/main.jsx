
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './redux/app/store.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css'; // Ant Design CSS'i dahil eder



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
