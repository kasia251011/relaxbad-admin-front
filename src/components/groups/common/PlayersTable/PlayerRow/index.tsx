import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { TableRow, TableCell, Tooltip, Box, IconButton, Typography } from '@mui/material';
import { useState } from 'react';

import { useGetRegisterStatusQuery } from '@/redux/api/registerStatusApi';
import { useGetUserByIdQuery } from '@/redux/api/userApi';
import { Id, RegisterStatus } from '@/redux/types/common';

interface PlayerRowProps {
  index: number;
  playerId: Id;
  playerId2?: Id;
  onRemoveClick: () => void;
}

const PlayerRow = ({ playerId, index, playerId2, onRemoveClick }: PlayerRowProps) => {
  const { data: player } = useGetUserByIdQuery(playerId);
  const { data: player2 } = useGetUserByIdQuery(playerId2 ?? '', { skip: !playerId2 });
  const [actionsVisible, setActionsVisible] = useState(false);
  const { data: registerStatus } = useGetRegisterStatusQuery();

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
        {actionsVisible && registerStatus === RegisterStatus.ADMIN_REGISTER ? (
          <Tooltip title="Usuń z grupy" placement="top">
            <IconButton onClick={onRemoveClick}>
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
