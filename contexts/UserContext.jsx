import { createContext, useState } from 'react'
import axios from 'axios';

export const UserContext = createContext(null);

export const UserState = (props) => {
    const [user, setUser] = useState({});
    const [changes, setChanges] = useState(0);
    const userId =  "efefe";
    const [selectedProducts, setSelectedProducts] = useState([]);

    const getUser = async () => {
        if (userId) {
            const res = await axios.get(`/api/user/${userId}`);
            setUser(res.data);
        }
    }
    return (
        <UserContext.Provider value={{ user, getUser, setUser, changes, setChanges, userId, selectedProducts, setSelectedProducts }}>
            {props.children}
        </UserContext.Provider>
    );
}