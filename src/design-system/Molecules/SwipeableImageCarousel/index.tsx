// import React, { useState } from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// interface Image {
//   label: string;
//   imgPath: string;
// }

// interface SwipeableImageCarouselProps {
//   images: Image[];
//   autoPlayInterval?: number;
//   nextButtonText?: string;
//   backButtonText?: string;
//   maxWidth?: number;
//   height?: number;
// }

// const SwipeableImageCarousel: React.FC<SwipeableImageCarouselProps> = ({
//   images,
//   autoPlayInterval = 3000,
//   nextButtonText = 'Next',
//   backButtonText = 'Back',
//   maxWidth = 400,
//   height = 255,
//   ...props
// }) => {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step: number) => {
//     setActiveStep(step);
//   };

//   return (
//     <Box sx={{ maxWidth: maxWidth, flexGrow: 1 }}>
//       <Paper
//         square
//         elevation={0}
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           height: 50,
//           pl: 2,
//           bgcolor: 'background.default',
//         }}
//       >
//         <Typography>{images[activeStep].label}</Typography>
//       </Paper>
//       <AutoPlaySwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//         interval={autoPlayInterval}
//         {...props}
//       >
//         {images.map((step, index) => (
//           <div key={step.label}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <Box
//                 component="img"
//                 sx={{
//                   height: { xs: 'auto', md: height },
//                   display: 'block',
//                   maxWidth: '100%',
//                   overflow: 'hidden',
//                   width: '100%',
//                 }}
//                 src={step.imgPath}
//                 alt={step.label}
//               />
//             ) : null}
//           </div>
//         ))}
//       </AutoPlaySwipeableViews>
//       <MobileStepper
//         steps={maxSteps}
//         position="static"
//         activeStep={activeStep}
//         nextButton={
//           <Button
//             size="small"
//             onClick={handleNext}
//             disabled={activeStep === maxSteps - 1}
//           >
//             {nextButtonText}
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//             {backButtonText}
//           </Button>
//         }
//       />
//     </Box>
//   );
// };

// export default SwipeableImageCarousel;
