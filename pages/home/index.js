import React, {memo} from "react";
import {useTheme} from "@mui/material/styles";
import {Box} from "@mui/material";

const Home = memo(function Home(props) {
    const theme = useTheme();

    return (
        <section id="home" className="hero-section">
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    borderRadius: 1,
                    p: 3,
                }}
            >
                ANASAYFA
            </Box>
        </section>
    )

});

export default Home;