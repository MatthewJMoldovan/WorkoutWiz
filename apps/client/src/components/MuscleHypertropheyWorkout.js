import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

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
        <Box sx={{ p: 3 }}>
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Week One" {...a11yProps(0)} />
          <Tab label="Week Two" {...a11yProps(1)} />
          <Tab label="Week Three" {...a11yProps(2)} />
          <Tab label="Week Four" {...a11yProps(3)} />
          <Tab label="Week Five" {...a11yProps(4)} />
          <Tab label="Week Six" {...a11yProps(5)} />
          <Tab label="Week Seven" {...a11yProps(6)} />
          <Tab label="Week Eight" {...a11yProps(7)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 1 - Push Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Bench press:</p>
                    <p>3 sets of 8-10 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Incline dumbbell press</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell shoulder press:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Tricep pushdown:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lateral raises:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cable flyes:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 2 - Pull Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Deadlift:</p>
                    <p>3 sets of 8-10 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Pull-ups</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bent-over rows:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Seated cable rows:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Barbell curls:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Hammer curls:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - Legs Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Squats:</p>
                    <p>3 sets of 8-10 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg press</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lunges:</p>
                    <p>3 sets of 10-12 reps per leg - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg extensions:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 4 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Push Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Incline bench press:</p>
                    <p>3 sets of 8-10 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell press:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Military Press:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Skull crushers:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Front raises:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cable flyes:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - Pull Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Barbell rows:</p>
                    <p>3 sets of 8-10 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lat pulldowns:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">T-bar rows:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Straight bar curls:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Concentration curls:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Legs Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Romanian deadlift:</p>
                    <p>3 sets of 8-10 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg press:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>3 sets of 10-12 reps per leg - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg extentions:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Helpful Resources</h5>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="https://examine.com/">Examine.com</a>
                      </li>
                      <li>
                        <a href="https://www.nutrition.gov/topics/exercise-and-fitness">Nutrition.gov</a>
                      </li>
                      <li>
                        <a href="https://www.muscleandstrength.com/exercises">Excercise tutorials</a>
                      </li>
                      <li>
                        <a href="https://cronometer.com/">Nutrition calculator and tracker</a>
                      </li>
                      <li>
                        <a href="https://hubermanlab.com/">Hubermanlab.com</a>
                      </li>
                    </ul>
                    <div className="d-flex ">
                      <p className="fw-bold me-2">Note:</p>
                      <p>
                        Make sure to choose weights that are challenging but allow you to complete the full sets and
                        reps with good form. Rest for 90-120 seconds between sets
                        <br />
                        While exercise plays a large role it is important to properly maintain all aspects of your life
                        including daily activity, hydration, sleep, nutrition, and more.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 1 - Push Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Bench press:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Incline dumbbell press</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell shoulder press:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Tricep pushdown:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lateral raises:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cable flyes:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 2 - Pull Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Deadlift:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Pull-ups</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bent-over rows:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Seated cable rows:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Barbell curls:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Hammer curls:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - Legs Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Squats:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg press</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lunges:</p>
                    <p>3 sets of 12-15 reps per leg - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg extensions:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 4 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Push Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Incline bench press:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell press:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Military Press:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Skull crushers:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Front raises:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cable flyes:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - Pull Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Barbell rows:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lat pulldowns:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">T-bar rows:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Straight bar curls:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Concentration curls:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Legs Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Romanian deadlift:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg press:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>3 sets of 12-15 reps per leg - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg extentions:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Helpful Resources</h5>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="https://examine.com/">Examine.com</a>
                      </li>
                      <li>
                        <a href="https://www.nutrition.gov/topics/exercise-and-fitness">Nutrition.gov</a>
                      </li>
                      <li>
                        <a href="https://www.muscleandstrength.com/exercises">Excercise tutorials</a>
                      </li>
                      <li>
                        <a href="https://cronometer.com/">Nutrition calculator and tracker</a>
                      </li>
                      <li>
                        <a href="https://hubermanlab.com/">Hubermanlab.com</a>
                      </li>
                    </ul>
                    <div className="d-flex ">
                      <p className="fw-bold me-2">Note:</p>
                      <p>
                        Make sure to choose weights that are challenging but allow you to complete the full sets and
                        reps with good form. Rest for 90-120 seconds between sets
                        <br />
                        While exercise plays a large role it is important to properly maintain all aspects of your life
                        including daily activity, hydration, sleep, nutrition, and more.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 1 - Push Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Bench press:</p>
                    <p>4 sets of 6-8 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Incline dumbbell press</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell shoulder press:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Tricep pushdown:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lateral raises:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cable flyes:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 2 - Pull Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Deadlift:</p>
                    <p>4 sets of 6-8 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Pull-ups</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bent-over rows:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Seated cable rows:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Barbell curls:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Hammer curls:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - Legs Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Squats:</p>
                    <p>4 sets of 6-8 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg press</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lunges:</p>
                    <p>4 sets of 8-10 reps per leg - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg extensions:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 4 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Push Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Incline bench press:</p>
                    <p>4 sets of 6-8 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell press:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Military Press:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Skull crushers:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Front raises:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cable flyes:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - Pull Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Barbell rows:</p>
                    <p>4 sets of 6-8 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lat pulldowns:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">T-bar rows:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Straight bar curls:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Concentration curls:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Legs Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Romanian deadlift:</p>
                    <p>4 sets of 6-8 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg press:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>4 sets of 8-10 reps per leg - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg extentions:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Helpful Resources</h5>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="https://examine.com/">Examine.com</a>
                      </li>
                      <li>
                        <a href="https://www.nutrition.gov/topics/exercise-and-fitness">Nutrition.gov</a>
                      </li>
                      <li>
                        <a href="https://www.muscleandstrength.com/exercises">Excercise tutorials</a>
                      </li>
                      <li>
                        <a href="https://cronometer.com/">Nutrition calculator and tracker</a>
                      </li>
                      <li>
                        <a href="https://hubermanlab.com/">Hubermanlab.com</a>
                      </li>
                    </ul>
                    <div className="d-flex ">
                      <p className="fw-bold me-2">Note:</p>
                      <p>
                        Make sure to choose weights that are challenging but allow you to complete the full sets and
                        reps with good form. Rest for 90-120 seconds between sets
                        <br />
                        While exercise plays a large role it is important to properly maintain all aspects of your life
                        including daily activity, hydration, sleep, nutrition, and more.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 1 - Push Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Bench press:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Incline dumbbell press</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell shoulder press:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Tricep pushdown:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lateral raises:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cable flyes:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 2 - Pull Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Deadlift:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Pull-ups</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bent-over rows:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Seated cable rows:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Barbell curls:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Hammer curls:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - Legs Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Squats:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg press</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lunges:</p>
                    <p>4 sets of 10-12 reps per leg - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg extensions:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 4 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Push Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Incline bench press:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell press:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Military Press:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Skull crushers:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Front raises:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cable flyes:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - Pull Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Barbell rows:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lat pulldowns:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">T-bar rows:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Straight bar curls:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Concentration curls:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Legs Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Romanian deadlift:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg press:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>4 sets of 10-12 reps per leg - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg extentions:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Helpful Resources</h5>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="https://examine.com/">Examine.com</a>
                      </li>
                      <li>
                        <a href="https://www.nutrition.gov/topics/exercise-and-fitness">Nutrition.gov</a>
                      </li>
                      <li>
                        <a href="https://www.muscleandstrength.com/exercises">Excercise tutorials</a>
                      </li>
                      <li>
                        <a href="https://cronometer.com/">Nutrition calculator and tracker</a>
                      </li>
                      <li>
                        <a href="https://hubermanlab.com/">Hubermanlab.com</a>
                      </li>
                    </ul>
                    <div className="d-flex ">
                      <p className="fw-bold me-2">Note:</p>
                      <p>
                        Make sure to choose weights that are challenging but allow you to complete the full sets and
                        reps with good form. Rest for 90-120 seconds between sets
                        <br />
                        While exercise plays a large role it is important to properly maintain all aspects of your life
                        including daily activity, hydration, sleep, nutrition, and more.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 1 - Push Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Bench press:</p>
                    <p>3 sets of 8-10 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Incline dumbbell press</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell shoulder press:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Tricep pushdown:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lateral raises:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cable flyes:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 2 - Pull Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Deadlift:</p>
                    <p>3 sets of 8-10 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Pull-ups</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bent-over rows:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Seated cable rows:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Barbell curls:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Hammer curls:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - Legs Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Squats:</p>
                    <p>3 sets of 8-10 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg press</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lunges:</p>
                    <p>3 sets of 10-12 reps per leg - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg extensions:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 4 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Push Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Incline bench press:</p>
                    <p>3 sets of 8-10 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell press:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Military Press:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Skull crushers:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Front raises:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cable flyes:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - Pull Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Barbell rows:</p>
                    <p>3 sets of 8-10 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lat pulldowns:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">T-bar rows:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Straight bar curls:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Concentration curls:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Legs Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Romanian deadlift:</p>
                    <p>3 sets of 8-10 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg press:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>3 sets of 10-12 reps per leg - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg extentions:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Helpful Resources</h5>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="https://examine.com/">Examine.com</a>
                      </li>
                      <li>
                        <a href="https://www.nutrition.gov/topics/exercise-and-fitness">Nutrition.gov</a>
                      </li>
                      <li>
                        <a href="https://www.muscleandstrength.com/exercises">Excercise tutorials</a>
                      </li>
                      <li>
                        <a href="https://cronometer.com/">Nutrition calculator and tracker</a>
                      </li>
                      <li>
                        <a href="https://hubermanlab.com/">Hubermanlab.com</a>
                      </li>
                    </ul>
                    <div className="d-flex ">
                      <p className="fw-bold me-2">Note:</p>
                      <p>
                        Make sure to choose weights that are challenging but allow you to complete the full sets and
                        reps with good form. Rest for 90-120 seconds between sets
                        <br />
                        While exercise plays a large role it is important to properly maintain all aspects of your life
                        including daily activity, hydration, sleep, nutrition, and more.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 1 - Push Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Bench press:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Incline dumbbell press</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell shoulder press:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Tricep pushdown:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lateral raises:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cable flyes:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 2 - Pull Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Deadlift:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Pull-ups</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bent-over rows:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Seated cable rows:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Barbell curls:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Hammer curls:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - Legs Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Squats:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg press</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lunges:</p>
                    <p>3 sets of 12-15 reps per leg - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg extensions:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 4 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Push Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Incline bench press:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell press:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Military Press:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Skull crushers:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Front raises:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cable flyes:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - Pull Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Barbell rows:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lat pulldowns:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">T-bar rows:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Straight bar curls:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Concentration curls:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Legs Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Romanian deadlift:</p>
                    <p>3 sets of 10-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg press:</p>
                    <p>3 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>3 sets of 12-15 reps per leg - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg extentions:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>3 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Helpful Resources</h5>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="https://examine.com/">Examine.com</a>
                      </li>
                      <li>
                        <a href="https://www.nutrition.gov/topics/exercise-and-fitness">Nutrition.gov</a>
                      </li>
                      <li>
                        <a href="https://www.muscleandstrength.com/exercises">Excercise tutorials</a>
                      </li>
                      <li>
                        <a href="https://cronometer.com/">Nutrition calculator and tracker</a>
                      </li>
                      <li>
                        <a href="https://hubermanlab.com/">Hubermanlab.com</a>
                      </li>
                    </ul>
                    <div className="d-flex ">
                      <p className="fw-bold me-2">Note:</p>
                      <p>
                        Make sure to choose weights that are challenging but allow you to complete the full sets and
                        reps with good form. Rest for 90-120 seconds between sets
                        <br />
                        While exercise plays a large role it is important to properly maintain all aspects of your life
                        including daily activity, hydration, sleep, nutrition, and more.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 1 - Push Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Bench press:</p>
                    <p>4 sets of 6-8 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Incline dumbbell press</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell shoulder press:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Tricep pushdown:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lateral raises:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cable flyes:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 2 - Pull Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Deadlift:</p>
                    <p>4 sets of 6-8 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Pull-ups</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bent-over rows:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Seated cable rows:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Barbell curls:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Hammer curls:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - Legs Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Squats:</p>
                    <p>4 sets of 6-8 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg press</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lunges:</p>
                    <p>4 sets of 8-10 reps per leg - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg extensions:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 4 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Push Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Incline bench press:</p>
                    <p>4 sets of 6-8 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell press:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Military Press:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Skull crushers:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Front raises:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cable flyes:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - Pull Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Barbell rows:</p>
                    <p>4 sets of 6-8 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lat pulldowns:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">T-bar rows:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Straight bar curls:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Concentration curls:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Legs Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Romanian deadlift:</p>
                    <p>4 sets of 6-8 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg press:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>4 sets of 8-10 reps per leg - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg extentions:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Helpful Resources</h5>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="https://examine.com/">Examine.com</a>
                      </li>
                      <li>
                        <a href="https://www.nutrition.gov/topics/exercise-and-fitness">Nutrition.gov</a>
                      </li>
                      <li>
                        <a href="https://www.muscleandstrength.com/exercises">Excercise tutorials</a>
                      </li>
                      <li>
                        <a href="https://cronometer.com/">Nutrition calculator and tracker</a>
                      </li>
                      <li>
                        <a href="https://hubermanlab.com/">Hubermanlab.com</a>
                      </li>
                    </ul>
                    <div className="d-flex ">
                      <p className="fw-bold me-2">Note:</p>
                      <p>
                        Make sure to choose weights that are challenging but allow you to complete the full sets and
                        reps with good form. Rest for 90-120 seconds between sets
                        <br />
                        While exercise plays a large role it is important to properly maintain all aspects of your life
                        including daily activity, hydration, sleep, nutrition, and more.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 1 - Push Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Bench press:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Incline dumbbell press</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell shoulder press:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Tricep pushdown:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lateral raises:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cable flyes:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 2 - Pull Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Deadlift:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Pull-ups</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bent-over rows:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Seated cable rows:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Barbell curls:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Hammer curls:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - Legs Day 1</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Squats:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg press</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lunges:</p>
                    <p>4 sets of 10-12 reps per leg - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg extensions:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 4 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Push Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Incline bench press:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell press:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Military Press:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Skull crushers:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Front raises:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cable flyes:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - Pull Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Barbell rows:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lat pulldowns:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">T-bar rows:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Straight bar curls:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Concentration curls:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Legs Day 2</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Romanian deadlift:</p>
                    <p>4 sets of 8-10 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg press:</p>
                    <p>4 sets of 10-12 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>4 sets of 10-12 reps per leg - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg extentions:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>4 sets of 12-15 reps - RPE-7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Helpful Resources</h5>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="https://examine.com/">Examine.com</a>
                      </li>
                      <li>
                        <a href="https://www.nutrition.gov/topics/exercise-and-fitness">Nutrition.gov</a>
                      </li>
                      <li>
                        <a href="https://www.muscleandstrength.com/exercises">Excercise tutorials</a>
                      </li>
                      <li>
                        <a href="https://cronometer.com/">Nutrition calculator and tracker</a>
                      </li>
                      <li>
                        <a href="https://hubermanlab.com/">Hubermanlab.com</a>
                      </li>
                    </ul>
                    <div className="d-flex ">
                      <p className="fw-bold me-2">Note:</p>
                      <p>
                        Make sure to choose weights that are challenging but allow you to complete the full sets and
                        reps with good form. Rest for 90-120 seconds between sets
                        <br />
                        While exercise plays a large role it is important to properly maintain all aspects of your life
                        including daily activity, hydration, sleep, nutrition, and more.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
    </Box>
  );
}
