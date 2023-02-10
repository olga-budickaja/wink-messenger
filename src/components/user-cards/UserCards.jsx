import { Container } from "./userCardsStyle";
import UserCard from "../user-card/UserCard";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethod";
const UserCards = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await publicRequest.get('/users');
                setUsers(res.data)
            } catch (e) {
                console.log(e)
            }

        }
        fetchUsers();
    }, [])

    return (
        <Container>
            {users.map(user => (
                <UserCard user={user} key={user.id}/>
            ))}
        </Container>
    );
};

export default UserCards;