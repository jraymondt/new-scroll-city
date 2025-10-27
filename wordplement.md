# how would you structure this to test it in wordpress as custom html or somesuch

Now I'll create a WordPress-ready version of the scrolly-telling animation that can be easily tested in WordPress using the Custom HTML block.

# Testing Scrolly-Telling Animation in WordPress

Based on your workflow with WordPress and your technical proficiency, here's how to structure the scrolly-telling animation for easy testing in WordPress using the **Custom HTML block**.[^1][^2][^3]

## Quick Testing Method: Single Custom HTML Block

The easiest way to test this in WordPress is to put **everything** (HTML, CSS, and JavaScript) into a single Custom HTML block. This approach works perfectly for prototyping and doesn't require touching theme files.[^3][^4][^1]

### Complete Code for WordPress Custom HTML Block

```html
<style>
/* Scoped styles for scrolly-telling */
.scrolly-container {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 20px 0;
}

.scrolly-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.dialogue-box {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  padding: 32px 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  border-left: 4px solid #0073aa;
}

.scrolly-section.visible .dialogue-box {
  opacity: 1;
  transform: translateY(0);
}

.dialogue-box h3 {
  margin-top: 0;
  color: #0073aa;
  font-size: 1.5em;
  margin-bottom: 12px;
}

.dialogue-box p {
  color: #444;
  line-height: 1.6;
  margin: 0;
}

/* Alternate styling for even sections */
.scrolly-section:nth-child(even) .dialogue-box {
  border-left-color: #d63638;
  background: #fefefe;
}

.scrolly-section:nth-child(even) .dialogue-box h3 {
  color: #d63638;
}
</style>

<div class="scrolly-container">
  <div class="scrolly-section">
    <div class="dialogue-box">
      <h3>Ground Floor</h3>
      <p>Welcome to the building lobby. The reception desk is straight ahead, with elevators to your right.</p>
    </div>
  </div>

  <div class="scrolly-section">
    <div class="dialogue-box">
      <h3>Level 1</h3>
      <p>This floor houses collaborative workspaces and open-plan offices designed for team projects.</p>
    </div>
  </div>

  <div class="scrolly-section">
    <div class="dialogue-box">
      <h3>Level 2</h3>
      <p>Conference rooms and meeting spaces are located here, along with a fully equipped kitchenette.</p>
    </div>
  </div>

  <div class="scrolly-section">
    <div class="dialogue-box">
      <h3>Level 3</h3>
      <p>Executive offices with panoramic city views occupy this premium floor space.</p>
    </div>
  </div>

  <div class="scrolly-section">
    <div class="dialogue-box">
      <h3>Rooftop</h3>
      <p>A green terrace and fitness center provide relaxation and wellness opportunities with stunning views.</p>
    </div>
  </div>
</div>

<script>
(function() {
  'use strict';
  
  // Select all scrolly sections
  const scrollySections = document.querySelectorAll('.scrolly-section');
  
  // Function to check visibility and add class
  function checkScrollVisibility() {
    const triggerPoint = window.innerHeight * 0.75;
    
    scrollySections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      
      if (sectionTop < triggerPoint) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  }
  
  // Listen for scroll events
  window.addEventListener('scroll', checkScrollVisibility);
  
  // Check on page load
  checkScrollVisibility();
})();
</script>
```


## How to Implement in WordPress

### Step 1: Add Custom HTML Block

1. Edit the post or page where you want the scrolly-telling animation[^2][^1][^3]
2. Click the **+ (Add Block)** button
3. Search for "**Custom HTML**"
4. Click to add the block[^2][^3]

### Step 2: Paste the Code

1. Copy the complete code above
2. Paste it directly into the Custom HTML block[^1][^3]
3. You can toggle between **HTML** and **Preview** modes using the toolbar[^3][^1]

### Step 3: Preview and Publish

1. Click **Preview** in the block toolbar to see it in action[^1][^3]
2. Save as Draft first to test on the actual page
3. Once satisfied, click **Update** or **Publish**[^3][^1]

## Important WordPress Considerations

### Script Tag Restrictions

WordPress may strip `<script>` tags depending on your user role. If you're logged in as an **Administrator**, the code should work fine. If you have a lower permission level (like **Contributor**), WordPress will sanitize the JavaScript for security reasons.[^5][^6]

**Solution**: Ensure you're logged in as an Administrator when adding the Custom HTML block.[^5]

### Code Persistence Issues

Some users report that WordPress modifies their code after saving. To prevent this:[^6]

1. **Don't switch between Visual and Code editors** after pasting your code
2. Use **Preview mode** within the Custom HTML block instead of switching editors[^1][^3]
3. If code gets stripped, wrap everything in an IIFE (Immediately Invoked Function Expression) as shown in the example above – this helps WordPress recognize it as safe code[^1]

## Alternative WordPress Methods

### Method 2: Using WPCode Plugin (For Site-Wide Implementation)

If you want this scrolly-telling effect available across multiple pages or posts, consider using the **WPCode plugin**:[^7][^1]

1. Install and activate **WPCode**
2. Go to **Code Snippets → Add New**
3. Choose "Add Your Custom Code"
4. Select **JavaScript Snippet**
5. Paste your JavaScript
6. Set **Location** to "Site Wide Footer"
7. Activate the snippet[^1]

Then add just the HTML and CSS in Custom HTML blocks on individual pages.

### Method 3: Create Separate Files (Advanced)

For a production-ready implementation on your progressweb.au site, you could:

1. Create `scrolly-animation.css` and `scrolly-animation.js` files
2. Upload them to your theme's `/css/` and `/js/` directories via FTP or cPanel[^8]
3. Enqueue them in your theme's `functions.php`[^9][^1]
4. Add only the HTML markup in Custom HTML blocks[^8]

This approach is cleaner for sites with multiple scrolly-telling sections.

## Testing Tips

1. **Start simple**: Test with just 2-3 sections first
2. **Check browser console**: Press F12 in your browser to check for JavaScript errors[^1]
3. **Test on mobile**: The animation is fully responsive but verify touch-scroll behavior
4. **Adjust trigger point**: Change `0.75` in the JavaScript to `0.6` or `0.8` to adjust when animations trigger
5. **Modify transition speed**: Change `0.8s` in the CSS to `0.5s` for faster or `1.2s` for slower animations

## Customization for Your Use Case

Since you're working on WordPress themes with Git workflows and have experience with vanilla HTML/CSS/JS, you might want to:

- **Add this to your progressweb.au theme** as a reusable component
- **Create a shortcode** for easy insertion (requires adding a function to `functions.php`)
- **Integrate with ACF** (Advanced Custom Fields) to make content editable in the WordPress admin

The code provided uses **scoped class names** (`.scrolly-container`, `.scrolly-section`) to avoid conflicts with your WordPress 2025 theme styles.[^2][^1]

## Conclusion

The Custom HTML block method is perfect for testing and prototyping your scrolly-telling animation in WordPress without touching theme files. Once you're satisfied with the functionality, you can integrate it more permanently into your theme's codebase using your existing Git workflow.[^8][^2][^3][^1]
<span style="display:none">[^10][^11][^12][^13][^14][^15][^16][^17][^18][^19][^20]</span>

<div align="center">⁂</div>

[^1]: https://agentwp.com/blog/how-to-add-javascript-to-wordpress-4-easy-methods-tips/

[^2]: https://wpcode.com/how-to-add-custom-html-code-to-wordpress-site/

[^3]: https://tableberg.com/how-to-use-the-custom-html-block-in-wordpress/

[^4]: https://jetpack.com/resources/how-to-add-javascript-to-wordpress/

[^5]: https://wordpress.org/documentation/article/custom-html/

[^6]: https://stackoverflow.com/questions/57351160/add-custom-html-block-in-wordpress-previews-my-code-perfectly-but-when-i-come

[^7]: https://wordpress.com/go/website-building/how-to-properly-add-javascript-to-wordpress-3-top-methods/

[^8]: https://stackoverflow.com/questions/36309762/adding-a-complex-html-css-js-element-to-a-single-wordpress-page

[^9]: https://digwp.com/2019/07/better-inline-script/

[^10]: https://woovina.com/blog/wordpress-tutorials/the-most-effective-method-for-adding-inline-scripts-in-wordpress

[^11]: https://stackoverflow.com/questions/68149855/adding-javascript-to-wordpress-post-body

[^12]: https://wordpress.com/support/wordpress-editor/blocks/custom-html-block/

[^13]: https://stackoverflow.com/questions/77235797/wordpress-how-to-include-javascript-as-block-element

[^14]: https://themeisle.com/blog/wordpress-custom-javascript/

[^15]: https://wordpress.org/plugins/simple-embed-code/

[^16]: https://stackoverflow.com/questions/76036666/injecting-javascript-variables-to-custom-wordpress-block-editor

[^17]: https://jetpack.com/resources/how-to-add-and-edit-code-in-wordpress-html-css-php/

[^18]: https://wordpress.org/support/topic/how-to-properly-embed-a-custom-html-js-tool-in-wordpress/

[^19]: https://help.flodesk.com/en/articles/4341953

[^20]: https://www.reddit.com/r/webdev/comments/1dez48y/wordpress_in_combination_with_vanilla_htmlcssjs/

