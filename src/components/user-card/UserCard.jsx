import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"
import { YellowButton } from "./userCardStyle";
import UserAlbums from "../user-albums/UserAlbums";
import { useState } from "react";

const UserCard = ({user}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {user.name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {user.username}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {user.email}
                    </Typography>
                </CardContent>
                <CardActions>
                    <YellowButton
                        component={RouterLink}
                        to={`user/${user.id}`}
                        size="small"
                    >
                        Posts
                    </YellowButton>
                    <Button
                        onClick={() => setOpen(true)}
                        size="small"
                    >
                        Albums
                    </Button>
                </CardActions>
            </Card>
            <UserAlbums user={user} open={open} setOpen={setOpen}/>
        </>
    );
};

export default UserCard;