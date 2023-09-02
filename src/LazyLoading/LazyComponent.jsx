import React from 'react'
const LazyComponent = () => {
    for (let i = 0; i < 999999999; i++) {}
    return (
        <h1>LazyComponent Caricato</h1>
    )
}
export default LazyComponent

