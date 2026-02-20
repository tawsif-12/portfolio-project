export const blogPosts = [
  {
    id: 1,
    slug: "prompt-engineering-best-practices",
    title: "Prompt Engineering Best Practices: Getting Better AI Responses",
    date: "2024-02-15",
    author: "Md Towsif Bin Mannan",
    excerpt: "Master the art of prompt engineering to get better results from AI models. Learn proven techniques, common patterns, and best practices for crafting effective prompts.",
    content: `
# Prompt Engineering Best Practices

Prompt engineering is quickly becoming one of the most valuable skills in the AI era. Whether you're working with ChatGPT, Claude, or other LLMs, knowing how to craft effective prompts can dramatically improve your results.

## Why Prompt Engineering Matters

The quality of AI output is directly proportional to the quality of your prompts. A well-crafted prompt can:
- Generate more accurate and relevant responses
- Save time by reducing iterations
- Unlock advanced capabilities of AI models
- Provide consistent, reliable outputs

## Core Principles

### 1. Be Specific and Clear

Instead of vague prompts, provide clear context and specific requirements:

**Bad Prompt:**
"Write some code"

**Good Prompt:**
"Write a Python function that takes a list of numbers and returns the mean, median, and mode. Include error handling for empty lists."

### 2. Provide Context

Give the AI model background information to work with:

\`\`\`
You are a data analyst working with customer data. Analyze the following dataset 
and provide insights on customer behavior patterns. Focus on:
- Purchase frequency
- Average transaction value
- Seasonal trends
\`\`\`

### 3. Use Examples (Few-Shot Learning)

Show the AI what you want:

\`\`\`
Convert these sentences to JSON format:

Example:
Input: "John is 25 years old and lives in NYC"
Output: {"name": "John", "age": 25, "city": "NYC"}

Now convert: "Sarah is 30 years old and lives in London"
\`\`\`

### 4. Break Down Complex Tasks

For complex problems, use step-by-step instructions:

\`\`\`
Task: Analyze this dataset and create visualizations

Step 1: Load and clean the data
Step 2: Calculate summary statistics
Step 3: Identify correlations between variables
Step 4: Suggest appropriate chart types for each insight
Step 5: Generate Python code for visualizations
\`\`\`

## Advanced Techniques

### Chain of Thought Prompting

Ask the AI to think through the problem:

\`\`\`
Let's solve this step by step:
1. First, identify the key variables
2. Then, analyze the relationships
3. Finally, draw conclusions

Problem: [Your problem here]
\`\`\`

### Role-Based Prompting

Assign a specific role to the AI:

\`\`\`
You are an experienced machine learning engineer. Review this model 
architecture and suggest improvements for better performance.
\`\`\`

### Iterative Refinement

Start broad, then refine:

\`\`\`
First attempt: "Explain neural networks"
Refined: "Explain how backpropagation works in neural networks using a 
simple example with 3 layers"
\`\`\`

## Common Pitfalls to Avoid

1. **Being too vague** - Specificity is key
2. **Overloading a single prompt** - Break complex tasks into steps
3. **Not iterating** - Refine prompts based on results
4. **Ignoring output format** - Specify exactly how you want the response

## Practical Example: Data Analysis

**Effective Prompt:**
\`\`\`
I have a CSV file with columns: date, product, sales, region.

Task: Analyze sales trends over the last 6 months
Output format:
1. Summary statistics (mean, median, std)
2. Top 5 products by total sales
3. Regional performance comparison
4. Month-over-month growth rate
5. Python code to generate visualizations

Please provide explanations for each insight.
\`\`\`

## Conclusion

Prompt engineering is both an art and a science. Practice these techniques, experiment with different approaches, and always iterate on your prompts. The more specific and well-structured your prompts, the better your AI outputs will be.

Remember: 
- Context is crucial
- Examples help immensely
- Break down complex tasks
- Iterate and refine

Happy prompting! 🚀
    `,
    tags: ["AI", "Prompt Engineering", "Machine Learning", "Best Practices"],
    readTime: "6 min read",
    featured: true,
  },
  {
    id: 2,
    slug: "data-visualization-power-bi",
    title: "Creating Interactive Dashboards with Power BI",
    date: "2024-02-01",
    author: "Md Towsif Bin Mannan",
    excerpt: "Learn how to create stunning, interactive data visualizations using Power BI. From data import to publishing dashboards, this guide covers everything you need to know.",
    content: `
# Creating Interactive Dashboards with Power BI

Power BI is one of the most powerful tools for data visualization and business intelligence. In this guide, I'll walk you through creating effective, interactive dashboards.

## Why Power BI?

Power BI offers several advantages:
- Intuitive drag-and-drop interface
- Wide range of visualization types
- Real-time data updates
- Easy sharing and collaboration
- Integration with multiple data sources

## Getting Started

### 1. Connect to Your Data

Power BI supports various data sources:
- Excel files
- SQL databases
- Cloud services (Azure, AWS)
- Web APIs
- CSV files

\`\`\`
Home > Get Data > Choose your source
\`\`\`

### 2. Transform Your Data

Use Power Query Editor to:
- Remove duplicates
- Filter rows
- Change data types
- Create calculated columns
- Merge datasets

### 3. Create Visualizations

Choose the right chart for your data:
- **Bar/Column Charts**: Comparing categories
- **Line Charts**: Trends over time
- **Pie Charts**: Proportions (use sparingly!)
- **Tables**: Detailed data
- **Cards**: Key metrics
- **Maps**: Geographical data

## Best Practices

### 1. Keep It Simple

Don't overcrowd your dashboard. Focus on:
- Key metrics at the top
- 5-7 visualizations max per page
- Clear, readable fonts
- Consistent color scheme

### 2. Tell a Story

Organize your dashboard to guide the viewer:
- Start with overview metrics
- Drill down into details
- Use filters effectively
- Add tooltips for context

### 3. Performance Optimization

- Use DirectQuery for large datasets
- Optimize DAX formulas
- Reduce visual complexity
- Use aggregations wisely

## Example Dashboard Structure

**Sales Performance Dashboard:**

Top Section:
- Total Revenue (Card)
- Total Orders (Card)
- Average Order Value (Card)
- Growth Rate (Card)

Middle Section:
- Revenue by Month (Line Chart)
- Top Products (Bar Chart)

Bottom Section:
- Sales by Region (Map)
- Category Performance (Table)

## DAX Formulas

Learn essential DAX functions:

\`\`\`dax
// Calculate Year-over-Year Growth
YoY Growth = 
DIVIDE(
    [Current Year Sales] - [Previous Year Sales],
    [Previous Year Sales]
)

// Running Total
Running Total = 
CALCULATE(
    SUM(Sales[Amount]),
    FILTER(
        ALL(Sales[Date]),
        Sales[Date] <= MAX(Sales[Date])
    )
)
\`\`\`

## Publishing and Sharing

1. Save your report
2. Publish to Power BI Service
3. Create a dashboard
4. Share with stakeholders
5. Set up scheduled refresh

## Conclusion

Power BI is an essential tool for modern data analysis. Master these basics, experiment with different visualizations, and always keep your audience in mind.

The key to great dashboards is clarity and actionability. Make it easy for users to find insights and make decisions.

Happy visualizing! 📊
    `,
    tags: ["Power BI", "Data Visualization", "Data Analytics", "Business Intelligence"],
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 3,
    slug: "getting-started-with-react-hooks",
    title: "Getting Started with React Hooks: A Complete Guide",
    date: "2024-01-15",
    author: "Md Towsif Bin Mannan",
    excerpt: "Learn how to use React Hooks to manage state and side effects in your functional components. This comprehensive guide covers useState, useEffect, and custom hooks.",
    content: `
# Getting Started with React Hooks

React Hooks revolutionized the way we write React components. Introduced in React 16.8, hooks allow you to use state and other React features without writing a class component.

## Why Hooks?

Before hooks, if you wanted to use state or lifecycle methods, you had to use class components. This often led to:
- Complex components that are hard to understand
- Confusing behavior with 'this' keyword
- Difficulty in reusing stateful logic

## useState Hook

The useState hook lets you add state to functional components:

\`\`\`javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

## useEffect Hook

useEffect lets you perform side effects in functional components:

\`\`\`javascript
import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(setData);
  }, []); // Empty array means run once on mount
  
  return <div>{data ? data.title : 'Loading...'}</div>;
}
\`\`\`

## Custom Hooks

You can create your own hooks to reuse stateful logic:

\`\`\`javascript
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue];
}
\`\`\`

## Conclusion

React Hooks make your code more readable and reusable. Start small, experiment with useState and useEffect, and gradually explore other hooks as you need them.
    `,
    tags: ["React", "JavaScript", "Web Development", "Hooks"],
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    slug: "tailwind-css-best-practices",
    title: "Tailwind CSS Best Practices for Production",
    date: "2024-01-08",
    author: "Md Towsif Bin Mannan",
    excerpt: "Discover the best practices for using Tailwind CSS in production applications, including performance optimization and maintainability tips.",
    content: `
# Tailwind CSS Best Practices for Production

Tailwind CSS has become one of the most popular utility-first CSS frameworks. Here are some best practices to follow when using it in production.

## 1. Purge Unused Styles

Always configure PurgeCSS in production to remove unused styles:

\`\`\`javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  // ...
}
\`\`\`

## 2. Use @apply Sparingly

While @apply is useful, overusing it defeats the purpose of utility-first CSS:

\`\`\`css
/* Good - for truly reusable components */
.btn-primary {
  @apply px-4 py-2 bg-blue-500 text-white rounded;
}

/* Not ideal - just use utilities directly */
.card {
  @apply p-4 rounded shadow;
}
\`\`\`

## 3. Create Custom Utilities

Extend Tailwind with your own utilities for project-specific needs:

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
      },
    },
  },
}
\`\`\`

## 4. Component Extraction

Extract repeated patterns into components, not CSS classes:

\`\`\`jsx
// Good
function Button({ children, variant = 'primary' }) {
  const classes = variant === 'primary' 
    ? 'bg-blue-500 text-white' 
    : 'bg-gray-200 text-gray-800';
    
  return (
    <button className={\`px-4 py-2 rounded \${classes}\`}>
      {children}
    </button>
  );
}
\`\`\`

## Conclusion

Tailwind CSS is powerful when used correctly. Follow these practices to keep your codebase maintainable and performant.
    `,
    tags: ["Tailwind CSS", "CSS", "Web Development", "Best Practices"],
    readTime: "4 min read",
    featured: true,
  },
  {
    id: 3,
    slug: "modern-javascript-features",
    title: "Modern JavaScript Features You Should Know",
    date: "2023-12-20",
    author: "Md Towsif Bin Mannan",
    excerpt: "Explore the latest JavaScript features that will make your code cleaner and more efficient, from optional chaining to nullish coalescing.",
    content: `
# Modern JavaScript Features You Should Know

JavaScript continues to evolve. Here are some modern features that will improve your code.

## Optional Chaining (?.)

Safely access nested properties:

\`\`\`javascript
// Old way
const street = user && user.address && user.address.street;

// New way
const street = user?.address?.street;
\`\`\`

## Nullish Coalescing (??)

Provide default values only for null/undefined:

\`\`\`javascript
// ?? only checks for null/undefined
const value = someValue ?? 'default';

// || checks for any falsy value
const value2 = someValue || 'default';
\`\`\`

## Array Methods

Powerful array manipulation methods:

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];

// At method
console.log(numbers.at(-1)); // 5

// Find last
const lastEven = numbers.findLast(n => n % 2 === 0); // 4
\`\`\`

## Conclusion

These features make JavaScript more expressive and help you write cleaner code. Start using them today!
    `,
    tags: ["JavaScript", "ES2022", "Web Development"],
    readTime: "3 min read",
    featured: false,
  },
  {
    id: 4,
    slug: "building-restful-apis-nodejs",
    title: "Building RESTful APIs with Node.js and Express",
    date: "2023-12-10",
    author: "Md Towsif Bin Mannan",
    excerpt: "A comprehensive guide to building scalable RESTful APIs using Node.js and Express, including best practices and common patterns.",
    content: `
# Building RESTful APIs with Node.js and Express

Learn how to build robust APIs with Node.js and Express.

## Setting Up

Install dependencies:

\`\`\`bash
npm install express mongoose dotenv cors
\`\`\`

## Basic Server

Create a basic Express server:

\`\`\`javascript
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`

## Best Practices

1. Use environment variables
2. Implement proper error handling
3. Validate input data
4. Use middleware for common tasks
5. Document your API

## Conclusion

Building APIs with Node.js is straightforward with Express. Follow these patterns for maintainable, scalable applications.
    `,
    tags: ["Node.js", "Express", "API", "Backend"],
    readTime: "6 min read",
    featured: false,
  },
];
