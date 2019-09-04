var express = require('express');
var router = express.Router();
var app = express();


// LIST OF OBJECTS CONTAINING INFO ABOUT EACH OF MY PROJECTS
const projects = [{
  id: 1,
  title: 'My Portfolio',
  summary: 'This portfolio you are currently viewing was created using Node.js and the express framework that can be installed as part of the npm library. This is a very simple website and is mainly meant to exist as a means of displaying the other projects that I have worked on throughout the years. Some of the cool features from this project include URL parameters as a way of accessing and displaying projects. Also, I created the pages using jade files instead of the traditional HTML.',
  image: 'https://res.cloudinary.com/justin-bresee/image/upload/c_scale,w_600/v1566595644/project%20screenshots/portfolio_w5pqpu.png',
  image_small: 'https://res.cloudinary.com/justin-bresee/image/upload/c_scale,w_365/v1566595644/project%20screenshots/portfolio_w5pqpu.png'
},
{
  id: 2,
  title: 'Shingo.org (new version)',
  summary: 'When I first arrived at my first job as a web developer, I was tasked with helping replace the current website so that the company did not need to rely so much on code to maintain their website. I helped the company implement the new version of the site on a wordpress platflorm combined with lightning web components that displayed dynamic content from our Salesforce account using Salesforce communities.',
  image: 'https://res.cloudinary.com/justin-bresee/image/upload/c_scale,w_600/v1566595643/project%20screenshots/shingo_new_site_ysyll4.png',
  image_small: 'https://res.cloudinary.com/justin-bresee/image/upload/c_scale,w_365/v1566595643/project%20screenshots/shingo_new_site_ysyll4.png'
},
{
  id: 3,
  title: 'Teachinglean.org',
  summary: 'While working at the Shingo Institute, our web development team was tasked the the maintainence of multiple websites. One of the sites was called teachinglean.org and was used for teaching lean management principles to business managers. The website contained entirley static content, so we decided it was best to move it to a more manageble platflorm on wordpress as opposed to node.js. This helped decrease the web developer time and focus needed to maintain the website while improving the styling and content of the website.',
  image: 'https://res.cloudinary.com/justin-bresee/image/upload/c_scale,w_600/v1566595643/project%20screenshots/teaching_lean_gau2is.png',
  image_small: 'https://res.cloudinary.com/justin-bresee/image/upload/c_scale,w_365/v1566595643/project%20screenshots/teaching_lean_gau2is.png' 
},
{
  id: 4,
  title: 'Shingo.org (old version)',
  summary: 'The original version of the shingo.org website was the first web application that I had the priviledge of working on. It was a well-coded application, however, the web developers at the company were part-time student that would come and go every year or so. This made training difficult and website maintenance expensive for the company which is why we moved to the new version which is in use today.',
  image: 'https://res.cloudinary.com/justin-bresee/image/upload/c_scale,w_600/v1566595643/project%20screenshots/shingo_original_site_zpqnqn.png',
  image_small: 'https://res.cloudinary.com/justin-bresee/image/upload/c_scale,w_365/v1566595643/project%20screenshots/shingo_original_site_zpqnqn.png'
},
{
  id: 5,
  title: 'Operations Management Info Page',
  summary: 'The idea for this project came from an assignment I was given from an operations management class while attending Utah State University. Our professor challenged us to create a deliverable for a given topic, however, the deliverable could not be a powerpoint presentation. I decided to put my coding skills to use and create a website to present this information. ',
  image: 'https://res.cloudinary.com/justin-bresee/image/upload/c_scale,w_600/v1567611080/operations_management_pimkuk.jpg',
  image_small: 'https://res.cloudinary.com/justin-bresee/image/upload/c_scale,w_365/v1567611080/operations_management_pimkuk.jpg'
}
]
// END OF LIST


// ROUTES
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Justin Bresee - Home Page' });
});

// GET portfolio page
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { 
    title: 'Justin Bresee - Portfolio',
    projects: projects });
});

// GET portfolio project page
router.get('/portfolio/:projectID', function(req, res) {
  var project = {}
  for(i in projects) {
    if(projects[i].id === parseInt(req.params.projectID)) {
      project = projects[i]
    }
  }
  res.render('project', { 
    title: project.title,
    summary: project.summary,
    image: project.image
   });
});

router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'Justin Bresee - Resume' });
});

module.exports = router, app;
