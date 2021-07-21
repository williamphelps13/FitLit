# FitLit README


<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Project][turing-shield]][project-spec-url] 
[![Issues][issues-shield]][issues-url] 



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/williamphelps13/FitLit">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">FitLit</h1>

  <p align="center">
    An Application to Track Your Health
    <br />
    <a href=https://github.com/williamphelps13/FitLit><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/williamphelps13/FitLit/issues">Report Bug</a>
    ·
    <a href="https://github.com/williamphelps13/FitLit/issues">Request Feature</a>
  </p>
</p>

 

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Fitlit was a data-handling based project that challenged us to fetch multiple data sets from an API and use them to display health data for a user. We were tasked with impletmenting array protoype methods and *class to class* interaction to extract and calculate useful statisitics for a user to stay aware of their fitness levels.

In addition to handling and dsiplaying data, we also we required to fetch the data from an API set up on a local server and resolve the `promise` into usable data for javascript. 



*method for displaying a user's average hours of sleep*
```
getUserAvgHrs() {
    return (
      Math.round(
        (this.userSleep.reduce((totalHrs, userEntry) => {
          return (totalHrs += userEntry.hoursSlept);
        }, 0) /
          this.userSleep.length) *
          10
      ) / 10
    );
  }
  ```
<img width="1412" alt="Screen Shot 2021-07-20 at 8 36 28 PM" src="https://user-images.githubusercontent.com/22990386/126422063-c20f11d3-aa73-4113-b7eb-6736ee82c0e4.png">

  
[![Product Name Screen Shot][product-screenshot]](https://example.com)


### Built With

* [Javascript](https://www.javascript.com/)
* [HTML](https://html.com/)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [eslint](https://eslint.org/)
* [node](https://nodejs.org/en/)
*	[WebPack](https://webpack.js.org/)
*	[Express](https://expressjs.com/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* Text Editor
* Node
* NPM
* [Fitlit-API](https://github.com/turingschool-examples/fitlit-api)


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/williamphelps13/repo_name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<!-- USAGE EXAMPLES -->
## Usage

The application is intended to allow a user to see all of their hydreation, sleep, and activity data at any given point, as well as be able ot display past activity. It's styling intenet is driven towards viewing on a mobile device.
![recording (4)](https://user-images.githubusercontent.com/22990386/126421369-8a079d86-acd6-4031-8960-92b02f934525.gif)
![recording (5)](https://user-images.githubusercontent.com/22990386/126421376-fca9c057-657d-48a0-ae6b-e02eeb1285ca.gif)


Example: The method belonging to the `sleep class` below extracts 7 days worth of data dsiplaying that day and the prevoious 6 days inforamtion. The array needed to return an object with two properties with each property assigned to the value of an array. This method also allows for displaying weeks that may not have 7 days worth of data. The reason requiring this was to allow for dynamic inputs of data into the `chart.js` objects. We know, it needs some refactoring *[(hint, hint)](https://github.com/williamphelps13/FitLit/issues)*

```
getUserHrsByWeek(date) {
    const target = this.userSleep.find((userEntry) => userEntry.date === date);
    const index = this.userSleep.indexOf(target);
    if (index < 7) {
      let dates = this.userSleep
        .slice(0, index + 1)
        .map((userEntry) => userEntry.date);
      let hoursSlept = this.userSleep
        .slice(0, index + 1)
        .map((userEntry) => userEntry.hoursSlept);
      return { date: dates, hours: hoursSlept };
    } else {
      let dates = this.userSleep
        .slice(index - 6, index + 1)
        .map((userEntry) => userEntry.date);
      let hoursSlept = this.userSleep
        .slice(index - 6, index + 1)
        .map((userEntry) => userEntry.hoursSlept);
      return { date: dates, hours: hoursSlept };
    }
  }
```
<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/williamphelps13/FitLit/issues) for a list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact
<a class="u-email Link--primary " href="mailto:williamphelps13@gmail.com">williamphelps13@gmail.com</a>
<br>
<a class="u-email Link--primary " href="mailto:justincanthony@gmail.com">justincanthony@gmail.com</a>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[project-spec-url]: https://frontend.turing.edu/projects/fitlit.html
[turing-shield]: https://img.shields.io/badge/Project-Spec-orange
[contributors-shield]: https://img.shields.io/badge/Contributors-2-orange
[contributors-url]: https://github.com/williamphelps13/FitLit/graphs/contributors
[issues-shield]: https://img.shields.io/badge/Issues-5-orange
[issues-url]: https://github.com/williamphelps13/FitLit/issues

