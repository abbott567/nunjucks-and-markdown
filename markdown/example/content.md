## Overview

This page is an example of an accessibility evaluation. Just to highlight some of the markdown which can be compiled.

The page was tested using automated tools, manual tools and assistive technologies.

### Automated tools
We tested the page using Axe, ARC and Wave. The results are as follows:

$ div .row

$ div .col-4

| ARC Issues      | Count  |
| --------------- | ------ |
| Headings        | 1      |
| Landmarks       | 2      |
| Lists           | 1      |
| Pseudo Content  | 7      |
| Tables          | 1      |
| Forms           | 9      |
| Titles          | 2      |
| Text formatting | 25     |
| Language        | 1      |
| Links           | 1      |
| Buttons         | 4      |
| Tabindex        | 2      |
| Colour contrast | 117    |
| Parsing         | 76     |

$ /div

$ div .col-4

| Axe issues      | Count  |
| --------------- | ------ |
| Landmarks       | 192    |
| Tables          | 2      |
| Forms           | 7      |
| Language        | 1      |
| Links           | 11     |
| Buttons         | 4      |
| Tabindex        | 1      |
| Colour contrast | 116    |
| Parsing         | 45     |

$ /div

$ div .col-4

| Wave issues     |  Count |
| --------------- | ------ |
| Headings        | 4      |
| Tables          | 2      |
| Forms           | 7      |
| Text formatting | 2      |
| Language        | 1      |
| Links           | 17     |
| Buttons         | 4      |
| Colour contrast | 1      |

$ /div

$ /div

$ div .row

$ div .col-12

### Manual testing
We tested the page manually using the keyboard, mouse, trackpad and a range of tools. The tools I used are as follows:
- Chrome Dev Tools
- Web Developer
- Colour contrast checker
- Accessibility Insights

### Assistive technology testing
We tested the page using the following assistive technologies:
- Voiceover on OS X 10.15.7
- Voice Control on OS X 10.15.7
- Zoom on OS X 10.15.7
- JAWS 2020 on Edge 90.0.818.62

## Perceivable
### No alternative text
Users affected:
: Screen reader users
WCAG reference:
: [1.1.1 Non-text content]({wcagify})

Pseudo content is content which is on the page but is not part of the HTML. In this case, it is the use of icons which is causing the issue. The icons are not image files, and therefore they cannot have alternative text in the form of an `alt` attribute. The images are loaded in using italic tags `<i>` and then populated using the `::before` selector. Because you can’t add alt attributes to `<i>` tags, you’ll need to add `aria-label` attribute so it is clear to the user what the icons are. For example, the plus (+) icon on the tools section would need a text alternative added so that when a screen reader highlights it the correct description is announced:
```html
<i class="glyphicon glyphicon-plus" aria-label="Expand tools menu"></i>
```

### No H1 on the page
Users affected:
: Everyone
WCAG reference:
: [1.3.1 Info and relationships]({wcagify})

Every page should have a heading level 1. This orientates users on the page. For example, on the "my competency" page you’d expect to have:

``` html
<h1>My competency</h1>
```

## Operable
### Reliance on mouse
Users affected:
: Keyboard users
WCAG reference:
: [2.1.1 Keyboard]({wcagify})

There are elements on the page which can only be interacted with if you're using a mouse. The info icon, the comment icon, and the X icon all cannot be accessed via a keyboard so you cannot access any of the additional information or leave any feedback.

### No skip-link
Users affected:
: Screen reader users
: Keyboard users
WCAG reference:
: [2.4.1 Bypass Blocks]({wcagify})

Keyboard and screen reader users don’t use a mouse. They will move through the elements of the page in a sequential manner. For example, using the tab key. Bypass blocks outlines that you need a way to skip over repeated content on each page so that the user can remain efficient. Usually this is done with a skip link which is the first thing inside the body of the page. When the user hits the tab key, the skip link appears and when you press enter it skips the user past the navigation menus etc. Without a skip-link the user has to tab through dozens of links on every page to get to the content. To see an example of a skip link, go to [GOV.UK](https://gov.uk) and press the tab key.

## Understandable
### No language set
Users affected:
: Screen reader users
WCAG reference:
: [3.1.1 Language of page]({wcagify})

Screen readers have many language configurations, so the page language needs to be set to make sure the screen reader known which configuration it should be using. This means it gets the pronunciation right and doesn't try to pronounce English using a different language setting. The language attribute should be set on the `<html>` tag. For example:
```html
<html lang="en">
```

## Robust
### No main landmark
Users affected:
: Screen reader users
: Keyboard users
WCAG reference:
: [4.1.2 Name, Role, Value]({wcagify})

The `<main>` tag of a page is where the content goes. On every page this is where users expect to find the content for that particular page. This page does not have a main element. It is using a `<div>` tag which has a class of main, but not a role of main. For example:

```html
<div class="main">
```

A class is only for styling. It has no semantic meaning. This should be a main tag or should have the role of main. For example:

```html
<main class="main">
```
or
```html
<div class="main" role="main">
```

### Non interactive elements in the tab order
Users affected:
: Screen reader users
: Keyboard users
WCAG reference:
: [4.1.2 Name, Role, Value]({wcagify})

There is an attribute applied to the sidebar and the tree view which puts them in the tab order despite them not being interactive. Anything which has a tabindex equal to or more than 0 will then be able to be tabbed to by the keyboard. If you need to use a tabindex for Javascript functionality, then you should use `tabindex="-1"`. By using -1 you can use Javascript to focus the element but the keyboard won't try to interact with it.

### Popup not announced
Users affected:
: Screen reader users
WCAG reference:
: [4.1.3 Status message]({wcagify})

When you click in the info icon there is a pop-up dialogue. It would probably be impossible to open this with a screenreader as you cant access it with a keyboard, but if you manage it, then it isn't clear what has popped up. 

The popup is announced as "print job profiles". But the heading is the profile you clicked on. For example: Guide - Behaviours - Seeing the bigger picture.

$ /div

$ /div
