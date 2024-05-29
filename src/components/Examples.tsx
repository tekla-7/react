import {useState} from 'react'
import {EXAMPLES} from '../data.js'
import Section from './Section.js';
import TabButton from "./TabButton.js";
import Tabs from './Tabs.js';
export default function Example(){
    const [selectedTopic, setSelectedTopic] = useState();
    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
    }
    return (
        <Section title='Examples'id="examples" >
          <Tabs></Tabs>
        <menu>
          <TabButton onClick={() => handleSelect("Components")} isSelected={selectedTopic==='components'}>
            Components
          </TabButton>
          <TabButton onClick={() => handleSelect("JSX")} isSelected={selectedTopic==='JSX'}>JSX</TabButton>
          <TabButton onClick={() => handleSelect("Props")} isSelected={selectedTopic==='Props'}>Props</TabButton>
          <TabButton onClick={() => handleSelect("State")} isSelected={selectedTopic==='State'}>State</TabButton>
        </menu>
        {!selectedTopic && <p>Please select a topic</p>}
        {selectedTopic && (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Section>
    )
}