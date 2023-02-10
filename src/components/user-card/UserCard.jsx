import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"

const UserCard = ({user}) => {
    return (
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
                <Button
                    component={RouterLink}
                    to={`user/${user.id}`}
                    size="small"
                >
                    Posts
                </Button>
                <Button size="small">Albums</Button>
            </CardActions>
        </Card>
    );
};

export default UserCard;