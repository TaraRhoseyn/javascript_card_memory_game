# Match the Cards (MS2)

![Responsive mockup of the website](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/mockup/responsive-mockup.PNG)

[View the deployed website.](https://tararhoseyn.github.io/CI_MS2_CardMemoryGame/)

## Table of Content

1. [Project Goals](#project-goals)
2. [User Experience](#user-experience)
    1. [User stories](#user-stories)
    2. [Scope](#scope)
    3. [Design](#design)
    4. [Wireframes](#wireframes)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks & Tools](#frameworks,-libraries-and-other-tools)
5. [Testing](#testing)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [Accessibility](#accessibility)
    4. [Performance](#performance)
    5. [Device testing](#performing-tests-on-various-devices)
    6. [Browser compatibility](#browser-compatability)
    7. [Testing user stories](#testing-user-stories)
6. [Bugs](#Bugs-found-and-resolved-during-development)
7. [Deployment](#deployment)
8. [Credits](#credits)
    1. [Code](#code)
    2. [Media](#media)
    3. [Acknowledgements](#acknowledgements)


## Project Goals

### Website owner business goals

- I want users to be able to play an enjoyable and intuitive game. 
- I want users to return to the website to continue playing the game. 
- I want users to be able to give feedback on the game easily so that future versions are optimised for the best user experience based on user needs.

### User goals

- Learn the rules of a game before I play. 
- Play a game that is enjoyable and challenging. 
- Play a game that encourages me to return to the game beyond the first play through. 
- Play a game that gives me clear feedback on my performance. 
- Play a game that has clear objectives to winning. 

## User experience

I have designed the game with mobile in mind by building the responsive layout mobile-first using Bootstrap.

The user experience is structured around three main goals: (a) to allow users to learn the game, (b) select the difficulty at which they'd like to play and (c) encourage users to return and play through again. The main call to actions on the website are related to replayability and encouraging users to make choices that impact their own experience of the game, for example, the game will not start until a user has decided on the difficulty level. 

### User stories

I have divided my user stories into two categories: first-time users and regular visitors, with the understanding that one of the key goals of the website is to encourage replayability of the game.

#### First-time users

1. As a first-time user, I want to understand the objective and rules of the game upfront and clearly. 
2. As a first-time user, I want to use the game to challenge my memory. 
3. As a first-time user, I want to be able to navigate the website quickly and with clear direction and prompts. 
4. As a first-time user, I want to be able to play the game across all personal devices. 
5. As a first-time user, I want to keep track of my score to monitor my performance in the game. 
6. As a first-time user, I want to see how long it takes me to complete the game. 
7. As a first-time user, I want the ability to select what level difficulty I want to play at.

#### Regular visitor

8. As a regular visitor, I want to be able to give feedback to improve the game over time. 
9. As a regular visitor, I want to see my score and move counter so that I can challenge myself the next time I play to beat it. 
10. As a regular visitor, I want to see how long it takes me to complete the game so I can challenge myself the next time I play to beat it. 
11. As a regular visitor, I want to be able to play a variety of difficulty levels so that the game remains fresh and interesting.

#### Site owner

12. As a site owner, I want to be able to collect feedback from users in a simple and easy way. 
13. As a site owner, I want users to be able to navigate the website easily so that users are more likely to have an enjoyable experience and return to the game.

### Scope

The scope of the project in it’s first release is defined by the following features:

- Instructions that clearly explain the objective and mechanics of the game. 
- A home page to select which game difficulty to play at before the game is generated. 
- A generate game board with varying numbers of cards depending on game difficulty selected. 
- Navigation button, such as 'Return home' once the game is generated to re-select game difficulty or revisit instructions. 
- A reset button to reset the game. 
- A score tracker that goes up with each correct match. 
- A moves counter that goes up with each pair guessed. 
- A timer to keep track of how long it takes a player to complete the game. 
- An error page (404.html) that directs site users back to the home page (index.html) in the event of a broken URL.
- Favicon icon to help users identify the site.
- A contact page for the site owner to collect feedback about the game to feed back into future versions. 

Features to be built into future releases: 

- A scoreboard with players scores to allow users to compete with their own high score and that of others online. 
- The ability to toggle between different 'skins' or 'themes' depending on how high a score you gain in your play through of the 'fruits' theme. 
- Card flipping animation when a card is selected. 
- Audio and visual animation when a matching pair is found. 
- Audio and visual animation within the browswer when the game is completed. 

Find more information on features in the [Features](#features) section.

### Design 

My overall approach to the design came from a desire to create a gane that was fun, engaging and simple to understand. From a UX perspective, I also wanted a game where the objective and control over the experience of the game did not cause cognitive overload.

#### Colour Scheme

I chose to use pink and greens as the primary scheme to bring to the user's mind connotations of nature and positivity. I chose a complementary colour scheme (pink/green) to be able to draw particular attention to key call to actions.

#### Typography

My heading font is Rokkit from Google Fonts. I chose this font because I wanted a font that would stand out for it's robust and sharp form against the softness and vibrance of the fruit motifs. 

My body font is Mina from Google Fonts. I chose this font because it had an aesthetically pleasing similarity to Rokkit, but with enough difference (particularly in font weight) to differentiate between heading and body text.

#### Imagery

I chose not to use photography on the website and adopted a cartoonish style instead. I did this to keep a consistent style across the website and promote a tone that was fun and engaging, particularly for children. 

I created all of the cards and images of fruits in Canva Premium. 

## Features

### Current Features

#### Feature 1: Home page

The home page contains four main sections: 

1. A header displaying the name of the game and what type of game it is.
2. Instructions on how to play the game and it's objective.
3. Three difficulty levels (easy, moderate, and hard) to select to trigger the game being loaded.
4. A footer with social media links (placeholder links for now).

The page is fully responsive on mobile and tablet. The copy found in Section 2, like all copy on the website, was written by myself.

**Section 1: Header**

This header is the same used throughout the website and communicates to users the name of the game and what type of game it is. The header has navigational links to the two main pages of the site. If for any reason a user needs to re-select the difficulty or re-read the instructions they can click 'Home' in the navigation bar or 'Select difficulty' button ocne the game is loaded. A user is never no more than 3 clicks away from anywhere on the site. While the header is the same colour as the website background, a bottom border is visible to differentiate it from the rest of the page.

![Header](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/features/feature-one-s1.PNG)

**Section 2: The instructions**

These instructions tell the user clearly the objectives of the game and the rules of play. These are visible before the game is loaded so that users have the chance to familiarise themselves with the rules before jumping into gameplay. 

![Rules](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/features/feature-one-s2.PNG)

**Section 3: Difficulty selection**

I had originally planned for the home page to automatically load in Easy mode, then the player would have a choice via a drop down menu what level they wish to play at. There would also have been a button which would have loaded a modal with instructions on. However, I decided against this route and made the user decide which level before the game loaded because of the following reasons: 

- I felt it more sensible to let users familiarise themselves with the rules of play **before** the game loaded. 
- It was easier to code decision-branching and logic statements when the elements used by event listeners were more seperated. 
- During development, it was easier to isolate one single mode of play and build the game from there. I first build the moderate version of the game. Once that version was working well and bug-free, I then built the easy and hard versions. 
- Once the game is loaded, users can re-select the difficulty level by returning home or clicking the 'Select difficulty' button once the game has loaded.

![Difficulty](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/features/feature-one-s3.PNG)

**Section 4: The footer**

This footer is the same throughout the website and guides users to social media links (placeholders for now). I had originally planned to insert links to other pages on the website, but decided against this as I could have greater control of the user journey by creating a linear navigational system for the game. 

![The footer](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/features/feature-one-s4.PNG)

**User stories covered by this feature:** 

1. As a first-time user, I want to understand the objective and rules of the game upfront and clearly.
3. As a first-time user, I want to be able to navigate the website quickly and with clear direction and prompts.
4. As a first-time user, I want to be able to play the game across all personal devices.
7. As a first-time user, I want the ability to select what level difficulty I want to play at.
11. As a regular visitor, I want to be able to play a variety of difficulty levels so that the game remains fresh and interesting.
12. As a site owner, I want users to be able to navigate the website easily so that users are more likely to have an enjoyable experience and return to the game.

#### Feature 2: Easy mode of the game

Upon pressing 'Easy' in the homepage, the easy mode of the game with 6 card tiles is generated for the user. 

![Easy](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/features/feature-two.PNG)

The cards were created using Canva Premium. When clicking a card, the front is revealed the users must find matching pairs. 

**User stories covered by this feature:** 

2. As a first-time user, I want to use the game to challenge my memory.
4. As a first-time user, I want to be able to play the game across all personal devices.
7. As a first-time user, I want the ability to select what level difficulty I want to play at.
11. As a regular visitor, I want to be able to play a variety of difficulty levels so that the game remains fresh and interesting.

#### Feature 3: Moderate mode of the game

Upon pressing 'Moderate' in the homepage, the moderate mode of the game with 12 card tiles is generated for the user. 

![Moderate](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/features/feature-three.PNG)

The cards were created using Canva Premium. When clicking a card, the front is revealed the users must find matching pairs. 

**User stories covered by this feature:** 

2. As a first-time user, I want to use the game to challenge my memory.
4. As a first-time user, I want to be able to play the game across all personal devices.
7. As a first-time user, I want the ability to select what level difficulty I want to play at.
11. As a regular visitor, I want to be able to play a variety of difficulty levels so that the game remains fresh and interesting.

#### Feature 4: Hard mode of the game

Upon pressing 'Hard' in the homepage, the moderate mode of the game with 18 card tiles is generated for the user. The first version of the hard mode was 24 cards so that each level of difficulty doubled (easy = 6, moderate = 12, hard = 24). Upon testing this it quickly became clear 24 was too challenging, particularly on small device screens. To keep the game simple and playable on mobile, hard was changed to 18, 6 more than moderate. 

![Moderate](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/features/feature-four.PNG)

The cards were created using Canva Premium. When clicking a card, the front is revealed the users must find matching pairs. 

**User stories covered by this feature:** 

2. As a first-time user, I want to use the game to challenge my memory.
4. As a first-time user, I want to be able to play the game across all personal devices.
7. As a first-time user, I want the ability to select what level difficulty I want to play at.
11. As a regular visitor, I want to be able to play a variety of difficulty levels so that the game remains fresh and interesting.

#### Feature 5: Select difficulty button

On all difficulty levels of the game a red button, 'Select Difficulty', is prominent in the top left-hand corner. This is to enable users to re-select a game difficulty is they do not like the one they picked. It also enables users to revisit instructions should they need to. 

![Select difficulty button](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/features/feature-five.PNG)


**User stories covered by this feature:** 

1. As a first-time user, I want to understand the objective and rules of the game upfront and clearly.
3. As a first-time user, I want to be able to navigate the website quickly and with clear direction and prompts.
4. As a first-time user, I want to be able to play the game across all personal devices.
12. As a site owner, I want users to be able to navigate the website easily so that users are more likely to have an enjoyable experience and return to the game.

#### Feature 6: The timer

On all difficulty levels of the game a regular timer is visible in the top right-hand corner of the game. This allows returning users to challenge themselves by trying to beat their previous scores. This gives them an incentive to return to the game after the first play-through. It also encourages users to try the different levels to see how long they take them to complete. 

![Timer](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/features/feature-six.PNG)

**User stories covered by this feature:** 

6. As a first-time user, I want to see how long it takes me to complete the game.
10. As a regular visitor, I want to see how long it takes me to complete the game so I can challenge myself the next time I play to beat it.

#### Feature 7: The score tracker

On all difficulty levels of the game a score counter is visible beneath the game board that keeps track of how many correct pairs have been matched in the game. Once the maximum score is reached (all pairs found) an alert will display in the browser to the user congratulating them on their win and encouraging further play. 

The score counter:

![Score](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/features/feature-seven-1.PNG)

The congratulations message: 

![Congrats](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/features/feature-seven-2.PNG)

**User stories covered by this feature:** 

5. As a first-time user, I want to keep track of my score to monitor my performance in the game.
9. As a regular visitor, I want to see my score and move counter so that I can challenge myself the next time I play to beat it.

#### Feature 8: The counter tracker

On all difficulty levels of the game a score counter is visible beneath the game board that keeps track of how many times a user has clicked on a pair to try and find a match. This is to encourage players to complete the game in the least amount of turns possible. 

![Counter](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/features/feature-eight.PNG)

**User stories covered by this feature:** 

6. As a first-time user, I want to see how long it takes me to complete the game.
10. As a regular visitor, I want to see how long it takes me to complete the game so I can challenge myself the next time I play to beat it.

#### Feature 9: The Reset Button

On all difficulty levels of the game a reset button is visible underneath the score tracker to let users reset the game. This includes resetting: the game board, the timer, the score counter and the moves counter. This allows users to reset the game if they're trying to complete a 'speedrun' (completing the game as fast as possible). 

![Reset game button](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/features/feature-nine.PNG)

**User stories covered by this feature:** 

6. As a first-time user, I want to see how long it takes me to complete the game.
10. As a regular visitor, I want to see how long it takes me to complete the game so I can challenge myself the next time I play to beat it.

#### Feature 10: The Contact page

Next to the 'Reset Game' button is the 'Give Feedback' button. Upon clicking this, the user is redirected to a Contact page with a form for gathering feedback. The form is fully functional and uses Email JS to send a message to the site owner (myself). The next version of this game will have featured based on the feedback given by users of this current release of the game, allowing gamers to have a voice in the development of future iterations.

![contact form](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/features/feature-ten.PNG)

**User stories covered by this feature:** 

3. As a first-time user, I want to be able to navigate the website quickly and with clear direction and prompts.
8. As a regular visitor, I want to be able to give feedback to improve the game over time.
12. As a site owner, I want to be able to collect feedback from users in a simple and easy way.
13. As a site owner, I want users to be able to navigate the website easily so that users are more likely to have an enjoyable experience and return to the game.

#### Feature 11: The 404 page

This page displays when a user enters a URL that does not exist. The main purpose of this page is to let users know that an error has occurred and to redirect them back to the website. The design of this page is simple as I want users to return the main pages of the site as soon as possible upon seeing this page. It consists of a heading, subheading and button.

![404 page](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/features/feature-eleven.PNG)

**User stories covered by this feature:** 

3. As a first-time user, I want to be able to navigate the website quickly and with clear direction and prompts.
12. As a site owner, I want users to be able to navigate the website easily so that users are more likely to have an enjoyable experience and return to the game.

#### Feature 12: Feedback to indicate a match 

When a matched pair of cards is found by the user the game generates a green border around the matched cards. This lets users know they're on the right track in completing the game and helps them to avoid clicking the matched cards again during the course of the game. 

![Match feedback](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/features/feature-twelve.PNG)

**User stories covered by this feature:** 

2. As a first-time user, I want to use the game to challenge my memory. 
5. As a first-time user, I want to keep track of my score to monitor my performance in the game. 

#### Features for future releases

The following features would be built into the next release of the game, but the site owner's goal would be to include more features for future release based upon user feedback. 

1. A mode of the game with a countdown timer to challenge the user to complete the game within a certain time frame. 
2. Card animations when clicked. 
3. Animations and an audio prompt when a match is found. 
4. Animation and congratulations message (beyond a browser alert) when the game is completed. 
5. The ability to chose between different 'skins' or 'themes' based upon user score. For example, if you get a high enough score you could change the theme of the game to musical bands instead of fruits. 
6. A scoreboard of user scores to encourage competition. 

### Wireframes

Wireframes:

- [Easy mode of the game](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/wireframes/wireframe-easy-game.pdf)
- [Moderate mode of the game](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/wireframes/wireframe-moderate-game.pdf)
- [Hard mode of the game](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/wireframes/wireframe-hard-game.pdf)

## Technologies used

### Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [Javascript](https://en.wikipedia.org/wiki/JavaScript)

### Frameswork, libraries and other tools

1. [Git](https://git-scm.com/)
- Git was used for version control within VSCode to push the code to GitHub.
2. [GitHub](https://github.com/)
- GitHub was used as a remote repository to store project code.
3. [Figma](https://www.figma.com/)
-  Figma was used for wireframing all pages.
4. [Font Awesome](https://fontawesome.com/)
- Icons from Font Awesome were used throughout the site.
5. [Google Fonts](https://fonts.google.com/)
- Rokkitt and Mina from Google Fonts were used as the main heading font throughout the site.
6. [Bootstrap v5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- Bootstrap was used for layout, styling and responsiveness purposes. 
7. [Hover.css](https://ianlunn.github.io/Hover/)
- The 2D 'grow' effect from the Hover.css library was used on all buttons throughout the website.
8. [Am I Responsive](http://ami.responsivedesign.is/)
- Am I Responsive was used to create the multi-device mock-up you see at the start of this README.md file.
9. [Visual Studio Code (VSCode)](https://code.visualstudio.com/)
- VSCode was the IDE used to write the code for this project.
10. [Email JS](https://www.emailjs.com/)
- Email JS was used to send emails from the website without the need for a server.
11. [Canva](https://www.canva.com/)
- Canva was used to create all of the card assets on the website. 
12. [Faivcon Generator](https://www.favicon-generator.org/)
- Favicon Generator was used to create a favicon for the website.

## Testing

### HTML Validation

The [W3C Markup Validation Service](https://validator.w3.org/) was used to validate the HTML of the website. All pages passed with 0 errors. 

Click on the page name to see the result: [Home](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/validation/html-validation/HTML-validation-homepage.PNG) [Contact](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/validation/html-validation/HTML-validation-contactpage.PNG) [404 page](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/validation/html-validation/HTML-validation-404page.PNG)

### CSS Validation

The [W3C CSS Validation Service](http://jigsaw.w3.org/css-validator/validator) was used to validate the CSS of the website. 

The CSS passed with [0 errors](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/validation/css-validation/css-validation.PNG). 

### JavaScript Validation

Linter [JSHint](https://jshint.com/) was used to validate the JavaScript of the website. 

All scripts passed with 0 errors and 0 warnings. Please note: some JSHint results show undefined variables, but they are variables stored in seperate scripts.

Click on the individual scripts to see result: [easy-game.js](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/validation/jshint-validation/easy-game-js-validation.PNG) [moderate-game.js](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/validation/jshint-validation/moderate-game-js-validation.PNG) [hard-game.js](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/validation/jshint-validation/hard-game-js-validation.PNG) [main.js](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/validation/jshint-validation/main-js-validation.PNG) [email.js](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/validation/jshint-validation/email-js-validation.PNG)

### Accessibility 

The [WAVE WebAIM web accessibility evaluation tool](https://wave.webaim.org/report#/https://tararhoseyn.github.io/CardiffSwimCentreMS1/) was used to ensure the website met high accessibility standards. 

The website passes with [0 errors](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/validation/accessibility/wave-accessibility-pass.PNG).

### Performance

[Google Lighthouse](https://developers.google.com/web/tools/lighthouse/) was used to measure the performance and speed of the website. Each page passed with at least 99% score on performance, 100% on accessibility, 93% and 89% on SEO.

[View a screenshot of the passes](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/validation/lighthouse-performance/lighthouse-performance.PNG)

### Performing tests on various devices 

#### Devices tested: 

- Huawei PRA-LX1
- iPhone SE 
- LENOVO IdeaCentre 3 Desktop PC with a 34" monitor
- DELL Inspiron 15 5593

### Browser compatibility

- **Microsoft Edge**: Website and user stories work as expected. 
- **Google Chrome**: Website and user stories work as expected. 
- **Safari**: Website and user stories work as expected. 
- **Firefox**: Website and user stories work as expected. 

## Bugs found and resolved during development

**Bug 1** - When first implementing the timer function within the game, the timer began running immediately upon the DOM content loading. This meant that a user who had taken time to read instructions and then load the game would find that the timer had already began when they began to play. 

The bug: 
![Bug one](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/testing/bugs/bug-one.PNG)

**Solution** - Placed the setInterval function within a seperate function that's called by an event listener when the game is loaded, meaning the timer is triggered at the same time as the game is generated by the scripts.

**Bug 2** - To avoid a similar and long array of objects (of the cards) in each seperate game script, I used a .slice() method to transfer objects over from one array to another across the scripts. This was very helpful in cutting out code, but it broke my original method of shuffling the array.

**Solution** - I replaced my original shuffle method (which used the Fisher-Yates method) with a new .sort method that is called within a seperate function to allow .slice() to function correctly.

**Bug 3** - The game board (grid of cards) in easy mode was difficult for the user to see all of the cards and all of the buttons and trackers surrounding within the same frame of view. 

The bug (this was almost the whole view of the browser):
![Bug three](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame/blob/main/docs/testing/bugs/bug-three.PNG)

**Solution** - I changed the id of the game board specifically for easy mode to allow seperate styling (width).

**Bug 3** - Perfecting the match if statement for the game was a large challenge. Two major issues were present: the match would sometimes not execute, and a user could cheat by pressing the same card twice.

**Solution** - To solve the first issue, I simply changed the operator from '==' to '===' to test *true* equality. To solve the second issue, I amended the code from to the following to make sure a match was checked only if the data-id of the two cards tested were different. 

Original if statement:
```
if (easyCardsSelected[0] == easyCardsSelected[1])
```

New if statement that resolved bug:
```
if (easyCardsSelected[0] === easyCardsSelected[1] && easyCardOneId !== easyCardTwoId)
```

**Bug 4** - If a user was fast enough with clicking 3 items could be added to the array that was tested for a match between 2 cards. 

**Solution** - Used Math.min method to limit the length of the array to 2.

**Bug 5** - Users were able to cheat by looking at the alt text once clicked on a card. 

**Solution** - In the 'else' of the match 'if' statement the card's alt texts are reverted back to the alt text of the card back.

**Bug 6** - JavaScript scripts failing JSHint validation.

**Solution** - Remove unnecessary semi-colons and add missing semi-colons. 

**Bug 7** - 'Select difficulty' button causing contrast error in WAVE accessibility tests. 

**Solution** - Button background colour changed to pass test. 

## Deployment

### GitHub Pages

This website has been deployed using GitHub pages. To do the same...

1. Log into your GitHub account and find the [repository](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame). 
2. Click on 'Settings' in the repository. 
3. Click 'Pages' in the left-hand menu once you're in Settings. 
4. Click 'Source'.
5. Click the dropdown menu which says 'None', then select 'Master Branch'.
6. Wait for page to refresh automatically. 
7. Under GitHub pages you can now find a link to the published live website. 

#### Forking the GitHub Repository 

By forking this GitHub repository you are making a copy of the original to view or make changes without affecting the original. You can do this by following these steps...

1. Log into your GitHub account and find the [repository](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame).
2. Click 'Fork' (last button on the top right of the repository page).
3. You will then have a copy of the repository in your own GitHub account. 

#### Making a Local Clone

1. Log into your GitHub account and find the [repository](https://github.com/TaraRhoseyn/CI_MS2_CardMemoryGame).
2. Click on the 'Code' button (next to 'Add file'). 
3. To clone the repository using HTTPS, under clone with HTTPS, copy the link.
4. Then open Git Bash.
5. Change the current working directory to where you want the cloned directory to be made.
6. In your IDE's terminal type 'git clone' followed by the URL you copied.
7. Press Enter. 
8. Your local clone will now be made.

### Email JS

1. Create an account with Email JS on [their website](https://www.emailjs.com/).
2. Make a note of your User ID in the 'Intergration' section, this will be needed when calling the API. 
3. Go to 'Email service' section and create a new email service. Note your Service ID, this will be needed when calling the API. 
4. Go to the 'Email template' section and create a new email template with the message outline you would like the site owner to be sent. Make a note of the Template ID, this will be needed when calling the API. 
5. Include your user ID, email service ID and template ID in your sendMail method within an email.js script. 


## Credits

### Code

- **Code institute** - for lesson on Email JS allowing me to use the API in email.js.
- **Michelle Toscano** - for method of [counting moves](https://github.com/Michelle3334/freaky_memory/blob/master/assets/js/script.js) in a card memory game.
- **Ania Kubow** - for the foundation of building [card game boards within javascript](https://www.youtube.com/watch?v=tjyDOHzKN0w).
- **Stack overflow** - for setting up a [timer feature](https://stackoverflow.com/questions/65091796/reset-a-count-up-timer-in-javascript), for [limiting the length of an array](https://stackoverflow.com/questions/14236515/can-i-limit-the-length-of-an-array-in-javascript)
- **Mário Gusman** from Code Institute Slack group - for code about accessibility measures in the footer.
- **Hover.css** - for [Grow effect CSS code](https://ianlunn.github.io/Hover/)
- **CSS Deck** - for [active navbar styling junction](https://cssdeck.com/blog/intelligent-navigation/)
- **W3 Schools** - for [validating form function structure](https://www.w3schools.com/js/js_validation_api.asp)
- **Bootstrap v5** - for [layout and responsive design](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- **Font awesome** - for [social media icons](https://fontawesome.com/)
- **Marina Ferreira** - for [.sort method of shuffling](https://github.com/code-sketch/memory-game)

### Media

All of the cards were created using [Canva Premium](https://www.canva.com/). 

### Acknowledgements: 

- To my fiancee Yasmine Haggar for her testing support and feedback on this project. 
- To my mentor Mo Shami for his feedback, advice and support.
- To the Code Institute slack community of students and alumni for their helpful advice, resources, guidance and support. 