# Lesson 03 - CSS Box Model

## Objective

Today I learned how every HTML element is treated as a box by the browser and how spacing is controlled using the CSS Box Model.


## What I Built

I built a simple card layout to demonstrate:

- Padding
- Border
- Margin

This helped me visualize how spacing works inside and outside an element.


## What I Learned

- Every HTML element is a rectangular box.
- Padding creates space inside an element.
- Borders surround the padding.
- Margin creates space outside an element.
- Understanding the Box Model is essential for creating clean layouts.


## Key Takeaways

The browser treats every element as a box, and mastering the Box Model makes it much easier to control spacing and layout.


## Initial Challenge

At first, I confused padding and margin because they both create space. After building the project, I understood that padding affects the inside of an element while margin affects the outside.


## My Breakthrough Moment

Drawing the Box Model layer by layer helped me understand the order:

Content → Padding → Border → Margin


## React / Next.js Connection

Padding

```tsx
className="p-5"
```

↓

```css
padding:20px;
```

Margin

```tsx
className="m-5"
```

↓

```css
margin:20px;
```

Horizontal Padding

```tsx
className="px-6"
```

↓

```css
padding-left:24px;
padding-right:24px;
```

Vertical Padding

```tsx
className="py-4"
```

↓

```css
padding-top:16px;
padding-bottom:16px;
```


## Vue / Nuxt Connection

Vue and Nuxt use the same CSS Box Model.

```vue
<template>
    <div class="card">
        Card
    </div>
</template>

<style>
.card{
    padding:20px;
    margin:20px;
    border:2px solid black;
}
</style>
```

## Quick Revision


| CSS | Tailwind |
|------|----------|
| padding:20px; | p-5 |
| margin:20px; | m-5 |
| padding-left/right | px-* |
| padding-top/bottom | py-* |


---


## Reflection


Understanding the Box Model has made spacing much clearer. I can now identify whether I should use padding or margin depending on whether I need space inside or outside an element.

## Looking Ahead

Next, I'll learn Flexbox and how it simplifies aligning and arranging elements on a webpage.