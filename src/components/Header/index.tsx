import React, { useContext } from "react";
import Switch from "react-switch";
// AJUDA A COMPARTILHAR INFORMAÇÕES DO TEMA COM ESTE ARQUIVO
import { ThemeContext } from "styled-components";
// LIB PARA LIDAR MELHOR COM CORES
// O SHADE ESCURECE CORES ADICIONANDO ALGUNS TONS DE PRETO
import { shade } from "polished";

import { Container } from "./styles";

interface Props{
    toogleTheme(): void
}

const Header: React.FC<Props> = ({ toogleTheme }) => {
    const { colors, title } = useContext(ThemeContext);
    return (
        <Container>
            Hello World

            <Switch 
                onChange={toogleTheme}
                checked={title === "dark"}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secundary}
            ></Switch>
        </Container>
    );
}

export default Header;