import React from 'react'

import { Button } from "@mui/material"

type Props = {
    text: string
    disabled?: boolean
}

const LoginButton = ({ text, disabled }: Props) => {
    return (
        <Button variant='contained' type='submit' disabled={disabled}>{text}</Button>
    )
}

export default LoginButton