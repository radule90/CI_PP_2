# Rock Paper Scissors Game

![Website responsive](assets/img/readme/respo.webp)

[Rock Paper Scissors Game](https://radule90.github.io/CI_PP_2/) is a simple game. Where the user chooses his choice and immediately receives a random response from the opponent (computer) together with the result of the game. The winner is decided by the number of wins, the first to win 10 times is the winner of the game.


***
## Table of Contents
1. <details>
    <summary><a href="#ux">UX</a></summary>

      - [Visitor Goals](#visitor-goals)
      - [Business Goals](#business-goals)
      - [User Stories](#user-stories)

</details>

2. <details>
    <summary><a href="#visual-design">Visual Design</a></summary>

      - [Wireframes](#wireframes)
      - [Colors](#colors)
      - [Fonts](#fonts)
      - [Icons](#icons)

</details>

3. <details>
    <summary><a href="#styling-formating-and-features">Styling, Formating and Features</a></summary>

      - [Head Section](#head-section)
      - [Header Section](#header-section)
      - [Game Section](#game-section)
      - [Footer Section](#footer-section)
      - [HTTP 404 Page](#http-404-page)
      - [Future Features](#future-features)

</details>

4. <details>
    <summary><a href="#validation-and-testing">Validation and Testing</a></summary>
    <ul>
    <li><a href="#html-validation">HTML Validation</a></li>
    <li><a href="#css-validation">CSS Validation</a></li>
    <li><a href="#accessibility">Accessibility</a></li>
    <li>
      <details>
      <summary><a href="#testing">Testing</a></summary>

      - [General Testing](#general-testing)
      - [Desktop Testing](#desktop-testing)
      - [Mobile](#mobile-testing)

      </details>
    </li>
    <li>
      <details>
      <summary><a href="#bugs">Bugs</a></summary>
      
      - [Fixed Bugs](#fixed-bugs)
      - [Unfixed Bugs](#unfixed-bugs-partialy-fixed)
      </details>
    </li>
    </ul>    

</details>
  
5. <a href="#deployment">Deployment</a> 
6. <a href="#credits">Credits</a>
7. <a href="#tools-and-platforms">Tools and Platforms</a>
8. <a href="#content">Content</a>
9. <a href="#media">Media</a>



***
## UX
### Visitor Goals



### Business Goals


### User Stories


***
## Visual Design
### Wireframes


### Colors
- Since this game is basically simple, I wanted to add to the dynamism of the site with various colors for fonts/backgrounds and sharper transitions between sections.
- As a result, you may see different shades of pink/purple, yellow, black and red.
- However, I made sure that everything was readable.
- Colour contrast was first verified on [WebAIM](https://webaim.org/resources/contrastchecker/).  
![Color Palette from coolors.co](assets/img/readme/palette.webp)

### Fonts
- I used a lot of different colors for the background and the letters, so I decided on just one font: Roboto from [Google Fonts](https://fonts.google.com/specimen/Roboto?query=roboto).
- This font is quite clear, legible, simple but still looks cool.  
![Font example](assets/img/readme/font.webp)

### Icons
- Icons, or rather emojis, used on the site are taken from [Get Emoji](https://getemoji.com/).
- They seemed very interesting, even though they are displayed differently on different devices/applications, which can be annoying, but again, I think all of their variants look nice.  
![Emoji Example](assets/img/readme/emoji.webp)
- I also used the rock, paper, scissors emojis to create a favicon with the help of [GIMP](https://www.gimp.org/) and [Favicon Generator](https://www.favicon-generator.org/).  
![Emoji Example](assets/img/readme/emojichoice.webp)

***
## Styling, Formating and Features
- In HTML I have used semantic elements in appropriate places and HTML entities. Whereas I used div (non-semantic) elements as container for layout and positioning.
- I did most of the positioning with Flexbox (learnd at [CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)), while I feel comfortable working with it.
- By combining the width in percentages and the maximum width in absolute units (pixels), Flexbox and thanks to the limited content of the header and footer, I achieved a responsive site without using media queries.
- For JavaScript, I wrote a flowchart on paper and tried to follow. Thanks to the resources listed in [Content Section](#content), I was able to achieve everything I set out to do ([In more detail.](#game-section)).
- I am aware that the code could be reduced and reshaped, to be more abstract. But because I'm still in the process of learning, I left it more verbose.

### Head Section
- For meta data I added character set, keywords, description, viewport, linked CSS and JavaScript file.
- I also added a favicon. I used the rock, paper, scissors emojis from [Get Emoji](https://getemoji.com/) to create a favicon with the help of [GIMP](https://www.gimp.org/) and [Favicon Generator](https://www.favicon-generator.org/).
- And title for page.

### Header Section
- I decided on a very simple header containing the title of the game which is also a link to the main page.
- The combination of shades of black and pink seemed to me an interesting choice for the header.
- Due to little content and centered text, the header is responsive.
![Website Header](assets/img/readme/header.webp)

### Game Section
- Classic Rock Paper Scissors vs Computer (CP) game, where the user chooses his choice and immediately receives a random response from the opponent (computer) together with the result of the game. The winner is decided by the number of wins, the first to win 10 times is the winner of the game.  
![Game Card Area](assets/img/readme/main-card.webp)  
- A small title "Let's Play!", which suggests that the user can start playing right away.  
![Possible Choices](assets/img/readme/choices.webp)  
- Then there are three possible choices for the user to choose from and that's where I applied JavaScript for the first time, adding event listeners for all three options so that when one of the possible choices is clicked, it is immediately written in the User's choice field (using the element proporty of innerHTML) and the following functions are launched.  
![Result](assets/img/readme/result.webp)  
- A random choice computer function, where I used methods of the Math object and switch statements to assign values to random numbers. At first I thought to do it using if statements, but for the sake of practice I decided to use switch. And the selection is entered in the corresponding field (using the element proporty of innerHTML).
- It is immediately followed by a function that determines the winner with if else statements, there are better solutions, but I decided on this one, even though it is verbose, it is currently the most readable for me. Result is entered in the corresponding field (using the element proporty of innerHTML).  
![Scoreboard](assets/img/readme/scoreboard.webp)  
- I decided to display the results using a table elements of HTML, it seemed logical to me to use because it is tabular data.
- Also a fairly simple solution for counting the score with the help of a simple function that recognizes winner/loser/tie messages with if else statements and increments score.
- To determine the final winner, I created a function that simply checks with if else statements whether the user or the computer has reached 10 wins. And if it is, JavaScript changes the style of the display element to block so that the corresponding message (winner or loser) appears.  
![Win Message](assets/img/readme/win.webp)  
![Lost Message](assets/img/readme/lost.webp)  
- For the messages, I decided to make the background a transparent black shade so that the game background is partially visible. The text is white, I think it's the most legible. I also added a link to start a new game and styled it using the colors from the palette.
- Just as I tried to make the entire java script simple, so here I tried to click on the message button with a simple onclick event to trigger a function that returns the display state of the message to none, in order to remove
- Immediately after that, the last function, which is called as part of the function to check the final winner, is started, which returns the state of the variables to empty strings and 0, resets the game.

### Footer Section
- For the footer section I chose the same background color as for the header, because it is drastically different from the game area.
- I decided to put the short rules of the game in the footer. I thought about making a separate card with the rules, but somehow it seemed to me that this solution was quite simple in line with the whole site. I emphasized the importance of the title in yellow, while the rest of the text was written in white.
- Due to the centered text and content width, the footer is also responsive.
- I included a copyright text in it with pink colored link to repositary of this game.  
![Website Footer](assets/img/readme/footer.webp)

### HTTP 404 Page
- As a small addition I designed and developed an 404 HTTP error page.
- I kept the header and footer of the main page, without Rules of the game in footer section.
- I didn't want to be it too complicated, because there should be a simple message on this page. Using the same color palette and fonts I added an error message card and an additional link to the main page.
![HTTP404 Image](assets/img/readme/404.webp)

- [Here you can find broken link as example for 404 page.](https://radule90.github.io/CI_PP_2/11)

### Future Features


***
## Validation and Testing
### HTML Validation


### CSS Validation


### Accessibility


### Testing
#### General Testing


#### Desktop Testing


#### Mobile Testing


### Bugs
### Fixed Bugs


### Unfixed Bugs (Partialy Fixed)


***
## Deployment
This site was deployed through GitHub Pages using the following steps:
1. Sign in to the GitHub website.
2. In the GitHub project repository, navigate to the Settings tab, then choose Pages from the menu
3. From the Build and deployment section select Branch: main and then save.
4. After about a minute, refresh the page and under GitHub Pages you will see a link.

The live link can be found here: [Rock Paper Scissors Game](https://radule90.github.io/CI_PP_2/).

***
## Credits
- [Code Institute](https://codeinstitute.net/de/)
- Rory Patrick Sheridan (Mentor) - Great advice and guidance
- [Mozilla Developer Networks](https://developer.mozilla.org/en-US/) - Additional learning resources
- [W3Schools](https://www.w3schools.com) - Additional learning resources
- [CSS-Tricks](https://css-tricks.com) - Additional learning resources
- [Dave Gray](https://www.youtube.com/c/DaveGrayTeachesCode) - Additional learning resources
- [Kevin Powell](https://www.youtube.com/@KevinPowell) - Additional learning resources
- [BrowserStack](https://www.browserstack.com/) - Website Testing on iOS

***
## Tools and Platforms
- [Gitpod](https://gitpod.io/) - IDE for project development
- [Github](https://github.com/) - Storing code remotely and deployment
- [JSHint](https://jshint.com/) - JSHint, a JavaScript Code Quality Tool
- [W3C Markup Validation Service](https://validator.w3.org)
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
- [CSS Autoprefixer](https://autoprefixer.github.io/) - Autoprefixer CSS online
- [Coolors.co](https://coolors.co/) - Palette generator
- [Balsamiq Wireframes](https://balsamiq.com/) - To create wireframes
- [WebAIM](https://webaim.org/resources/contrastchecker/) - Contrast checker
- [Am I Responsive](https://ui.dev/amiresponsive) - For device mockup images
- [Favicon Generator](https://www.favicon-generator.org/)
- [BrowserStack](https://www.browserstack.com/) - Testing on different devices
- [Google Fonts](https://fonts.google.com)
- [Get Emoji](https://getemoji.com/) - Icons/Emojis
- [FireShot: Full Webpage Screenshots + Annotations](https://getfireshot.com/) - Screen Capture
- [cloudconvert](https://cloudconvert.com/png-to-webp) - Online png to webp converter
- [GIMP](https://www.gimp.org/) - Raster graphics editor

***
## Content
- The following three tutorials helped me arrive at the final code solution
    - [3 ways to code Rock Paper Scissors in JavaScript (Beginner to Intermediate to Advanced!)
    ](https://www.youtube.com/watch?v=RwFeg0cEZvQ)
    - [A game of Rock Paper Scissors written in JavaScript ✋
    ](https://www.youtube.com/watch?v=n1_vHArDBRA)
    - [Web Development Tutorial - JavaScript, HTML, CSS - Rock Paper Scissors Game
    ](https://www.youtube.com/watch?v=jaVNP3nIAv0)
- Thanks to them for the amazing tutorials!!!

***
## Media
- Decorative icons/emojis are taken from [Get Emoji](https://getemoji.com/)