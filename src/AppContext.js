import React, { createContext, useState } from 'react'
export const AppContext = createContext()

function AppContextProvider(props) {

    const [theme, setTheme] = useState("light")
    const [gridLayout, setGridLayout] = useState("All")

    return (
        <AppContext.Provider value={{ gridLayout, setGridLayout, theme, setTheme }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider