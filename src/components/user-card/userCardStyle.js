import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";
import { yellow } from "@mui/material/colors";

export const YellowButton = styled(Button)(({ theme }) => ({
    color: yellow[700],
    '&:hover': {
        backgroundColor: yellow[50]
    },
}));
