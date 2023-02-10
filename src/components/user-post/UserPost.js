import { Card, CardContent, Typography } from "@mui/material";

const UserPost = ({post}) => {
    return (
        <Card sx={{ width: '100%' }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {post.title}
                </Typography>
                <Typography variant="body2">
                    {post.body}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default UserPost;