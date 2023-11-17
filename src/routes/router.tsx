import { createBrowserRouter } from 'react-router-dom';

import PATH from './urls';

import CreateLeaguePage from '@/pages/CreateLeague';
import Step from '@/pages/CreateLeague/PlayersRegistration';
import CreateGroups from '@/pages/CreateLeague/PlayersRegistration/CreateGroups';
import StartRegistration from '@/pages/CreateLeague/PlayersRegistration/StartRegistration';
import SubmitPlayers from '@/pages/CreateLeague/PlayersRegistration/SubmitPlayers';
import Start from '@/pages/CreateLeague/Start';

const router = createBrowserRouter([
  {
    path: PATH.CREATE_LEAGUE,
    element: <CreateLeaguePage />,
    children: [
      {
        path: PATH.START,
        element: <Start />
      },
      {
        path: PATH.STEP,
        element: <Step />,
        children: [
          {
            path: PATH.CREATE_GROUPS,
            element: <CreateGroups />
          },
          {
            path: PATH.START_REGISTRATION,
            element: <StartRegistration />
          },
          {
            path: PATH.SUBMIT_PLAYERS,
            element: <SubmitPlayers />
          }
        ]
      }
    ]
  }
]);

export default router;
