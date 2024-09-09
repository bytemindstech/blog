---
title: 'Introduction to HTML and Its Basics'
date: '2024-08-09'
author: 'Jhenbert'
category: 'Web Development'
isPublished: true
---

## {title}

HTML, short for HyperText Markup Language, is the foundational language used to create web pages. It structures the content on the web and helps browsers understand and render elements like text, images, and links. In this blog, we'll dive into what HTML is, its basic structure, and how you can start writing your own HTML.

### What is HTML?

HTML is a markup language, meaning it uses "tags" to structure documents and define elements like headings, paragraphs, and links. These tags tell the browser how to display the content. HTML itself is not a programming language but is essential for web development because it forms the backbone of any web page.

**Key Concepts:**

- **Tags:** Elements in HTML are represented by tags. Most tags have an opening `<tag>` and closing `</tag>` pair.

- **Attributes:** HTML elements can have attributes to define additional properties (like `class`, `id`, `src`, etc.)

- **Elements:** The content between opening and closing tags is referred to as an element. For example, `<p>Hello World!</p>` is a paragraph element.

### Basic Structure of an HTML Document

Below is an example of a simple HTML page:

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>My First Webpage</title>
	</head>
	<body>
		<h1>Welcome to My Webpage</h1>
		<p>This is a paragraph with some text.</p>
	</body>
</html>
```

**Explanation of the Structure:**

1. `<!DOCTYPE html>`: This declaration defines the document type and version of HTML being used (HTML5 in this case).

2. `<html>`: The root element that contains all other HTML elements on the page.

3. `<head>`: Contains meta-information about the webpage, like the title, character set, and links to external resources (stylesheets, scripts).

4. `<title>`: Specifies the title of the webpage (this appears on the browser tab).

5. `<body>`: This section contains the visible content on the web page, including text, images, and links.

6. `<h1>`: A heading element. HTML provides six levels of headings, `<h1>` being the most important and `<h6>` the least.

7. `<p>`: A paragraph element used for text.

### Common HTML Tags

Here are some common tags you'll encounter when writing HTML:

#### Headings

HTML provides six levels of headings. They are displayed as bold and have decreasing font size from `<h1>` to `<h6>`.

```html
<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<h3>Another Sub Heading</h3>
```

#### Paragraphs

Paragraphs are defined using the `<p>` tag.

```html
<p>This is a paragraph of text.</p>
```

#### Links

Links are created using the `<a>` tag, which stands for "anchor."

```html
<a href="https://example.com">Click here to visit Example.com</a>
```

The `href` attribute specifies the URL to link to.

#### Images

Images are embedded using the `<img>` tag.

```html
<img src="image.jpg" alt="Description of the image" />
```

- `src`: Specifies the source of the image.

- `alt`: Alternative text that appears if the image fails to load.

#### Lists

HTML supports ordered and unordered lists.

- **Unordered List** (bulleted):

```html
<ul>
	<li>Item 1</li>
	<li>Item 2</li>
</ul>
```

- **Ordered List** (numbered):

```html
<ol>
	<li>First item</li>
	<li>Second item</li>
</ol>
```

#### Tables

You can create tables using the following tags: `<table>`, `<tr>` (table row), `<th>` (table header), and `<td>` (table data).

```html
<table>
	<tr>
		<th>Header 1</th>
		<th>Header 2</th>
	</tr>
	<tr>
		<td>Row 1, Cell 1</td>
		<td>Row 1, Cell 2</td>
	</tr>
</table>
```

### Conclusion

HTML is the essential building block of the web. It structures the content you see in web browsers and is the starting point for anyone looking to create web pages. With a good grasp of HTML, you'll be able to create and structure your own web content. From here, you can explore CSS for styling and JavaScript for interactivity, which will elevate your web development skills further.

Happy coding!
