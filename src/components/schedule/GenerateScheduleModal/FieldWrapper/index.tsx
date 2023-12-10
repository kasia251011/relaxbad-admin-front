import { Stack, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

interface FieldWrapperProps extends PropsWithChildren {
  label: string;
  description: string;
}

const FieldWrapper = ({ children, description, label }: FieldWrapperProps) => {
  return (
    <Stack>
      <Typography variant="h3" mb={1}>
        {label}
      </Typography>
      <Typography variant="subtitle2" mb={3}>
        {description}
      </Typography>
      {children}
    </Stack>
  );
};

export default FieldWrapper;
