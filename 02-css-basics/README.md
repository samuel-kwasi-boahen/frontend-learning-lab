# Lesson 02 - CSS Fundamentals

## Objective

Today I learned how CSS changes the appearance of a webpage and separates design from structure.

---

## What I Learned

- HTML creates the structure.
- CSS controls the appearance.
- A CSS rule consists of a selector, property and value.
- Keeping CSS in a separate file makes projects easier to maintain.

---

## Key Takeaways

Separating HTML and CSS makes projects cleaner and easier to manage, especially as they grow.

---

## React / Next.js Connection

In Next.js with Tailwind CSS, many CSS properties become utility classes.

Example:

CSS

```css
color: white;
```

Tailwind

```tsx
className="text-white"
```

Another example:

CSS

```css
background-color: blue;
```

Tailwind

```tsx
className="bg-blue-600"
```

---

## Vue / Nuxt Connection

Vue components can contain CSS inside the `<style>` section.

```vue
<template>
  <h1>Hello</h1>
</template>

<style>
h1{
    color:white;
}
</style>
```

Nuxt uses the same approach because it is built on Vue.

