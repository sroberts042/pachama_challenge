To Run:
 - from root directory, run 'docker-compose up --build'
 - Front end can then be accessed from localhost:3000 in browser
 - Back end docs can be accessed from localhost:9096/docs

What I used:
- React (base), react-router-dom (routing), react-bootstrap (components)
- Python: FastAPI (base api), sqlalchemy (interacting with db)

Assumptions:
 - Forest names must be unique
 - We have the images stored in the public folder. Not using url/web based images.

Decisions and tradeoffs:
 - Decided to put all needed data in a single table for the sake of time and since this is a small project
 - I set the front-end testing up, but since I am not too skilled with testing react apps, I elected to focus on other areas of the project. As I'm writing this it just occurred to me that I didn't set up testing for the back-end...
 - I ran into a lot of trouble with docker desktop since I didn't have it installed on my personal laptop...I did not include docker desktop issues in the project time 
 - Elected to exclude the stretch goal (input/search) in favor of a more polished app
 - Mockup shown on page 2 shows country name on card which is in contrast to the text description. Elected not to do this initially, but v2 would have it as shown on mockup
 - Since the writeup asked for two separate pages, I went with react router. I would also consider displaying the data in a modal when card is clicked on (potentially animate expansion of card to larger modal with data)

TODO if I had more time:
 - Testing
 - React app:
      - Toolbar:
          - make logo bigger
      - Home page upgrades:
          - add 
          - paginate card grid, perhaps right-scrolling container for fun
          - add the input/filter/sort capabilities
          - if short description is too long, collapse it
      - Forest page could be a lot fancier:
          - if there is a use case, allow user to page to next or prev forest through right or left side of screen
          - break up the data in a more visually appealing way (more cards, or at least flex page sections) 
          - Depending on availability of more data, have modal pop over current page with that data or have sidebar on left of screen with clickable sections that would display data on right of screen depending selected section
          - add health data graph to show change over time
          - add image gallery with carosel and thumbnails below it

 - In API: 
      - area should be an int
      - forest type should be an ENUM since we are only allowed two types
      - add delete endpoint to remove forest
      - reorganize schemas/return values to only return id, name, short_descrition, forest_type, and thumbnail_filename in /forests/ endoint. The rest can be returned in the /forest/{forest_id} endpoint.
      - add /forests/ post endpoint to bulk add forests
      - create separate table for health metrics so we can store stored carbon over time

Time usage list since I got so far along before using git:
 - Session 1: 50 min total: 30 min, worked on api initial setup; 20 min, toubleshooting
 - Session 2: 30 min, api now working, need to make patch method for updating and also consider what to return in 'forests read' method
 - Session3: 30 min, setup browser router, react-bootstrap and make card. Why is react bootstrap not showing styled components? Ah...my node was out of date...Not including the update and re-init in the 4hr limit
 - Session4: 30 min, setup toolbar, cards, forest page navigation, axios, and link data, git init (little late)
 - Session 5: 30 min, card hover, toolbar title, api bug fix
 - Session 6: 45 min, styles, fix names with spaces issue, added data to db as 'source', return to home button, pachama logo
 - Session 7: 45 added image to 'forest' page, organize data on 'forest' page, cleanup, css tweaks
