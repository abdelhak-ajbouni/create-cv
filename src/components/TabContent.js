import { Box } from '@mui/material';

export default function TabContent({ children, value, index, ...other }) {

  return (
    <Box
      hidden={value !== index}
      id={`tab-content-${index}`}
      aria-labelledby={`tab-${index}`}
      sx={{ width: '100%', padding: 4 }}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </Box>
  );
}