import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import store from './store/store'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <ChakraProvider>
      <ColorModeScript initialColorMode='dark' />
      <App />
    </ChakraProvider>
  </Provider>
);
