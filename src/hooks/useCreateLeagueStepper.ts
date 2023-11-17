import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { setCreateLeagueStep } from '@/redux/slices/currentSession';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import PATH from '@/routes/urls';

export type CreateLeagueStage = 'PLAYERS_REGISTRATION' | 'GAMES_SCHEDULE_CREATION';

const useCreateLeagueSteeper = () => {
  const createLeagueStep = useAppSelector((state) => state.currentSession.createLeagueStep);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const currentStage: CreateLeagueStage = useMemo(() => {
    switch (createLeagueStep) {
      case 'SUBMIT_PLAYERS':
      case 'CREATE_GROUPS':
      case 'START_REGISTRATION':
        return 'PLAYERS_REGISTRATION';
      default:
        return 'GAMES_SCHEDULE_CREATION';
    }
  }, [createLeagueStep]);

  const nextStep = useCallback(() => {
    switch (createLeagueStep) {
      case 'CREATE_LEAGUE':
        navigate(PATH.CREATE_GROUPS);
        dispatch(setCreateLeagueStep('CREATE_GROUPS'));
        break;
      case 'CREATE_GROUPS':
        navigate(PATH.START_REGISTRATION);
        dispatch(setCreateLeagueStep('START_REGISTRATION'));
        break;
      case 'START_REGISTRATION':
        navigate(PATH.SUBMIT_PLAYERS);
        dispatch(setCreateLeagueStep('SUBMIT_PLAYERS'));
        break;
      case 'SUBMIT_PLAYERS':
        navigate(PATH.CREATE_LEAGUE);
        dispatch(setCreateLeagueStep('CREATE_LEAGUE'));
        break;
    }
  }, [navigate]);

  return { nextStep, currentStage };
};

export default useCreateLeagueSteeper;
