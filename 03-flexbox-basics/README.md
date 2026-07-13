# Lesson 04 - Flexbox

## Objective

Today I learned how Flexbox makes it easier to align and arrange elements.


## What I Learned

- Flexbox creates a flexible layout.
- `display: flex` activates Flexbox.
- The browser creates a Main Axis and a Cross Axis.
- `justify-content` controls movement along the Main Axis.
- `align-items` controls movement along the Cross Axis.


## Key Takeaways

Flexbox removes much of the complexity of positioning elements and is one of the most commonly used CSS layout systems.


## React / Next.js Connection

CSS

```css
display:flex;
justify-content:center;
align-items:center;
```

Tailwind

```tsx
className="flex justify-center items-center"
```


## Vue / Nuxt Connection

```vue
<style>
.container{
    display:flex;
    justify-content:center;
    align-items:center;
}
</style>
```

Nuxt uses the same CSS.

