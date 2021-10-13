import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import Routes from './src/Routes/Routes';
import {Text} from 'react-native';

const App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <Routes />
    </ApplicationProvider>
  </>
);

export default App;
