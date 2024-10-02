# A02. Create a GitHub Account with Git/Webstorm/Github/Tutorial. Define Terms

## Information

This README.md file contains detailed information how to use Git, WebStorm and GitHub.

## WebStorm
### 📕 What is WebStorm?

> Webstorm is an integrated development environment (IDE). It includes everything one needs for JavaScript and TypeScript development.

### 📖 How to use WebStorm?

---

**Prerequisites:**

1️⃣ Download WebStorm [link to download](https://www.jetbrains.com/webstorm/).

2️⃣ Create an account on the website. 
> WebStorm by JetBrains is a paid software but JetBrains offers Free Educational Licenses. In order to qualify for the Educational License you have to fill-out this [form](https://www.jetbrains.com/shop/eform/students).
> 
> [Here](https://www.jetbrains.com/community/education/#students) you can learn more about "Free Educational Licenses". 

3️⃣ Open the downloaded application and login into newly created account to activate the application.

_**End of prerequisites**_

---

4️⃣ Once the above is successfully completed, you should be greeted with WebStorm's main window with the following options:
- **Open** - open already existing project (aka folder).
- **Create New Project** - as title says, creates a new project. We can create new project from scratch or using one of the templates provided by the WebStorm, templates offered by Webstorm:
  - Empty Project (we will use this one)
  - Angular CLI
  - Bootstrap
  - Express
  - HTML5 Boilerlate
  - Next.js
  - Node.js
  - React
  - React Native
  - Vite
  - Vue.js
- **Open from VCS** - open from version control integration. For example: one of the most known VCS tools is Git. Meaning WebStorm will create a local folder of repository on a github to which you provide link.

5️⃣ Create an empty folder.

6️⃣ Create project structure inside your project. Everything must be organized inside, for you and someone else who will work on your project next.

The project structure can look like this:
```
|
|
|----- src (folder)
|       |------ app.js
|       |------ other.js
|
|----- styles (folder)
|       |------ main.css
|       |------ bootstrap.css.min
|
|----- img (folder)
|       |------ background.jpeg
|       |------ logotype.png
|       |------ favicon (folder)
|                |------ favicon.io *
|
|----- index.html

* favicon - is the image inside a browser tab.
```

7️⃣ We are done preparing our environment for the project. Good luck implementing your project!

## GitHub
### 📕 What is GitHub?
> GitHub is a developers portal to share and exchange code, collaborate on projects and many more. GitHub uses Git as a Version Control to track all the changes made to the repository (project).

### 📖 How to use GitHub?
1. Create an account at https://github.com.
2. As student you can apply for GitHub's Developers Pack, it will allow you to use GitHub at a Premium. https://education.github.com/pack

## Glossary
- **Branch** - parallel version of a repository. it can contain changes that are not affecting main branch. Branch can be merged into main branch to publish changes.
- **Clone** - making a copy of the repository on your local machine.
- **Commit** - add changes on the current brunch on the GitHub server, thus the needed in your repository will not only be available on your computer but also on the GitHub website.
- **Fetch** - add changes from the remote repository. For example after cloned repository was updates on the server with fetch command you can update this repository locally.
- **GIT** - version control tool. tracks all the changes in the files.
- **GitHub** - it is a developer platform, that provides opportunity for developers to create, store, and manage their code. GitHub uses Git as a version control integration, Git provides access control, bug fixing, software feature requests, task management, integrations, and many more.
- **Merge** - takes changes on one branch into another. usually from development branch into a production branch.
- **Merge Conflict** - difference occurs between merged branches. Conflicts happen when peopple make different changes to the same line of the same file.
- **Push** - add changes that were made locally into the server.
- **Pull** - when you are fetching and merging changes. for example, if someone edited the remote file you are both working on, you would want to pull in those changes to your local copy so it is up to date.
- **Remote** - version of the repository or the branch that is located/hosted on the server.
- **Repository** - project's folder on the GitHub.

## Resources
1. JetBrains official website - https://www.jetbrains.com.
2. GitHub official website - https://github.com
3. GitHub Documentation - https://docs.github.com