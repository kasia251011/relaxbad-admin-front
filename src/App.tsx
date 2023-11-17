import { RouterProvider } from 'react-router-dom';

import router from './routes/router';
import AppThemeProvider from './themes/AppThemeProvider';

const App = () => {
  return (
    <AppThemeProvider>
      <RouterProvider router={router} />
    </AppThemeProvider>
  );
};

export default App;
