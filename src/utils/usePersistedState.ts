// HOOK PARA ARMAZENAR O TEMA ESCOLHIDO NO LOCAL STORAGE DO NAVEGAR
// DISPATCH E SETSTATEACTION SÃO USADOS PARA TIPAROS O HOOK USESTATE
import { useState, useEffect, Dispatch, SetStateAction } from "react";


type Response<T> = [
   T,
   Dispatch<SetStateAction<T>>,
];

function usePersistedState<T>(key: string, initialState: T): Response<T>{
    const [state, setState] = useState(() => {
        /* 
            TODA VEZ QUE O TEMA FOR SALVO COMO UM ESTADO DA APLICAÇÃO, 
            NÓS BUSCAMOS AS INFORMAÇÕES NO LOCALSTORAGE. CASO EXISTAM DADOS JÁ SALVOS, ELE COMEÇA UTILIZANDO ESSAS INFORMAÇÕES.
        */
        const storageValue = localStorage.getItem(key);

        if(storageValue){
            return JSON.parse(storageValue);
        }
        else{
            return initialState;
        }
    });

    // TODA VEZ QUE O TEMA É ALTERADO, O TEMA É ARMAZENADO NO LOCALSTORAGE
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState];
}

export default usePersistedState;