import React from 'react'
import { Container, CenterCard, ActionButton } from './style'

export const ConfirmDelete =() =>{
    return(
        <Container>
            <CenterCard>
                <input placeholder={' Para confirmar escreva "APAGAR"'} />
                <div>
                    <ActionButton action={'ok'} >Apagar</ActionButton>
                    <ActionButton action={'cancel'}>Cancelar</ActionButton>
                </div>
            </CenterCard>
        </Container>
    )
}