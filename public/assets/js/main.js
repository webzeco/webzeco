/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/toastify-js/src/toastify.js":
      /*!**************************************************!*\
  !*** ./node_modules/toastify-js/src/toastify.js ***!
  \**************************************************/
      /***/ function (module) {
        /*!
         * Toastify js 1.11.2
         * https://github.com/apvarun/toastify-js
         * @license MIT licensed
         *
         * Copyright (C) 2018 Varun A P
         */
        (function (root, factory) {
          if (true && module.exports) {
            module.exports = factory();
          } else {
            root.Toastify = factory();
          }
        })(this, function (global) {
          // Object initialization
          var Toastify = function (options) {
              // Returning a new init object
              return new Toastify.lib.init(options);
            },
            // Library version
            version = "1.11.2";

          // Set the default global options
          Toastify.defaults = {
            oldestFirst: true,
            text: "Toastify is awesome!",
            node: undefined,
            duration: 3000,
            selector: undefined,
            callback: function () {},
            destination: undefined,
            newWindow: false,
            close: false,
            gravity: "toastify-top",
            positionLeft: false,
            position: "",
            backgroundColor: "",
            avatar: "",
            className: "",
            stopOnFocus: true,
            onClick: function () {},
            offset: { x: 0, y: 0 },
            escapeMarkup: true,
            style: { background: "" },
          };

          // Defining the prototype of the object
          Toastify.lib = Toastify.prototype = {
            toastify: version,

            constructor: Toastify,

            // Initializing the object with required parameters
            init: function (options) {
              // Verifying and validating the input object
              if (!options) {
                options = {};
              }

              // Creating the options object
              this.options = {};

              this.toastElement = null;

              // Validating the options
              this.options.text = options.text || Toastify.defaults.text; // Display message
              this.options.node = options.node || Toastify.defaults.node; // Display content as node
              this.options.duration =
                options.duration === 0
                  ? 0
                  : options.duration || Toastify.defaults.duration; // Display duration
              this.options.selector =
                options.selector || Toastify.defaults.selector; // Parent selector
              this.options.callback =
                options.callback || Toastify.defaults.callback; // Callback after display
              this.options.destination =
                options.destination || Toastify.defaults.destination; // On-click destination
              this.options.newWindow =
                options.newWindow || Toastify.defaults.newWindow; // Open destination in new window
              this.options.close = options.close || Toastify.defaults.close; // Show toast close icon
              this.options.gravity =
                options.gravity === "bottom"
                  ? "toastify-bottom"
                  : Toastify.defaults.gravity; // toast position - top or bottom
              this.options.positionLeft =
                options.positionLeft || Toastify.defaults.positionLeft; // toast position - left or right
              this.options.position =
                options.position || Toastify.defaults.position; // toast position - left or right
              this.options.backgroundColor =
                options.backgroundColor || Toastify.defaults.backgroundColor; // toast background color
              this.options.avatar = options.avatar || Toastify.defaults.avatar; // img element src - url or a path
              this.options.className =
                options.className || Toastify.defaults.className; // additional class names for the toast
              this.options.stopOnFocus =
                options.stopOnFocus === undefined
                  ? Toastify.defaults.stopOnFocus
                  : options.stopOnFocus; // stop timeout on focus
              this.options.onClick =
                options.onClick || Toastify.defaults.onClick; // Callback after click
              this.options.offset = options.offset || Toastify.defaults.offset; // toast offset
              this.options.escapeMarkup =
                options.escapeMarkup !== undefined
                  ? options.escapeMarkup
                  : Toastify.defaults.escapeMarkup;
              this.options.style = options.style || Toastify.defaults.style;
              if (options.backgroundColor) {
                this.options.style.background = options.backgroundColor;
              }

              // Returning the current object for chaining functions
              return this;
            },

            // Building the DOM element
            buildToast: function () {
              // Validating if the options are defined
              if (!this.options) {
                throw "Toastify is not initialized";
              }

              // Creating the DOM object
              var divElement = document.createElement("div");
              divElement.className = "toastify on " + this.options.className;

              // Positioning toast to left or right or center
              if (!!this.options.position) {
                divElement.className += " toastify-" + this.options.position;
              } else {
                // To be depreciated in further versions
                if (this.options.positionLeft === true) {
                  divElement.className += " toastify-left";
                  console.warn(
                    "Property `positionLeft` will be depreciated in further versions. Please use `position` instead."
                  );
                } else {
                  // Default position
                  divElement.className += " toastify-right";
                }
              }

              // Assigning gravity of element
              divElement.className += " " + this.options.gravity;

              if (this.options.backgroundColor) {
                // This is being deprecated in favor of using the style HTML DOM property
                console.warn(
                  'DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.'
                );
              }

              // Loop through our style object and apply styles to divElement
              for (var property in this.options.style) {
                divElement.style[property] = this.options.style[property];
              }

              // Adding the toast message/node
              if (
                this.options.node &&
                this.options.node.nodeType === Node.ELEMENT_NODE
              ) {
                // If we have a valid node, we insert it
                divElement.appendChild(this.options.node);
              } else {
                if (this.options.escapeMarkup) {
                  divElement.innerText = this.options.text;
                } else {
                  divElement.innerHTML = this.options.text;
                }

                if (this.options.avatar !== "") {
                  var avatarElement = document.createElement("img");
                  avatarElement.src = this.options.avatar;

                  avatarElement.className = "toastify-avatar";

                  if (
                    this.options.position == "left" ||
                    this.options.positionLeft === true
                  ) {
                    // Adding close icon on the left of content
                    divElement.appendChild(avatarElement);
                  } else {
                    // Adding close icon on the right of content
                    divElement.insertAdjacentElement(
                      "afterbegin",
                      avatarElement
                    );
                  }
                }
              }

              // Adding a close icon to the toast
              if (this.options.close === true) {
                // Create a span for close element
                var closeElement = document.createElement("span");
                closeElement.innerHTML = "&#10006;";

                closeElement.className = "toast-close";

                // Triggering the removal of toast from DOM on close click
                closeElement.addEventListener(
                  "click",
                  function (event) {
                    event.stopPropagation();
                    this.removeElement(this.toastElement);
                    window.clearTimeout(this.toastElement.timeOutValue);
                  }.bind(this)
                );

                //Calculating screen width
                var width =
                  window.innerWidth > 0 ? window.innerWidth : screen.width;

                // Adding the close icon to the toast element
                // Display on the right if screen width is less than or equal to 360px
                if (
                  (this.options.position == "left" ||
                    this.options.positionLeft === true) &&
                  width > 360
                ) {
                  // Adding close icon on the left of content
                  divElement.insertAdjacentElement("afterbegin", closeElement);
                } else {
                  // Adding close icon on the right of content
                  divElement.appendChild(closeElement);
                }
              }

              // Clear timeout while toast is focused
              if (this.options.stopOnFocus && this.options.duration > 0) {
                var self = this;
                // stop countdown
                divElement.addEventListener("mouseover", function (event) {
                  window.clearTimeout(divElement.timeOutValue);
                });
                // add back the timeout
                divElement.addEventListener("mouseleave", function () {
                  divElement.timeOutValue = window.setTimeout(function () {
                    // Remove the toast from DOM
                    self.removeElement(divElement);
                  }, self.options.duration);
                });
              }

              // Adding an on-click destination path
              if (typeof this.options.destination !== "undefined") {
                divElement.addEventListener(
                  "click",
                  function (event) {
                    event.stopPropagation();
                    if (this.options.newWindow === true) {
                      window.open(this.options.destination, "_blank");
                    } else {
                      window.location = this.options.destination;
                    }
                  }.bind(this)
                );
              }

              if (
                typeof this.options.onClick === "function" &&
                typeof this.options.destination === "undefined"
              ) {
                divElement.addEventListener(
                  "click",
                  function (event) {
                    event.stopPropagation();
                    this.options.onClick();
                  }.bind(this)
                );
              }

              // Adding offset
              if (typeof this.options.offset === "object") {
                var x = getAxisOffsetAValue("x", this.options);
                var y = getAxisOffsetAValue("y", this.options);

                var xOffset = this.options.position == "left" ? x : "-" + x;
                var yOffset =
                  this.options.gravity == "toastify-top" ? y : "-" + y;

                divElement.style.transform =
                  "translate(" + xOffset + "," + yOffset + ")";
              }

              // Returning the generated element
              return divElement;
            },

            // Displaying the toast
            showToast: function () {
              // Creating the DOM object for the toast
              this.toastElement = this.buildToast();

              // Getting the root element to with the toast needs to be added
              var rootElement;
              if (typeof this.options.selector === "string") {
                rootElement = document.getElementById(this.options.selector);
              } else if (
                this.options.selector instanceof HTMLElement ||
                (typeof ShadowRoot !== "undefined" &&
                  this.options.selector instanceof ShadowRoot)
              ) {
                rootElement = this.options.selector;
              } else {
                rootElement = document.body;
              }

              // Validating if root element is present in DOM
              if (!rootElement) {
                throw "Root element is not defined";
              }

              // Adding the DOM element
              var elementToInsert = Toastify.defaults.oldestFirst
                ? rootElement.firstChild
                : rootElement.lastChild;
              rootElement.insertBefore(this.toastElement, elementToInsert);

              // Repositioning the toasts in case multiple toasts are present
              Toastify.reposition();

              if (this.options.duration > 0) {
                this.toastElement.timeOutValue = window.setTimeout(
                  function () {
                    // Remove the toast from DOM
                    this.removeElement(this.toastElement);
                  }.bind(this),
                  this.options.duration
                ); // Binding `this` for function invocation
              }

              // Supporting function chaining
              return this;
            },

            hideToast: function () {
              if (this.toastElement.timeOutValue) {
                clearTimeout(this.toastElement.timeOutValue);
              }
              this.removeElement(this.toastElement);
            },

            // Removing the element from the DOM
            removeElement: function (toastElement) {
              // Hiding the element
              // toastElement.classList.remove("on");
              toastElement.className = toastElement.className.replace(
                " on",
                ""
              );

              // Removing the element from DOM after transition end
              window.setTimeout(
                function () {
                  // remove options node if any
                  if (this.options.node && this.options.node.parentNode) {
                    this.options.node.parentNode.removeChild(this.options.node);
                  }

                  // Remove the element from the DOM, only when the parent node was not removed before.
                  if (toastElement.parentNode) {
                    toastElement.parentNode.removeChild(toastElement);
                  }

                  // Calling the callback function
                  this.options.callback.call(toastElement);

                  // Repositioning the toasts again
                  Toastify.reposition();
                }.bind(this),
                400
              ); // Binding `this` for function invocation
            },
          };

          // Positioning the toasts on the DOM
          Toastify.reposition = function () {
            // Top margins with gravity
            var topLeftOffsetSize = {
              top: 15,
              bottom: 15,
            };
            var topRightOffsetSize = {
              top: 15,
              bottom: 15,
            };
            var offsetSize = {
              top: 15,
              bottom: 15,
            };

            // Get all toast messages on the DOM
            var allToasts = document.getElementsByClassName("toastify");

            var classUsed;

            // Modifying the position of each toast element
            for (var i = 0; i < allToasts.length; i++) {
              // Getting the applied gravity
              if (containsClass(allToasts[i], "toastify-top") === true) {
                classUsed = "toastify-top";
              } else {
                classUsed = "toastify-bottom";
              }

              var height = allToasts[i].offsetHeight;
              classUsed = classUsed.substr(9, classUsed.length - 1);
              // Spacing between toasts
              var offset = 15;

              var width =
                window.innerWidth > 0 ? window.innerWidth : screen.width;

              // Show toast in center if screen with less than or equal to 360px
              if (width <= 360) {
                // Setting the position
                allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";

                offsetSize[classUsed] += height + offset;
              } else {
                if (containsClass(allToasts[i], "toastify-left") === true) {
                  // Setting the position
                  allToasts[i].style[classUsed] =
                    topLeftOffsetSize[classUsed] + "px";

                  topLeftOffsetSize[classUsed] += height + offset;
                } else {
                  // Setting the position
                  allToasts[i].style[classUsed] =
                    topRightOffsetSize[classUsed] + "px";

                  topRightOffsetSize[classUsed] += height + offset;
                }
              }
            }

            // Supporting function chaining
            return this;
          };

          // Helper function to get offset.
          function getAxisOffsetAValue(axis, options) {
            if (options.offset[axis]) {
              if (isNaN(options.offset[axis])) {
                return options.offset[axis];
              } else {
                return options.offset[axis] + "px";
              }
            }

            return "0px";
          }

          function containsClass(elem, yourClass) {
            if (!elem || typeof yourClass !== "string") {
              return false;
            } else if (
              elem.className &&
              elem.className.trim().split(/\s+/gi).indexOf(yourClass) > -1
            ) {
              return true;
            } else {
              return false;
            }
          }

          // Setting up the prototype for the init object
          Toastify.lib.init.prototype = Toastify.lib;

          // Returning the Toastify function to be assigned to the window object/module
          return Toastify;
        });

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
    "use strict";
    /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(
        /*! toastify-js */ "./node_modules/toastify-js/src/toastify.js"
      );
    /* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        toastify_js__WEBPACK_IMPORTED_MODULE_0__
      );

    (function () {
      "use strict";

      /**
       * Easy selector helper function
       */
      const select = (el, all = false) => {
        el = el.trim();
        if (all) {
          return [...document.querySelectorAll(el)];
        } else {
          return document.querySelector(el);
        }
      };

      /**
       * Easy event listener function
       */
      const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all);
        if (selectEl) {
          if (all) {
            selectEl.forEach((e) => e.addEventListener(type, listener));
          } else {
            selectEl.addEventListener(type, listener);
          }
        }
      };

      /**
       * Easy on scroll event listener
       */
      const onscroll = (el, listener) => {
        el.addEventListener("scroll", listener);
      };

      /**
       * Navbar links active state on scroll
       */
      let navbarlinks = select("#navbar .scrollto", true);
      const navbarlinksActive = () => {
        let position = window.scrollY + 200;
        navbarlinks.forEach((navbarlink) => {
          if (!navbarlink.hash) return;
          let section = select(navbarlink.hash);
          if (!section) return;
          if (
            position >= section.offsetTop &&
            position <= section.offsetTop + section.offsetHeight
          ) {
            navbarlink.classList.add("active");
          } else {
            navbarlink.classList.remove("active");
          }
        });
      };
      window.addEventListener("load", navbarlinksActive);
      onscroll(document, navbarlinksActive);

      /**
       * Scrolls to an element with header offset
       */
      const scrollto = (el) => {
        let header = select("#header");
        let offset = header.offsetHeight;

        let elementPos = select(el).offsetTop;
        window.scrollTo({
          top: elementPos - offset,
          behavior: "smooth",
        });
      };

      /**
       * Toggle .header-scrolled class to #header when page is scrolled
       */
      let selectHeader = select("#header");
      if (selectHeader) {
        const headerScrolled = () => {
          if (window.scrollY > 100) {
            selectHeader.classList.add("header-scrolled");
          } else {
            selectHeader.classList.remove("header-scrolled");
          }
        };
        window.addEventListener("load", headerScrolled);
        onscroll(document, headerScrolled);
      }

      /**
       * Back to top button
       */
      let backtotop = select(".back-to-top");
      if (backtotop) {
        const toggleBacktotop = () => {
          if (window.scrollY > 100) {
            backtotop.classList.add("active");
          } else {
            backtotop.classList.remove("active");
          }
        };
        window.addEventListener("load", toggleBacktotop);
        onscroll(document, toggleBacktotop);
      }

      /**
       * Mobile nav toggle
       */
      on("click", ".mobile-nav-toggle", function (e) {
        select("#navbar").classList.toggle("navbar-mobile");
        this.classList.toggle("bi-list");
        this.classList.toggle("bi-x");
      });

      /**
       * Mobile nav dropdowns activate
       */
      on(
        "click",
        ".navbar .dropdown > a",
        function (e) {
          if (select("#navbar").classList.contains("navbar-mobile")) {
            e.preventDefault();
            this.nextElementSibling.classList.toggle("dropdown-active");
          }
        },
        true
      );

      /**
       * Scrool with ofset on links with a class name .scrollto
       */
      on(
        "click",
        ".scrollto",
        function (e) {
          if (select(this.hash)) {
            e.preventDefault();

            let navbar = select("#navbar");
            if (navbar.classList.contains("navbar-mobile")) {
              navbar.classList.remove("navbar-mobile");
              let navbarToggle = select(".mobile-nav-toggle");
              navbarToggle.classList.toggle("bi-list");
              navbarToggle.classList.toggle("bi-x");
            }
            scrollto(this.hash);
          }
        },
        true
      );

      /**
       * Scroll with ofset on page load with hash links in the url
       */
      window.addEventListener("load", () => {
        if (window.location.hash) {
          if (select(window.location.hash)) {
            scrollto(window.location.hash);
          }
        }
      });

      /**
       * Preloader
       */
      let preloader = select("#preloader");
      if (preloader) {
        window.addEventListener("load", () => {
          preloader.remove();
        });
      }

      /**
       * Initiate  glightbox
       */
      const glightbox = GLightbox({
        selector: ".glightbox",
      });

      /**
       * Skills animation
       */
      let skilsContent = select(".skills-content");
      if (skilsContent) {
        new Waypoint({
          element: skilsContent,
          offset: "80%",
          handler: function (direction) {
            let progress = select(".progress .progress-bar", true);
            progress.forEach((el) => {
              el.style.width = el.getAttribute("aria-valuenow") + "%";
            });
          },
        });
      }

      /**
       * Porfolio isotope and filter
       */
      window.addEventListener("load", () => {
        let portfolioContainer = select(".portfolio-container");
        if (portfolioContainer) {
          let portfolioIsotope = new Isotope(portfolioContainer, {
            itemSelector: ".portfolio-item",
          });

          let portfolioFilters = select("#portfolio-flters li", true);

          on(
            "click",
            "#portfolio-flters li",
            function (e) {
              e.preventDefault();
              portfolioFilters.forEach(function (el) {
                el.classList.remove("filter-active");
              });
              this.classList.add("filter-active");

              portfolioIsotope.arrange({
                filter: this.getAttribute("data-filter"),
              });
              portfolioIsotope.on("arrangeComplete", function () {
                AOS.refresh();
              });
            },
            true
          );
        }
      });

      /**
       * Initiate portfolio lightbox
       */
      const portfolioLightbox = GLightbox({
        selector: ".portfolio-lightbox",
      });

      /**
       * Portfolio details slider
       */
      new Swiper(".portfolio-details-slider", {
        speed: 400,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      });

      /**
       * Animation on scroll
       */
      window.addEventListener("load", () => {
        AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
          mirror: false,
        });
      });
    })();

    // alert box js

    // Example POST method implementation:
    async function postData(url = "", data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }
    document.getElementById("submit").addEventListener("click", (e) => {
      e.preventDefault();
      sendMessage();
    });
    function sendMessage() {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      const whatsappNumber = document.getElementById("number").value;
      if (!name || !email || !message || !whatsappNumber) {
        toastify_js__WEBPACK_IMPORTED_MODULE_0___default()({
          text: "Error:Please Add complete info and Try agin!!",
          className: "info",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        }).showToast();
        return;
      }
      postData("https://webzeco.com/sendEmail", {
        name,
        email,
        message,
        whatsappNumber,
      })
        .then((data) => {
          toastify_js__WEBPACK_IMPORTED_MODULE_0___default()({
            text: "Success: Message Delivered !!!",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
        })
        .catch((err) => {
          toastify_js__WEBPACK_IMPORTED_MODULE_0___default()({
            text: "Error:something went wrong.. Try agin!!!",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
          console.log("error:", err);
        });
    }
    // console.log("pakistan");
  })();

  /******/
})();
//# sourceMappingURL=main.js.map
