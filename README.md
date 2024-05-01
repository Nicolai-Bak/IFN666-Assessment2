# Nicolai Bak's Website

## The purpose of the application

The purpose of the application is to fulfill the requirements of the IFN666 Assessment 2. The application is a personal website for Nicolai Bak, which includes information about Nicolai Bak, his work experience, education, and skills. The application also includes Nicolai's hobby of triathlon training by displaying his training data from Strava.

## A description of how to contribute to the development of the application

To contribute to the development of the application, you can fork the repository and create a pull request with your changes. Make sure to:

* Prefix the branch name with `feature/` if you are adding a new feature, `bugfix/` if you are fixing a bug, or `enhancement/` if you are improving an existing feature.
* Follow the coding standards and conventions used in the project.
* Add an argumented description of the changes you have made.
* Test your changes to make sure they work as expected.
* Update the documentation if necessary.
* Make sure the changes do not introduce any new issues.
* Make sure the changes do not break any existing functionality.
* Make sure the changes do not introduce any security vulnerabilities.

### Getting started after forking the repository

To get started after forking the repository, clone the repository to your local machine:

```bash
git clone <repository-url>
```

Then, navigate to the project directory:

```bash
cd <project-directory>
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Create a new branch for your changes:

```bash
git checkout -b <branch-name>
```

## A list of features

The application includes the following features:

* A home page a catchy image and introduction to the website.
* A about page with information about Nicolai Bak.
* A resume page with Nicolai Bak's info, work experience, education, and skills.
* A portfolio of activities Nicolai Bak has performed.
* Datacollection from:
  * Strava API to show Nicolai Bak's training data.
  * Weather API to show the weather for the day of an activity.
* Integration with Google Maps to show the route of an activity.

## A list of dependencies and how to install them

A list of dependencies and the applied versions are listed in the `package.json` file. To install the dependencies, run the following command:

```bash
npm install
```

## A description of the applications architecture

The application is build using React and a modular architecture. The application is divided into components, each with their own functionality. The components are then combined to create the application. Where possible, components are reused to reduce code duplication.

Data fetching is separated from view components by making use of custom hooks. This allows for better separation of concerns and makes the code easier to maintain.

The design of the application is based on the MUI design system, which provides a set of components that can be used to create a consistent design across the application.

For components which is not provided by MUI, custom components are created. These are then styled using CSS to match the design of the application.

## How to report issues

If you have any issues with the application, please report them by opening an issue on the [GitHub issues page](https://github.com/Nicolai-Bak/IFN666-Assessment2/issues)

Make sure to include a detailed description of the issue, including any error messages you may have received, and steps to reproduce the issue. Use screenshots if necessary.

Use the following template to report an issue:

```md
**Description:**

**Steps to reproduce:**

**Expected result:**

**Actual result:**

**Additional information:**
```
