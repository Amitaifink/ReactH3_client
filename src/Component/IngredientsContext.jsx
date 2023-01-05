import { useState , createContext } from "react";

export const IngredientsContext = createContext();
export default function IngredientsContextProvider(props) {
    const [ingredientsArr, setIngredientsArr] = useState([]);
    return (
        <IngredientsContext.Provider value={{ ingredientsArr, setIngredientsArr }}>
            {props.children}
        </IngredientsContext.Provider>
    )
}