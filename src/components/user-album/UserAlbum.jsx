import { Typography } from "@mui/material";
import { bull } from "./userAlbumStyle";

const UserAlbum = ({album}) => {
    return (
        <Typography sx={{ p: 1 }} variant="body2">
            {bull} {album.title}
        </Typography>
    );
};

export default UserAlbum;