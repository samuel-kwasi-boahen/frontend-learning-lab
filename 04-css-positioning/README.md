# 04 - CSS Positioning

## Objective

Learn how CSS positioning works and understand the difference between the various `position` values, especially `relative` and `absolute`.


## Project Description

This project demonstrates how elements are positioned on a webpage using CSS. It explores how `position: relative` creates a positioning context and how `position: absolute` allows elements to move independently from the normal document flow.


## Concepts Learned

- CSS Positioning
- Document Flow
- `position: static`
- `position: relative`
- `position: absolute`
- Parent and Child Positioning
- Positioning Context
- `top`
- `right`
- `bottom`
- `left`


## Key Takeaways

- Every HTML element has a default position of `static`.
- `position: relative` keeps the element in the normal document flow while allowing it to be visually shifted.
- `position: absolute` removes the element from the normal document flow.
- An absolutely positioned element looks for the nearest ancestor with a position other than `static`.
- Developers commonly set the parent to `position: relative` so absolutely positioned children are positioned relative to that parent.

---

## Real-World Connection

This concept is widely used for:

- Hero section background overlays
- Floating badges
- Notification indicators
- Custom cards
- Image captions
- Decorative graphics
- Tooltips
- Modals


## Next.js Connection

Tailwind CSS classes translate directly into CSS:

| Tailwind | CSS |
|----------|-----|
| `relative` | `position: relative;` |
| `absolute` | `position: absolute;` |

Example:

```tsx
<section className="relative">
    <div className="absolute inset-0" />
</section>
```

is equivalent to

```css
section{
    position:relative;
}

div{
    position:absolute;
}
```

---

## Vue / Nuxt Connection

Vue and Nuxt use exactly the same CSS positioning rules because positioning is part of CSS, not the framework.

Example:

```vue
<template>
  <div class="parent">
      <div class="child">Hello</div>
  </div>
</template>

<style>
.parent{
    position:relative;
}

.child{
    position:absolute;
}
</style>
```

## What I Learned

- Every HTML element has a position.
- `relative` keeps the document flow intact.
- `absolute` removes an element from the normal document flow.
- A parent with `position: relative` becomes the reference point for absolutely positioned children.
- Modern websites rely heavily on positioning for layouts and visual effects.


## Challenges

Initially, I thought `position: absolute` would move the parent element. After experimenting, I learned that it removes the child from the normal document flow instead.
