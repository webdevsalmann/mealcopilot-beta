"use client"
import { createContext, useState, useEffect, useContext } from 'react';
const WaitlistContext = createContext();

export function WaitlistProvider({ children }) {
    const initialUsers = 1617;
    const [totalUser, setTotalUser] = useState(initialUsers);

    const getSubmissionCount = async () => {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_GET_WAITLIST_API);
            const count = await response.text();
            setTotalUser(initialUsers + Number(count));
        } catch (error) {
            console.error('Failed to fetch submission count:', error);
        }
    };

    useEffect(() => {
        getSubmissionCount();
    }, []);

    return (
        <WaitlistContext.Provider value={{ totalUser, getSubmissionCount }}>
            {children}
        </WaitlistContext.Provider>
    );
};

export default function useWaitlist() {
    return useContext(WaitlistContext);
};