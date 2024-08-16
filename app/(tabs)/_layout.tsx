import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout(){
    return(
        <Tabs screenOptions={{tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
            name="home"
            options={{
                title: 'Início',
                tabBarIcon: ({color}) => <FontAwesome
                name="home"
                size={28}
                color={color}
                />
            }}
            />
            <Tabs.Screen
            name="categories"
            options={{
                headerShown: false,
                title: 'Categorias',
                tabBarIcon: ({color}) => <FontAwesome
                name="archive"
                size={28}
                color={color}
                />
                
            }}
            />
             <Tabs.Screen
            name="about"
            options={{
                title: 'Sobre mim',
                tabBarIcon: ({color}) => <FontAwesome
                name="user"
                size={28}
                color={color}
                />
                
            }}
            />

        </Tabs>
    )
}