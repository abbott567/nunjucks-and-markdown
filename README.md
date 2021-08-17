# Simple Documents using Nunjucks and Markdown

## Usage
1. Clone the repository
2. Run `npm install`

### To build
1. Run `npm run build`
2. Observe the `output` folder

### To preview
1. Run `npm start`
2. Open [http://localhost:3000](http://localhost:3000) in a browser

## How it works.
The compiler will use Gulp, Nunjucks and MarkedJS to compile correctly structured folders in the `markdown` folder, to the `output` folder.

Each document needs a `config.js` and a `content.md`. The config file defines the H1, title and which layout you want to compile into. Other than this, you just need to write your markdown into the `content.md` file. 

> Note for now: As the H1 is currently defined in the config file, you should start your markdown from a heading level 2.

```javascript
// config.js
module.exports = {
  h1: 'Example document',
  title: 'Compile Markdown and Nunjucks',
  layout: 'with-toc',
  document_info: {
    Author: 'Craig Abbott'
  }
}
```

## Config
The config file is important. It won't compile without it. You need to make it exportable and you need to specify a layout. The layout is the filename in the `scr/views/layouts/` folder you wish to use. You can add as many templates as you like, but you need to specify which one you want to compile to in your config file.

```javascript
// config.js
module.exports = {
  h1: 'Example document',
  title: 'Compile Markdown and Nunjucks',
  layout: 'with-toc',
  document_info: {
    Author: 'Craig Abbott'
  }
}
```

## Table of contents / Navigation
The table of contents is automatically generated using the `lib/toc-generator.js` module. It will scrape the heading levels and automatically generate the table of contents for H2's and H3's.

## Block Elements
There are custom block elements defined which override markedJS native behaviour. You can use a definition list with the following syntax:

```markdown
Definition term
: Definition description
```

You can also define multiple definitions for a term. For example:

```markdown
Definition term:
: Definition description 1
: Definition description 2
```

### HTML Tags
You can inject html tags with markdown without having to use actual HTML. You can define the tag using the dollar (`$`) symbol and padding it with blank lines top and bottom. For example:

```markdown

$ div .example #example

```

This would output

```html
<div class="example" id="example">
```

You still need to remember to close the tags. For example

```markdown

$ div .example #example

## More markdown code
...

$ /div

```

### Tables
Use tables sparingly. They create accessibility issues if they're too complex. 

To make a table you have to physically draw it out using pipe and hyphen characters. The hyphens are used to create table headers. Your table should always have headers. For example:

```markdown
| Name          | Job role   |
| ------------- | ---------- |
| John Smith    | Designer   |
| Jane Doe      | Developer  |
```

The pipes don't have to line up. But it's easier to see what's going on if you take the time to make your table markup neat. The example outlined would produce the following when compiled:

| Name          | Job role   |
| ------------- | ---------- |
| John Smith    | Designer   |
| Jane Doe      | Developer  |

### Paragraphs and Line Breaks

A paragraph is one or more consecutive lines of text, separated by one or more blank lines. (A blank line is any line that looks like a blank line -- a line containing nothing but spaces or tabs is considered blank.) Normal paragraphs should not be indented with spaces or tabs.

Markdown supports "hard-wrapped" text paragraphs. This differs significantly from most other text-to-HTML formatters (including Movable Type's "Convert Line Breaks" option) which translate every line break character in a paragraph into a `<br />` tag.

When you *do* want to insert a `<br />` break tag using Markdown, you end a line with two or more spaces, then type return.

### Headers

Heading level is set using hashes. For example:

```markdown
# Heading = <h1>Heading</h1>
## Heading = <h2>Heading</h2>
### Heading = <h3>Heading</h3>
#### Heading = <h4>Heading</h4>
##### Heading = <h5>Heading</h5>
###### Heading = <h6>Heading</h6>
```

### Blockquotes

Markdown uses email-style `>` characters for quoting. If you're
familiar with quoting passages of text in an email message, then you
know how to create a blockquote in Markdown. It looks best if you hard wrap the text and put a `>` before every line:

#### Paragraphs in block quotes
> This is a blockquote with two paragraphs.
>
> It's best practice to use a > at the start of each line.

```markdown
> This is a blockquote with two paragraphs.
>
> It's best practice to use a > at the start of each line.
```

Blockquotes can be nested (i.e. a blockquote-in-a-blockquote) by
adding additional levels of `>`:

#### Nested paragraphs
> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.

```markdown
> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.
```

### Lists

Markdown supports ordered (numbered) and unordered (bulleted) lists.

To mark an unordered list, use either a `-`, `+` or `*` at the start of the line. For example:

```markdown
- Item 1
- Item 2
```

Ordered lists use numbers followed by full stops. For example:

```markdown
1.  Item 1
2.  Item 2
```

List items may contain multiple paragraphs. Each subsequent paragraph in a list item must be indented by either 4 spaces or one tab:

1.  This is a list item with two paragraphs.

    This is the second paragraph.

```markdown
1.  This is a list item with two paragraphs.

    This is the second paragraph.
```

### Code blocks

Pre-formatted code blocks are used for writing about code. Rather than forming normal paragraphs, the lines of a code block are interpreted literally. Markdown wraps a code block in both `<pre>` and `<code>` tags.

Code blocks are wrapped in blocks using triple back-ticks ` ``` `. You can also add the language you want to use for highlighting. For example: ` ```html `.

````markdown
```html
<div>
  An example of HTML
</div>
```
````

## Span Elements

### Links

To make a link, wrap the text in square brackets and the url in parenthesis.

For example:

```markdown
...using the [GOV.UK Design System](https://design-system.service.gov.uk/)
```

### Emphasis

Markdown treats asterisks (`*`) and underscores (`_`) as indicators of
emphasis. Text wrapped with one `*` or `_` will be wrapped with an
HTML `<em>` tag; double `*`'s or `_`'s will be wrapped with an HTML
`<strong>` tag. For example:

```markdown
*single asterisks*
_single underscores_

**double asterisks**
__double underscores__
```

### Code - inline
You can use a single back-tick to use code on a single line, for example if you were describing a single `<div>` tag. 

```markdown
...describing a single `<div>` tag.
```
