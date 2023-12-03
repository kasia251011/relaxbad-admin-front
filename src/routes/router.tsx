import { createBrowserRouter } from 'react-router-dom';

import PATH from './urls';

import App from '@/pages/App';
import GamesSchedulePage from '@/pages/App/GamesSchedulePage';
import DoublesPage from '@/pages/App/groups/DoublesPage';
import MenageRegistration from '@/pages/App/groups/MenageRegistration';
import MixesPage from '@/pages/App/groups/MixesPage';
import SinglesPage from '@/pages/App/groups/SinglesPage';
import RankingsPage from '@/pages/App/RankingsPage';
import UsersPage from '@/pages/App/UsersPage';

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
        path: PATH.SINGLES,
        element: <SinglesPage />
      },
      {
        path: PATH.DOUBLES,
        element: <DoublesPage />
      },
      {
        path: PATH.MIXES,
        element: <MixesPage />
      },
      {
        path: PATH.MENAGE_REGISTRATION,
        element: <MenageRegistration />
      },
      {
        path: PATH.RANKINGS,
        element: <RankingsPage />
      },
      {
        path: PATH.USERS,
        element: <UsersPage />
      }
    ]
  }
]);

export default router;
