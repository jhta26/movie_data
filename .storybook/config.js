import { configure } from '@storybook/react';
function loadStories() {
  // Require your stories here...
  	require('../src/index.css');
    require('../src/components/stories/SearchComponent.story');
    require('../src/components/stories/SignUpInputComponent.story');
    require('../src/components/stories/HeaderComponent.story')
    require('../src/components/stories/PopularMoviesComponent.story')
    require('../src/components/stories/MainHomePage.story')
}
configure(loadStories, module);