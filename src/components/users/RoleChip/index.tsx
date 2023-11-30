import { Tooltip } from '@mui/material';
import { useMemo } from 'react';

import ADMIN from '@/assets/admin.png';
import PLAYER from '@/assets/player.png';
import JUDGE from '@/assets/referee.png';
import { Role } from '@/redux/types/common';

const RoleChip = ({ role }: { role: Role }) => {
  const roleProps = useMemo(() => {
    switch (role) {
      case 'ADMIN':
        return { label: 'Admin', icon: ADMIN };
      case 'JUDGE':
        return { label: 'Sędzia', icon: JUDGE };
      case 'PLAYER':
        return { label: 'Zawodnik', icon: PLAYER };
    }
  }, [role]);

  return (
    <Tooltip title={roleProps.label}>
      <img src={roleProps.icon} width="30px" style={{ marginLeft: '5px' }} />
    </Tooltip>
  );
};

export default RoleChip;
