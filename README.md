Single-spa Example Project 🚀
=============================

Welcome to the Single-spa Example project! This repository serves as a demonstration of how to build a micro front-end architecture using Single-spa. 🏗️

Introduction
------------

👋 Welcome to the Single-spa Example project! This repository showcases an example of creating a modular web application using the micro front-end approach with Single-spa. By dividing your application into smaller, independent applications (micro front-ends), you can achieve better scalability, reusability, and maintainability.

Getting Started
---------------

To get started with the Single-spa Example project, follow the steps below:

1.  Run `Run everything.sh`

Run this `Reset ports.sh` before to ensure all port are available: `lsof -t -i:9000 |  xargs kill -9`

Documentation
-------------

For detailed documentation on how to use Single-spa and its features, refer to the official Single-spa documentation: [Single-spa Documentation](https://single-spa.js.org/docs/)

The documentation covers various topics, including:

-   Configuration options for creating and registering micro front-ends.
-   Lifecycle hooks to handle initialization, mounting, and unmounting of micro front-ends.
-   Routing and navigation within the Single-spa architecture.
-   Managing shared dependencies between micro front-ends.
-   Integration guides for popular frameworks such as React, Vue.js, Angular, and more.
-   Troubleshooting tips and best practices for building robust micro front-end architectures.

Make sure to explore the documentation to leverage the full potential of Single-spa in your projects.

Example
-------

The example included in this project demonstrates the usage of Single-spa to create a multi-application architecture with a header and multiple micro front-ends.

In the example, we have two micro front-end applications:

1.  Navbar: This micro front-end represents a header component that provides navigation links to different sections of the application.
2.  Section: This micro front-end represents a section of the application that can be dynamically loaded and displayed based
   on user interaction.
3. Form: It's a nested micro front-end.

To run the example, follow the "Getting Started" section above, and navigate to the respective URLs for Navbar and Section.
You will see the header component from Navbar and the dynamically loaded section from Section.

We hope this example gives you a clear understanding of how to structure and integrate micro front-ends using
Single-spa!

* * * * *

Feel free to explore the code, make modifications, and adapt it to suit your specific needs. If you encounter any issues
or have any questions, please don't hesitate to reach out. Happy coding! 😄




### TODO

    <!-- SPA -->

    <!-- PROD e bundled -->
    <!-- system -->
    <!-- amd -->
    <!-- single-spa -->

    <!-- test parcel inside -->
    <!-- error isolation -->
    <!-- error system management -->

    <!-- lazy -->
    <!-- autentication -->
    <!-- routing mana -->
