# 🎨 Portfolio Website (HTML + CSS)

## 📌 Description

This is a responsive portfolio website built using **HTML and CSS**.
It demonstrates layout design, hover effects, transitions, animations, and responsive design using media queries.

---

## 🚀 Features

### 🎯 Layout

* Flexbox used for header and sections
* Structured sections: Header, About, Skills, Contact, Footer

### ✨ Styling

* Gradient background
* Clean typography and spacing
* Custom colors

### 🎬 Animations & Effects

* Hover effects on headings and navigation links
* Smooth transitions using `transition`
* Image rotation and zoom animation using `@keyframes`

### 📱 Responsive Design

* Media queries for mobile devices
* Layout adjusts for smaller screens
* Image resizing for mobile view

---

## 🛠️ Technologies Used

* HTML5
* CSS3 (Flexbox, Transforms, Animations, Media Queries)

---

## 📂 Project Structure

```
project/
│
├── index.html
├── style.css
├── README.md
```

---

## 🎨 CSS Concepts Covered

### 🔹 Flexbox

Used for:

* Header alignment
* About section layout

### 🔹 Transitions

```css
transition: transform 0.5s ease;
```

### 🔹 Transforms

```css
transform: scale(1.1);
transform: rotate(20deg);
```

### 🔹 Animations

```css
@keyframes zoom {
  from { transform: scale(1); }
  to   { transform: scale(1.1); }
}
```

### 🔹 Media Queries

```css
@media (max-width: 600px) {
  /* mobile styles */
}
```

---

## 📱 Responsive Behavior

* Header switches to column layout
* About section stacks vertically
* Image resizes for smaller screens

---

## 🎯 Learning Outcomes

* Understanding of CSS layout techniques
* Working with hover effects and animations
* Building responsive designs
* Using `transform`, `transition`, and `@keyframes`

---

## ⚠️ Notes / Improvements

* Avoid using `font-size` for hover animations (use `transform: scale()` instead)
* Combine multiple transforms properly
* Keep consistent selectors (`#header` vs `.header`)

---

## 🔥 Future Enhancements

* Add JavaScript for interactivity
* Improve UI with advanced animations
* Add projects section
* Implement dark mode

---

## 👨‍💻 Author

**Jaya Krishna**

---

## 🌟 Acknowledgment

This project is part of learning web development and practicing CSS concepts.

---
