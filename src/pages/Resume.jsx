import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import SummarizeIcon from '@mui/icons-material/Summarize';
import WorkIcon from '@mui/icons-material/Work';
import { Chip, Grid, Stack, Typography } from '@mui/material';

import { CardBase } from '../components/CardBase';

export function Resume() {
  return (
    <Stack spacing={1} marginX={{ xl: '200px' }}>
      <SummaryCard />
      <CareerCard />
      <EducationCard />
    </Stack>
  );
}

export function EducationCard() {
  const educations = [
    {
      title: 'Master of Information Technology',
      date: '2024 - 2025',
      school: 'Queensland University of Technology',
    },
    {
      title: 'Bachelor of Engineering in Software Technology',
      date: '2020 - 2024',
      school: 'Aarhus University',
    },
    {
      title: 'Office training with specialization in economics',
      date: '2017 - 2019',
      school: 'Aarhus Business College',
    },
    {
      title: 'Higher Commercial Examination Programme (HHX)',
      date: '2014 - 2017',
      school: 'Silkeborg Business College',
    },
  ];

  return (
    <CardBase title='Education' img={<SchoolIcon sx={{ height: '65px', width: '65px', padding: '14.5px' }} />}>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {educations.map((education, index) => (
          <EducationItem key={index} {...education} />
        ))}
      </Grid>
    </CardBase>
  );
}

export function EducationItem({ title, date, school }) {
  return (
    <>
      <Grid item xs={5} md={6}>
        <Typography variant='h6'>{school}:</Typography>
      </Grid>
      <Grid item xs={7} md={6}>
        <Typography variant='subtitle1'>{date}</Typography>
        <Typography variant='subtitle1'>{title}</Typography>
      </Grid>
    </>
  );
}

export function CareerCard() {
  const jobs = [
    {
      title: 'Part time software developer',
      date: '2023 - 2024',
      company: 'Trifork A/S',
      description: 'Developing image classification mobile application.',
      technologies: ['Flutter', 'Dart', 'Azure', 'Custom Vision'],
    },
    {
      title: 'Intern & part time software developer',
      date: '2022 - 2023',
      company: 'Twoday IT Minds',
      description: 'Developing internal sales system.',
      technologies: ['C#', 'SQL', 'Azure', 'Webhooks', 'React'],
    },
    {
      title: 'Part time software developer',
      date: '2021 - 2022',
      company: 'KMD A/S',
      description: 'Dataanalysis and software development in the public sector.',
      technologies: ['Excel', 'VBA', 'React', 'SQL', 'C#'],
    },
    {
      title: 'Economics student and accounts receivable accountant',
      date: '2017 - 2021',
      company: 'Semler Gruppen A/S',
      description: 'Office student with specialization in economics and accounts receivable.',
      technologies: ['Excel', 'VBA'],
    },
  ];

  return (
    <CardBase title='Career History' img={<WorkIcon sx={{ height: '65px', width: '65px', padding: '14.5px' }} />}>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {jobs.map((job, index) => (
          <CareerItem key={index} {...job} />
        ))}
      </Grid>
    </CardBase>
  );
}

export function CareerItem({ title, date, company, description, technologies = [] }) {
  return (
    <>
      <Grid item xs={4}>
        <Typography variant='h6'>{company}:</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant='subtitle1'>{date}</Typography>
        <Typography variant='subtitle1'>{title}</Typography>
        <Typography variant='subtitle1'>{description}</Typography>
        <Stack spacing={1} direction='row'>
          {technologies.map((tech) => (
            <Chip key={tech} label={tech} variant='outlined' color='warning' />
          ))}
        </Stack>
      </Grid>
    </>
  );
}

export function SummaryCard() {
  return (
    <CardBase title={'Summary'} img={<SummarizeIcon sx={{ height: '65px', width: '65px', padding: '14.5px' }} />}>
      <Grid container columnSpacing={2}>
        <SummaryItem title='Name' value='Nicolai Bak' />
        <SummaryItem title='Date of Birth' value='31st of May, 1998' />
        <SummaryItem title='Address' value='606/570 Queen St, Brisbane City, QLD, 4000' />
        <SummaryItem title='Mobile' value='0449152897' />
        <SummaryItem title='E-mail' value='nicolai.bak@gmail.com' />
        <SummaryItem title='Languages' value='Danish, English' />
        <SummaryItem
          title='LinkedIn'
          value={
            <a href='https://www.linkedin.com/in/nicolai-bak-412378156/' target='_blank' rel='noopener noreferrer'>
              <LinkedInIcon color='primary' />
            </a>
          }
        />
      </Grid>
    </CardBase>
  );
}

export function SummaryItem({ title, value }) {
  return (
    <>
      <Grid item xs={4}>
        <Typography variant='h6'>{title}:</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant='subtitle1'>{value}</Typography>
      </Grid>
    </>
  );
}
