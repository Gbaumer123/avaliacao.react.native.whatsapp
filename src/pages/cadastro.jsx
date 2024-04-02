import { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

function Cadastro() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');


  const cadastrar = () => {

    if (email.trim() === '' || senha.trim() === '' || confirmarSenha.trim() === '') {
      console.log("Preencha todos os campos!");
      alert("Preencha todos os campos!");
      return;
    }

    if (!email.match(/^[A-Za-z0-9._%+-]+@ifpr\.edu\.br$/)) {
      console.log('O e-mail deve ser do IFPR');
      alert("O e-mail deve ser do IFPR");
      return;
    }
    
    if (senha !== confirmarSenha) {
      console.log("As senhas devem ser iguais!");
      alert("As senhas devem ser iguais!");
      return;
    }
  
    
  
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Confirmar Senha:', confirmarSenha);
  
    alert("Cadastrado com sucesso!");
  
    setEmail('');
    setSenha('');
    setConfirmarSenha('');
  };
  

  return (
    <View style={styles.container}>

      <Image source={require('../../assets/mozi_eu.jpg')} style={styles.image} />
      <Text style={styles.text_acesso}> Cadastre-se </Text>
      <Text style={styles.text_info}>Insira seu e-mail e senha para as informações obrigatórias de cadastro</Text>

      <TextInput style={styles.input} placeholder='E-mail' placeholderTextColor={'#219653'} onChangeText={(text) => setEmail(text)} value={email} />

      <TextInput style={styles.input} placeholder='Senha' placeholderTextColor={'#219653'} secureTextEntry={true} onChangeText={(text) => setSenha(text)} value={senha} />

      <TextInput style={styles.input} placeholder='Confirmar Senha' placeholderTextColor={'#219653'} secureTextEntry={true} onChangeText={(text) => setConfirmarSenha(text)} value={confirmarSenha} />

      <TouchableOpacity style={styles.button_cadastro} onPress={() => {
        cadastrar();
      }}  >
        <Text style={styles.buttonText_cadastro}>Cadastrar-se</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button_voltar} onPress={() => navigation.navigate('Login') } >
        <Text style={styles.buttonText_cadastro}>Voltar</Text>
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
  button_voltar: {
    backgroundColor: 'red',
    width: '80%',
    borderRadius: 16,
    marginTop: 10,
    alignItems: 'center',
    padding: 10
  },

});

export default Cadastro