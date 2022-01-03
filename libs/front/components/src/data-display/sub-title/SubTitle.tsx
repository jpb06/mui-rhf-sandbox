import { Typography } from '@mui/material';

import { getAppColorFor } from '@components/theme';

export const SubTitle: React.FC = ({ children }) => (
  <Typography
    variant="body1"
    sx={{
      color: getAppColorFor('amber'),
      textAlign: 'center',
    }}
  >
    {children}
  </Typography>
);
