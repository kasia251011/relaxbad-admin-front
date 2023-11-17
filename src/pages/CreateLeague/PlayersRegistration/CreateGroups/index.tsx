import { Stack, Typography, Button, Box, CircularProgress } from '@mui/material';

import CreateGroupInput from './CreateGroupInput';

import PLAYING_BADMINTON_IMG from '@/assets/playing-badminton.svg';
import useCreateLeagueSteeper from '@/hooks/useCreateLeagueStepper';
import { useGetAllGroupsQuery } from '@/redux/api/groupApi';
import { getGroupName } from '@/utility/getGroupName';

//TODO: Scroll List
//TODO: Catch server error with toastify
//TODO: Catch form error and add requirements

const CreateGroups = () => {
  const { data: groups, isLoading } = useGetAllGroupsQuery();
  console.log(groups);
  const { nextStep } = useCreateLeagueSteeper();
  return (
    <Stack direction="row" justifyContent="space-between" bgcolor={'red'} height="100%">
      <Stack justifyContent="space-between" bgcolor={'blue'}>
        <Stack bgcolor={'green'}>
          <Typography variant="h2" mb={2}>
            Stwórz grupy
          </Typography>
          <Typography variant="subtitle1" mb={4}>
            Utwórz grupy które będą dostępne dla zawodników przy zapisach.
          </Typography>
          {isLoading && <CircularProgress />}
          {groups && (
            <>
              {groups?.map((group, index) => (
                <Typography key={index} pl={5}>
                  {index + 1}. {getGroupName(group.type, group.gender, group.category)}
                </Typography>
              ))}

              {/* <Box mb={3} /> */}
              {/* <CreateGroupInput /> */}
            </>
          )}
        </Stack>
        <Button variant="contained" onClick={nextStep}>
          Zatwierdź i rozpocznij zapisy
        </Button>
      </Stack>
      <img src={PLAYING_BADMINTON_IMG} className="playing-badminton" alt="bad" />
    </Stack>
  );
};

export default CreateGroups;
