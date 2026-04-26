import React, { useState } from "react";
import TabButton from "./TabButton/TabButton";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState("");
  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  return (
    <Section title="Examples" id="examples">
        <Tabs
        ButtonsContainer="menu"
          buttons={
            <>
              <TabButton
                isSelected={selectedTopic === "components" ? true : false}
                onClick={() => handleSelect("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "jsx" ? true : false}
                onClick={() => handleSelect("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "props" ? true : false}
                onClick={() => handleSelect("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "state" ? true : false}
                onClick={() => handleSelect("state")}
              >
                State
              </TabButton>
            </>
          }
        >
          {tabContent}
        </Tabs>
    </Section>
  );
};

export default Examples;
