import { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Box, Tab, Typography, Tabs, Grid, Stack, Tooltip } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CardContainer from '../card/CardContainer';
import EmailIcon from '@mui/icons-material/Email';
import Slider from "react-slick";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ width: '100%' }}>
          <Container maxWidth="sm">
            <Tabs
              value={value}
              onChange={handleChange}
              textColor='#ffffff'
              indicatorColor='primary'
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              // sx={{pl: 25}}
            >
              <Tab label="Home" sx={{ textTransform: 'none', fontWeight: 'bold' }} {...a11yProps(0)} />
              <Tab label="About" sx={{ textTransform: 'none', fontWeight: 'bold' }} {...a11yProps(1)} />
              <Tab label="Project" sx={{ textTransform: 'none', fontWeight: 'bold' }}  {...a11yProps(2)} />
              <Tab label="Book" sx={{ textTransform: 'none', fontWeight: 'bold' }} {...a11yProps(3)} />
              <Tab label="YouTube" sx={{ textTransform: 'none', fontWeight: 'bold' }} {...a11yProps(4)} />
            </Tabs>
          </Container>
          <TabPanel value={value} index={0}>
            <Box mt={1}>
              <div className='btn-custom'>
                {/* <p className="title-ndr">Andra Aditiya</p> */}
                <p style={{ fontSize: 16.5, marginTop: 0 }}>
                  Hi, I am a Full Stack JavaScript Developer. In development an app, I usually use React, 
                  React Native, NodeJs, Express, Sequelize and Material-UI.
                </p>
                <p style={{fontSize: 14  }}>
                  From 2017 - Present, I work at PT. Medika Antapani as a web  developer, a company who engaged in the health sector.
                </p>
                <p style={{ fontSize: 13, fontWeight: 'bold', marginBottom: 5 }}>Contact details</p>
                <Stack direction="row" alignItems="center">
                  <InstagramIcon className="icon-home" />
                  <Tooltip title="Go to Instagram" arrow placement="top">
                    <span style={{ paddingLeft: 5, fontSize: 13 }}>ndraaditya</span>
                  </Tooltip>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <GitHubIcon />
                  <Tooltip title="Go to GitHub" arrow>
                    <span style={{ paddingLeft: 5, fontSize: 13  }}>ndraaditya</span>
                  </Tooltip>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <EmailIcon />
                  <Tooltip title="Go to Gmail" arrow>
                    <span style={{ paddingLeft: 5, fontSize: 13  }}>ndraaditya@gmail.com</span>
                  </Tooltip>
                </Stack>
              </div>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box mt={1}>
              <div className="btn-custom">
                <Typography variant="h6">
                  I live in Bandung, Indonesia. 
                </Typography>
                <p style={{ fontSize: 16 }}>
                  Present, I am on 8th semester in a college for informatics engineering bachelor
                </p>
                <p>
                  In hobbies, i like to read a book, write a poetry or rhymes or even a novel.
                  I also like excersing, such as running, cycling, swimming and many more
                </p>
                <p>
                  I have a segment on my partner YouTube caelld sudutRenungan,
                  it's a rhyme musical video where i am being a writer and a voice over
                </p>
              </div>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Box p={2}>
              <Slider {...settings} autoplay autoplaySpeed={2600}>
                <div>
                  <CardContainer />
                </div>
                <div>
                  <CardContainer />
                </div>

              </Slider>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={3}>
            Book
          </TabPanel>
          <TabPanel value={value} index={4}>
            Youtube
          </TabPanel>
        </Box>
      </Container>
    </>
  );
}
