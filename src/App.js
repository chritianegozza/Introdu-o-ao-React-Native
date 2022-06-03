import React from 'react';
import { View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking,} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 
'https://avatars.githubusercontent.com/u/72118415?v=4';
const urlToMyGithub = 'https://github.com/chritianegozza';


const App = () => {
    const handlePressGoToGithub = async () => {
      console.log('Verificando link');
      const res = await Linking.canOpenURL(urlToMyGithub);
      if (res) {
        console.log('Link aprovado');
        console.log('Abrindo link....');
        await Linking.openURL(urlToMyGithub);
      }
    };

    return (
        <SafeAreaView style={style.container}>
         <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
             <View style={style.content}> 
                 <Image  accessibilityLabel='Christiane na porta com fundo branco' style={style.avatar} source={{uri: imageProfileGithub}} />
             <Text accessibilityLabel="Nome: christiane gozza" style={[style.defaultText, style.name]}>Christiane Gozza</Text>
             <Text accessibilityLabel="Nickname: christiane gozza" style={[style.defaultText, style.nickname]}>chritianegozza</Text>
             <Text accessibilityLabel="Descrição: Formada em Desenvolvimento de Sistema na ETEC | estudante na FATEC no curso Sistemas para internet | apaixonada por tecnologia" 
             style={[style.defaultText, style.description]}>
                Formada em Desenvolvimento de Sistema na ETEC | estudante na FATEC no curso Sistemas para internet | apaixonada por tecnologia 
             </Text>


             <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
    container: {
        // Column
        backgroundColor: colorGithub,
        flex: 1, // Expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row',
      },
      content: {
        alignItems: 'center',
        padding: 20,
      },
      avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
      },
      defaultText: {
        color: colorFontGithub,
      },
      name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
      },
      nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
      },
      description: {
        fontWeight: 'bold',
        fontSize: 14,
      },
      button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
      },
      textButton: {
        fontWeight: 'bold',
        fontSize: 16,
      },
    });