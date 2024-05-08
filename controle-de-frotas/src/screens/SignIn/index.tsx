import { Container, Title, Slogan } from "./styles";

import backgroundImg from '../../assets/background.png';

import { Button } from "../../components/Button";

export function SignIn() {
    return (
        <Container source={backgroundImg}>
            <Title>
                Drive Sync
            </Title>
            <Slogan>
                Sistema de Controle de Frotas
            </Slogan>

            <Button title="Entrar com Google" isLoading/>
        </Container>
    )

}