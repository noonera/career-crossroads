import React from 'react';
import { Container, Box, Typography, Card, CardContent, Avatar, Button, Grid } from '@mui/material';
import TitleImg from '../public/Title.jpeg';
import OpportImg from '../public/opport.png';
import TechImg from '../public/Tech.png';

// Main App component
const App = () => {
  // Data from the PDF, structured for the React app.
  const synopsisContent = {
    title: "Synopsis",
    text: "Career crossroads: Dream it, plan it, Do it is a student-friendly guide that helps to choose the right career path after class 10th and 12th. It offers clear insights into various courses, their eligibility criteria, duration, core focus area & future career opportunities in areas such as Engineering, medicine, law, commerce, arts, vocational training, paramedical sciences, government services, each chapter is carefully structured to simplify complex career pathways and help students match their interests with suitable education & professional tracks.",
    callout: "Whether a student aims to pursue a traditional path or explore emerging fields, this book empowers them with clarity, confidence & direction and a must have book for students, parents & educators seeking clarity in career planning.",
    details: "This book in details with 50 Engineering streams, 175 B.Sc. options, 70 BA courses, 31 BFA courses, 210 Vocational courses, 205 Diploma courses, 315 Certificate courses and many other career choices."
  };

  const tenthStandardCourses = [
    "MPC, BIPC, MBIPC, CEC, ARTS/HUMANITIES",
    "DIPLOMA COURSES",
    "POLYTECHNIC COURSES",
    "PARAMEDICAL COURSES",
    "VOCATIONAL COURSES",
    "ARTS AND CREATIVE COURSES",
    "ITI COURSES",
    "SHORT TERM CERTIFICATION COURSES",
    "OPEN SCHOOLING (NIOS)"
  ];

  const authorInfo = {
    name: "Bittla Sudheer",
    bio: "I, Bittla Sudheer holds a master degree in structural engineering & has experience in guiding students & teaching. My deep concern for the struggles students face due to wrong career decisions inspired me to write Career crossroads: Dream it, plan it, do it. With a vision to simplify career choices & provide clarity at a crucial stage in every student's life, it serves as a valuable resource for students, parents and educators seeking direction in the journey of career planning.",
    contact: "For personalized career guidance or to schedule student's seminars for career guidance, you may reach out to us via mail at careercrossroads97@gmail.com or our website."
  };

  return (
    <Box sx={{ bgcolor: '#f5f6fa', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section */}
      <Box sx={{ position: 'relative', width: '100%', maxWidth: 900, mx: 'auto', height: { xs: 340, md: 440 }, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', textAlign: 'left', mb: 4, overflow: 'hidden', borderRadius: 4, boxShadow: 4 }}>
        <img src={TitleImg} alt="Career Crossroads Book Cover" style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1, opacity: 0.45, borderRadius: 4 }} />
        {/* Gradient overlay for left side */}
        <Box sx={{ position: 'absolute', left: 0, top: 0, width: '60%', height: '100%', zIndex: 2, background: 'linear-gradient(90deg, rgba(34,34,34,0.5) 0%, rgba(255,255,255,0) 100%)', borderRadius: 4 }} />
        {/* Text content on right side */}
        <Box sx={{ position: 'relative', zIndex: 3, width: { xs: '100%', md: '55%' }, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', py: 4, pr: { xs: 0, md: 6 } }}>
          <Box sx={{ bgcolor: 'rgba(255,255,255,0.85)', borderRadius: 3, px: { xs: 2, md: 4 }, py: { xs: 2, md: 3 }, boxShadow: 2, textAlign: 'right', maxWidth: 420 }}>
            <Typography variant="h2" sx={{ fontWeight: 900, color: '#222', mb: 1, textShadow: '0 4px 16px #fff', letterSpacing: 2, fontSize: { xs: '2.7rem', md: '3.8rem' }, lineHeight: 1.1, textAlign: 'right', width: '100%' }}>
              Career Crossroads
            </Typography>
            <Typography variant="h5" sx={{ color: '#6366f1', fontStyle: 'italic', mb: 2, fontSize: { xs: '1.3rem', md: '2.1rem' }, fontWeight: 400, textAlign: 'right', width: '100%', textShadow: '0 2px 8px #fff' }}>
              Dream it, Plan it, Do it
            </Typography>
            <Button variant="contained" color="primary" sx={{ borderRadius: 8, fontWeight: 700, px: 4, py: 1.5, mt: 2, fontSize: { xs: '1.1rem', md: '1.3rem' }, boxShadow: 3, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.07)', bgcolor: '#4338ca' } }}>
              Published Book
            </Button>
          </Box>
        </Box>
      </Box>

      <Container maxWidth={false} sx={{ width: '100%', px: { xs: 1, md: 4 } }}>
        {/* Synopsis Section */}
        <Card sx={{ mb: 4, borderRadius: 4, boxShadow: 3, maxWidth: '100%', mx: 0 }}>
          <CardContent>
            <Typography variant="h4" align="center" color="primary" sx={{ fontWeight: 700, mb: 2 }}>
              Synopsis
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {synopsisContent.text}
            </Typography>
            <Box sx={{ borderLeft: '4px solid #6366f1', pl: 2, py: 1, my: 2, fontStyle: 'italic', color: 'text.secondary', bgcolor: '#f3f4f6' }}>
              {synopsisContent.callout}
            </Box>
            <Typography variant="body1">
              {synopsisContent.details}
            </Typography>
          </CardContent>
        </Card>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <img src={OpportImg} alt="Opportunities" style={{ width: 220, height: 220, objectFit: 'contain', borderRadius: 16, boxShadow: '0 4px 24px #6366f133' }} />
        </Box>

        {/* Courses after 10th Section */}
        <Card sx={{ mb: 4, borderRadius: 4, boxShadow: 3, maxWidth: '100%', mx: 0 }}>
          <CardContent>
            <Typography variant="h4" align="center" color="primary" sx={{ fontWeight: 700, mb: 2 }}>
              Career Paths after 10th Standard
            </Typography>
            <Grid container spacing={2}>
              {tenthStandardCourses.map((course, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Box sx={{ bgcolor: '#6366f1', color: '#fff', fontWeight: 600, p: 2, borderRadius: 2, textAlign: 'center', boxShadow: 2, transition: '0.3s', '&:hover': { bgcolor: '#4338ca' } }}>
                    {course}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>

        {/* Career Opportunities Section */}
        <Card sx={{ mb: 4, borderRadius: 4, boxShadow: 3, maxWidth: '100%', mx: 0 }}>
          <CardContent>
            <Typography variant="h4" align="center" color="primary" sx={{ fontWeight: 700, mb: 2 }}>
              Career Opportunities
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={TechImg} alt="Career Opportunities" style={{ width: '100%', maxWidth: 600, height: 'auto', borderRadius: 16, boxShadow: '0 4px 24px #6366f133', border: '4px solid #e0e7ff' }} />
            </Box>
          </CardContent>
        </Card>

        {/* About the Author Section */}
        <Card sx={{ mb: 4, borderRadius: 4, boxShadow: 3, maxWidth: '100%', mx: 0 }}>
          <CardContent>
            <Typography variant="h4" align="center" color="primary" sx={{ fontWeight: 700, mb: 2 }}>
              About the Author
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 3 }}>
              <Avatar sx={{ width: 80, height: 80, bgcolor: '#6366f1', fontWeight: 700, fontSize: 32 }}>
                {authorInfo.name[0]}
              </Avatar>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{authorInfo.name}</Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>{authorInfo.bio}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>{authorInfo.contact}</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Footer */}
        <Box sx={{ bgcolor: '#6366f1', color: '#fff', textAlign: 'center', p: 3, borderRadius: 4, mt: 6, maxWidth: '100%', mx: 0 }}>
          <Typography variant="body2">
            &copy; 2025 Career Crossroads. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default App;
