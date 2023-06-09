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
                    <h5 className="fw-bold">Day 1 - HIIT </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT workout:</p>
                    <p>
                      30 seconds of high-intensity exercise (such as sprinting, <br />
                      jumping jacks, or burpees), followed by 30 seconds of <br />
                      rest or low-intensity exercise (such as walking or jogging)
                      <br />
                      for 20 minutes
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold" style={{ padding: '10px' }}>
                      Day 2 - Upper Body Endurance
                    </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Push-ups:</p>
                    <p>3 sets of 15-20 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell rows</p>
                    <p>3 sets of 16-18 reps (Alternating arms) - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell shoulder press:</p>
                    <p>3 sets of 16-18 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bicep Curls:</p>
                    <p>3 sets of 15-20 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Tricep extensions:</p>
                    <p>3 sets of 15-20 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - Active Recovery - 30-60 min</h5>
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
                    <h5 className="fw-bold">Day 4 - Lower Body Endurance</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Squats:</p>
                    <p>3 sets of 15-20 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lunges:</p>
                    <p>3 sets of 16-18 reps (Alternating legs) - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dedlifts:</p>
                    <p>3 sets of 16-18 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>3 sets of 20 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>3 sets of 16-18 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Steady-State Cardio with Weights </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Cardio workout:</p>
                    <p>
                      Choose a low-impact cardio exercise such as cycling, <br />
                      swimming, or rowing, and maintain a steady pace for <br />
                      30-45 minutes. Incorporate weights into the workout by <br />
                      holding dumbbells or wearing a weight vest.
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - Full Body Endurance </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Circuit workout:</p>
                    <p>
                      Perform each exercise for 30-60 seconds, resting for <br />
                      30 seconds between exercises. Repeat the circuit <br />
                      3-4 times.
                    </p>
                  </div>
                  <div className="ms-5">
                    <ul>
                      <li>Burpees</li>
                      <li>Jumping jacks</li>
                      <li>Mountain climbers</li>
                      <li>Plank</li>
                      <li>Russian twists</li>
                    </ul>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Active Recovery - 30-60 min</h5>
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
                        Rest for 45 seconds to 75 seconds between exercises and choose weights that are challenging but
                        allow you to complete the full sets and reps with good form. It's also important to gradually
                        increase the intensity and duration of your workouts over time.
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
                    <h5 className="fw-bold">Day 1 - HIIT </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT workout:</p>
                    <p>
                      30 seconds of high-intensity exercise (such as sprinting, <br />
                      jumping jacks, or burpees), followed by 30 seconds of <br />
                      rest or low-intensity exercise (such as walking or jogging)
                      <br />
                      for 20 minutes
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 2 - Upper Body Endurance</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Push-ups:</p>
                    <p>3 sets of 18-22 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell rows</p>
                    <p>3 sets of 18-20 reps (Alternating arms) - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell shoulder press:</p>
                    <p>3 sets of 18-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bicep Curls:</p>
                    <p>3 sets of 18-22 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Tricep extensions:</p>
                    <p>3 sets of 18-22 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - Active Recovery - 30-60 min</h5>
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
                    <h5 className="fw-bold">Day 4 - Lower Body Endurance</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Squats:</p>
                    <p>3 sets of 18-22 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lunges:</p>
                    <p>3 sets of 18-20 reps (Alternating legs) - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dedlifts:</p>
                    <p>3 sets of 18-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>3 sets of 22 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>3 sets of 18-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Steady-State Cardio with Weights </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Cardio workout:</p>
                    <p>
                      Choose a low-impact cardio exercise such as cycling, <br />
                      swimming, or rowing, and maintain a steady pace for <br />
                      30-45 minutes. Incorporate weights into the workout by <br />
                      holding dumbbells or wearing a weight vest.
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - Full Body Endurance </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Circuit workout:</p>
                    <p>
                      Perform each exercise for 30-60 seconds, resting for <br />
                      30 seconds between exercises. Repeat the circuit <br />
                      3-4 times.
                    </p>
                  </div>
                  <div className="ms-5">
                    <ul>
                      <li>Burpees</li>
                      <li>Jumping jacks</li>
                      <li>Mountain climbers</li>
                      <li>Plank</li>
                      <li>Russian twists</li>
                    </ul>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Active Recovery - 30-60 min</h5>
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
                        Rest for 45 seconds to 75 seconds between exercises and choose weights that are challenging but
                        allow you to complete the full sets and reps with good form. It's also important to gradually
                        increase the intensity and duration of your workouts over time.
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
                    <h5 className="fw-bold">Day 1 - HIIT </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT workout:</p>
                    <p>
                      30 seconds of high-intensity exercise (such as sprinting, <br />
                      jumping jacks, or burpees), followed by 30 seconds of <br />
                      rest or low-intensity exercise (such as walking or jogging)
                      <br />
                      for 20 minutes
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 2 - Upper Body Endurance</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Push-ups:</p>
                    <p>4 sets of 13-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell rows</p>
                    <p>4 sets of 12-15 reps (Alternating arms) - RPE-8 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell shoulder press:</p>
                    <p>4 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bicep Curls:</p>
                    <p>4 sets of 15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Tricep extensions:</p>
                    <p>4 sets of 15 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - Active Recovery - 30-60 min</h5>
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
                    <h5 className="fw-bold">Day 4 - Lower Body Endurance</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Squats:</p>
                    <p>4 sets of 13-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lunges:</p>
                    <p>4 sets of 12-15 reps (Alternating legs) - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dedlifts:</p>
                    <p>4 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>4 sets of 18 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>4 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Steady-State Cardio with Weights </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Cardio workout:</p>
                    <p>
                      Choose a low-impact cardio exercise such as cycling, <br />
                      swimming, or rowing, and maintain a steady pace for <br />
                      30-45 minutes. Incorporate weights into the workout by <br />
                      holding dumbbells or wearing a weight vest.
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - Full Body Endurance </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Circuit workout:</p>
                    <p>
                      Perform each exercise for 30-60 seconds, resting for <br />
                      30 seconds between exercises. Repeat the circuit <br />
                      3-4 times.
                    </p>
                  </div>
                  <div className="ms-5">
                    <ul>
                      <li>Burpees</li>
                      <li>Jumping jacks</li>
                      <li>Mountain climbers</li>
                      <li>Plank</li>
                      <li>Russian twists</li>
                    </ul>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Active Recovery - 30-60 min</h5>
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
                        Rest for 45 seconds to 75 seconds between exercises and choose weights that are challenging but
                        allow you to complete the full sets and reps with good form. It's also important to gradually
                        increase the intensity and duration of your workouts over time.
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
                    <h5 className="fw-bold">Day 1 - HIIT </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT workout:</p>
                    <p>
                      30 seconds of high-intensity exercise (such as sprinting, <br />
                      jumping jacks, or burpees), followed by 30 seconds of <br />
                      rest or low-intensity exercise (such as walking or jogging)
                      <br />
                      for 20 minutes
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 2 - Upper Body Endurance</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Push-ups:</p>
                    <p>4 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell rows</p>
                    <p>4 sets of 16-18 reps (Alternating arms) - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell shoulder press:</p>
                    <p>4 sets of 16-18 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bicep Curls:</p>
                    <p>4 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Tricep extensions:</p>
                    <p>4 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - Active Recovery - 30-60 min</h5>
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
                    <h5 className="fw-bold">Day 4 - Lower Body Endurance</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Squats:</p>
                    <p>4 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lunges:</p>
                    <p>4 sets of 16-18 reps (Alternating legs) - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dedlifts:</p>
                    <p>4 sets of 16-18 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>4 sets of 20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>4 sets of 16-18 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Steady-State Cardio with Weights </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Cardio workout:</p>
                    <p>
                      Choose a low-impact cardio exercise such as cycling, <br />
                      swimming, or rowing, and maintain a steady pace for <br />
                      30-45 minutes. Incorporate weights into the workout by <br />
                      holding dumbbells or wearing a weight vest.
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - Full Body Endurance </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Circuit workout:</p>
                    <p>
                      Perform each exercise for 30-60 seconds, resting for <br />
                      30 seconds between exercises. Repeat the circuit <br />
                      3-4 times.
                    </p>
                  </div>
                  <div className="ms-5">
                    <ul>
                      <li>Burpees</li>
                      <li>Jumping jacks</li>
                      <li>Mountain climbers</li>
                      <li>Plank</li>
                      <li>Russian twists</li>
                    </ul>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Active Recovery - 30-60 min</h5>
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
                        Rest for 45 seconds to 75 seconds between exercises and choose weights that are challenging but
                        allow you to complete the full sets and reps with good form. It's also important to gradually
                        increase the intensity and duration of your workouts over time.
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
                    <h5 className="fw-bold">Day 1 - HIIT </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT workout:</p>
                    <p>
                      30 seconds of high-intensity exercise (such as sprinting, <br />
                      jumping jacks, or burpees), followed by 30 seconds of <br />
                      rest or low-intensity exercise (such as walking or jogging)
                      <br />
                      for 20 minutes
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 2 - Upper Body Endurance</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Push-ups:</p>
                    <p>3 sets of 15-20 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell rows</p>
                    <p>3 sets of 16-18 reps (Alternating arms) - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell shoulder press:</p>
                    <p>3 sets of 16-18 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bicep Curls:</p>
                    <p>3 sets of 15-20 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Tricep extensions:</p>
                    <p>3 sets of 15-20 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - Active Recovery - 30-60 min</h5>
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
                    <h5 className="fw-bold">Day 4 - Lower Body Endurance</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Squats:</p>
                    <p>3 sets of 15-20 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lunges:</p>
                    <p>3 sets of 16-18 reps (Alternating legs) - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dedlifts:</p>
                    <p>3 sets of 16-18 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>3 sets of 20 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>3 sets of 16-18 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Steady-State Cardio with Weights </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Cardio workout:</p>
                    <p>
                      Choose a low-impact cardio exercise such as cycling, <br />
                      swimming, or rowing, and maintain a steady pace for <br />
                      30-45 minutes. Incorporate weights into the workout by <br />
                      holding dumbbells or wearing a weight vest.
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - Full Body Endurance </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Circuit workout:</p>
                    <p>
                      Perform each exercise for 30-60 seconds, resting for <br />
                      30 seconds between exercises. Repeat the circuit <br />
                      3-4 times.
                    </p>
                  </div>
                  <div className="ms-5">
                    <ul>
                      <li>Burpees</li>
                      <li>Jumping jacks</li>
                      <li>Mountain climbers</li>
                      <li>Plank</li>
                      <li>Russian twists</li>
                    </ul>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Active Recovery - 30-60 min</h5>
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
                        Rest for 45 seconds to 75 seconds between exercises and choose weights that are challenging but
                        allow you to complete the full sets and reps with good form. It's also important to gradually
                        increase the intensity and duration of your workouts over time.
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
                    <h5 className="fw-bold">Day 1 - HIIT </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT workout:</p>
                    <p>
                      30 seconds of high-intensity exercise (such as sprinting, <br />
                      jumping jacks, or burpees), followed by 30 seconds of <br />
                      rest or low-intensity exercise (such as walking or jogging)
                      <br />
                      for 20 minutes
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 2 - Upper Body Endurance</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Push-ups:</p>
                    <p>3 sets of 18-22 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell rows</p>
                    <p>3 sets of 18-20 reps (Alternating arms) - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell shoulder press:</p>
                    <p>3 sets of 18-12 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bicep Curls:</p>
                    <p>3 sets of 18-22 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Tricep extensions:</p>
                    <p>3 sets of 18-22 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - Active Recovery - 30-60 min</h5>
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
                    <h5 className="fw-bold">Day 4 - Lower Body Endurance</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Squats:</p>
                    <p>3 sets of 18-22 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lunges:</p>
                    <p>3 sets of 18-20 reps (Alternating legs) - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dedlifts:</p>
                    <p>3 sets of 18-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>3 sets of 22 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>3 sets of 18-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Steady-State Cardio with Weights </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Cardio workout:</p>
                    <p>
                      Choose a low-impact cardio exercise such as cycling, <br />
                      swimming, or rowing, and maintain a steady pace for <br />
                      30-45 minutes. Incorporate weights into the workout by <br />
                      holding dumbbells or wearing a weight vest.
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - Full Body Endurance </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Circuit workout:</p>
                    <p>
                      Perform each exercise for 30-60 seconds, resting for <br />
                      30 seconds between exercises. Repeat the circuit <br />
                      3-4 times.
                    </p>
                  </div>
                  <div className="ms-5">
                    <ul>
                      <li>Burpees</li>
                      <li>Jumping jacks</li>
                      <li>Mountain climbers</li>
                      <li>Plank</li>
                      <li>Russian twists</li>
                    </ul>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Active Recovery - 30-60 min</h5>
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
                        Rest for 45 seconds to 75 seconds between exercises and choose weights that are challenging but
                        allow you to complete the full sets and reps with good form. It's also important to gradually
                        increase the intensity and duration of your workouts over time.
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
                    <h5 className="fw-bold">Day 1 - HIIT </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT workout:</p>
                    <p>
                      30 seconds of high-intensity exercise (such as sprinting, <br />
                      jumping jacks, or burpees), followed by 30 seconds of <br />
                      rest or low-intensity exercise (such as walking or jogging)
                      <br />
                      for 20 minutes
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 2 - Upper Body Endurance</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Push-ups:</p>
                    <p>4 sets of 13-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell rows</p>
                    <p>4 sets of 12-15 reps (Alternating arms) - RPE-8 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell shoulder press:</p>
                    <p>4 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bicep Curls:</p>
                    <p>4 sets of 15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Tricep extensions:</p>
                    <p>4 sets of 15 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - Active Recovery - 30-60 min</h5>
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
                    <h5 className="fw-bold">Day 4 - Lower Body Endurance</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Squats:</p>
                    <p>4 sets of 13-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lunges:</p>
                    <p>4 sets of 12-15 reps (Alternating legs) - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dedlifts:</p>
                    <p>4 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>4 sets of 18 reps - RPE-5 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>4 sets of 12-15 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Steady-State Cardio with Weights </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Cardio workout:</p>
                    <p>
                      Choose a low-impact cardio exercise such as cycling, <br />
                      swimming, or rowing, and maintain a steady pace for <br />
                      30-45 minutes. Incorporate weights into the workout by <br />
                      holding dumbbells or wearing a weight vest.
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - Full Body Endurance </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Circuit workout:</p>
                    <p>
                      Perform each exercise for 30-60 seconds, resting for <br />
                      30 seconds between exercises. Repeat the circuit <br />
                      3-4 times.
                    </p>
                  </div>
                  <div className="ms-5">
                    <ul>
                      <li>Burpees</li>
                      <li>Jumping jacks</li>
                      <li>Mountain climbers</li>
                      <li>Plank</li>
                      <li>Russian twists</li>
                    </ul>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Active Recovery - 30-60 min</h5>
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
                        Rest for 45 seconds to 75 seconds between exercises and choose weights that are challenging but
                        allow you to complete the full sets and reps with good form. It's also important to gradually
                        increase the intensity and duration of your workouts over time.
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
                    <h5 className="fw-bold">Day 1 - HIIT </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT workout:</p>
                    <p>
                      30 seconds of high-intensity exercise (such as sprinting, <br />
                      jumping jacks, or burpees), followed by 30 seconds of <br />
                      rest or low-intensity exercise (such as walking or jogging)
                      <br />
                      for 20 minutes
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 2 - Upper Body Endurance</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Push-ups:</p>
                    <p>4 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell rows</p>
                    <p>4 sets of 16-18 reps (Alternating arms) - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dumbbell shoulder press:</p>
                    <p>4 sets of 16-18 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bicep Curls:</p>
                    <p>4 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Tricep extensions:</p>
                    <p>4 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - Active Recovery - 30-60 min</h5>
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
                    <h5 className="fw-bold">Day 4 - Lower Body Endurance</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Squats:</p>
                    <p>4 sets of 15-20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Lunges:</p>
                    <p>4 sets of 16-18 reps (Alternating legs) - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Dedlifts:</p>
                    <p>4 sets of 16-18 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Calf raises:</p>
                    <p>4 sets of 20 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Leg curls:</p>
                    <p>4 sets of 16-18 reps - RPE-6 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Steady-State Cardio with Weights </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Cardio workout:</p>
                    <p>
                      Choose a low-impact cardio exercise such as cycling, <br />
                      swimming, or rowing, and maintain a steady pace for <br />
                      30-45 minutes. Incorporate weights into the workout by <br />
                      holding dumbbells or wearing a weight vest.
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - Full Body Endurance </h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio - 5 minutes dynamic stretching </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Circuit workout:</p>
                    <p>
                      Perform each exercise for 30-60 seconds, resting for <br />
                      30 seconds between exercises. Repeat the circuit <br />
                      3-4 times.
                    </p>
                  </div>
                  <div className="ms-5">
                    <ul>
                      <li>Burpees</li>
                      <li>Jumping jacks</li>
                      <li>Mountain climbers</li>
                      <li>Plank</li>
                      <li>Russian twists</li>
                    </ul>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5 minutes light cardio - 5 minutes static stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Active Recovery - 30-60 min</h5>
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
                        Rest for 45 seconds to 75 seconds between exercises and choose weights that are challenging but
                        allow you to complete the full sets and reps with good form. It's also important to gradually
                        increase the intensity and duration of your workouts over time.
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
