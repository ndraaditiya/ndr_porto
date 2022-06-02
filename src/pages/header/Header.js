import ParticlesBg from "particles-bg"
import { AppBar, Toolbar, Typography, Button, Grid, Box } from "@mui/material"

const Header = ({ setDisplayProject }) => {
  return (
    <>
      <header id="home">
        {/* <ParticlesBg type="cobweb" bg={true} /> */}
        <Grid container justifyContent="center" alignItems="center">
          <Toolbar>
            <Button color="white">
              <Typography variant="subtittle2" sx={{ fontWeight: 'bold', textTransform: 'none' }}>
                Home
              </Typography>
            </Button>
            <Button color="white" onClick={() => setDisplayProject(false)}>
              <Typography variant="subtittle2" sx={{ fontWeight: 'bold', textTransform: 'none' }}>
                About
              </Typography>
            </Button>
            <Button color="white" onClick={() => setDisplayProject(true)}>
              <Typography variant="subtittle2" sx={{ fontWeight: 'bold', textTransform: 'none' }}>
                Project
              </Typography>
            </Button>
            <Button color="white">
              <Typography variant="subtittle2" sx={{ fontWeight: 'bold', textTransform: 'none' }}>
                Book
              </Typography>
            </Button>
            <Button color="white">
              <Typography variant="subtittle2" sx={{ fontWeight: 'bold', textTransform: 'none' }}>
                Youtube
              </Typography>
            </Button>
          </Toolbar>
        </Grid>
      </header>
    </>
  )
}

export default Header
