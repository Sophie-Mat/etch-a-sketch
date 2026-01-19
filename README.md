# Etch-a-Sketch

A browser-based sketchpad application built with HTML, CSS, and JavaScript as part of [The Odin Project's Foundations Course](https://www.theodinproject.com/lessons/foundations-etch-a-sketch).

## 🎨 Live Preview

[**View Live Demo**](https://sophie-mat.github.io/etch-a-sketch/)

## 📋 Project Description

This project creates a digital version of the classic Etch-a-Sketch toy, allowing users to draw pixelated designs by moving their mouse over a grid of squares. The application demonstrates DOM manipulation skills and responsive design principles using Flexbox.

## 🎯 Key Learning Objectives

- DOM manipulation with JavaScript
- Event listeners (mouseover, click)
- Flexbox layout system
- CSS custom properties (CSS variables)
- User input validation
- Dynamic content generation

## 📋 Project Requirements

The Odin Project assignment required implementing the following features:

### Core Requirements
1. **16x16 Grid Creation**: Create a webpage with a 16x16 grid of square divs using JavaScript (not hardcoded HTML)
2. **Flexbox Layout**: Use CSS Flexbox to make the divs appear as a grid (not CSS Grid)
3. **Hover Drawing Effect**: Set up a hover effect so grid divs change color when mouse passes over them
4. **Dynamic Grid Resizing**: Add a button that prompts user for grid size and regenerates the grid
5. **Input Validation**: Limit user input to maximum of 100 squares to prevent performance issues
6. **Consistent Grid Size**: New grids should maintain the same total pixel size regardless of resolution

### Extra Credit Challenges
- **Random RGB Colors**: Randomize squares' RGB values with each interaction
- **Progressive Darkening**: Each interaction darkens the square by 10% until fully black (10 interactions)

## 🎨 Drawing Tools

This application includes four drawing modes:

### ⚫ Pen
Classic solid black color drawing. Each square drawn over fills with black color immediately.

### 🖌 Brush
Progressive opacity effect. Hover over the same square multiple times to gradually build up darker shades. (black is the default color)

### 🌈 Colorful
Random color generator. Each square you draw over fills with a random RGB color.

### ✨ Eraser
Clear the canvas locally. Draw over squares to erase them back to white, allowing for corrections.

## 🌟 Extra Features Implemented

- **Multiple Drawing Tools**: Four distinct drawing modes (Pen, Brush, Colorful, Eraser) for varied artistic expression
- **Brush Tool with Opacity**: Progressive darkening effect built into the brush tool for natural-looking strokes
- **Clear Button**: Dedicated button for resetting the entire canvas
- **Organized UI**: Tool buttons grouped into drawing tools and grid settings for intuitive layout
- **CSS Custom Properties**: Used CSS variables for dynamic grid sizing
- **Error Handling**: Comprehensive validation for edge cases and invalid inputs

## 🚀 How to Use

1. **Select a Drawing Tool**: Click one of the four tool buttons at the top (Pen, Brush, Colorful, or Eraser)
2. **Draw**: Move your mouse over the grid squares to draw
3. **Adjust Grid**: Click "Change Grid Size" to enter a new grid resolution (up to 100x100)
4. **Clear Canvas**: Click "Clear" to reset and start over
