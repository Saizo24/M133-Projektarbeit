import React from 'react'

import { Button } from "@mui/material"

type Props = {
    text: string
}

const LoginButton = ({ text }: Props) => {
    return (
        <Button variant='contained' type='submit'>{text}</Button>
    )
}

export default LoginButton