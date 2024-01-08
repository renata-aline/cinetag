import { createContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
  const [favorito, setfavorito] = useState([]);

  return (
    <FavoritosContext.Provider value={{ favorito, setfavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}
