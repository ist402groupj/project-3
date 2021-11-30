# Team notes
This is for maintaining communication about your team's working meetings to "ship" the project.

## Meeting notes
These are notes to be maintained PER date that you meet. What you did and what the next steps are
### Meeting Date

#### What we did:


#### What we'll do next


## Status check ins
These are dedicated status check-ins as this is a multi-week project
### Check-in 1
### What project / issue your picking (link to it)
- [trading-card] Trading cards are awesome, let's make some #880 https://github.com/elmsln/issues/issues/880  (first choice)

-  [post-card] Make a remixable post card for hax #879 https://github.com/elmsln/issues/issues/879 (second choice)

### A hand drawn / computer sketch / XD / some annotation visually of what needs to be done or what pieces get broken out. This could be drawn on over top of a screen shot of the item or a photo of whiteboard sketches. Whatever make the most sense to you.
- ![image](https://user-images.githubusercontent.com/81307828/140401508-be1fe0ef-ccfa-44f7-8dc9-1e18c51d61bf.png)

### Initial questions / unknowns
- size and dimensions of this card?
-  repsonsiveness> (mobile, tablet, desktop)
### What elements do you expect are needed for this design?
- visual design; layout/appearance
- color scheme; we want our color scheme to match our associated person
- typography; formatted to match the overall theme
-  navigation
-   mobile responsiveness
### What properties do you expect these to have?
- shape
-  color
-  text
### Slots?
- images
- heading
-  body
### What CSS / Styling unknowns are there presently?
-  color scheme
### What states does it have? can you click / hover to engage with it?
-  Hover State: hover over the frame of the card, photo, and the personality traits
-   Focus State
-   
### What properties need mapped to HAX / the storybook? What can the user interact with?
- 
### Check-in 2
-  We are planning to meet this week to work on Project 3 
-  We plan to delegate tasks between the team members so that each person is working on a section for project 3
- We have to check in with other group members working on the same project to bounce off ideas off of each other. 
- We are still developing and brainstorming the design elements 
### Check-in 3
- Continuing group meet ups to further review and change parts of project 
- Ideas for the cards (4x); professor ollendyke, nittany lion, seasoned, halloween characters, holiday characters, etc.
- Continuing to check in with other groups to compare progress
- We are progressing on the styling and layout of the html that renders
- Working on addressing the current [issues](https://github.com/ist402groupj/project-3/issues/3)
### Check-in 4
- Plan for completing our project: [Trading Card](https://github.com/elmsln/issues/issues/880)

- Specific requirement for trading card:
- Creating 1 fully documented variation per team member (3 teammates == 3 trading cards implemented in the demo)
- haxProperties wiring with working boilerplate demo
- variables for images and any textual aspects which are variable
- color input for border / primary color needed
- this design can be made inaccessible; so simple-colors is needed in order to ensure that color contrast ratios can be maintained between text color and the background color that renders the spaces
- Each line should also optionally support an icon from the simple-icons library
- slots should be available for custom implementation
- Demo must include an implementation of rendering cards by running through a map function in order to stamp data from an array into the cards.
- scaled down proportionally for mobile (their version appears to just scale as you drag in, possibly using css scale or SVG capabilities)
- Bonus: Add support for flipping the card over / having a "back" to the card +2 (this would have support for an icon / text / image that is the "back" of the card and then a state change for which side the card is to display)

- Project Three Rubric Requirements:
### General Requirements:
- Final result matches the composite / issue selected, is polished, wired to HAX, and - 4%
- Issue specific requirements are satisfied in the design and implementation of the element - 10%
- A meaningful automated test for the element you produce - 1%
- A story that allows for leveraging properties - 1%
- Teamnotes maintained with status updates, on github, published to npm in the end - 4%

### Bonus Opportunities:
- If your element can benefit from i18n - implement internationalization support in your demo. This means setting the language to one other than english (page level) and then translate your element's textual areas to another language. +1% per language you add, up to 3 languages (though you'll need to add more demo pages to illustrate this or create a select box that changes the page's language)
- Add lazyloading support for all assets and the element itself +1% More to be announced as we move forward


