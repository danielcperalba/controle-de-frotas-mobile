import { Container, Title, Slogan } from "./styles";

import backgroundImg from '../../assets/Splash.png';
import { Button } from "../../components/Button";

export function SignIn() {
    return(
        <Container source={backgroundImg}>
            <Title>
                Drive Sync
            </Title>
            <Slogan>
                Gestão de Frotas
            </Slogan>

            <Button title="Entrar" />

        </Container>
    )
}