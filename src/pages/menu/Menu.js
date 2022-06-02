import { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Box, Tab, Typography, Tabs, Grid, Stack } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import CardContainer from '../card/CardContainer';
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
            <Tab label="About" sx={{ textTransform: 'none', fontWeight: 'bold' }} {...a11yProps(0)} />
            <Tab label="Project" sx={{ textTransform: 'none', fontWeight: 'bold' }}  {...a11yProps(1)} />
            <Tab label="Book" sx={{ textTransform: 'none', fontWeight: 'bold' }} {...a11yProps(2)} />
            <Tab label="Youtube" sx={{ textTransform: 'none', fontWeight: 'bold' }} {...a11yProps(3)} />
          </Tabs>
        </Container>
        <TabPanel value={value} index={0}>
          <div className='btn-custom' style={{textAlign: 'left'}}>
            Andra Aditiya <br/>
            <InstagramIcon  /> ndraaditya
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
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
          Youtube
        </TabPanel>
      </Box>
    </Container>
  );
}
