
![wireframe](assets/images/readme-images/Imageresponsive.png?raw=true "wireframe")

# East Africa Safari
[View the live project here](https://jos-lab.github.io/east-africa-safari/)

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

 __As a First Time Visitor__ 
*  As a first time visitor i want to browse with ease and easily understand the main aim of the website.
*  I want to be able to navigate easily to different sections. 
*  Also I  want to locate their social media links to determine if they have followere and if they are trusted. 

  __As a user who likes travelling__
     * I am a user who has never been to East Africa, I want to browse the site and get inspiration to tour East Africa.

  __As a user who is a tourist__
     * I am a user who is looking for a travel destination site in East Africa. I want to be able to make 
a choice after visiting the website.

  __As a user who is fascinated by nature__
     * I would like to visit websites that talk about tourism and related topics so I will browse this website and see it 
worth visitimg the site again, if the site will be captivating.
    __As a user returning user__
     -* As a Returning Visitor, I want to find the best way to get in contact with the organisation with any questions I 
       may have.

## UX Design 

### Strategy Plane
* Having identified the needs of different users, I needed to develop a site that will give value to both the developer 
and the user. Appropriate use of HTML5, CSS3 and Javascript would help me achieve in creating an interactive site.

### Scope Plane
* This is where according to user needs I visualised incorporating a map, top travel destinations and feedback section for my users 
be totally informed and interact with the site, and top destinations section too as a feature would help th user explore top
travel destinations through the read more buttons also.

### structure Plane
* At this stage i organised my data seeing to it that site information is presented well.
* I started with the navigation bar at the top and footer at the bottom.
* The navigation bar has links to allow navigation to different areas.
* The navbar and the footer has same background colors for easy identification.
* A corousel (my landing page)section with images to engage the user.
* The landing page has a button to (destinations section) to invite the user to top destinations section.
* Previews stories section to inspire the user with images at the front and preview stories at the back.
* Map section to help user see locations in the map.
* Feedback section for any feedback from the user.
* With different color variations to keep the user engaged.

### Skeleton Plane
* At this stage I was sketching my design to see how I will practically organise my data.
* Creating design for each section to see how images, text and additional features will fit in their apparent sections.
* This required drawing designs for different sections and different screen sizes.

### Surface Plane
* At the surface plane I needed to come up with an visually appealing site, for fonts I picked three different fonts
  from google fonts and incorpared different colors for contrast. The sequence in which information was presented is consistent too.
* I incorporated images in top destinations section and preview section too and also in the feedback form, just  to make 
the site appealing in order to achieve the sites developer an user objectives
* Buttons with hove state to capture the attention of the user
* Contrast in colors for buttons and text.

## Wireframes for my Project
* I designed my wireframes using Microsoft Word, and saved them using Adobe, after resizing with TinyPNG and maintained as png.
### Wireframe for Mobile
![wireframe](assets/images/readme-images/mobile.png?raw=true "wireframe")

### Wireframe for Tablet
![wireframe](assets/images/readme-images/Tablet.png?raw=true "wireframe")

### Wireframe for Desktop
![wireframe](assets/images/readme-images/desktop.png?raw=true "wireframe")

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
 * I have highlighted the card title with a background of (#03045E) color and a contrasting text color O (#c0c0c0), this is to 
 draw users quick attention the name of the particular destination the user is reading about.
 * At the bottom of tab, there is a button directing the user to read more about the specific destination.
 * I modified Code from [here](https://www.youtube.com/watch?v=v6-4wh_o9iM) to come up with tabs for top destinations section. 

 __Google Maps API Section__
 * In this section I have showcased a map displaying kenya, uganda and tanzania, its center point being Maasai Mara National Park 
 and with a zoom of 6, the javaScript used on for  __Google Maps__ can be found on maps.js page. I needed to intergrate map 
 markers such that a when user clicks on the marker it opens an info window displaying the name of the location. To this point I refferenced
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
 * I would like to have a more interactive map.
 * I would also like to have a more interactive feedback form
  

 # Technologies used
 * [HTML5](https://html5.com/)
    * The language used to add content to the website.
 * [CSS3](https://css3.com/)
    * The language used to style HTML5 elements.
 * [JavaScript](https://javascript.com/)
    * The language used to create tabs for the top destinations, implementing GOOGLE MAPS API and send emails with EmailJS.
* [jQuery](https://jquery.com/) 
    * The library helped me write code for the carousel, code copied and modified from [here](https://kenwheeler.github.io/slick/).
* [Bootstrap framework](https://getbootstrap.com/)
    * I used bootstrap for the navigation bar and the footer. 
* [Gitpod](https://www.gitpod.io/)
    * I used Gitpod's IDE to write the code for my project.
* [Git Version Control](https://www.gitpod.io/)
    * I used Git for Version Control.
* [Github](https://github.com/)
    * I hosted my deployed website on GitHub, with previous versions of my code stored through the commit history.

# Additional tools used
* [Font Awesome](https://fontawesome.com/)
    *  I used three social media icons for Facebook, LinkedIn and Twitter.
* [Google Fonts](https://fonts.google.com/)
    * I used three different fonts from Google for the project: Alata for the body, Acme for titles and Cinzel for navbar 
      brand which acted as the logo.
* [TinyPNG](https://tinypng.com/)
    * I used TinyPNG to compress my images to try to reduce the loading time in my site.
* [Adobe Acrobat](https://www.adobe.com/)
    * I designed my wireframes using Microsoft Word, and saved them using Adobe, after resizing with TinyPNG and maintained as png..
* [Pexels](https://www.pexels.com/)
    * I sourced other images used in my website from pexels.
* [Unsplash](https://www.unsplash.com/)
    * Other images i sourced from Unsplash.
* [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview#maps_map_simple-javascript)
    * I used the Google Maps API for the explore section to create a map which is interactive with markers to highlighted
      top travel destinations in East Africa.
* [EmailJS](https://www.emailjs.com/)
    * With EmailJS I was able to build an iteractive feedback form.
* [CoolorsS](https://coolors.co/)
    * I selected my colors from coolors.
        * (#FF6700) - for navbar brand that acted as our logo, hover on navigation links and social links background at the footer.
        * (#c0c0c0) - for navigation links, social links and button text.
        * (#03045E) - for general website text and background for buttons on hover state.
* [social colors](https://www.materialui.co/socialcolors)
        * (#3b5999) - for background-color hover for facebook.
        * (#0077B5) - for background-color hover for linkedin.
        * (#55acee) - for background-color hover for twitter.
    

# Testing
* [W3C Markup Validator](https://validator.w3.org/)
* HTML 
    * __HTML__: After validating I received this message:- 
        * Warning: The type attribute is unnecessary for JavaScript resources.
          type="text/javascript"
             - i decided to keep it as it was copied direct from EmailJS instruction's page.
        * For the navigation section: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.
          section id="header"
             

* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
     * __CSS__: After validating I received this message:- 
        * Warnings (3)
    		-moz-transition is an unknown vendor extension
    		-webkit-transition is an unknown vendor extension
    		-o-transition is an unknown vendor extension
            * I decided to remove them from the style rule for social-links li a i for the code to pass the test.

* [JSHint](https://jshint.com/)
    * __JavaScript__: After validating I received warnings on sendEmail.js and Map.js but tabs.js did not have any warnings.



## Testing User Stories from User Experience (UX) Section
__As a First Time Visitor__ 
*  As a first time visitor i want to browse with ease and easily understand the main aim of the website.
    * Upon entering the site the users are greeted with a clean navigtaion bar with links to different sections.
    * The carousel section at the landing page has a caption and a 'destinations' button where by upon clicking
    it will take the to top destinations.
*  I want to be able to navigate easily to different sections. 
    * A user will navigate easily to different sections through the links at the navigation bar and quick links at the 
    footer too.
*  Also I  want to locate their social media links to determine if they have followers and if they are trusted. 
    * At the footer the user will find social links.

__As a user who likes travelling__
* I am a user who has never been to East Africa, I want to browse the site and get inspiration to tour East Africa.
    * At the preview section, the user will get preview stories about Kenya, Uganda and Tanzania, this will entice the 
    user to want to read more.

__As a user who is a tourist__
* I am a user who is looking for a travel destination site in East Africa. I want to be able to make 
a choice after visiting the website.
    * At the Top destination section the user will be able to view different possible tourist sites
    that they may visit.

__As a user who is fascinated by nature__
* I would like to visit websites that talk about tourism and related topics so I will browse this website and see it 
worth visitimg the site again, if the site will be captivating.
    * At the preview section and top destination sections there are the 'read-more' buttons which will take the user to 
    wikipedia pages for more information.

__As a user returning user__
* As a Returning Visitor, I want to find the best way to get in contact with the organisation with any questions I 
       may have.
    * At the feedback section there is an interactive feedback form where the user can give their feedback or incase of 
    questions to the developer and the same the developer can reply back.

## Further Testing
* The Website was tested on Google Chrome, Microsoft Edge and firefox Mozilla.
* The website was viewed on Google chrome developer tools: iphone6/7/8, iphone6/7/8Plus,  iphone x, ipad and ipad pro.
* The website was viewed on Desktop, Laptop, and iPhone6.
* Friends and family also checked on their mobile and there was  some issues.
* A large amount of testing was done to ensure that all pages were linking correctly.
* Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

## Testing results
### On Ipad/Tablet (768x1024px ) and Mobile (320x480px)
* All the sections are responsive except a white space was appearing vertically after the navigation bar 
* This was being caused by the margin given to the feedback button that I removed and the horizontal scroll was solved out.
* The Tob destinations also was not displaying well with some information being hidden, the button to the first image is
   fully revealed and all the other images also are hidden.
* On mobile the preview back descripttion is overflowing. To solve this i redesigned the preview section cards using flexbox
  and the preview back descriptions were contained in the cards without overflowing on mobile view.

### On Laptop (1280x802px) and Desktop (1600x992px)
* on Desktop the carousel images were not displaying 100vh, there was a grey space being revealed, I tackled that with 
   media query.
* On Laptop the cheetah carousel image was also displaying but leaving a grey space towards the bottom (displayin about 90vh)
  leaving a revealing a grey space. I solved it with a media querry.
* On Desktop the smooth scroll was missing the targeted sections, it was scrolling past the page, making the sections not 
   balance visually on the page. I tried media query for the respective sections to display min-height: 100vh, but it 
   not solve.


## Manually testing the functionality of all links
* All the Links to the sections are working well, and the buttons  for readmore also have target blank.

## Manually testing the feedback form
* The feedback form 'required' attribute is working, it will not submit empty form instead it will pop up 
  a message stating 'please fill out this field'.
* When I added method='POST' to my form  in HTML the form EmailJS execution failed, with the following error message;
    * Error response
        Error code: 501
        Message: Unsupported method ('POST').
        Error code explanation: HTTPStatus.NOT_IMPLEMENTED - Server does not support this operation.

  but upon removing method='POST' the form 
  EmailJS execution was successful.             



# Deployment
## Deployment of the Project
## Deploying to Github Pages
Below is the deployment process. Deployment enables the project to be viewed live by others.
* I navigated to the 'Settings' section of my project repository at the top right of the page.
* From there, I scrolled to the 'GitHub Pages' section.
* Then selected 'master branch' as my Source.
* Our  site is published and a link the live project is provided.

## Deploying with Google Maps API
* I started by setting up an account [here](https://developers.google.com/maps/gmp-get-started)
* Then I used Maps Javascript API and an API key with the steps [here](https://developers.google.com/maps/documentation/javascript/get-api-key)
* After setting up my Google Maps feature in my project as described [here](https://developers.google.com/maps/documentation/javascript/overview), 
* I restricted the key's access.

## Deploying with EmailJS
* I started by setting up an account [here](https://www.emailjs.com/docs/tutorial/adding-email-service/).
* I chose the free account then followed the steps from the tutorial, creating a template and adding the EmailJS javascript library to my project.

## Making a Local Clone
1. Log in to GitHub and locate the [GitHub Repository](https://github.com/).
2. Under the repository name, click "Clone or download".
3. If using Github Desktop, chose to Open in Desktop.
4. If you want to Clone the files into a Git repository, copy the URL open [gitbash](https://git-scm.com/downloads).
5. Type git clone, and then paste the URL you copied in Step 3.
6. Press Enter. Your local clone will be created.
6. Use this [link](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) to view
 more explanation of the process.


# Credits

## Code 
* I modified Code from [here](https://www.youtube.com/watch?v=v6-4wh_o9iM) to come up with tabs for top destinations section. 
* I refferenced code from a repository by code institute student for the map markers to display.
* My Mentor helped fix an error with my EmailJS script code, at SendEmail.js I had written 'my_feedback: contactForm.feedback.value',
  instead of 'my_feedback: contactForm.message.value,'

## Content
* Content for this site was sourced from the internet.

## Media
* All images were sourced from [Pexels](https://www.pexels.com/) and [Unsplash](https://www.unsplash.com/)

## Acknowledgement
* I sincerely wish to thank the following for their extraordinary support and patience all together that helped me 
   manage througout the project.
   * __My Mentor__:The guidance and support of my mentor Akshat Garg.
    * __Code Institute Community__: Studentcare and Tutors for the support and understanding that I cannot explain, extra-ordinarily
        amazing support, second to none from code institute as a whole which went along way to help me finish my project.
       .
  








 




