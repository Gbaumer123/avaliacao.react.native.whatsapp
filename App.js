import TelaMensagem from './src/pages/telaMensagem';
import Login from './src/pages/login';
import Cadastro from './src/pages/cadastro';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {app} from './services/firebaseConf'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login',headerShown: false } } 
          
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: 'Cadastro',headerShown: false }} 
        />
        <Stack.Screen
          name="TelaMensagem"
          component={TelaMensagem}
          options={({ route }) => ({ title: route.params ? route.params.title : 'Tela de Mensagem' })}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
