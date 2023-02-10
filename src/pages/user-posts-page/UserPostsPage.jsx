import React, { useEffect, useState } from 'react';
import { publicRequest } from "../../requestMethod";
import UserPost from "../../components/user-post/UserPost";
import { Typography } from "@mui/material";
import { Container } from "./userPostsPageStyle";
import { useLocation } from "react-router-dom";

const UserPostsPage = () => {
    const [posts, setPosts] = useState([]);
    const path = useLocation().pathname.split('/')[2];

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
    console.log(users)
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await publicRequest.get('/posts');
                setPosts(res.data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchPosts();
    }, []);

    return (
        <Container sx={{ mt: 6 }}>
            {users.map(user => (
                +path === user.id && (
                    <Typography key={user.id} component="h1" variant="h4" gutterBottom>
                        {user.username}`s posts
                    </Typography>
                )
            ))}
            {posts.map((post) => (
                +path === post.userId && (
                    <UserPost key={post.id} post={post} />
                )
            ))}
        </Container>
    );
};

export default UserPostsPage;