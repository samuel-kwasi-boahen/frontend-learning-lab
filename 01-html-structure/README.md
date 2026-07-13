# Lesson 01 - HTML Structure

## Objective

Today I learned how to structure a webpage using semantic HTML elements instead of placing everything inside `<div>` tags.


## What I Learned

- HTML is responsible for the structure of a webpage.
- Semantic elements make the code easier to read and understand.
- Every webpage has a basic structure made up of a header, main content and footer.
- Browsers read HTML from top to bottom.


## Key Takeaways

I learned that semantic HTML is not just about making a webpage work. It also improves accessibility, SEO and makes the code easier for other developers to understand.


## React / Next.js Connection

In React and Next.js, we still use the same HTML elements.

Example:

```tsx
export default function Home() {
  return (
    <main>
      <section>
        <h1>Welcome</h1>
      </section>
    </main>
  )
}
```

The only difference is that the HTML is written inside a React component.



## Vue / Nuxt Connection

Vue and Nuxt also use the same HTML structure inside the `<template>` section.

```vue
<template>
  <main>
    <section>
      <h1>Welcome</h1>
    </section>
  </main>
</template>
```

The HTML knowledge I learned today applies directly to Vue and Nuxt.

