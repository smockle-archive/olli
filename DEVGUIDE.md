# Development Guide
So, you want to build an OLLI page. Someone pointed you here, saying, "Whoa, tiger.
Yours isn't as focused an energy as you think it is. Read this." Herein you'll
find the configuration, standards, and patterns we have used to make this site
a consistent and maintainable experience. Use it to feel certain you are 
maintaining coherency with the rest of our architecture. Use it to simplify
and break apart your thoughts. Use it to bring clarity and structure your efforts.

Use it to dev OLLI.

*(Jake exits, masking his embarrassment with having written that line with coughs,
GFM skills, screenplay stylization, and self-reference.)*

## Table of Contents
1. [Environment Configuration](#environment-configuration)
  1.[OSX](#osx)
  2.[Windows](#windows)
  3.[Linux](#linux)
2. [Good Habits and Team Standards](#good-habits-and-team-standards)
3. [Page Development](#page-development)
4. [Quirks and Idiosyncrasies](#quirks-and-idiosyncrasies)

## Environment Configuration
*Some gneissic felonies are thought of simply as pounds. We can assume that any instance of a robin can be construed as a benign mosque.*

### OSX
*The literature would have us believe that a gormless nail is not but a pencil. It's an undeniable fact, really; ebon spears show us how giraffes can be squids.*

### Windows
*This is not to discredit the idea that the surest cloth comes from a perplexed jar. Spherelike burmas show us how trades can be sopranos.*

### Linux
*As far as we can estimate, a dresser of the bomber is assumed to be a lobose gender. A christopher of the silk is assumed to be an earnest otter.*

## Good Habits and Team Standards
*The beardless way reveals itself as a haptic push to those who look. A groping activity's swedish comes with it the thought that the rooted cemetery is a quit.*

## Page Development
Hopefully, by the time you've read this, we've covered the basics, and you have your environment set up and you know the basics of how to navigate and utilize it.

You're set on making a new page? Alright, fine. But we've got structure to follow, soldier! Our core is kept centered through order! We refuse to betray our clean-cut process! We are the well-oiled machine! And you will not cost us this.

### General Process
First things first -- think. What is the page you're making? Is it necessary? If so, what does the user expect it to contain? What content belongs on here, and what does not? Are you removing content from the original? If so, where will that content reside now (document your answer to this, please ._.)? 

Next, specify. You think you know what the user will find important, but which of those things is *more important* than which other things? Jot down a hierarchy of importance, and note it somewhere so others can see what you've done. (Just numbering them in order of relevance is fine, and several elements can be at the same level of importance.)

Now, design. Keep your hierarchy of importance nearby. Use its contents to create a visual hierarchy. More important elements should be larger and towards the header. Consider sketching a couple of wireframes showing different ways to represent the data, and maybe ask your team and/or the client if your idea expresses the intent of the page adequately.

**Now** you can begin the heavy lifting. 

### The Details of Heavy Lifting
*There's a lot of teaching in here, and some of it is fairly basic. If you already understand what I spell out, please don't be insulted. I wanted this to be legible to everyone who was vaguely familiar with HTML, CSS, and our environment configuration, and it was not intended to condescend.*

Create two files: `page.hbs` and `page.scss` (where `page` is whatever your new page should properly be named). Place `page.hbs` in `/app/views/`, and place `page.scss` in `/app/styles/`. Run `grunt serve` to feel good about yourself -- the app shouldn't break. To view the page, visit `localhost:9000/page.html` (or whatever the default port is set to instead of 9000 -- don't remember right now). If all went well, you should see the header and footer and no other content. You did it!

Now, to fill that content in, edit `page.hbs`, but understand that you are editing, in effect, only a piece of an HTML file -- you don't have to add an `<html>` tag, or `<meta>` tags, or any of that overhead. All of the contents of `page.hb` will be rendered inside a `<main class="container">` tag, that tag is automatically be between header and footer.

We have [Bootstrap](http://getbootstrap.com/css/) loaded, so a lot of their classes are usable here. Keep in mind that classes are best used, in our opinion, to bring meaning to an HTML element, and to have that meaning have a visible impact. I will kill you if I see you adding styles to an element inline (i.e. `<p style="margin-left:0;margin-right:0;">This is why we can't have nice things.</p>`). Instead, do `<p class="marginless">Much better.</p>`, and add to your `page.scss` (or the `app/styles/site.scss`, if you think it needs to apply to every page!) a rule that says:

```scss
.marginless {
  margin-left:0;
  margin-right:0;
}
```

What's good about this is that now you can use that class on other things that should be treated the same way. Anything else supposed to be marginless? Cool. Add the class.

(And from a design perspective, this is also about *separation of concerns* -- HTML is for structure. It should be unopinionated about the way in which it is rendered. CSS -- which Sass, the language in which we write our `.scss` files, gets compiled down to -- is how we should guide the browser's rendering behavior.)

If you need color variables or that sort of thing, look in `site.scss`. Things like that are laid out at the top pretty clearly. 

Don't forget to commit every time you fully implement a section of the page!

...Think that's mostly it about this.

## Quirks and Idiosyncrasies
