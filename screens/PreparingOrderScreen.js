import React, { useEffect } from 'react'
import * as Animatable from "react-native-animatable"
import * as Progress from "react-native-progress"
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from "react-native-safe-area-context";

const PreparingOrderScreen = () => {
    const navigation = useNavigation();

    useEffect(()=> {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 5000);
    }, []);

    return (
        <SafeAreaView className="bg-[#11c7b8] flex-1 justify-center items-center">
            <Animatable.Image
                source={require("../assets/Delivery.gif")}
                animation="slideInUp"
                iterationCount={1}
                className="h-100 w-100"
            />

            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
                className="text-lg my-10 text-white font-bold text-center"
            >
                Aguardando o Restaurante aceitar seu pedido!
            </Animatable.Text>

            <Progress.Circle size={60} indeterminate={true} color="white" />
        </SafeAreaView>
    )
}

export default PreparingOrderScreen