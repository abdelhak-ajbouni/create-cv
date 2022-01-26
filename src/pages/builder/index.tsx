import { useState } from 'react';

import MenuContent from 'src/components/MenuContent';
import Contact from 'src/components/forms/Contact';
import Menu from 'src/components/common/Menu';
import Container from 'src/components/layout/Container';

const items = [
  { id: 1, value: 'Contact', status: "completed", render: <Contact /> },
  { id: 2, value: 'Bio', status: "in-progress", render: <div>Bio</div> },
  { id: 3, value: 'Experience', status: "not-started", render: <div>Experience</div> },
  { id: 4, value: 'Education', status: "not-started", render: <div>Education</div> },
  { id: 5, value: 'Certifications', status: "not-started", render: <div>Certifications</div> },
  { id: 6, value: 'Skills', status: "not-started", render: <div>Skills</div> },
];

export default function Builder() {
  const [activeTab, setActiveTab] = useState<string | number>(1);

  return (
    <div className="builder-page">
      <Container 
        className='bg-white dark:bg-black-400 my-4 px-4 py-1 rounded'
        title='Builder'
        hasShadow
        onGoBack={() => { }}
      >
        <Menu
          className="w-1/6"
          items={items}
          orientation="vertical"
          activeItem={activeTab}
          onClick={({ id }) => setActiveTab(id)}
        />
        <MenuContent
          className="w-3/4"
          items={items}
          activeItem={activeTab}
        />
      </Container >
    </div>
  )
}

