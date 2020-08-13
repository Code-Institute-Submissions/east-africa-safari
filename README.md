<img src="https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png" style="margin: 0;">

# East Africa Safari

East Africa Safari is an imagined travel site that I created to inspire and motivate users from accross the globe to tour 
East Africa having featured top travel destinations in Kenya, Uganda and Tanzania at the moment.

Having completed Javascript Fundamentals and Interactive Front-end Development, Full Stack Web Development Program 
with Code Institute I developed East Africa Safari website for my Milestone 2 Project, whereby I was to implement 
and showcase acquired skills, building interactive and responsive website with HTML5, CSS3 and JavaScript as required.

I have used 2 javaScript APIs in my project, googlemaps API to help users that are looking for travel destinations to 
locate some in  East Africa and EmailJS. 

As a developer EmailJs will enable me get neccessary feedback and implement where possible, thereby improving the efficiency
of the website.

As a user seeking to pass information to the developer, EmailJs will facilitate delivery of feedback to the developer and 
also response to the user.


# ux

 __As a developer__ 
     - I have always been attracted to tourist sites and travelling therefore I wanted to begin with the new found knowledge
     and create a travel site which will showcase various travel sites in East Africa, I hope to create an interactive 
     interesting site that will motivate more tourists to visit east Africa.
     - I want users to browse with ease my site as they search for travel destinations in East Africa.

  __As a user who likes travelling__
     - I am a user who has never been to East Africa, I want to browse the site and get inspiration to tour East Africa.

  __As a user who is a tourist__
     - I am a user who is looking for a travel destination site in East Africa. I want to be able to make 
a choice after visiting the website.

  __As a user who is fascinated by nature__
     - I would like to visit websites that talk about tourism and related topics so I will browse this website and see it 
worth visitimg the site again, if the site will be captivating.

## UX Design 

### Strategy Plane
* Having identified the needs of different users, I needed to develop a site that will give value to both the developer 
and the user. Appropriate use of HTML5, CSS3 and Javascript would help me achieve in creating an interactive site.

### Scope Plane
* This is where according to user needs I incorporated a map, top travel destinations and feedback section for my users 
be totally informed and interact with the site, and top destinations section too as a feature would help th user explore top
travel destinations through the read more buttons also.

### structure Plane
* At this stage i organised my data seeing to it that site information is presented well.
* I started with the navigation bar at the top and footer at the bottom.
* The navigation bar has links to allow navigation to different areas.
* The navbar and the footer has same background colors for easy identification.
* A corousel section to engage the user.
* A destinations section to invite the user to top destinations section.
* Previews stories section to inspire the user.
* Map section to help user see locations in the map.
* Feedback section for any feedback from the user.
* With different color variations to keep the user engaged.

### Skeleton Plane
* At this stage I was sketching my design to see how I will practically organise my data.
* Creating design for each section to see how images, text and additional features will fit in their apparent sections.
* This required drawing designs for different sections and different screen sizes.

### Surface Plane
* At the surface plane I needed to come up with an visuallyu appealing site, google fonts I picked three different fonts
  and incorpared different colors for contrast. The sequence in which information was presented is consistent too.
* I incorporated images in top destinations section and preview section too and also in the feedback form, just  to make 
the site appealing in order to achieve the sites developer an user objectives
* Buttons with hove state to capture the attention of the user
* Contrast in colors for buttons and text.

# Features
* At the top section that is home I used navigation bar with links to navigate to different sections of the wedsite. Each link will allow the 
user to navigate to different sections of the page for it is clickable and has smooth scroll to the respective sections.
* The second feature is the footer, i have used the same color as the navigation at the top for consistency and visual balance.
## Existing Features
__Landing Page__
* Navbar used is customized from bootstrap, on smaller screens it is collapsible.
* At the landing page I included a carousel with images which captures the attention of the user. The images were sourced
 sourced from [pexels](pexels.com).
* The navigation bar is with the brand name acting as the logo, where by I used a different font - family of Cinzel 
to bring the difference, also giving it a contrasting color of (#FF6700) contrasting with the background-color navy-blue 
(#03045E) for the navbar.
* The menu links have a different color (#C0C0C0), and when hovered over it changes to  #FF6700 making the site appealing.
* Also the carousel has some text adverting East Africa Safari Website and with a button which takes the user to the top 
  destination sections when clicked.
* The destinations button has dar(#FF6700) color and when hovered over it turns to transparent.

__Previews Section__
* There are three cards with preview stories, the front holds an image and the back holds the preview stories, the cards
 have a flip effect when hovered so that the back information is exposed saving up on space.
 * The section has a well highlighted header description with spans coming out with orange color (#FF6700) for emphasis
 and making the user to proceed with the site. The font color at the preview stories section is contrasting well with the cards
 background color of rgba(150, 117, 117, 0.2).

 __Top destinations Section__
 * At this section I am making use of Tabs to display the top travel destinations in Kenya, Uganda and Tanzania, with 
 three destinations in every country.
 * The tab has three buttons at the top for displaying information for each category, with an active colour of orange (#FF6700) 
 for the highlighted category.
 * I have highlighted the card title with a background of (#03045E) color and a contrasting text color O (c0c0c0), this is to 
 draw users quick attention the name of the particular destination the user is reading about.
 * At the bottom of tab, there is a button directing the user to read more about the specific destination.
 * I modified Code from [here](https://www.youtube.com/watch?v=v6-4wh_o9iM) to come up with tabs for top destinations section. 

 __Google Maps API Section__
 * In this section i have showcased a map displaying kenya, uganda and tanzania, its center point being Maasai Mara National Park 
 and with a zoom of 6, the javaScript used on for  __Google Maps__ can be found on maps.js page. I needed to intergrate map 
 markers such that a when user clicks on the marker it opens an info window displaying the name of the location. To this point I copied
 code from a repository by code institute student and the markers displayed. I started with [Geocoding](https://developers.google.com/maps/documentation/javascript/geocoding) but there was a concept i was missing, so i got code from code institute github 
 repository which was iterating through two variables contents and locations to create map markers, i modified it to display
 the top destinations location in the map by use of map markers and an infowindow.

 __Feedback form__
 * This section is a feedback form for the users to send their feedback.
 * It starts with an image at the left and a feedback form at the right.
 * The feedback form has a hover state. 
 * The user get to fill the form created by [EmailJs](https://www.emailjs.com/) where by upon submitting the message will be 
 delivered to the developers email. 

 __Features Left to implement__
 * 

 # Technologies used
 * [HTML5] (https://html5.com/)
    * The language used to add content to the website.
 * [CSS3] (https://css3.com/)
    * The language used to style HTML5 elements.
 * [JavaScript] (https://javascript.com/)
    * The language used to create tabs for the top destinations, implementing GOOGLE MAPS API and send emails with EmailJS.
* [jQuery] (https://jquery.com/) 
    * The library helped me write code for the carousel, code copied and modified from [here](https://kenwheeler.github.io/slick/).
* [Bootstrap framework] (https://getbootstrap.com/)
    * I used bootstrap for the navigation bar and the footer. 
* [Gitpod] (https://www.gitpod.io/)
* [Git Version Control] (https://www.gitpod.io/)
* [Github] (https://github.com/)

# Additional tools used
* [Font Awesome] (https://fontawesome.com/)
* [Google Fonts] (https://fonts.google.com/)

# Testing


# Deployment
## Deployment of the project
### Deploying to Github Pages
Below is the deployment process. Deployment enables the project to be viewed live by others.
I navigated the 'Settings' section of my project repository at the top right of the page.
From there, I scrolled to the 'GitHub Pages' section.
Then selected 'master branch' as my Source.
Our  site is published and a link the live project is provided.

# Deploying with Google Maps API
I started by setting up an account [here](https://developers.google.com/maps/gmp-get-started)
Then I used Maps Javascript API and an API key with the steps [here](https://developers.google.com/maps/documentation/javascript/get-api-key)
After setting up my Google Maps feature in my project as described [here](https://developers.google.com/maps/documentation/javascript/overview), I restricted the key's access.








 




