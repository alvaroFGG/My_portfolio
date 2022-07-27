import aboutpic from "./assets/img/mePhoto.jpg"

const header = {
  homepage: '',
  title: 'AFG.',
}

const about = {
  photo:aboutpic,
  name: 'Alvaro Fuentenebro',
  role: 'Software Developer',
  description:
    "I am 20 years old and I am from Spain. I've been developing webs and other apps since I started a Vocational Training Course about Software Developement. I've worked for a couple of international companies like NTT Data as a programmer. I recently did a Bootcamp about Front-End where I learned how to use Angular, React and other frameworks.",
  social: {
    linkedin: 'https://www.linkedin.com/in/afuentenebrogomez/',
    github: 'https://github.com/alvaroFGG',
  },
}

const projects = [
  {
    name: 'BMW Official Page',
    description:
      'This is a project that I made during the frontend bootcamp, I tried to replicate the BMW page',
    stack: ['HTML', 'SCSS', 'JavaScript'],
    sourceCode: 'https://github.com/alvaroFGG/BMW_Page'
  },
  {
    name: 'Poke API',
    description:
      'This was the final project of the JavaScript module, I used the Pokémon API to make a Pokedex. You can see a home page where the pokemons are shown, a seeker, and each pokemon card has a functionality that shows the stats.',
    stack: ['JavaScript', 'SCSS', 'HTML','API'],
    sourceCode: 'https://github.com/alvaroFGG/pokeapi'
  },
  {
    name: 'The Game Awards',
    description:
      'This was a group project, it is made with Angular, it has the home component where you can see all the nominated games, a podium where the best three games are shown and a management component. It also has a seeker, animations and routing.',
    stack: ['HTML', 'SCSS', 'Angular', 'TypeScript', 'JSON Server'],
    sourceCode: 'https://github.com/alvaroFGG/TheGameAwards-Angular'
  },
]

const skills = [
  'HTML',
  'CSS',
  'SASS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Angular',
  'MySQL',
  'MongoDB',
  'SQL/Oracle',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'alvarofuentenebrogomez@gmail.com',
}

export { header, about, projects, skills, contact }