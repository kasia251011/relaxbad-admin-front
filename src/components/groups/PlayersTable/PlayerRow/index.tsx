import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { TableRow, TableCell, Tooltip, Box, IconButton, Typography } from '@mui/material';
import { useState } from 'react';

import { useRemoveRecordByIdMutation } from '@/redux/api/groupApi';
import { useGetUserByIdQuery } from '@/redux/api/userApi';
import { GroupType, Id } from '@/redux/types/common';

interface PlayerRowProps {
  index: number;
  playerId: Id;
  recordId: Id;
  playerId2?: Id;
  groupType: GroupType;
}

const PlayerRow = ({ playerId, index, playerId2, recordId, groupType }: PlayerRowProps) => {
  const { data: player } = useGetUserByIdQuery(playerId);
  const { data: player2 } = useGetUserByIdQuery(playerId2 ?? '');
  const [actionsVisible, setActionsVisible] = useState(false);
  const [remove] = useRemoveRecordByIdMutation();

  const handleRemove = () => {
    remove({ id: recordId, groupType, recordType: groupType === 'SINGLE' ? 'singles' : 'doubles' });
  };

  return (
    <TableRow
      hover
      onMouseOver={() => setActionsVisible(true)}
      onMouseOut={() => {
        setActionsVisible(false);
      }}>
      <TableCell component="th" scope="row">
        {index}
      </TableCell>
      <TableCell component="th" scope="row">
        <Typography>
          {player?.firstName} {player?.lastName}
        </Typography>
        <Typography>
          {player2?.firstName} {player2?.lastName}
        </Typography>
      </TableCell>
      <TableCell align="right">
        {actionsVisible ? (
          <Tooltip title="Usuń z grupy" placement="top">
            <IconButton onClick={handleRemove}>
              <DeleteRoundedIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Box width="35px" height="35px" />
        )}
      </TableCell>
    </TableRow>
  );
};

export default PlayerRow;
