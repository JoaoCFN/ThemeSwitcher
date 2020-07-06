// CRIAMOS ESTE ARQUIVO PARA INFORMAR AO TYPESCRIPT A DEFINIÇÃO DE TIPOS DOS NOSSOS TEMAS

// DEVEMOS DEFINIR QUE OS TIPOS DO TEMA A SER EXECUTADA QUANDO INICIAR O PROJETO NO ARQUIVO TSCONFIG
import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme{
        title: string;

        colors: {
            primary: string;
            secundary: string;
            
            background: string;
            text: string;
        },
    }
}