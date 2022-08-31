# My portfolio
This is my first portfolio, it is done with React. All the data from the different parts of the web is taken from a file called "portfolio.js" where you can find different js objets, each one has different info about my professional career.

## Folder Structure
```
📦src  
 ┣ 📂assets  
 ┃ ┗ 📂img  
 ┃ ┃ ┗ 📜mePhoto.jpg  
 ┣ 📂components  
 ┃ ┣ 📂About  
 ┃ ┃ ┣ 📜About.css  
 ┃ ┃ ┗ 📜About.jsx  
 ┃ ┣ 📂Contact  
 ┃ ┃ ┣ 📜Contact.css  
 ┃ ┃ ┗ 📜Contact.jsx  
 ┃ ┣ 📂Footer  
 ┃ ┃ ┣ 📜Footer.css  
 ┃ ┃ ┗ 📜Footer.jsx  
 ┃ ┣ 📂Header  
 ┃ ┃ ┣ 📜Header.css  
 ┃ ┃ ┗ 📜Header.jsx  
 ┃ ┣ 📂Navbar  
 ┃ ┃ ┣ 📜Navbar.css  
 ┃ ┃ ┗ 📜Navbar.jsx  
 ┃ ┣ 📂ProjectContainer  
 ┃ ┃ ┣ 📜ProjectContainer.css  
 ┃ ┃ ┗ 📜ProjectContainer.jsx  
 ┃ ┣ 📂Projects  
 ┃ ┃ ┣ 📜Projects.css  
 ┃ ┃ ┗ 📜Projects.jsx  
 ┃ ┣ 📂ScrollToTop  
 ┃ ┃ ┣ 📜ScrollToTop.css  
 ┃ ┃ ┗ 📜ScrollToTop.jsx  
 ┃ ┣ 📂Skills  
 ┃ ┃ ┣ 📜Skills.css  
 ┃ ┃ ┗ 📜Skills.jsx  
 ┃ ┗ 📂Timeline  
 ┃ ┃ ┣ 📜Timeline.css  
 ┃ ┃ ┗ 📜Timeline.jsx  
 ┣ 📂contexts  
 ┃ ┗ 📜theme.js  
 ┣ 📜App.css  
 ┣ 📜App.js  
 ┣ 📜index.css  
 ┣ 📜index.js  
 ┗ 📜portfolio.js
```

## Sections
- About
This section is a short introduction about me and my professional career
- Timeline
I made this with the vertical timeline library, here you will see al my studies and professional experience.
- Projects
These are the best projects I made during the frontend development bootcamp, with the links to the github repositories.
- Skills
Inside this section you will see all the technologies that I used during my professional career and the ones that I learned inside the bootcamp.
- Contact
This section pretty small, you only have two buttons:
	-  Email me: it has a mailTo property that opens the mail app in your device with my email in the destination.
	- Download CV: I used S3 service from AWS to upload my cv. It has a public link in order that anyone could see it.

## Functionalities
- Dark mode: It is done with the useContext hook from react
- Smooth Scrolling
- Scroll-up Arrow

## Technologies and Libraries
As I said at the beginning the portfolio is done entirely with React and also I used S3 service from AWS to upload my CV.
- Libraries:
	- Material Icons: for all the icons used in each section.
	- react-vertical-timeline-component: this is the library I used to list all my studies and experience.
