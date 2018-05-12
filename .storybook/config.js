import { configure } from '@storybook/react';
function loadStories() {
  // Require your stories here...
  	require('../src/index.css');
    require('../src/components/stories/SearchComponent.story');
}
configure(loadStories, module);