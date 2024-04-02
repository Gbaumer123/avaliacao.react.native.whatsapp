import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import { useNavigation} from '@react-navigation/native';

function Login() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
    const loginsValido = [
      {email: 'gbaumer@ifpr.edu.br', senha: '123456'},
      {email: 'stephany@ifpr.edu.br', senha: '123456'}
      ]

      const Autenticacao = () =>{
        const loginValido = loginsValido.find(login => login.email === email && login.senha === senha);
        if (loginValido){
          console.log('Login executado com sucesso')
          navigation.navigate('TelaMensagem')
        }
        else {
          alert('Tente novamente! Usuário inválido.')
        }
      }

  

  return (
    <View style={styles.container}>

      <Image source={require('../../assets/mozi_eu.jpg')} style={styles.image} />
      <Text style={styles.text_acesso}> Acesso ao Chat </Text>
      <Text style={styles.text_info}>Use seu e-mail e senha cadastrados para acessar o painel de conversas</Text>
      <TextInput style={styles.input} placeholder='E-mail' placeholderTextColor={'#219653'} onChangeText={(text) => setEmail(text)} value={email}/>
      <TextInput style={styles.input} placeholder='Senha' placeholderTextColor={'#219653'} secureTextEntry={true} onChangeText={(text) => setSenha(text)} value={senha}/>
      <TouchableOpacity style={styles.button_login} onPress={Autenticacao}>
        <Text style={styles.buttonText_login}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_cadastro} onPress={() => navigation.navigate('Cadastro') }>
        <Text style={styles.buttonText_cadastro}>Cadastro</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#274135',
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    width: 190,
    height: 190,
    borderRadius: 15
  },

  text_acesso: {
    color: 'white',
    width: '80%',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center'
  },

  text_info: {
    color: 'white',
    fontSize: 18,
    width: '80%',
    textAlign: 'center',
    marginTop: 10
  },

  input: {
    backgroundColor: '#c9fdd5',
    width: '80%',
    padding: 10,
    borderRadius: 16,
    marginTop: 15
  },

  button_login: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 16,
    marginTop: 15,
    alignItems: 'center',
    padding: 10,
    marginTop: 30
  },

  buttonText_login: {
    color: '#219653',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button_cadastro: {
    backgroundColor: '#219653',
    width: '80%',
    borderRadius: 16,
    marginTop: 10,
    alignItems: 'center',
    padding: 10,
  },

  buttonText_cadastro: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default Login