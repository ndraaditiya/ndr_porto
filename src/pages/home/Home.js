import ParticlesBg from "particles-bg"
import { Avatar, Box, Container, Grid, Typography, Toolbar, Button } from "@mui/material";
import Header from '../header/Header'
import { useState } from "react";
import Menu from "../menu/Menu";

const Home = () => {
  const [displayProject, setDisplayProject] = useState(false)

  return (
    <>
      <ParticlesBg type="circle" num={100} bg={true} />
      <Box mt={2}>
        <Grid container spacing={2} justifyItems="center" alignItems="center">
          <Grid item xs={12} align="center">
            <Container maxWidth="sm">
              <Avatar src="./picture.jpg" sx={{ width: 55, height: 55 }} />
              <Typography variant="h6">Andra Aditiya</Typography>
              <Typography variant="subtitle2">just like to write, either code programming or poem</Typography>
              {/* <Header setDisplayProject={setDisplayProject} /> */}
              {/* <Menu /> */}
              {/* {displayProject === true ?
                <>
                  <Box mx={2}>
                    <Box mt={1}>
                      <button className="btn-custom">
                        Sistem Informasi Manajemen Aset Web App (React JS, Express Js, Material-UI)
                      </button>
                    </Box>
                    <Box mt={2}>
                      <button className="btn-custom">
                      ruangbaca Android App (React Native, Express Js, Expo)
                      </button>
                    </Box>
                  </Box>
                </>
              : ''} */}
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home;