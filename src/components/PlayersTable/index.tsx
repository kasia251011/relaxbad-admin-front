import { Typography } from '@mui/material';

import { useGetGroupByIdQuery } from '@/redux/api/groupApi';
import { Id } from '@/redux/types/common';
import { getGroupName } from '@/utility/getGroupName';

interface PlayersTableProps {
  groupId: Id;
}

const PlayersTable = ({ groupId }: PlayersTableProps) => {
  const { data: group } = useGetGroupByIdQuery(groupId);

  if (!group) {
    return <></>;
  }

  return <Typography>{getGroupName(group?.type, group?.gender, group?.category)}</Typography>;
};

export default PlayersTable;
