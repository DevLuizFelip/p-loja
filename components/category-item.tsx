import { Pressable, Text, StyleSheet, Image, View } from "react-native";
import { Category } from "../types/category"
import {router} from "expo-router"

type Props ={
    data: Category
}

export const CategoryItem = ({data}: Props)=>{

    const handleClick = ()=>{
        router.push(`/categories/${data.id}`)
    }

    return(
        <Pressable onPress={handleClick} style={styles.container}>
           <Image
           style={styles.image}
           source={{uri:data.cover}}
           resizeMode="cover"
           />
           <View style={styles.bg} ></View>
           <View style={styles.box} >
            <Text style={styles.title} >{data.title}</Text>
           </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 10,
        backgroundColor: '#333333',
        borderRadius: 10
    },
    image:{
        width: '100%',
        height: 150,
        borderRadius: 10
    },
    bg:{
        height:150,
        marginTop: -150,
        backgroundColor: 'black',
        opacity: 0.6,
        borderRadius: 10
    },
    box:{
        height: 150,
        marginTop: -150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 24,
        color: 'white'
    }
});