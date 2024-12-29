# Tailwind CSS Hover Effect Bug

This repository demonstrates an uncommon bug encountered when using Tailwind CSS. The hover effect on buttons is overridden by a parent div's background color, specifically under certain color conditions. This bug only appears on certain color palettes. 

## Bug Description

A button with hover styles applied using Tailwind CSS classes does not show the expected hover effect when the parent div has a particular background color. The parent div's background seems to override the button's hover styles.

## Steps to Reproduce
1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the application: `npm start`
4. Observe the button behavior on hover. Note how the hover style is not applied correctly.

## Solution
The solution is to apply `!important` to the relevant hover styles to force them to override the parent div styles. Refer to bugSolution.js for code samples demonstrating this fix.

## Additional Notes
This bug highlights the importance of understanding CSS specificity and how parent styles can unintentionally override child styles. Using `!important` is generally not recommended, so exploring alternative layout structures and selector specificity is best practice.  The root cause of this behavior warrants further investigation into Tailwind's internal CSS generation.