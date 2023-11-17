import { createBrowserRouter } from 'react-router-dom';

import PATH from './urls';

import App from '@/pages/App';
import GamesSchedulePage from '@/pages/App/GamesSchedulePage';
import PlayersPage from '@/pages/App/PlayersPage';
import RankingsPage from '@/pages/App/RankingsPage';

const router = createBrowserRouter([
  {
    path: PATH.APP,
    element: <App />,
    children: [
      {
        path: PATH.GAMES_SCHEDULE,
        element: <GamesSchedulePage />
      },
      {
        path: PATH.PLAYERS,
        element: <PlayersPage />
      },
      {
        path: PATH.RANKINGS,
        element: <RankingsPage />
      }
    ]
  }
]);

export default router;
