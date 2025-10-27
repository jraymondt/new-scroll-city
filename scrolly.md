# Creating a Simple Scrolly-Telling Animation with Vanilla JS, CSS, and HTML

**Scrolly-telling**—the use of animations, text, and graphics triggered by scroll position—can be achieved with minimal, modern code. This guide will explain how to create an informational dialogue box animation that activates as you scroll down a web page, illustrating the experience of traveling the length of a building or presenting sequential information.

## Key Findings

You can build smooth scroll-triggered information boxes using only HTML, CSS, and vanilla JavaScript. The best-practice approach leverages the Intersection Observer API for performance and accessibility, but even a simple window scroll handler is sufficient for basic use-cases. Styling with CSS transitions or animations provides engaging yet accessible effects, and you can alternate backgrounds, add dialogue boxes, or combine text and imagery.

## Why Use Scrolly-Telling?

**Scrolly-telling** allows for narrative experiences that guide users through information in a controlled, sequenced way as they scroll. This approach:

- Engages users by pacing content naturally.[^1][^2][^3]
- Highlights critical information at the right moment.[^3]
- Is accessible and performant when implemented with best practices.


## Essential Techniques

### Using Intersection Observer for Scroll-Triggered Animations

The modern way to check visibility is with the Intersection Observer API. It efficiently detects when elements enter or leave the viewport, allowing you to apply animation classes for effects like fade-in, slide-up, or box reveals.[^2][^4][^1][^3]

**Implementation steps:**[^4][^1][^2][^3]

1. Layout your dialogue boxes in HTML, each as a separate section or container.
2. Style them in CSS with transitions/animations, starting as hidden (e.g., faded and/or moved).
3. Use JavaScript to add a "visible" class when they enter the viewport, triggering the CSS transition.

Below is a simplified illustrative example.

***

## Example: Dialogue Boxes Revealed as You Scroll

### HTML

```html
<div class="dialogue-section">
  <div class="dialogue-box">Ground Floor: Welcome to the building lobby. Reception is here.</div>
</div>
<div class="dialogue-section">
  <div class="dialogue-box">Level 1: Offices and collaborative workspaces.</div>
</div>
<div class="dialogue-section">
  <div class="dialogue-box">Level 2: Conference rooms and kitchenettes.</div>
</div>
<!-- Add more sections as needed -->
```


### CSS

```css
body {
  font-family: Arial, sans-serif;
  margin: 0; padding: 0;
  background: #f1f4fa;
}
.dialogue-section {
  height: 80vh; /* Tall for scrolling */
  display: flex;
  align-items: center;
  justify-content: center;
}
.dialogue-box {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity .6s ease, transform .6s cubic-bezier(.4, 2, .3, 1);
  background: #fff;
  padding: 24px 36px;
  box-shadow: 0 6px 32px rgba(0,0,0,0.15);
  border-radius: 16px;
  font-size: 1.3em;
  max-width: 420px;
  text-align: center;
}

/* Make dialogue appear and rise up when .visible is added */
.dialogue-section.visible .dialogue-box {
  opacity: 1;
  transform: translateY(0);
}

.dialogue-section:nth-child(even) .dialogue-box {
  background: #eef1fb; /* Alternate backgrounds */
}
```


### JavaScript (vanilla)

```javascript
const dialogueSections = document.querySelectorAll('.dialogue-section');

function checkVisibility() {
  dialogueSections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.7) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
// Trigger on load in case elements are already visible
checkVisibility();
```


***

### How This Works

- **Each section** is large enough to allow clear scroll transitions.
- As you scroll, when a section enters 70% of the viewport height, it **fades in and rises** using the CSS transition.
- You can easily customize the dialogue, add icons or pictures, and adjust colors for style or semantic meaning.


## Alternatives \& Enhancements

- **Intersection Observer API** is preferred for performance and flexibility because it asynchronously fires only when elements genuinely enter or exit the viewport.[^1][^2][^4]
- For **more advanced effects**, such as parallax, chaining animations, or pinning content, consider libraries like Scrollama.js, but note this goes beyond "vanilla" as requested.[^5][^6]
- **Making the page more interactive**: Add navigation, background effects, or allow horizontal scroll for side-to-side storytelling.


## Example: Complete Page Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Simple Scrolly-Telling Dialogue</title>
<style>
body { font-family: Arial, sans-serif; margin: 0; padding: 0; background: #f1f4fa; }
.dialogue-section { height: 80vh; display: flex; align-items: center; justify-content: center; }
.dialogue-box {
  opacity: 0; transform: translateY(40px);
  transition: opacity .6s, transform .6s cubic-bezier(.4,2,.3,1);
  background: #fff; padding: 24px 36px; box-shadow: 0 6px 32px rgba(0,0,0,0.15);
  border-radius: 16px; font-size: 1.3em; max-width: 420px; text-align: center;
}
.dialogue-section.visible .dialogue-box { opacity: 1; transform: translateY(0); }
.dialogue-section:nth-child(even) .dialogue-box { background: #eef1fb; }
</style>
</head>
<body>

<div class="dialogue-section"><div class="dialogue-box">Ground Floor: Welcome to the building lobby. Reception is here.</div></div>
<div class="dialogue-section"><div class="dialogue-box">Level 1: Offices and collaborative workspaces.</div></div>
<div class="dialogue-section"><div class="dialogue-box">Level 2: Conference rooms and kitchenettes.</div></div>
<div class="dialogue-section"><div class="dialogue-box">Level 3: Rooftop gym and green terrace.</div></div>

<script>
const dialogueSections = document.querySelectorAll('.dialogue-section');
function checkVisibility() {
  dialogueSections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if(top < window.innerHeight * 0.7) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', checkVisibility);
checkVisibility(); // Initialize on page load
</script>
</body>
</html>
```


***

## Best Practices

- **Use semantic sections and dialogue containers** for better accessibility.[^2][^1]
- **Minimize heavy animations**, keeping transitions subtle for readability.
- **Test in multiple browsers** to ensure consistent Intersection Observer support (all modern browsers as of 2025).
- **Fallback**: If you must support ancient browsers, check for Intersection Observer support, or use a simple scroll listener as a fallback.[^1]


## Conclusion

You can achieve engaging, simple scrolly-telling animations for informational dialogue using only HTML, CSS, and JavaScript, without any frameworks or external libraries. This approach is highly customizable, lightweight, and robust for building interactive stories or explaining content sequentially as users scroll down your page.[^3][^2][^1]
<span style="display:none">[^10][^11][^12][^13][^14][^15][^16][^17][^18][^19][^20][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://css-tricks.com/scroll-triggered-animation-vanilla-javascript/

[^2]: https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/

[^3]: https://blog.pixelfreestudio.com/how-to-implement-scroll-triggered-animations-in-web-design/

[^4]: https://javascript.plainenglish.io/how-to-implement-animation-on-scroll-with-vanilla-javascript-655093a38059

[^5]: https://pudding.cool/process/introducing-scrollama/

[^6]: https://metadrop.net/en/articles/scrollytelling-using-scrollamajs-css-and-best-practices

[^7]: https://www.vev.design/blog/how-to-use-scrollytelling/

[^8]: https://dev.to/er-raj-aryan/scroll-triggered-animations-in-css-make-your-website-pop-4ip0

[^9]: https://www.letsbuildui.dev/articles/scroll-linked-content-reveal-animation/

[^10]: https://www.youtube.com/watch?v=dJOvZ3LxHq8

[^11]: https://www.edriessen.com/2023/04/24/an-introduction-to-scrollytelling-data-storytelling-using-scrollama-js-d3-js-and-html-css/

[^12]: https://www.youtube.com/watch?v=VeTwNnZUPlw

[^13]: https://www.youtube.com/watch?v=d7wTA9F-l8c

[^14]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations

[^15]: https://www.youtube.com/watch?v=T33NN_pPeNI

[^16]: https://ryanmulligan.dev/blog/scroll-triggered-animations-style-queries/

[^17]: https://www.youtube.com/watch?v=Zf2ZgKcoC5w

[^18]: https://prismic.io/blog/css-scroll-effects

[^19]: https://www.youtube.com/watch?v=UM8WNeqWWqM

[^20]: https://forum.freecodecamp.org/t/another-efficient-way-of-writting-scroll-menu-on-vanilla-js/235478

