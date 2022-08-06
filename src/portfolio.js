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
    stack: ['HTML', 'SCSS', 'React', 'Redux', 'JSON Server'],
    sourceCode: 'https://github.com/alvaroFGG/TheGameAwards_React'
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
  cv: 'https://cv-alvaro-fuentenebro.s3.us-east-1.amazonaws.com/CV_Alvaro_Fuentenebro_v2.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMyJHMEUCIQCRbEIFb8dKuW%2FDuNNYFjeU8YgBzVp2W5yaSdUrKWIWngIgcpt0Nepad2dkXLlfmjvqc3k7GZ73DF4%2Fk3vakwJWUIIqhAMI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwwNjM4NjY1OTYxNzkiDPwM3G6hb%2Bq73ZxD9SrYAvq2uPZjgm%2BnP%2B9wSPero%2BE%2Flrv8fQcdGhM63OQnT1kLk6Jr8iY8kcz8yRKpETAUeX32bcAzM6L3iFh%2FV4hSvAe05PpSqt45lYaG%2FPjOVUcdPVpwQwNIprmibo6MheutJt1SdWPUQ%2FWHlhuwBbH2OQSHz2dIXntVlYmvBojAkQC4zeZcenCotRpN%2F91LshVJuoxde4io3mMuRdsG9w4Rbz2mQzSKgeh5PU7peAH%2FfQx3eldDStgqX7wFuPioJiRrlmWgD2FM5fjx3M5pkxJDUgRLs5pNquiiNyMphRdoSce4n8zvKGMYyaYydszf4X3zlpjfQRFkLPZ40wT9sXUwrDFFOHs4ah%2BAWKUNgDg3Gr97KD54FgR%2F%2BckOH8JejYHWSg4S2oP31YrBt6iOVTitjW7pInefT8HIRRKose86nSPP3TTeTaGlMtZISb3HzfK5mj6KtkCKrvXXMKuvupcGOrMC%2BAow0VAKGLCO28ydHFXiGFABsFLsSoMfjsbN5VYjgMtn0wsNwBMZ2ZHD%2BwRqY5tbSmIpE3rFhygCvDVf731xQHYwVumX8%2F4K7mezkQ%2F4LNQWf2QbpsRdOv1LEeQyZUzcHutqiW3VjglPDbricYPRzsS5d%2FHBxA2xaQGKySUyW1AcVGxjFBeK5D1rhPMmkDQrURZaImC6KX1Y2QC2zXkyjIQOavvr5SNoqxVBCP2gU04RfytFc%2BsDhh8m2qGF0uSK1TjYz7MYgmmlTgWibM0Px9bw7DESLKukJhZRdqgtZcS8qEdyK2glxuIeZY4QFbfeKvzZx1j3sOQLOMVwjJIRUgal3rICbVNYAgro%2Brs9Txz83BZYF%2B0NE8zXcgpbcTNqsz0YMwu%2BzaHBbuTlWcsBEB%2FCQA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220806T163922Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ5XV65NJ5TIS5P5T%2F20220806%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=10c75c4fb48fae52354299a8196f4933c9f945b5916ce478194e08a01af70504',
}

export { header, about, projects, skills, contact }