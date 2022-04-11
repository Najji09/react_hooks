import { useState } from 'react';

const section = [
  {
    tab: 'Section 1',
    content: "I'm the content of Section 1",
  },
  {
    tab: 'Section 2',
    content: "I'm the content of Section 2",
  },
  {
    tab: 'Section 3',
    content: "I'm the content of Section 3",
  },
  {
    tab: 'Section 4',
    content: "I'm the content of Section 4",
  },
];

const useTabs = (initalTab, allTab) => {
  const [index, setIndex] = useState(initalTab);
  if (!allTab || !Array.isArray(allTab)) {
    return;
  }
  return {
    currentItem: allTab[index],
    changedItem: setIndex,
  };
};

const UseTabs = () => {
  const { currentItem, changedItem } = useTabs(0, section);
  return (
    <div>
      {section.map((sec, idx) => (
        <button
          onClick={() => {
            changedItem(idx);
          }}
          key={sec.tab}
        >
          {sec.tab}
        </button>
      ))}
      {currentItem.content}
    </div>
  );
};

export default UseTabs;
