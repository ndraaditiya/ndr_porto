import { Avatar, Box, Container, Grid, Typography, Toolbar, Button } from "@mui/material";
import Header from '../header/Header'
import { useState } from "react";
import Menu from "../menu/Menu";

const Home = () => {
  const [displayProject, setDisplayProject] = useState(false)

  return (
    <>
      <Box mt={2}>
        <Grid container spacing={2} justifyItems="center" alignItems="center">
          <Grid item xs={12} align="center">
            <Container maxWidth="sm">
              <img src="./picture.jpg" className="avatar" />
              <p className="title-ndr">Andra Aditiya</p>
              <span className="caption-ndr">just like to write, either code programming or rhymes</span>
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