import React, { createContext, useState } from 'react'

export const FavoriteContext = createContext(null)

export function FavoriteProvider({children}) {

    const [Favorite, setFavorite] = useState([])
  return (
    <FavoriteContext.Provider value={[Favorite, setFavorite] }>
        {children}
    </FavoriteContext.Provider>
  )
}
