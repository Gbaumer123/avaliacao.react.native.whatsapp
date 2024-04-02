import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

function TelaMensagem() {
    const [novaMensagem, setNovaMensagem] = useState('');
    const [mensagens, setMensagens] = useState([
        { remetente: 'Professor Ronan', texto: 'Fala pessoal, tudo certo? Conseguiram fazer a atividade?' },
        { remetente: 'Aluno 1', texto: 'Facim facim. Manda outra que essa tá easy' },
        { remetente: 'Aluno 2 ', texto: 'Mais fácil que dar nó em pingo d`agua' },
        { remetente: 'Aluno 3 ', texto: 'Professor, to com problema. Me ajuda' },
    ]);
    const [filtro, setFiltro] = useState(null);

    const enviarMensagem = () => {
        if (novaMensagem.trim() !== '') {
            setMensagens([...mensagens, { remetente: 'Eu', texto: novaMensagem }]);
            setNovaMensagem('');
        }
    };

    const filtrarMensagens = () => {
        if (filtro === null) return mensagens;

        return mensagens.filter(mensagem => {
            if (filtro === 'Alunos')  {
                return mensagem.remetente.includes('Aluno') || mensagem.remetente === 'Eu'; 
            } else if (filtro === 'Professores') {
                return mensagem.remetente.includes('Professor');
            }
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.opcoes}>
                <TouchableOpacity style={[styles.button, filtro === null && styles.buttonSelecionado]} onPress={() => setFiltro(null)}>
                    <Text style={[styles.buttonText, filtro === null ]}>Todos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, filtro === 'Alunos' && styles.buttonSelecionado]} onPress={() => setFiltro('Alunos')}>
                    <Text style={[styles.buttonText, filtro === 'Alunos' ]}>Alunos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, filtro === 'Professores' && styles.buttonSelecionado]} onPress={() => setFiltro('Professores')}>
                    <Text style={[styles.buttonText, filtro === 'Professores' ]}>Professores</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.conversa} contentContainerStyle={styles.listaMensagens}>
                {filtrarMensagens().map((mensagem, index) => (
                    <View key={index} style={[styles.mensagem, mensagem.remetente === 'Professor Ronan' ? styles.mensagemProfessor : styles.mensagemAluno]}>
                        <Text style={styles.nomeRemetente}>{mensagem.remetente}</Text>
                        <Text style={styles.textoMensagem}>{mensagem.texto}</Text>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.entradaMensagem}>
                <TextInput
                    style={styles.inputMensagem}
                    placeholder="Digite sua mensagem"
                    value={novaMensagem}
                    onChangeText={(texto) => setNovaMensagem(texto)}
                />
                <TouchableOpacity onPress={enviarMensagem}>
                    <Image source={require('../../assets/enviar.png')} style={styles.botaoEnviar} />
                </TouchableOpacity>


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    cabecalho: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 30,
    },
    horaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    hora: {
        color: 'black',
        width: 45,
        height: 15,
    },
    iconesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icone: {
        width: 15,
        height: 15,
        marginLeft: 7,
    },
    opcoes: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 16,
        marginTop: 15,
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 5,
    },
    buttonText: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
    buttonSelecionado: {
        backgroundColor: 'green',
    },
    conversa: {
        flex: 1,
    },
    listaMensagens: {
        paddingVertical: 10,
    },
    mensagem: {
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        maxWidth: '80%',
    },
    mensagemProfessor: {
        alignSelf: 'flex-start',
        backgroundColor: '#f2f2f2',
    },
    mensagemAluno: {
        alignSelf: 'flex-end',
        backgroundColor: '#e6e6e6',
    },
    nomeRemetente: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    textoMensagem: {
        fontSize: 16,
    },
    entradaMensagem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 2,
        borderTopColor: 'green',
        borderRadius: 15,
        padding: 10,
    },
    inputMensagem: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 10,
        marginRight: 10,
        height: 40,
        fontSize: 18
    },
    botaoEnviar: {
        backgroundColor: 'transparent',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: 50,
        height:50
    }
});

export default TelaMensagem;
