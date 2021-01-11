# Assignment 2
Name: Chua Dong En<br/>
Class: P01<br />
ID: 10202623A<br />
Website URL: https://chuadongen.github.io/Assignment-2/ID_S10202623_Assg2_website<br/>

This project is a word search website. This website only has a main page. This website provides the user a quick and easy search for the meanings of a word.

## Warning
* API use is monthly limited, so please test wisely
* RapidAPI key is left in js, I don't know how to encrypt it
* Excessive tests may cost

## Todo
| Task        | Status           | 
| ------------- |:-------------:| 
| Test out api     | done |
| Append api data to html      | done |
| Use bootstrap to layout page   |   done   | 
| Loop image appending |   done    |   
| Finish making the README.mb |     done  |  
| Error handling for data and images|   done    |  
| Media query |   done    |   
| Text overflow and hover feature |   done    |  
| Suggestion feature |   done    |  
## Design Process
While designing this website, I had to think of my users and how they would use and navigate the website. As a result, I tried to imagine and understand my users from their point of view.

1. A user that is looking for the meaning of a word would want multiple definitions instead of one, therefore I implemented multiple dictionary apis.
2. A user would also want examples and images of the word, therefore I implemented an image search api.


As a web developer, I have a personal "rule" I always follow. That "rule" is to always develop bit size code and always check and ensure that they contain no errors. By developing in this manner, it is easier to troubleshoot and error check, as it is easier to look and detect errors in a small chunk of code than a large chunk of code. This makes developing any software whether is it a website or a programme much easier and faster.

I based my website off my wireframe and as I implemented new features such as search feature and hover feature I corrected my wireframe accordingly.



## Features
Since this is a word search website. I have implemented several features to ensure that the user is able to get the needed information as well as some ease of life features.<br/>
1. Definition and search feature. The feature recieves and displays data from 4 different dictionary apis such as definition, examples, pronounciations and word type.
2. Image search feature. The search feature also includes images to allow the user to have a better idea of the meaning of the word.
3. Hover feature. As the length of a definition varies according to the result, I have cut it off with text overflow and overflow. Instead, I implemented a hover feature that increased the height of the dictionary to show the full definitions.
4. Search suggestion feature. To make the user have a smoother experience, I implemented a search suggestion feature that uses api to display 5 search suggestions for every letter the user enters.
5. External search feature. In the case when a user wants more results, I have linked external sites such as google or youtube to allow the user to navigate to the external site with the query already searched.
## Future Features
1. Make content text clickable to search for text as query, not implemented as I had to change focus to text suggestion feature
2. Translation feature, not implemented as I could not figure out translation apis
3. Text to speech or voice feature, not implemented as I could not figure out the apis
## Testing
Testing is a vital part in progamming and website development. It ensures that what we are building works and is functional. Therefore, comprehensive testing methods has to be in place to help expose errors.
### Online validators
To check and test my website, I used w3school's CSS and Markup service. This allowed me to validate my code and ensure that there are no errors.
1. W3C CSS Validation Service: https://jigsaw.w3.org/css-validator/ (negative padding)
2. W3C Markup Validation Service: https://validator.w3.org/ (html lang, title, stay img tags)
3. Alt tag checker: https://www.google.com/url?q=https://rushax.com/tools/alt-tag-checker/&sa=D&ust=1610201918001000&usg=AOvVaw1fzVBkk-8V-eKB4Yfx9BRA (fixed missing alt tags)
4. JS Hint: https://jshint.com/
### Browsers
To make sure my website works across browsers, I tested it both on chrome and firefox to check all of the implemeneted features
### Devices
To make sure the media query is working, I tested it by resizing it on chrome using inspector mode as well as using the wbesite on my physical mobile device
## Technology
* HTML
* CSS
* Bootstrap
    * To make media query simpler
* Jquery
    * Make event listeners and DOM manipulation simpler


### Links
To test my links, I had to ensure that internal links did not open a new page, while external links all opened a new page when clicked on. This is vital, as it improves the user experience.
## Credits

### Icons
* Google: https://www.pngkit.com/bigpic/u2w7q8q8u2o0o0a9/
* Youtube: https://www.stickpng.com/img/icons-logos-emojis/social-media-icons/circle-youtube-icon
* Duckduckgo: https://duckduckgo.com/about
* Oxford:https://apps.apple.com/sg/app/oxford-advanced-learners-dict/id553809551?mt=12
* Merriam-Webster: https://commons.wikimedia.org/wiki/File:Merriam-Webster_logo.svg
* Bing: https://www.iconfinder.com/icons/3069754/bing_circle_round_icon_search_engine_icon
### Guides
* StackOverflow