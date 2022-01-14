import { useState } from 'react';
import { Container, Box, Tabs, Tab } from '@mui/material';

import TabContent from '../../components/TabContent';
import Contact from '../../components/forms/Contact';


const tabs = [
  'Contact',
  'Bio',
  'Experience',
  'Education',
  'Certifications',
  'Skills',
];

export default function Builder() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <Container>
      <h1>Builder</h1>

      <Box sx={{
        my: 4,
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        width: '100%',
      }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={activeTab}
          onChange={(event, value) => setActiveTab(value)}
          sx={{ borderRight: 1, borderColor: 'divider', width: '15%', bgcolor: 'background.paper' }}
        >
          {
            tabs.map((tab, index) => (
              <Tab key={index} label={tab} />
            ))
          }
        </Tabs>

        <TabContent index={0} value={activeTab}>
          <Contact />
        </TabContent>
      </Box>
    </Container >
  )
}

