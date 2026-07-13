# Lesson 05 - CSS Positioning

## Objective

Today I learned how CSS positioning works and how different positioning methods affect where elements appear on a webpage.


## What I Built

I built a simple webpage demonstrating:

- Static positioning
- Relative positioning
- Absolute positioning
- Fixed positioning
- Sticky positioning
- z-index

This helped me understand how browsers place elements on a page.


## What I Learned

- Every HTML element starts with `position: static`.
- `position: relative` keeps an element in the normal document flow while allowing it to be moved visually.
- `position: absolute` removes an element from the normal document flow and positions it relative to the nearest positioned ancestor.
- `position: fixed` positions an element relative to the browser window (viewport).
- `position: sticky` behaves like a normal element until it reaches a specified scroll position, then sticks.
- `z-index` controls which overlapping element appears on top.


## Key Takeaways

One of the biggest lessons for me was realizing that positioning isn't about randomly moving elements. Each position type has a specific purpose depending on the layout I want to create.


## Initial Challenge

At first, I found it difficult to understand the difference between `relative` and `absolute`. I also thought `z-index` moved elements instead of controlling their stacking order. Also, I thought `position: absolute` would move the parent element. After experimenting, I learned that it removes the child from the normal document flow instead.


## My Breakthrough Moment

The concept finally clicked when I understood that:

- `relative` creates a positioning reference.
- `absolute` uses that reference.
- `fixed` ignores the document and follows the browser window.
- `sticky` switches behavior when scrolling.
- `z-index` controls which element appears in front during overlaps.


## React / Next.js Connection

Tailwind CSS provides utility classes that map directly to CSS positioning.

Relative

```tsx
className="relative"
```

↓

```css
position: relative;
```

Absolute

```tsx
className="absolute"
```

↓

```css
position: absolute;
```

Fixed

```tsx
className="fixed bottom-5 right-5"
```

↓

```css
position: fixed;
bottom: 20px;
right: 20px;
```

Sticky

```tsx
className="sticky top-0"
```

↓

```css
position: sticky;
top: 0;
```

z-index

```tsx
className="z-10"
```

↓

```css
z-index: 10;
```


## Vue / Nuxt Connection

Vue and Nuxt use the same CSS positioning rules.

```vue
<template>
  <section class="hero">
    <div class="background"></div>

    <div class="content">
      <h1>Hello World</h1>
    </div>
  </section>
</template>

<style>
.hero{
    position: relative;
}

.background{
    position: absolute;
    z-index: 1;
}

.content{
    position: relative;
    z-index: 2;
}
</style>
```

The positioning concepts remain exactly the same.



## Quick Revision

| CSS | Tailwind |
|------|----------|
| position: relative; | `relative` |
| position: absolute; | `absolute` |
| position: fixed; | `fixed` |
| position: sticky; | `sticky` |
| z-index: 10; | `z-10` |


## Reflection

Today's lesson helped me understand how browsers position elements on a webpage. I can now identify these positioning techniques inside my own portfolio and understand why they are used.



## Looking Ahead

Next, I'll learn Responsive Design so I can build webpages that work well on desktops, tablets and mobile devices.

