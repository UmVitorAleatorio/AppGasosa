import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Component} from 'react-native';

export default function App() {

	const[Alcool, setAlcool] = useState(0);
	const[Gasolina, setGasolina] = useState(0);
	const[resultado, setResultado] = useState(0);
	const[nmResultado, setNmResultado] = useState("");

	
	function gxa(){
		let nmResult;
		let r = parseFloat(Alcool) / parseFloat(Gasolina);
		setResultado(r);
		if(r <= 0.7){
			nmResult = "Abasteça com Álcool"
		}else{
			nmResult = "Abasteça com Gasolina"
		}
		setNmResultado(nmResult)
	}

  return (
    <View style={styles.container}>
		  <View style={styles.titulo}>
			  <Text style={styles.textoTitulo}>Álcool ou Gasolina</Text>
		  </View>
		  
		  <View style={styles.blocoImagem}>
		  		<Image
					resizeMode={'cover'}
				 	style={styles.imagem}
				 	source={require('./assets/GxA.png')}
				/>
		  </View>
		  
		  
		  <View style={styles.bloco}>
				<Text style={styles.label}>Valor Litro Álcool: </Text>
			  	<TextInput
					style={styles.input}
					value={Alcool}
					onChangeText={(valor)=>setAlcool(valor)}
				/>
			  
		  		<Text style={styles.label}>Valor Litro Gasolina: </Text>
			  	<TextInput
					style={styles.input}
					value={Gasolina}
					onChangeText={(valor)=>setGasolina(valor)}
				/>
			  
			  <View style={styles.blocoBotao}>
				<TouchableOpacity style={styles.botao} onPress={gxa}>
					<Text style={styles.textoBotao}>Calcular</Text>
				</TouchableOpacity>
				  
				<TouchableOpacity style={styles.botao}>
					<Text style={styles.textoBotao}>Limpar</Text>
				</TouchableOpacity>
			  </View>
			  
			<View style={styles.label1}>
				<Text style={styles.label1}> Resultado: {resultado.toFixed(2)} </Text>
				<Text style={styles.label1}> {nmResultado}</Text>
			</View>
		  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor: '#1565c0'
  },
	
	titulo: {
		backgroundColor: '#000',
		height: '10%',
		justifyContent: 'center'
	},
	
	textoTitulo: {
		fontSize: 20,
		textAlign: 'center',
		color: '#fff'
	},
				  
	imagem: {
		width: 200,
		height: 200
	},
	
	blocoImagem: {
		alignItems: 'center',
		marginTop: 30
	},
	
	bloco:{
		width: '70%',
		marginLeft: '15%'
		
	},

	input: {
	 	backgroundColor: '#000',
		paddingLeft: '10px',
		borderWidth: 1,
		fontSize: 15,
		borderRadius: '10px',
		color: '#fff'
	},
	
	label: {
		fontSize: 15,
		marginTop: 10,
		color: '#fff'
	},
	
	label1: {
		fontSize: 15,
		marginTop: 10,
		textAlign: 'center',
		color: '#fff'
	},
	
	
	blocoBotao:{
		flexDirection: 'row',
		justifyContent: 'center'
	},
	
	botao:{
		width: '25%',
		marginTop: 20,
		marginLeft: '05%',
		marginRight: '05%',
		alignItems: 'center',
		backgroundColor: '#000',
		borderWidth: 1,
		borderRadius: '10px'
	},
	
	textoBotao: {
		fontSize: 15,
		textAlign: 'center',
		color: '#fff'
	},
});
