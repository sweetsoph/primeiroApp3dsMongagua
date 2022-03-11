
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { React, useState } from 'react';

export default function App() {
  const[valor1, setValor1] = useState();
  const[valor2, setValor2] = useState();
  const[resultado, setResultado] = useState();

  function soma(){
    setResultado (parseFloat(valor1) + parseFloat(valor2));
  }
  function subtracao(){
    setResultado (parseFloat(valor1) - parseFloat(valor2));
  }
  function multiplicacao(){
    setResultado (parseFloat(valor1) * parseFloat(valor2));
  }
  function divisao(){
    setResultado (parseFloat(valor1) / parseFloat(valor2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>C A L C U L A D O R A</Text>
      
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor 1</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor1}
          onChangeText={(texto)=>setValor1(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor 2</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor2}
          onChangeText={(texto)=>setValor2(texto)}
        />
      </View>
      
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={soma}
          >
            <Text style={styles.textoBotao}>Somar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={subtracao}
          >
            <Text style={styles.textoBotao}>Subtrair</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={multiplicacao}
          >
            <Text style={styles.textoBotao}>Multiplicar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={divisao}
          >
            <Text style={styles.textoBotao}>Dividir</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bloco}>
            <Text style={styles.textoBloco}>Resultado: {resultado}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: 45,
    color: '#DB9344',
    fontFamily: 'fantasy'
  },
  textoBloco:{
    fontSize:30,
    color: '#37259C',
    fontFamily: 'monospace'
  },
  input:{
    borderColor:'#000',
    borderWidth:2,
    fontSize:30,
    width:'80%'
  },
  bloco:{
    width:'100%',
    alignItems:'center',
    marginTop:30
  },
  botao:{
    backgroundColor:'#DB9344',
    width:'80%',
    textAlign:'center'
  },
  textoBotao:{
    color:"#fff",
    fontSize:30
  }
});
