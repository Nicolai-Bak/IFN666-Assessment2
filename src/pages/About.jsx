import { Card, CardContent, CardHeader, Typography } from '@mui/material';

export function About() {
  return (
    <Card sx={{ backgroundColor: 'transparent' }}>
      <CardContent>
        <CardHeader title='About me' />
        <Typography paragraph>
          With over one year of experience as a software developer and pilot, I have gained valuable skills in designing, developing, and
          testing software solutions using Java, Azure, and Flutter. I have worked with various clients and teams to deliver high-quality
          products that meet their needs and expectations.
        </Typography>
        <Typography paragraph>
          As a software pilot at Trifork, I supported the development and implementation of a digital transformation project for a large
          public organization. I contributed to the agile methodology, the user interface design, and the integration with external systems.
          As a software developer at twoday IT Minds, I participated in the process and consult department at KMD, where I helped create and
          improve software applications for different domains and industries.
        </Typography>
        <Typography paragraph>
          I am currently pursuing a master&rsquo;s degree in information technology at QUT, where I aim to deepen my knowledge and skills in
          software engineering, data science, and artificial intelligence. I am passionate about learning new technologies and applying them
          to solve real-world problems. I am also interested in collaborating with other professionals and researchers to exchange ideas and
          insights.
        </Typography>
        {
          // TODO add something about sport and the portfolio
        }
      </CardContent>
    </Card>
  );
}
