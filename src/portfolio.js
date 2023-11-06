import aboutpic from "./assets/img/mePhoto.jpeg"

const header = {
  homepage: '',
  title: 'AFG.',
}

const about = {
  photo:aboutpic,
  name: 'Alvaro Fuentenebro',
  role: 'Software Developer',
  description:
"With a solid background in software development, I have accumulated two years of hands-on experience in creating web applications using React and Node. These technologies have not only allowed me to build dynamic and responsive user interfaces but have also provided me with a strong foundation for developing scalable and efficient backend systems. I am constantly seeking ways to improve my skills and stay up to date with the latest industry trends and best practices.",
  social: {
    linkedin: 'https://www.linkedin.com/in/afuentenebrogomez/',
    github: 'https://github.com/alvaroFGG',
  },
}

const projects = [
  {
    name: 'React Leaflet App',
    description:
      'This is an app that I wanted to make for the hunters of my village. They wanted to have a map of the zone with the hunting areas and the important places. I used Nextjs and Leaflet to make it.',
    stack: ['Nextjs', 'Nodejs', 'TypeScript', 'Leaflet', 'MongoDB'],
    sourceCode: 'https://github.com/alvaroFGG/leaflet-app-herradura'
  },
  {
    name: 'Breast Cancer Detector',
    description:
      'I made this when the world of AI exploted, I wanted to learn how to use it and I made this app that detects breast cancer. It is made with Tensorflow for the neural network and Pandas for the data analysis.',
    stack: ['Python', 'Tensorflow', 'Pandas'],
    sourceCode: 'https://github.com/alvaroFGG/breast_cancer_detector_tf'
  }
]

const skills = [
  'HTML',
  'CSS',
  'SASS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Nextjs',
  'SQL',
  'MongoDB',
  'Git',
  'Nodejs',
  'Express',
  'Python',
  'Nestjs',
  'React Native',
]

const contact = {
  email: 'alvarofuentenebrogomez@gmail.com',
  cv: 'https://drive.google.com/file/d/1o6yAIY5NhUa6R6GBKK0qKpg4FH4UcOu5/view?usp=sharing',
}

export { header, about, projects, skills, contact }