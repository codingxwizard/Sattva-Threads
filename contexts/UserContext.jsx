import { createContext, useState } from 'react'
import axios from 'axios';
import { useSession, signIn, signOut } from "next-auth/react"
import { data } from 'autoprefixer';

export const UserContext = createContext(null);

export const UserState = (props) => {
    const [user, setUser] = useState({});
    const [changes, setChanges] = useState(0);
    let userId;
    if (typeof window !== 'undefined') {
        const { localStorage } = window;
        userId = localStorage.getItem('userId');
      }
    const [selectedProducts, setSelectedProducts] = useState([]);

    const getUser = async () => {
        if (userId) {
            try {
                const res = await axios.get(`/api/user/${userId}`);
                setUser(res.data);
            } catch (error) {
                console.error(error);
            }

        }
    }

    // const { data } = useSession();

    return (
        <UserContext.Provider value={{ user, getUser, setUser, changes, setChanges, userId, selectedProducts, setSelectedProducts }}>
            {props.children}
        </UserContext.Provider>
    );
}