import { StyleSheet, Text, View, Image } from "react-native";


export default function Screen(){
    

    return (
        <View style={styles.container}>
            <Image
            source={require('../../assets/danica.jpg')}
            resizeMode="cover"
            style={styles.img}
            />

            <Text style={styles.h2}>Fui eu quem fiz :D </Text>
            <Text style={styles.h2}>Para reclamações segue o contato:</Text>
            <Text style={styles.h2} >Email: luicostasantana@outlook.com</Text>
            <Text style={styles.h2} >Whatsapp: 11 XXXXX-XXXX</Text>
            <Text style={styles.h1} >OBS: EU AMO MINHA NAMORADA</Text>
            <Text style={styles.h3} >❤️</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img:{
        width: 250,
        height:250,
        borderRadius: 45,
        marginBottom: 20,
    
    },
    h1:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20
    },
    h2:{
        fontSize: 16,
        marginBottom: 10
    },
    h3:{
        fontSize: 80,
        marginTop: 10
    }
    
});