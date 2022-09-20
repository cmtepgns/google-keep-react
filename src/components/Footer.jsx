import React from 'react'

function Footer()
{

    const ano = new Date().getFullYear()

    return (
        <footer> Copyright {ano} </footer>
    )
}

export default Footer 