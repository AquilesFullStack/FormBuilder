import Home from "./pages"
import { Provider } from 'react-redux'
import { store } from './store/store'
import { GlobalCss } from './styles'


function App() {

  return (
    <>
      <Provider store={store}>
        <GlobalCss/>
        <Home />
      </Provider>
    </>
  )
}

export default App
