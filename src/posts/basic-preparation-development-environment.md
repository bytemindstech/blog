---
title: 'Basic Preparation of Development Environment'
date: '2024-09-12'
author: 'Jhenbert'
category: 'Web Development'
isPublished: true
---

## {title}

Setting up your development environment is the first step to becoming a developer! In this guide, I’ll walk you through the basic tools you need to get started: VSCode, Node.js, and Git. Whether you're new to programming or have no background in web development, this guide will make sure you're all set up in no time!

### 1. Install Visual Studio Code (VSCode)

VSCode is a powerful and lightweight text editor, perfect for writing code. It's one of the most popular editors out there and is used by developers of all levels.

#### Steps to Install VSCode

1. **Go to the VSCode Website:**

   Visit <https://code.visualstudio.com/> and click on the "Download for Windows/Mac/Linux" button depending on your operating system.

2. **Install the Application:**

   Once downloaded, open the installer and follow the instructions. For most users, the default installation settings are just fine.

3. **Open VSCode:**

   After installation, open the application. You'll be greeted with a simple interface that you'll use for writing code.

4. **Install Extensions (Optional but Recommended):**

   - **Prettier:** Automatically formats your code, making it more readable.
   - **ESLint:** Helps you catch common code issues.

   To install an extension, click on the Extensions icon on the left sidebar in VSCode and search for the extension name.

### 2. Install Node.js

Node.js allows you to run JavaScript on your computer and is essential for building web applications. It also includes **npm** (Node Package Manager), which helps you install and manage libraries and packages.

#### Steps to Install Node.js

1. **Go to the Node.js Website:**

   Visit <https://nodejs.org/en/> and download the LTS (Long Term Support) version, as it’s more stable for beginners.

2. **Install Node.js:**

   Open the installer and follow the on-screen instructions. Make sure to check the option that says "Automatically install the necessary tools" during installation.

3. **Verify the Installation:**

   Open **Command Prompt** (on Windows) or **Terminal** (on Mac/Linux) and type:

   ```bash
   node -v
   ```

   You should see the Node.js version printed out. This confirms that Node.js is installed.

   Then, check if npm is installed by typing:

   ```bash
   npm -v
   ```

   This will show the version of npm installed, indicating that everything is set up properly.

### 3. Install Git

Git is a version control system that helps you manage your code changes. It’s essential when working on projects, especially when collaborating with others.

#### Steps to Install Git

1. **Go to the Git Website:**
   Visit <https://git-scm.com/> and download the latest version for your operating system.

2. **Install Git:**
   Open the installer and follow the instructions. On Windows, you'll be asked to choose settings; for beginners, the default options are fine.

3. **Verify the Installation:**
   Open **Command Prompt** or **Terminal** and type:

   ```bash
   git --version
   ```

   You should see the installed version of Git.

4. **Set Up Git (Optional):**
   To set up Git with your name and email (which will appear in your project history), use the following commands in your terminal:

   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

   Replace `Your Name` and `your.email@example.com` with your actual name and email.

### Summary

Congratulations! You've just set up the basic tools you need for web development. Here's a quick recap of what you've installed:

- **VSCode:** Your code editor, where you'll write your programs.
- **Node.js:** To run JavaScript outside the browser and manage packages.
- **Git:** For version control, helping you manage code and collaborate with others.

Now you're ready to start learning programming and building projects. Happy coding! 😊
