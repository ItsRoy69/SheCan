import React, { useContext, useState, useRef } from 'react'

const SheContext = React.createContext()

export function SheProvider({ children }) {

    const [openauthmodal, setopenauthmodal] = useState(false);
    const [openprofmodal, setopenprofmodal] = useState(false);
    const [isuserreg, setisuserreg] = useState(true);
    const [isuser, setisuser] = useState(false);
    const [isprofreg, setisprofreg] = useState(true);



    const value = {
        openauthmodal,
        setopenauthmodal,
        isuserreg,
        setisuserreg,
        isuser,
        setisuser,
        isprofreg,
        setisprofreg


    }
    return (
        <SheContext.Provider value={value}>
            {children}
        </SheContext.Provider>
    )
}

export function useSheModal() {
    return (useContext(SheContext))
}