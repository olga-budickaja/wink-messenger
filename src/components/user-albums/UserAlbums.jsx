import UserAlbum from "../user-album/UserAlbum";
import { style } from "./userAlbumsStyle";
import { Box, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethod";

const UserAlbums = ({ user, open, setOpen }) => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const res = await publicRequest.get('/albums');
                setAlbums(res.data)
            } catch (e) {
                console.log(e)
            }

        }
        fetchAlbums();
    }, [])

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {user.username}`s albums
                </Typography>
                    {albums.map(album => (
                        +album.userId === user.id && (
                            <UserAlbum album={album} key={album.id} />
                        )
                    ))}
            </Box>
        </Modal>
    );
};

export default UserAlbums;