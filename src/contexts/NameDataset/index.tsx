import React, { PropsWithChildren } from "react";
import { data } from "../../data/data";

const NameDatasetContext = React.createContext<string[][]>([]);

export const NameDatasetProvider: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <NameDatasetContext.Provider value={data}>
            {children}
        </NameDatasetContext.Provider>
    );
}

export const useNameDataset = () => React.useContext(NameDatasetContext)