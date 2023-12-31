import { VStack, Heading, Icon, useTheme, Text } from "native-base";
import Logo from '../assets/logo_primary.svg';
import { Input } from "../components/Input";
import { Envelope, Key } from "phosphor-react-native";
import { Button } from "../components/Button";
import { useState } from "react";

export function SignIn(){
    const {colors} = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handleSignIn(){
        console.log(email, password);
    }

    return (
        <VStack flex={1} alignItems="center" bg="gray.200" px={8} pt={24}>
            <Logo />
            <Heading color="gray.900" fontSize="xl" mt={20} mb={6}>
                Acesse sua conta!!!
            </Heading>

            <Input 
                mb={4} 
                placeholder="Email" 
                InputLeftElement={<Icon as={<Envelope color={colors.gray[100]} />} ml={4} />}
                onChangeText={setEmail}
            />
            <Input 
                mb={8}
                placeholder="Senha"
                InputLeftElement={<Icon as={<Key color={colors.gray[100]} />} ml={4} />}  
                secureTextEntry
                onChangeText={setPassword}
            />

            <Button title="Entrar" w="full" onPress={handleSignIn} />


            <Text color="gray.900" fontSize="xs" position="absolute" top="full" mt={12}>
                Desenvolvido por Luciano Braga - 2023
            </Text>
        </VStack>
    );
}