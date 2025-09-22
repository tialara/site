# Basscss v8.0.2

Low-Level CSS Toolkit 2.13 KB

[![Build Status](https://travis-ci.org/basscss/basscss.svg)](https://travis-ci.org/basscss/basscss)

[Tweet](https://twitter.com/share)!function(d,s,id){var js,fjs=d.getElementsByTagName(s)\[0\],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document, "script", "twitter-wjs");

#carbonads { display: inline-block; font-size: 14px; line-height: 1.25; text-align: left; } #carbonads a, #carbonads a:hover { text-decoration: none; color: inherit; } #carbonads span { display: block } #carbonads > span::before, #carbonads > span::after { content: ''; display: table; } #carbonads > span::after { clear: both; } .carbon-img { float: left; margin-right: .5em; } .carbon-img > img { display: block } .carbon-text { overflow: hidden } .carbon-poweredby { float: left; margin-top: .25em; opacity: 0.5; } @media (min-width: 40em) { #carbonads { max-width: 320px; } }

[Getting Started](#getting-started)

[Type Scale](#basscss-type-scale)

[Typography](#basscss-typography)

[Layout](#basscss-layout)

[Align](#basscss-align)

[Margin](#basscss-margin)

[Padding](#basscss-padding)

[Position](#basscss-position)

[Grid](#basscss-grid)

[Flexbox](#basscss-flexbox)

[Border](#basscss-border)

[Hide](#basscss-hide)

## [Lightning Fast Modular CSS with No Side Effects](#features)

### Code with Confidence

Using clear, humanized naming conventions, Basscss is quick to internalize and easy to reason about while speeding up development time with more scalable, more readable code.

### No Side Effects

Things behave exactly as expected with immutable utilities and styles that do one thing well to help prevent common pitfalls with CSS.

### Composable

Reusable, interoperable styles work like building blocks to lay the foundation for any stylesheet and can be mixed and matched in any number of combinations.

### Designed for Design

Basscss strikes a balance between consistency and flexibility to allow for rapid prototyping and quick iterative changes when designing in the browser.

### Responsive by Default

Basscss provides lightweight, performant styles and flexible utilities to design for any device and to help reduce boilerplate in stylesheets.

### Unassuming

Modular and customizable typography and layout styles don’t dictate what things should look like and play well with other stylesheets and frameworks.

> “Basscss is an atomic class based CSS library... A very good one! But I really hated it at the time. But I don’t hate it anymore!”
>
> [– Sam Thurman](https://medium.com/buzzfeed-design/how-i-learned-to-stop-worrying-and-love-the-atomic-class-98d6ccc45781#.yqnsfkbx2)

> “I used Basscss for http://nodeconf.com and it was such a pleasure to work with. I think I’ll use it for my personal site too!”
>
> [– Karolina Szczur](https://twitter.com/fox/status/572441586983936000)

> “Writing CSS is easy. Writing long lived maintainable CSS in a real webapp is hard. Until Jon Gold introduced me to \[Basscss\]”
>
> [– Joe Walnes](https://twitter.com/joewalnes/status/668126388499574784)

> “Basscss is so good it’s worth losing sleep over tonight.”
>
> [– Justin Maxwell](https://twitter.com/303/status/622293670583087104)

> “Probably does everything you use Bootstrap for, but in 3.5kb”
>
> [– Michael Martin](https://twitter.com/problogdesign/status/621730043920785408)

> “Been using Basscss to rapidly prototype ideas for BuzzFeed. So good.”
>
> [– Cap Watkins](https://twitter.com/cap/status/571511244835840000)

## [Getting Started](#getting-started)

npm install basscss@8.0.2

Or use the [CDN Link](https://unpkg.com/basscss@8.0.2/css/basscss.min.css)

<link href="https://unpkg.com/basscss@8.0.2/css/basscss.min.css" rel="stylesheet">

## [Type Scale](#basscss-type-scale)

This module provides utilities for adjusting font-size.

The `.h1` – `.h6` font-size utilities can be used to override an element’s default size.

Pastrami 1

Pastrami 2

Pastrami 3

Pastrami 4

Pastrami 5

Pastrami 6

<p class\="h1"\>Pastrami 1</p\>
<p class\="h2"\>Pastrami 2</p\>
<p class\="h3"\>Pastrami 3</p\>
<p class\="h4"\>Pastrami 4</p\>
<p class\="h5"\>Pastrami 5</p\>
<p class\="h6"\>Pastrami 6</p\>

These are especially useful for altering the visual appearance of semantically correct headings.

## Larger than default h2 style, but semantically correct

<h2 class\="h1"\>Larger than default h2 style, but semantically correct</h2\>

[Top](#)

## [Typography](#basscss-typography)

Change typographic weights, styles, and alignment with these utility styles.

Bold

Regular

Italic

Caps

Left align

Center

Right align

Justify Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.

No wrap

Underline

Truncate

Font Family Inherit

Font Size Inherit

Text Decoration None

<p class\="bold"\>Bold</p\>
<p class\="regular"\>Regular</p\>
<p class\="italic"\>Italic</p\>
<p class\="caps"\>Caps</p\>
<p class\="left-align"\>Left align</p\>
<p class\="center"\>Center</p\>
<p class\="right-align"\>Right align</p\>
<p class\="justify"\>Justify Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.</p\>
<p class\="nowrap"\>No wrap</p\>
<p class\="underline"\>Underline</p\>
<p class\="truncate"\>Truncate</p\>
<p class\="font-family-inherit"\>Font Family Inherit</p\>
<p class\="font-size-inherit"\>Font Size Inherit</p\>
<a class\="text-decoration-none"\>Text Decoration None</a\>

## Lists

To remove default list styling, use `.list-reset`.

-   List Reset
-   Removes bullets
-   Removes numbers
-   Removes padding

<ul class\="list-reset"\>
  <li\>List Reset</li\>
  <li\>Removes bullets</li\>
  <li\>Removes numbers</li\>
  <li\>Removes padding</li\>
</ul\>

To set lists inline, use utilities.

-   Half-Smoke
-   Kielbasa
-   Bologna
-   Prosciutto

<ul class\="list-reset"\>
  <li class\="inline-block mr1"\>Half-Smoke</li\>
  <li class\="inline-block mr1"\>Kielbasa</li\>
  <li class\="inline-block mr1"\>Bologna</li\>
  <li class\="inline-block mr1"\>Prosciutto</li\>
</ul\>

[Top](#)

## [Layout](#basscss-layout)

Change the default document flow with these display, float, and other utilities.

## Display

To adjust the display of an element, use the `.block`, `.inline`, `.inline-block`, `.table`, and `.table-cell` utilities.

inline

inline-block

[block](#)

table-cell

table-cell

<div class\="inline"\>inline</div\>
<div class\="inline-block"\>inline-block</div\>
<a href\="#" class\="block"\>block</a\>
<div class\="table"\>
  <div class\="table-cell"\>table-cell</div\>
  <div class\="table-cell"\>table-cell</div\>
</div\>

## Overflow

To adjust element overflow, use `.overflow-hidden`, `.overflow-scroll`, and `.overflow-auto`. `.overflow-hidden` can also be used to create a new block formatting context or clear floats.

## Floats

Use `.clearfix`, `.left`, and `.right` to clear and set floats.

.left

.right

<div class\="clearfix border"\>
  <div class\="left border"\>.left</div\>
  <div class\="right border"\>.right</div\>
</div\>

## Max Width

Use `.fit` to set max-width 100%.

![](http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder.svg)

<div class\="col-3"\>
  <img class\="fit" src\="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder.svg" />
</div\>

Use max-width utilities to control the width of containers.

Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.

Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.

Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.

Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.

<p class\="max-width-1"\>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.</p\>
<p class\="max-width-2"\>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.</p\>
<p class\="max-width-3"\>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.</p\>
<p class\="max-width-4"\>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.</p\>

## Box-Sizing Border-Box

Use `.border-box` to set box-sizing border-box per element.

.border-box

<div class\="col-6 p2 border-box border"\>.border-box</div\>

## Media Object

Create a media object using basic utilities.

Image

**Body** Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.

<div class\="clearfix mb2 border"\>
  <div class\="left p2 mr1 border"\>Image</div\>
  <div class\="overflow-hidden"\>
    <p\><b\>Body</b\> Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.</p\>
  </div\>
</div\>

## Double-Sided Media Object

For a container with a flexible center, use a double-sided media object.

Image

Image

**Body** Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.

<div class\="clearfix mb2 border"\>
  <div class\="left p2 mr1 border"\>Image</div\>
  <div class\="right p2 ml1 border"\>Image</div\>
  <div class\="overflow-hidden"\>
    <p\><b\>Body</b\> Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.</p\>
  </div\>
</div\>

[Top](#)

## [Align](#basscss-align)

Adjust vertical alignment with these utilities.

To adjust the alignment of an element, use `.align-baseline`, `.align-top`, `.align-middle` or `.align-bottom`. The vertical-align property only applies to inline or table-cell boxes.

# Hamburger

.align-baseline

.align-top

.align-middle

.align-bottom

<div class\="overflow-auto"\>
  <div class\="table"\>
    <div class\="table-cell"\><h1\>Hamburger</h1\></div\>
    <div class\="table-cell align-baseline"\>.align-baseline</div\>
    <div class\="table-cell align-top"\>.align-top</div\>
    <div class\="table-cell align-middle"\>.align-middle</div\>
    <div class\="table-cell align-bottom"\>.align-bottom</div\>
  </div\>
</div\>

[Top](#)

## [Margin](#basscss-margin)

Immutable margin utilities are based on a global white space scale defined with custom properties. These can dramatically help reduce the size of large stylesheets and allow for greater flexibility and quicker iteration when designing in the browser.

## Naming Convention

Due to the ubiquitous nature of setting margin, these utilities use a shorthand naming convention.

Shorthand

Description

m

Margin

t

Top

r

Right

b

Bottom

l

Left

x

X-axis (left and right)

y

Y-axis (top and bottom)

n

Negative

0

0 reset

1

\--space-1 (default .5rem)

2

\--space-2 (default 1rem)

3

\--space-3 (default 2rem)

4

\--space-4 (default 4rem)

Change or reset default margins using the white space scale. Negative x-axis margins are used to offset margins and padding of child elements. Margin auto is used to horizontally center block-level elements with a set width.

.m0  { margin:        0 }
.mt0 { margin-top:    0 }
.mr0 { margin-right:  0 }
.mb0 { margin-bottom: 0 }
.ml0 { margin-left:   0 }
.mx0 { margin-left:   0; margin-right:  0 }
.my0 { margin-top:    0; margin-bottom: 0 }

.m1  { margin:        var(--space-1) }
.mt1 { margin-top:    var(--space-1) }
.mr1 { margin-right:  var(--space-1) }
.mb1 { margin-bottom: var(--space-1) }
.ml1 { margin-left:   var(--space-1) }
.mx1 { margin-left:   var(--space-1); margin-right:  var(--space-1) }
.my1 { margin-top:    var(--space-1); margin-bottom: var(--space-1) }

.m2  { margin:        var(--space-2) }
.mt2 { margin-top:    var(--space-2) }
.mr2 { margin-right:  var(--space-2) }
.mb2 { margin-bottom: var(--space-2) }
.ml2 { margin-left:   var(--space-2) }
.mx2 { margin-left:   var(--space-2); margin-right:  var(--space-2) }
.my2 { margin-top:    var(--space-2); margin-bottom: var(--space-2) }

.m3  { margin:        var(--space-3) }
.mt3 { margin-top:    var(--space-3) }
.mr3 { margin-right:  var(--space-3) }
.mb3 { margin-bottom: var(--space-3) }
.ml3 { margin-left:   var(--space-3) }
.mx3 { margin-left:   var(--space-3); margin-right:  var(--space-3) }
.my3 { margin-top:    var(--space-3); margin-bottom: var(--space-3) }

.m4  { margin:        var(--space-4) }
.mt4 { margin-top:    var(--space-4) }
.mr4 { margin-right:  var(--space-4) }
.mb4 { margin-bottom: var(--space-4) }
.ml4 { margin-left:   var(--space-4) }
.mx4 { margin-left:   var(--space-4); margin-right:  var(--space-4) }
.my4 { margin-top:    var(--space-4); margin-bottom: var(--space-4) }

.mxn1 { margin-left: \-var(--space-1); margin-right: \-var(--space-1); }
.mxn2 { margin-left: \-var(--space-2); margin-right: \-var(--space-2); }
.mxn3 { margin-left: \-var(--space-3); margin-right: \-var(--space-3); }
.mxn4 { margin-left: \-var(--space-4); margin-right: \-var(--space-4); }

.ml-auto { margin-left: auto }
.mr-auto { margin-right: auto }
.mx-auto { margin-left: auto; margin-right: auto; }

## Resetting Margins

To increase information density and to better align elements, remove default margins from typographic elements using the margin utilities.

# No margin

# No margin top

# No margin bottom

<h1 class\="m0"\>No margin</h1\>
<h1 class\="mt0"\>No margin top</h1\>
<h1 class\="mb0"\>No margin bottom</h1\>

## Add Spacing

Add spacing around elements using a combination of margin utilities.

Hamburger

Hamburger

Hamburger

<div class\="mxn1"\>
  <div class\="m1"\>Hamburger</div\>
  <div class\="m1"\>Hamburger</div\>
  <div class\="m1"\>Hamburger</div\>
</div\>

The negative margin utilities also work with padded children.

Padded div

<div class\="border"\>
  <div class\="mxn2"\>
    <div class\="px2 border"\>Padded div</div\>
  </div\>
</div\>

## Center Elements

Block elements with a set width can be centered with `.mx-auto`.

![](http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg)

<img src\="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg"
  width\="96"
  height\="96"
  class\="block mx-auto" />

## Space Flexbox Items

The `.ml-auto` and `.mr-auto` utilities can be used to add spacing around flexbox items.

Hamburger

Hot Dog

<div class\="flex"\>
  <div class\="ml-auto"\>Hamburger</div\>
  <div\>Hot Dog</div\>
</div\>

Margins should never be declared outside of these utilities. This is meant to help create consistency and avoid magic numbers. If, for some reason, the default white space scale does not suit your design, customize and extend it before using it.

[Top](#)

## [Padding](#basscss-padding)

Immutable padding utilities are based on a global white space scale defined with custom properties. These can dramatically help reduce the size of large stylesheets and allow for greater flexibility and quicker iteration when designing in the browser.

## Naming Convention

Due to the ubiquitous nature of setting padding, these utilities use a shorthand naming convention.

Shorthand

Description

p

Padding

t

Top

r

Right

b

Bottom

l

Left

x

X-axis (left and right)

y

Y-axis (top and bottom)

n

Negative (margin only)

0

0 reset

1

\--space-1 (default .5rem)

2

\--space-2 (default 1rem)

3

\--space-3 (default 2rem)

4

\--space-4 (default 4rem)

Padding utilities are only available in symmetrical orientations. This is to normalize the spacing used around elements and maintain a consistent visual rhythm.

.p0  { padding: 0 }
.pt0 { padding-top: 0 }
.pr0 { padding-right: 0 }
.pb0 { padding-bottom: 0 }
.pl0 { padding-left: 0 }
.px0 { padding-left: 0; padding-right:  0 }
.py0 { padding-top: 0;  padding-bottom: 0 }

.p1  { padding:        var(--space-1) }
.pt1 { padding-top:    var(--space-1) }
.pr1 { padding-right:  var(--space-1) }
.pb1 { padding-bottom: var(--space-1) }
.pl1 { padding-left:   var(--space-1) }
.py1 { padding-top:    var(--space-1); padding-bottom: var(--space-1) }
.px1 { padding-left:   var(--space-1); padding-right:  var(--space-1) }

.p2  { padding:        var(--space-2) }
.pt2 { padding-top:    var(--space-2) }
.pr2 { padding-right:  var(--space-2) }
.pb2 { padding-bottom: var(--space-2) }
.pl2 { padding-left:   var(--space-2) }
.py2 { padding-top:    var(--space-2); padding-bottom: var(--space-2) }
.px2 { padding-left:   var(--space-2); padding-right:  var(--space-2) }

.p3  { padding:        var(--space-3) }
.pt3 { padding-top:    var(--space-3) }
.pr3 { padding-right:  var(--space-3) }
.pb3 { padding-bottom: var(--space-3) }
.pl3 { padding-left:   var(--space-3) }
.py3 { padding-top:    var(--space-3); padding-bottom: var(--space-3) }
.px3 { padding-left:   var(--space-3); padding-right:  var(--space-3) }

.p4  { padding:        var(--space-4) }
.pt4 { padding-top:    var(--space-4) }
.pr4 { padding-right:  var(--space-4) }
.pb4 { padding-bottom: var(--space-4) }
.pl4 { padding-left:   var(--space-4) }
.py4 { padding-top:    var(--space-4); padding-bottom: var(--space-4) }
.px4 { padding-left:   var(--space-4); padding-right:  var(--space-4) }

## Box

To create a simple box component, use padding along with color utilities.

A simple box

<div class\="p2 bg-white border rounded"\>
  A simple box
</div\>

Panel Header

Panel Body

Panel Footer

<div class\="overflow-hidden border rounded"\>
  <div class\="p2 bold white bg-blue"\>
    Panel Header
  </div\>
  <div class\="p2"\>
    Panel Body
  </div\>
  <div class\="p2 bg-silver"\>
    Panel Footer
  </div\>
</div\>

Padding should never be declared outside of these utilities. This is meant to help create consistency and avoid magic numbers. If, for some reason, the default white space scale does not suit your design, customize and extend it before use.

[Top](#)

## [Position](#basscss-position)

This module includes basic positioning utilities to alter the default document flow.

Use positions with caution. They are often unnecessary and commonly misused.

Use `.relative` to create a new stacking context.

Hamburger

<div class\="relative"\>
  <div\>Hamburger</div\>
</div\>

Use `.absolute` to move elements out of the default document flow.

Hamburger

[Dropdown Action](#) [Action](#)

<div class\="relative mb4"\>
  <div\>Hamburger</div\>
  <div class\="absolute bg-white border rounded"\>
    <a href\="#" class\="block p1"\>Dropdown Action</a\>
    <a href\="#" class\="block p1"\>Action</a\>
  </div\>
</div\>

Use `.fixed` to position an element relative to the viewport. Fixed positioning is notoriously tricky to use well and can lead to inaccessible content and unwanted side effects. Use fixed positioning with caution.

Hamburger

<div class\="fixed"\>
  Hamburger
</div\>

_Note: fixed positioning has been disabled here for demonstration only._

To anchor to a particular side, use `.top-0`, `.right-0`, `.bottom-0`, or `.left-0`. Margin and padding utilities can be used to space elements apart.

Hamburger

<div class\="fixed top-0 right-0 m2"\>
  Hamburger
</div\>

To fill an entire width or height, use opposing directions.

Fixed bar

<div class\="fixed top-0 left-0 right-0 p2 white bg-black"\>
  Fixed bar
</div\>

To ensure the desired stacking order, use z-index utilities.

Fixed bar

<div class\="fixed z2 top-0 left-0 right-0 p2 white bg-black"\>
  Fixed bar
</div\>

[Top](#)

## [Grid](#basscss-grid)

This module contains responsive float and width utilities to create a variety of grid layouts. Use this module in combination with layout, white space, and other utilities.

Start by using a `.clearfix` container.

<div class\="clearfix"\>
</div\>

To optionally set a max-width, use a utility from the basscss-layout module. The `.mx-auto` utility sets margin left and right auto to center the container.

<div class\="max-width-4 mx-auto"\>
  <div class\="clearfix"\>
  </div\>
</div\>

Float columns using the `.col` style. This also sets box-sizing border-box for each column.

.col

.col

<div class\="clearfix border"\>
  <div class\="col border"\>.col</div\>
  <div class\="col border"\>.col</div\>
</div\>

Add column width utilities. The total column-width number should add up to 12.

.col.col-6

.col.col-6

<div class\="clearfix border"\>
  <div class\="col col-6 border"\>.col.col-6</div\>
  <div class\="col col-6 border"\>.col.col-6</div\>
</div\>

## Responsive Grid

Use breakpoint-prefixed column utilities to change the grid at different screen widths.

All breakpoint-based styles in Basscss follow the same naming convention.

Prefix

Description

(no prefix)

Not scoped to a breakpoint

sm-

\--breakpoint-sm (default: min-width 40em)

md-

\--breakpoint-md (default: min-width 52em)

lg-

\--breakpoint-lg (default: min-width 64em)

Apply the grid from the small breakpoint and up with the `.sm-col` and `.sm-col-6` utilities.

.sm-col.sm-col-6

.sm-col.sm-col-6

<div class\="clearfix border"\>
  <div class\="sm-col sm-col-6 border"\>.sm-col.sm-col-6</div\>
  <div class\="sm-col sm-col-6 border"\>.sm-col.sm-col-6</div\>
</div\>

Add width adjustments for larger breakpoints. Resize the viewport width of the browser to see the effect.

.sm-col.sm-col-6.md-col-5.lg-col-4

.sm-col.sm-col-6.md-col-7.lg-col-8

<div class\="clearfix border"\>
  <div class\="sm-col sm-col-6 md-col-5 lg-col-4 border"\>.sm-col.sm-col-6.md-col-5.lg-col-4</div\>
  <div class\="sm-col sm-col-6 md-col-7 lg-col-8 border"\>.sm-col.sm-col-6.md-col-7.lg-col-8</div\>
</div\>

## Gutters

Use padding and negative margin utilities to create gutters based on the white space scale. The negative margin ensures content inside each column lines up with content outside of the grid. When using negative margin, be sure to compensate for the extra width created with a padded parent element or by using overflow hidden. Otherwise, horizontal scrolling may occur.

Create gutters with a width of 2 units using `.mxn2` and `.px2`.

.px2

.px2

<div class\="clearfix mxn2 border"\>
  <div class\="sm-col sm-col-6 md-col-5 lg-col-4 px2"\><div class\="border"\>.px2</div\></div\>
  <div class\="sm-col sm-col-6 md-col-7 lg-col-8 px2"\><div class\="border"\>.px2</div\></div\>
</div\>

For larger or smaller gutters, use any other step on the white space scale.

.px1

.px1

.px3

.px3

<div class\="clearfix mxn1 border"\>
  <div class\="col col-6 px1"\><div class\="border"\>.px1</div\></div\>
  <div class\="col col-6 px1"\><div class\="border"\>.px1</div\></div\>
</div\>
<div class\="clearfix mxn3 border"\>
  <div class\="col col-6 px3"\><div class\="border"\>.px3</div\></div\>
  <div class\="col col-6 px3"\><div class\="border"\>.px3</div\></div\>
</div\>

## Nesting

Nest entire grid structures within columns to created nested grids.

Unnested

Nested

Nested

<div class\="clearfix mxn2 border"\>
  <div class\="sm-col sm-col-6 md-col-5 lg-col-4 px2"\><div class\="border"\>Unnested</div\></div\>
  <div class\="sm-col sm-col-6 md-col-7 lg-col-8 px2"\>
    <div class\="clearfix mxn2"\>
      <div class\="col col-6 px2"\><div class\="border"\>Nested</div\></div\>
      <div class\="col col-6 px2"\><div class\="border"\>Nested</div\></div\>
    </div\>
  </div\>
</div\>

## Reversed

To reverse the order of columns, use the `.col-right` class to float columns right.

.col-right.col-6

.col.col-6

<div class\="clearfix border"\>
  <div class\="col-right col-6 border"\>.col-right.col-6</div\>
  <div class\="col col-6 border"\>.col.col-6</div\>
</div\>

## Centering Columns

Use the `.mx-auto` class to center columns within their containers.

Centered Column

<div class\="clearfix mxn2 border"\>
  <div class\="col-8 px2 mx-auto"\>
    <div class\="border"\>Centered Column</div\>
  </div\>
</div\>

## Breakpoint Based Floats

Column float utilities can be used independently of width utilities to control floating at different breakpoints. This example demonstrates a responsive media object.

.sm-col

.overflow-hidden

<div class\="clearfix border"\>
  <div class\="sm-col p2 border"\>.sm-col</div\>
  <div class\="overflow-hidden border"\>.overflow-hidden</div\>
</div\>

## Width Utilities

Column width utilities can also be used independently to add percentage based widths to any block or inline-block element.

.sm-col-6.md-col-4

Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.

<div class\="border"\>
  <div class\="right sm-col-6 md-col-4 p2 border"\>.sm-col-6.md-col-4</div\>
  <p\>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p\>
</div\>

[Top](#)

## [Flexbox](#basscss-flexbox)

These flexbox-based utilities can replace the need for a grid system in many instances, and provide powerful constraint-based micro-layout solutions. To learn more about the flexbox module, see [Using CSS flexible boxes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) and the [CSS Flexible Box Layout Module Specification](https://www.w3.org/TR/css-flexbox-1/).

To set a container to display flex, add the `.flex` class.

Hamburger

Hot Dog

<div class\="flex"\>
  <div\>Hamburger</div\>
  <div\>Hot Dog</div\>
</div\>

To set a container to display flex at certain breakpoints, use the `.sm-flex`, `.md-flex`, and `.lg-flex` styles.

Hamburger

Hot Dog

Hamburger

Hot Dog

Hamburger

Hot Dog

<div class\="sm-flex"\>
  <div\>Hamburger</div\>
  <div\>Hot Dog</div\>
</div\>
<div class\="md-flex"\>
  <div\>Hamburger</div\>
  <div\>Hot Dog</div\>
</div\>
<div class\="lg-flex"\>
  <div\>Hamburger</div\>
  <div\>Hot Dog</div\>
</div\>

To set a flexbox container to column direction, use `.flex-column`.

Hamburger Hot Dog

<div class\="flex flex-column"\>
  <span\>Hamburger</span\>
  <span\>Hot Dog</span\>
</div\>

To enable wrapping of flexbox containers, use `.flex-wrap`.

Hamburger

Hamburger

Hamburger

Hamburger

Hamburger

<div class\="flex flex-wrap"\>
  <div class\="col-4"\>Hamburger</div\>
  <div class\="col-4"\>Hamburger</div\>
  <div class\="col-4"\>Hamburger</div\>
  <div class\="col-4"\>Hamburger</div\>
  <div class\="col-4"\>Hamburger</div\>
</div\>

To set a flexbox item to automatically fill the available space, use the `flex-auto` utility.

Hamburger

Hot Dog

<div class\="flex border"\>
  <div class\="flex-auto border"\>Hamburger</div\>
  <div class\="border"\>Hot Dog</div\>
</div\>

To prevent a flexbox item from growing or shrinking, use the `flex-none` utility.

Hamburger

Hot Dog

<div class\="flex border"\>
  <div class\="flex-none border"\>Hamburger</div\>
  <div class\="border"\>Hot Dog</div\>
</div\>

To control alignment of flexbox items, use the `align-items` utilities. These styles uses a shorthand naming convention. `items` for the `align-items` property and `start` and `end` for the `flex-start` and `flex-end` values.

# Hamburger

Hot Dog

# Hamburger

Hot Dog

# Hamburger

Hot Dog

# Hamburger

Hot Dog

# Hamburger

Hot Dog

<div class\="flex items-start border"\>
  <h1 class\="border"\>Hamburger</h1\>
  <div class\="border"\>Hot Dog</div\>
</div\>
<div class\="flex items-end border"\>
  <h1 class\="border"\>Hamburger</h1\>
  <div class\="border"\>Hot Dog</div\>
</div\>
<div class\="flex items-center border"\>
  <h1 class\="border"\>Hamburger</h1\>
  <div class\="border"\>Hot Dog</div\>
</div\>
<div class\="flex items-baseline border"\>
  <h1 class\="border"\>Hamburger</h1\>
  <div class\="border"\>Hot Dog</div\>
</div\>
<div class\="flex items-stretch border"\>
  <h1 class\="border"\>Hamburger</h1\>
  <div class\="border"\>Hot Dog</div\>
</div\>

To align flexbox items on an item-by-item basis, use the `align-self` utilities. These override values set by the `align-items` property. A shorthand naming convention of `self` for the `align-self` property is used.

# Hamburger

Hot Dog

# Hamburger

Hot Dog

# Hamburger

Hot Dog

# Hamburger

Hot Dog

# Hamburger

Hot Dog

<div class\="flex items-center border"\>
  <h1 class\="self-start border"\>Hamburger</h1\>
  <div class\="border"\>Hot Dog</div\>
</div\>
<div class\="flex items-center border"\>
  <h1 class\="self-end border"\>Hamburger</h1\>
  <div class\="border"\>Hot Dog</div\>
</div\>
<div class\="flex items-start border"\>
  <h1 class\="self-center border"\>Hamburger</h1\>
  <div class\="border"\>Hot Dog</div\>
</div\>
<div class\="flex items-center border"\>
  <h1 class\="self-baseline border"\>Hamburger</h1\>
  <div class\="border"\>Hot Dog</div\>
</div\>
<div class\="flex items-center border"\>
  <h1 class\="self-stretch border"\>Hamburger</h1\>
  <div class\="border"\>Hot Dog</div\>
</div\>

To control the spacing for items on the main axis, use the `justify-content` utilities. These styles use a shorhand naming convention. `justify` for the `justify-content` property and `around` and `between` for the `space-around` and `space-between` values.

# Hamburger

Hot Dog

# Hamburger

Hot Dog

# Hamburger

Hot Dog

# Hamburger

Hot Dog

# Hamburger

Hot Dog

<div class\="flex justify-start border"\>
  <h1 class\="border"\>Hamburger</h1\>
  <div class\="border"\>Hot Dog</div\>
</div\>
<div class\="flex justify-end border"\>
  <h1 class\="border"\>Hamburger</h1\>
  <div class\="border"\>Hot Dog</div\>
</div\>
<div class\="flex justify-center border"\>
  <h1 class\="border"\>Hamburger</h1\>
  <div class\="border"\>Hot Dog</div\>
</div\>
<div class\="flex justify-between border"\>
  <h1 class\="border"\>Hamburger</h1\>
  <div class\="border"\>Hot Dog</div\>
</div\>
<div class\="flex justify-around border"\>
  <h1 class\="border"\>Hamburger</h1\>
  <div class\="border"\>Hot Dog</div\>
</div\>

To align items along the cross-axis, use the `align-content` utilities. A shorthand naming convention `content` is used for the `align-content` property.

Hamburger

Hamburger

Hamburger

Hamburger

<div class\="flex flex-wrap content-start border" style\="min-height: 128px"\>
  <div class\="col-6 border"\>Hamburger</div\>
  <div class\="col-6 border"\>Hamburger</div\>
  <div class\="col-6 border"\>Hamburger</div\>
  <div class\="col-6 border"\>Hamburger</div\>
</div\>

Hamburger

Hamburger

Hamburger

Hamburger

<div class\="flex flex-wrap content-end border" style\="min-height: 128px"\>
  <div class\="col-6 border"\>Hamburger</div\>
  <div class\="col-6 border"\>Hamburger</div\>
  <div class\="col-6 border"\>Hamburger</div\>
  <div class\="col-6 border"\>Hamburger</div\>
</div\>

Hamburger

Hamburger

Hamburger

Hamburger

<div class\="flex flex-wrap content-center border" style\="min-height: 128px"\>
  <div class\="col-6 border"\>Hamburger</div\>
  <div class\="col-6 border"\>Hamburger</div\>
  <div class\="col-6 border"\>Hamburger</div\>
  <div class\="col-6 border"\>Hamburger</div\>
</div\>

Hamburger

Hamburger

Hamburger

Hamburger

<div class\="flex flex-wrap content-between border" style\="min-height: 128px"\>
  <div class\="col-6 border"\>Hamburger</div\>
  <div class\="col-6 border"\>Hamburger</div\>
  <div class\="col-6 border"\>Hamburger</div\>
  <div class\="col-6 border"\>Hamburger</div\>
</div\>

Hamburger

Hamburger

Hamburger

Hamburger

<div class\="flex flex-wrap content-around border" style\="min-height: 128px"\>
  <div class\="col-6 border"\>Hamburger</div\>
  <div class\="col-6 border"\>Hamburger</div\>
  <div class\="col-6 border"\>Hamburger</div\>
  <div class\="col-6 border"\>Hamburger</div\>
</div\>

Hamburger

Hamburger

Hamburger

Hamburger

<div class\="flex flex-wrap content-stretch border" style\="min-height: 128px"\>
  <div class\="col-6 border"\>Hamburger</div\>
  <div class\="col-6 border"\>Hamburger</div\>
  <div class\="col-6 border"\>Hamburger</div\>
  <div class\="col-6 border"\>Hamburger</div\>
</div\>

To change the order of flexbox items, use the `order` utilities.

.order-2

.order-1

.order-last

.order-3

.order-0

<div class\="flex"\>
  <div class\="order-2"\>.order-2</div\>
  <div class\="order-1"\>.order-1</div\>
  <div class\="order-last"\>.order-last</div\>
  <div class\="order-3"\>.order-3</div\>
  <div class\="order-0"\>.order-0</div\>
</div\>

[Top](#)

## [Border](#basscss-border)

This module controls borders and border radii.

## Borders

Add borders with these border utilities.

.border

.border-top

.border-right

.border-bottom

.border-left

<div class\="p1 m1 border"\>.border</div\>
<div class\="p1 m1 border-top"\>.border-top</div\>
<div class\="p1 m1 border-right"\>.border-right</div\>
<div class\="p1 m1 border-bottom"\>.border-bottom</div\>
<div class\="p1 m1 border-left"\>.border-left</div\>

Remove borders with the `.border-none` utility.

<input type\="text" class\="border-none" placeholder\=".border-none" />

## Border Radii

Utility styles for border radii can be used to style images and other elements.

![](http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg) ![](http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg) ![](http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg) ![](http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg) ![](http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg) ![](http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg)

<img class\="rounded" src\="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg" width\="64" height\="64" />
<img class\="circle" src\="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg" width\="64" height\="64" />
<img class\="rounded-top" src\="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg" width\="64" height\="64" />
<img class\="rounded-right" src\="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg" width\="64" height\="64" />
<img class\="rounded-bottom" src\="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg" width\="64" height\="64" />
<img class\="rounded-left" src\="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg" width\="64" height\="64" />

The `.not-rounded` utility can be used to override default radii. This is useful for things like input and button groups.

Not Rounded

<button class\="btn not-rounded"\>Not Rounded</button\>

[Top](#)

## [Hide](#basscss-hide)

Use these utilities to conditionally hide elements based on viewport width.

## Prefix Naming Convention

Hide utilities differ from other breakpoint-based styles in Basscss. Each hide utility only applies to one breakpoint range.

Prefix

Description

xs-

below 40em

sm-

40em – 52em

md-

52em – 64em

lg-

above 64em

## Hide content

Resize the browser window to see the effect.

### Hidden below 40em

### Hidden between 40 and 52em

### Hidden between 52 and 64em

### Hidden above 64em

<h3 class\="xs-hide"\>Hidden below 40em</h3\>
<h3 class\="sm-hide red"\>Hidden between 40 and 52em</h3\>
<h3 class\="md-hide red"\>Hidden between 52 and 64em</h3\>
<h3 class\="lg-hide red"\>Hidden above 64em</h3\>

## Responsive Line Break

Control wrapping at different screen widths.

# Responsive Line Break
To Control Wrapping

<h1\>
  Responsive Line Break
  <br class\="xs-hide"\>
  To Control Wrapping
</h1\>

## Accessible Hide

To visually hide things like form labels in an accessible way, use the `.hide` utility.

Search

<form\>
  <label for\="search" class\="hide"\>Search</label\>
  <input id\="search" type\="search" class\="input"\>
</form\>

## Display None

Set display none with this utility. Use this with caution as it might cause accessibility issues depending on where it’s used.

Visible

Hidden

<div\>Visible</div\>
<div class\="display-none"\>Hidden</div\>

[Top](#)

## Extend Basscss

There are several optional modules not included in the core Basscss package, including responsive margin and padding, colors, and button styles.

[basscss/addons](https://github.com/basscss/addons)

[Getting Started](#getting-started)

[Type Scale](#basscss-type-scale)

[Typography](#basscss-typography)

[Layout](#basscss-layout)

[Align](#basscss-align)

[Margin](#basscss-margin)

[Padding](#basscss-padding)

[Position](#basscss-position)

[Grid](#basscss-grid)

[Flexbox](#basscss-flexbox)

[Border](#basscss-border)

[Hide](#basscss-hide)

[Basscss](#)

v8.0.2

[GitHub](//github.com/basscss/basscss)

[npm](//npmjs.com/package/basscss)

[v7 Docs](/v7)

[Made by Jxnblk](//jxnblk.com)

(function(i,s,o,g,r,a,m){i\['GoogleAnalyticsObject'\]=r;i\[r\]=i\[r\]||function(){ (i\[r\].q=i\[r\].q||\[\]).push(arguments)},i\[r\].l=1\*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)\[0\];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','//www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-4603832-12', 'auto'); ga('send', 'pageview');