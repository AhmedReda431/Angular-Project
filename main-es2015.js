(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n        <span class=\"link\" routerLink=\"home\">Home</span>\n        <span class=\"example-spacer\"></span>\n        <span class=\"link\" routerLink=\"link1\">LogIn</span>\n        <span class=\"link\" routerLink=\"link2\">Pricing</span>\n        <span class=\"link\" routerLink=\"link3\">DashBoard</span>\n        <span class=\"link\" routerLink=\"link4\">Carousel</span>\n    </mat-toolbar-row>\n</mat-toolbar>\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"home text-center\">\r\n  <div class=\"home-holder\">\r\n    <header>\r\n      <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n        <div class=\"container\">\r\n          <a class=\"navbar-brand\" href=\"#\">Cover</a>\r\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n          </button>\r\n\r\n          <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n              <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" href=\"/\" title=\"home page\">Home <span class=\"sr-only\">(current)</span></a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/link1\" style=\"cursor: alias;\" title=\"Go to pricing page\">Features</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/link2\" style=\"cursor: alias;\" title=\"Go to dashboard page\">Contact</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </nav>\r\n    </header>\r\n    <div class=\"intro\">\r\n      <div class=\"intro-holder\">\r\n        <div class=\"container\">\r\n          <h1>Cover your page.</h1>\r\n          <p class=\"lead\">Cover is a one-page template for building simple and beautiful home pages. Download, edit the\r\n            text, and add your own fullscreen background photo to make it your own.\r\n          </p>\r\n          <button mat-raised-button routerLink=\"/link1\">LogIn Now</button>\r\n          <div class=\"footer text-center\">\r\n            <p class=\"lead\">Cover template for Bootstrap, by <span>AhmedReda</span></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/link1/link1.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/link1/link1.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"login-page\">\n  <!-- main app container -->\n  <div class=\"jumbotron\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 offset-md-3\">\n          <h3 class=\"text-center\">LogIn Page</h3>\n          <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n            <div class=\"form-group\">\n              <label for=\"firstName\">First Name</label>\n              <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\"\n                #firstName=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && firstName.invalid }\" required\n                minlength=\"6\" />\n              <div *ngIf=\"f.submitted && firstName.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"firstName?.errors.required\">First Name is required</div>\n                <div *ngIf=\"password?.errors.minlength\">First Name must be at least 6 characters</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"lastName\">Last Name</label>\n              <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && lastName.invalid }\" required minlength=\"6\" />\n              <div *ngIf=\"f.submitted && lastName.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"lastName?.errors.required\">Last Name is required</div>\n                <div *ngIf=\"password?.errors.minlength\">Last Name must be at least 6 characters</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required email />\n              <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"email?.errors.required\">Email is required</div>\n                <div *ngIf=\"email?.errors.email\">Email must be a valid email address\n                  <div class=\"alert alert-danger\">check email in DB\n                    <div *ngIf=\"email?.errors.shouldBeUnique\">email already exist</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\"\n                #password=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required\n                minlength=\"6\" />\n              <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"password?.errors.required\">Password is required</div>\n                <div *ngIf=\"password?.errors.minlength\">Password must be at least 6 characters</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <button class=\"btn btn-primary\">Register</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/link2/link2.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/link2/link2.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">\n    <h1 class=\"display-4\">Pricing</h1>\n    <p class=\"lead\">Quickly build an effective pricing table for your potential customers with this Bootstrap example.\n        It’s built with default Bootstrap components and utilities with little customization.</p>\n</div>\n\n<div class=\"container\">\n    <div class=\"card-deck mb-3 text-center\">\n        <div class=\"card mb-4 shadow-sm\">\n            <div class=\"card-header\">\n                <h4 class=\"my-0 font-weight-normal\">Free</h4>\n            </div>\n            <div class=\"card-body\">\n                <h1 class=\"card-title pricing-card-title\">$0 <small class=\"text-muted\">/ mo</small></h1>\n                <ul class=\"list-unstyled mt-3 mb-4\">\n                    <li>10 users included</li>\n                    <li>2 GB of storage</li>\n                    <li>Email support</li>\n                    <li>Help center access</li>\n                </ul>\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-outline-primary\">Sign up for free</button>\n            </div>\n        </div>\n        <div class=\"card mb-4 shadow-sm\">\n            <div class=\"card-header\">\n                <h4 class=\"my-0 font-weight-normal\">Pro</h4>\n            </div>\n            <div class=\"card-body\">\n                <h1 class=\"card-title pricing-card-title\">$15 <small class=\"text-muted\">/ mo</small></h1>\n                <ul class=\"list-unstyled mt-3 mb-4\">\n                    <li>20 users included</li>\n                    <li>10 GB of storage</li>\n                    <li>Priority email support</li>\n                    <li>Help center access</li>\n                </ul>\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-primary\">Get started</button>\n            </div>\n        </div>\n        <div class=\"card mb-4 shadow-sm\">\n            <div class=\"card-header\">\n                <h4 class=\"my-0 font-weight-normal\">Enterprise</h4>\n            </div>\n            <div class=\"card-body\">\n                <h1 class=\"card-title pricing-card-title\">$29 <small class=\"text-muted\">/ mo</small></h1>\n                <ul class=\"list-unstyled mt-3 mb-4\">\n                    <li>30 users included</li>\n                    <li>15 GB of storage</li>\n                    <li>Phone and email support</li>\n                    <li>Help center access</li>\n                </ul>\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-primary\">Contact us</button>\n            </div>\n        </div>\n    </div>\n\n    <footer class=\"pt-4 my-md-5 pt-md-5 border-top\">\n        <div class=\"row\">\n            <div class=\"col-12 col-md\">\n                <img class=\"mb-2\" src=\"/docs/4.4/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"24\" height=\"24\">\n                <small class=\"d-block mb-3 text-muted\">© 2017-2019</small>\n            </div>\n            <div class=\"col-6 col-md\">\n                <h5>Features</h5>\n                <ul class=\"list-unstyled text-small\">\n                    <li><a class=\"text-muted\" href=\"#\">Cool stuff</a></li>\n                    <li><a class=\"text-muted\" href=\"#\">Random feature</a></li>\n                    <li><a class=\"text-muted\" href=\"#\">Team feature</a></li>\n                    <li><a class=\"text-muted\" href=\"#\">Stuff for developers</a></li>\n                    <li><a class=\"text-muted\" href=\"#\">Another one</a></li>\n                    <li><a class=\"text-muted\" href=\"#\">Last time</a></li>\n                </ul>\n            </div>\n            <div class=\"col-6 col-md\">\n                <h5>Resources</h5>\n                <ul class=\"list-unstyled text-small\">\n                    <li><a class=\"text-muted\" href=\"#\">Resource</a></li>\n                    <li><a class=\"text-muted\" href=\"#\">Resource name</a></li>\n                    <li><a class=\"text-muted\" href=\"#\">Another resource</a></li>\n                    <li><a class=\"text-muted\" href=\"#\">Final resource</a></li>\n                </ul>\n            </div>\n            <div class=\"col-6 col-md\">\n                <h5>About</h5>\n                <ul class=\"list-unstyled text-small\">\n                    <li><a class=\"text-muted\" href=\"#\">Team</a></li>\n                    <li><a class=\"text-muted\" href=\"#\">Locations</a></li>\n                    <li><a class=\"text-muted\" href=\"#\">Privacy</a></li>\n                    <li><a class=\"text-muted\" href=\"#\">Terms</a></li>\n                </ul>\n            </div>\n        </div>\n    </footer>\n</div>\n\n\n<div class=\"nsc-panel nsc-panel-compact nsc-hide\">\n    <div class=\"nsc-panel-move\"></div>\n    <div class=\"nsc-panel-tooltip\">\n        <div class=\"nsc-panel-tooltip-layout\" layout=\"row\" layout-align=\"start center\">CTRL+V to toggle the panel</div>\n    </div>\n\n    <div class=\"nsc-panel-layout\" flex=\"\" layout=\"row\" layout-align=\"start center\">\n        <div class=\"nsc-panel-groups\" flex=\"\" layout=\"row\" layout-align=\"start start\">\n\n            <!-- group -->\n            <div class=\"nsc-panel-group\" flex=\"none\" layout=\"row\" layout-align=\"start start\">\n                <div class=\"nsc-panel-button separated active\">\n                    <div class=\"nsc-panel-select\" flex=\"\" layout=\"row\">\n                        <div class=\"nsc-panel-text nsc-noselect\" flex=\"\" layout=\"row\" layout-align=\"center center\">\n                            <span class=\"nsc-icon nsc-icon-cursor-normal\" data-i18n=\"videoPanelSimpleCursor\"\n                                data-event=\"nimbus-editor-active-tools\" data-event-param=\"cursorDefault\">&nbsp;</span>\n                        </div>\n                        <div class=\"nsc-panel-trigger\">\n                            <span class=\"nsc-icon nsc-icon-arrow\">&nbsp;</span>\n                        </div>\n                    </div>\n                    <div class=\"nsc-panel-dropdown to-top\">\n                        <ul flex=\"\" layout=\"row\" layout-align=\"start center\">\n                            <li class=\"nsc-panel-dropdown-icon\" flex=\"\" layout=\"row\" layout-align=\"start center\">\n                                <span class=\"nsc-icon nsc-icon-cursor-shade\" data-i18n=\"videoPanelFocusMouse\"\n                                    data-event=\"nimbus-editor-active-tools\"\n                                    data-event-param=\"cursorShadow\">&nbsp;</span>\n                            </li>\n                            <li class=\"nsc-panel-dropdown-icon\" flex=\"\" layout=\"row\" layout-align=\"start center\">\n                                <span class=\"nsc-icon nsc-icon-cursor-circle\" data-i18n=\"videoPanelAnimatedCursor\"\n                                    data-event=\"nimbus-editor-active-tools\" data-event-param=\"cursorRing\">&nbsp;</span>\n                            </li>\n                            <!--<li class=\"nsc-panel-dropdown-icon \" flex layout=\"row\" layout-align=\"start center\">-->\n                            <!--<span class=\"nsc-icon nsc-icon-cursor-tail\"></span>-->\n                            <!--</li>-->\n                            <!--<li class=\"nsc-panel-dropdown-icon \" flex layout=\"row\" layout-align=\"start center\">-->\n                            <!--<span class=\"nsc-icon nsc-icon-cursor-long\"></span>-->\n                            <!--</li>-->\n                            <li class=\"nsc-panel-dropdown-icon\" flex=\"\" layout=\"row\" layout-align=\"start center\">\n                                <span class=\"nsc-icon nsc-icon-cursor-normal\" data-i18n=\"videoPanelSimpleCursor\"\n                                    data-event=\"nimbus-editor-active-tools\"\n                                    data-event-param=\"cursorDefault\">&nbsp;</span>\n                            </li>\n                            <!--<li class=\"nsc-panel-dropdown-icon\" flex layout=\"row\" layout-align=\"start center\">-->\n                            <!--<span class=\"nsc-icon nsc-icon-cursor-none\" data-event=\"nimbus-editor-active-tools\" data-event-param=\"cursorNone\"></span>-->\n                            <!--</li>-->\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <!-- /group -->\n\n            <!-- group -->\n            <div class=\"nsc-panel-group\" flex=\"none\" layout=\"row\" layout-align=\"start start\">\n                <button class=\"nsc-panel-button\" type=\"button\">\n                    <span class=\"nsc-icon nsc-icon-pen\" data-i18n=\"videoPanelPen\"\n                        data-event=\"nimbus-editor-active-tools\" data-event-param=\"pen\">&nbsp;</span>\n                </button>\n                <button class=\"nsc-panel-button\" type=\"button\">\n                    <span class=\"nsc-icon nsc-icon-arrow-line\" data-i18n=\"videoPanelArrow\"\n                        data-event=\"nimbus-editor-active-tools\" data-event-param=\"arrow\">&nbsp;</span>\n                </button>\n                <button class=\"nsc-panel-button\" type=\"button\">\n                    <span class=\"nsc-icon nsc-icon-square\" data-i18n=\"videoPanelSquare\"\n                        data-event=\"nimbus-editor-active-tools\" data-event-param=\"square\">&nbsp;</span>\n                </button>\n                <div class=\"nsc-panel-button separated\">\n                    <div class=\"nsc-panel-select\" flex=\"\" layout=\"row\">\n                        <div class=\"nsc-panel-text nsc-noselect\" flex=\"\" layout=\"row\" layout-align=\"center center\">\n                            <span class=\"nsc-icon nsc-icon-attention\" data-i18n=\"videoPanelMark\"\n                                data-event=\"nimbus-editor-active-tools\" data-event-param=\"notifRed\">&nbsp;</span>\n                        </div>\n                        <div class=\"nsc-panel-trigger\">\n                            <span class=\"nsc-icon nsc-icon-arrow\">&nbsp;</span>\n                        </div>\n                    </div>\n                    <div class=\"nsc-panel-dropdown to-top\">\n                        <ul flex=\"\" layout=\"row\" layout-align=\"start center\">\n                            <li class=\"nsc-panel-dropdown-icon\" flex=\"\" layout=\"row\" layout-align=\"start center\">\n                                <span class=\"nsc-icon nsc-icon-attention\" data-i18n=\"videoPanelMark\"\n                                    data-event=\"nimbus-editor-active-tools\" data-event-param=\"notifRed\">&nbsp;</span>\n                            </li>\n                            <li class=\"nsc-panel-dropdown-icon\" flex=\"\" layout=\"row\" layout-align=\"start center\">\n                                <span class=\"nsc-icon nsc-icon-question\" data-i18n=\"videoPanelQuestion\"\n                                    data-event=\"nimbus-editor-active-tools\" data-event-param=\"notifBlue\">&nbsp;</span>\n                            </li>\n                            <li class=\"nsc-panel-dropdown-icon\" flex=\"\" layout=\"row\" layout-align=\"start center\">\n                                <span class=\"nsc-icon nsc-icon-done\" data-i18n=\"videoPanelCheckmark\"\n                                    data-event=\"nimbus-editor-active-tools\" data-event-param=\"notifGreen\">&nbsp;</span>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"nsc-panel-button assembled\">\n                    <div class=\"nsc-panel-select\" flex=\"\" layout=\"row\">\n                        <div class=\"nsc-panel-text nsc-noselect\" flex=\"\" layout=\"row\" layout-align=\"center center\">\n                            <span class=\"nsc-icon nsc-icon-fill-none nsc-panel-icon-fill\">\n                                <span class=\"nsc-panel-icon-fill-inner\" id=\"nsc_panel_button_colors\"\n                                    style=\"background:#00FF00;\" data-event=\"nimbus-editor-active-color\"\n                                    data-event-param=\"#00FF00\">&nbsp;</span>\n                            </span>\n                        </div>\n                        <div class=\"nsc-panel-trigger\">\n                            <span class=\"nsc-icon nsc-icon-arrow\">&nbsp;</span>\n                        </div>\n                    </div>\n                    <div class=\"nsc-panel-dropdown\">\n                        <div class=\"nsc-panel-drop-area\">\n                            <div class=\"nsc-panel-colors\">\n\n                                <!-- picked -->\n                                <div class=\"nsc-colors-picked\">\n                                    <div class=\"nsc-colors-picked-layout\" flex=\"\" layout=\"row\"\n                                        layout-align=\"start start\" layout-wrap=\"\">\n                                        <div class=\"nsc-colors-picked-item\">\n                                            <button class=\"nsc-colors-picked-button\" type=\"button\"\n                                                data-event=\"nimbus-editor-active-color\" data-event-param=\"#000000\">\n                                                <span class=\"nsc-colors-picked-button-inner\"\n                                                    style=\"background: #000000;\">&nbsp;</span>\n                                            </button>\n                                        </div>\n                                        <div class=\"nsc-colors-picked-item\">\n                                            <button class=\"nsc-colors-picked-button\" type=\"button\"\n                                                data-event=\"nimbus-editor-active-color\" data-event-param=\"#0000FF\">\n                                                <span class=\"nsc-colors-picked-button-inner\"\n                                                    style=\"background: #0000FF;\">&nbsp;</span>\n                                            </button>\n                                        </div>\n                                        <div class=\"nsc-colors-picked-item\">\n                                            <button class=\"nsc-colors-picked-button\" type=\"button\"\n                                                data-event=\"nimbus-editor-active-color\" data-event-param=\"#FF00FF\">\n                                                <span class=\"nsc-colors-picked-button-inner\"\n                                                    style=\"background: #FF00FF;\">&nbsp;</span>\n                                            </button>\n                                        </div>\n                                        <div class=\"nsc-colors-picked-item\">\n                                            <button class=\"nsc-colors-picked-button\" type=\"button\"\n                                                data-event=\"nimbus-editor-active-color\" data-event-param=\"#00FFFF\">\n                                                <span class=\"nsc-colors-picked-button-inner\"\n                                                    style=\"background: #00FFFF;\">&nbsp;</span>\n                                            </button>\n                                        </div>\n                                        <div class=\"nsc-colors-picked-item\">\n                                            <button class=\"nsc-colors-picked-button\" type=\"button\"\n                                                data-event=\"nimbus-editor-active-color\" data-event-param=\"#00FF00\">\n                                                <span class=\"nsc-colors-picked-button-inner\"\n                                                    style=\"background: #00FF00;\">&nbsp;</span>\n                                            </button>\n                                        </div>\n                                        <div class=\"nsc-colors-picked-item\">\n                                            <button class=\"nsc-colors-picked-button\" type=\"button\"\n                                                data-event=\"nimbus-editor-active-color\" data-event-param=\"#FFFF00\">\n                                                <span class=\"nsc-colors-picked-button-inner\"\n                                                    style=\"background: #FFFF00;\">&nbsp;</span>\n                                            </button>\n                                        </div>\n                                        <div class=\"nsc-colors-picked-item\">\n                                            <button class=\"nsc-colors-picked-button\" type=\"button\"\n                                                data-event=\"nimbus-editor-active-color\" data-event-param=\"#FF0000\">\n                                                <span class=\"nsc-colors-picked-button-inner\"\n                                                    style=\"background: #FF0000;\">&nbsp;</span>\n                                            </button>\n                                        </div>\n                                        <div class=\"nsc-colors-picked-item\">\n                                            <button class=\"nsc-colors-picked-button\" type=\"button\"\n                                                data-event=\"nimbus-editor-active-color\" data-event-param=\"#FFFFFF\">\n                                                <span class=\"nsc-colors-picked-button-inner\"\n                                                    style=\"background: #FFFFFF;\">&nbsp;</span>\n                                            </button>\n                                        </div>\n                                        <!--<div class=\"nsc-colors-picked-item\">-->\n                                        <!--<button class=\"nsc-colors-picked-button custom\" type=\"button\"> -->\n                                        <!--<i class=\"nsc-icon ic-color-custom\"></i> -->\n                                        <!--</button>-->\n                                        <!--</div>-->\n                                    </div>\n                                </div>\n                                <!-- /picked -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- /group -->\n\n            <!-- group -->\n            <div class=\"nsc-panel-group\" flex=\"none\" layout=\"row\" layout-align=\"start start\">\n                <button class=\"nsc-panel-button nsc-hide\" type=\"button\">\n                    <span class=\"nsc-icon nsc-icon-eraser\" data-i18n=\"videoPanelClear\"\n                        data-event=\"nimbus-editor-active-tools\" data-event-param=\"clear\">&nbsp;</span>\n                </button>\n                <button class=\"nsc-panel-button\" type=\"button\">\n                    <span class=\"nsc-icon nsc-icon-eraser-all\" data-i18n=\"videoPanelClearAll\"\n                        data-event=\"nimbus-editor-active-tools\" data-event-param=\"clearAll\">&nbsp;</span>\n                </button>\n                <button class=\"nsc-panel-button\" type=\"button\">\n                    <span class=\"nsc-icon nsc-icon-webcam\" data-i18n=\"videoPanelCamera\"\n                        id=\"nimbus_web_camera_toggle\">&nbsp;</span>\n                </button>\n            </div>\n            <!-- /group -->\n        </div>\n\n        <div class=\"nsc-panel-actions\" flex=\"none\" layout=\"row\" layout-align=\"start center\">\n            <button class=\"nsc-panel-button big\" type=\"button\" id=\"nsc_panel_button_play\" style=\"display: none;\">\n                <span class=\"nsc-icon nsc-icon-play\">&nbsp;</span>\n            </button>\n            <button class=\"nsc-panel-button big\" type=\"button\" id=\"nsc_panel_button_pause\">\n                <span class=\"nsc-icon nsc-icon-pause\">&nbsp;</span>\n            </button>\n            <button class=\"nsc-panel-button big\" type=\"button\" id=\"nsc_panel_button_stop\">\n                <span class=\"nsc-icon nsc-icon-stop\">&nbsp;</span>\n            </button>\n        </div>\n\n        <!-- panel togglers -->\n        <div class=\"nsc-panel-togglers\" layout=\"row\" layout-align=\"start center\" flex=\"none\">\n            <button class=\"nsc-panel-toggle-button\" type=\"button\">\n                <span class=\"nsc-icon nsc-icon-panel-close\" data-i18n=\"videoPanelHideShowPanel\">&nbsp;</span>\n            </button>\n        </div>\n        <!-- /panel togglers -->\n\n    </div>\n</div>\n<div class=\"nsc-video-editor nsc-hide\"></div>\n<div class=\"nsc-content-camera nsc-hide\">\n    <div class=\"nsc-content-camera-buttons\" flex=\"none\" layout=\"row\" layout-align=\"start start\">\n        <button class=\"nsc-content-camera-button\" type=\"button\" id=\"nsc_video_camera_collapse\" style=\"display: none\">\n            <span class=\"nsc-icon nsc-icon-panel-collapse\"></span>\n        </button>\n        <button class=\"nsc-content-camera-button\" type=\"button\" id=\"nsc_video_camera_expand\">\n            <span class=\"nsc-icon nsc-icon-panel-expand\"></span>\n        </button>\n        <button class=\"nsc-content-camera-button\" type=\"button\" id=\"nsc_video_camera_close\">\n            <span class=\"nsc-icon nsc-icon-panel-close\"></span>\n        </button>\n    </div>\n    <div class=\"nsc-content-camera-container\">\n        <div class=\"nsc-content-camera-shadow\"></div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/link3/link3.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/link3/link3.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row\">\n        <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n            <div class=\"sidebar-sticky\">\n                <ul class=\"nav flex-column\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link active\" href=\"#\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"\n                                fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n                                stroke-linejoin=\"round\" class=\"feather feather-home\">\n                                <path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path>\n                                <polyline points=\"9 22 9 12 15 12 15 22\"></polyline>\n                            </svg>\n                            Dashboard <span class=\"sr-only\">(current)</span>\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"\n                                fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n                                stroke-linejoin=\"round\" class=\"feather feather-file\">\n                                <path d=\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"></path>\n                                <polyline points=\"13 2 13 9 20 9\"></polyline>\n                            </svg>\n                            Orders\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"\n                                fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n                                stroke-linejoin=\"round\" class=\"feather feather-shopping-cart\">\n                                <circle cx=\"9\" cy=\"21\" r=\"1\"></circle>\n                                <circle cx=\"20\" cy=\"21\" r=\"1\"></circle>\n                                <path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path>\n                            </svg>\n                            Products\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"\n                                fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n                                stroke-linejoin=\"round\" class=\"feather feather-users\">\n                                <path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path>\n                                <circle cx=\"9\" cy=\"7\" r=\"4\"></circle>\n                                <path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path>\n                                <path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path>\n                            </svg>\n                            Customers\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"\n                                fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n                                stroke-linejoin=\"round\" class=\"feather feather-bar-chart-2\">\n                                <line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"></line>\n                                <line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"></line>\n                                <line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"></line>\n                            </svg>\n                            Reports\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"\n                                fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n                                stroke-linejoin=\"round\" class=\"feather feather-layers\">\n                                <polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon>\n                                <polyline points=\"2 17 12 22 22 17\"></polyline>\n                                <polyline points=\"2 12 12 17 22 12\"></polyline>\n                            </svg>\n                            Integrations\n                        </a>\n                    </li>\n                </ul>\n\n                <h6 class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted\">\n                    <span>Saved reports</span>\n                    <a class=\"d-flex align-items-center text-muted\" href=\"#\" aria-label=\"Add a new report\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n                            stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                            class=\"feather feather-plus-circle\">\n                            <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n                            <line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line>\n                            <line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>\n                        </svg>\n                    </a>\n                </h6>\n                <ul class=\"nav flex-column mb-2\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"\n                                fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n                                stroke-linejoin=\"round\" class=\"feather feather-file-text\">\n                                <path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path>\n                                <polyline points=\"14 2 14 8 20 8\"></polyline>\n                                <line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line>\n                                <line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line>\n                                <polyline points=\"10 9 9 9 8 9\"></polyline>\n                            </svg>\n                            Current month\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"\n                                fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n                                stroke-linejoin=\"round\" class=\"feather feather-file-text\">\n                                <path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path>\n                                <polyline points=\"14 2 14 8 20 8\"></polyline>\n                                <line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line>\n                                <line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line>\n                                <polyline points=\"10 9 9 9 8 9\"></polyline>\n                            </svg>\n                            Last quarter\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"\n                                fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n                                stroke-linejoin=\"round\" class=\"feather feather-file-text\">\n                                <path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path>\n                                <polyline points=\"14 2 14 8 20 8\"></polyline>\n                                <line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line>\n                                <line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line>\n                                <polyline points=\"10 9 9 9 8 9\"></polyline>\n                            </svg>\n                            Social engagement\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"\n                                fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n                                stroke-linejoin=\"round\" class=\"feather feather-file-text\">\n                                <path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path>\n                                <polyline points=\"14 2 14 8 20 8\"></polyline>\n                                <line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line>\n                                <line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line>\n                                <polyline points=\"10 9 9 9 8 9\"></polyline>\n                            </svg>\n                            Year-end sale\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n\n        <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n            <div class=\"chartjs-size-monitor\"\n                style=\"position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\">\n                <div class=\"chartjs-size-monitor-expand\"\n                    style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n                    <div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div>\n                </div>\n                <div class=\"chartjs-size-monitor-shrink\"\n                    style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n                    <div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div>\n                </div>\n            </div>\n            <div\n                class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n                <h1 class=\"h2\">Dashboard</h1>\n                <div class=\"btn-toolbar mb-2 mb-md-0\">\n                    <div class=\"btn-group mr-2\">\n                        <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Share</button>\n                        <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Export</button>\n                    </div>\n                    <button type=\"button\" class=\"btn btn-sm btn-outline-secondary dropdown-toggle\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n                            stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                            class=\"feather feather-calendar\">\n                            <rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect>\n                            <line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line>\n                            <line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line>\n                            <line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line>\n                        </svg>\n                        This week\n                    </button>\n                </div>\n            </div>\n\n            <img src=\"assets\\imgs\\download.png\" class=\"my-4 w-100 chartjs-render-monitor\" id=\"myChart\" width=\"1522\" height=\"642\"\n                style=\"display: block; height: 514px; width: 1218px;\">\n\n            <h2>Section title</h2>\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped table-sm\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Header</th>\n                            <th>Header</th>\n                            <th>Header</th>\n                            <th>Header</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>1,001</td>\n                            <td>Lorem</td>\n                            <td>ipsum</td>\n                            <td>dolor</td>\n                            <td>sit</td>\n                        </tr>\n                        <tr>\n                            <td>1,002</td>\n                            <td>amet</td>\n                            <td>consectetur</td>\n                            <td>adipiscing</td>\n                            <td>elit</td>\n                        </tr>\n                        <tr>\n                            <td>1,003</td>\n                            <td>Integer</td>\n                            <td>nec</td>\n                            <td>odio</td>\n                            <td>Praesent</td>\n                        </tr>\n                        <tr>\n                            <td>1,003</td>\n                            <td>libero</td>\n                            <td>Sed</td>\n                            <td>cursus</td>\n                            <td>ante</td>\n                        </tr>\n                        <tr>\n                            <td>1,004</td>\n                            <td>dapibus</td>\n                            <td>diam</td>\n                            <td>Sed</td>\n                            <td>nisi</td>\n                        </tr>\n                        <tr>\n                            <td>1,005</td>\n                            <td>Nulla</td>\n                            <td>quis</td>\n                            <td>sem</td>\n                            <td>at</td>\n                        </tr>\n                        <tr>\n                            <td>1,006</td>\n                            <td>nibh</td>\n                            <td>elementum</td>\n                            <td>imperdiet</td>\n                            <td>Duis</td>\n                        </tr>\n                        <tr>\n                            <td>1,007</td>\n                            <td>sagittis</td>\n                            <td>ipsum</td>\n                            <td>Praesent</td>\n                            <td>mauris</td>\n                        </tr>\n                        <tr>\n                            <td>1,008</td>\n                            <td>Fusce</td>\n                            <td>nec</td>\n                            <td>tellus</td>\n                            <td>sed</td>\n                        </tr>\n                        <tr>\n                            <td>1,009</td>\n                            <td>augue</td>\n                            <td>semper</td>\n                            <td>porta</td>\n                            <td>Mauris</td>\n                        </tr>\n                        <tr>\n                            <td>1,010</td>\n                            <td>massa</td>\n                            <td>Vestibulum</td>\n                            <td>lacinia</td>\n                            <td>arcu</td>\n                        </tr>\n                        <tr>\n                            <td>1,011</td>\n                            <td>eget</td>\n                            <td>nulla</td>\n                            <td>Class</td>\n                            <td>aptent</td>\n                        </tr>\n                        <tr>\n                            <td>1,012</td>\n                            <td>taciti</td>\n                            <td>sociosqu</td>\n                            <td>ad</td>\n                            <td>litora</td>\n                        </tr>\n                        <tr>\n                            <td>1,013</td>\n                            <td>torquent</td>\n                            <td>per</td>\n                            <td>conubia</td>\n                            <td>nostra</td>\n                        </tr>\n                        <tr>\n                            <td>1,014</td>\n                            <td>per</td>\n                            <td>inceptos</td>\n                            <td>himenaeos</td>\n                            <td>Curabitur</td>\n                        </tr>\n                        <tr>\n                            <td>1,015</td>\n                            <td>sodales</td>\n                            <td>ligula</td>\n                            <td>in</td>\n                            <td>libero</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </main>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/link4/link4.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/link4/link4.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main role=\"main\">\n\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\" class=\"\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\" class=\"\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <svg class=\"bd-placeholder-img\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"\n          preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\">\n          <rect width=\"100%\" height=\"100%\" fill=\"#777\"></rect>\n        </svg>\n        <div class=\"container\">\n          <div class=\"carousel-caption text-left\">\n            <h1>Example headline.</h1>\n            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget\n              metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n            <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sign up today</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <svg class=\"bd-placeholder-img\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"\n          preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\">\n          <rect width=\"100%\" height=\"100%\" fill=\"#777\"></rect>\n        </svg>\n        <div class=\"container\">\n          <div class=\"carousel-caption\">\n            <h1>Another example headline.</h1>\n            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget\n              metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n            <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Learn more</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <svg class=\"bd-placeholder-img\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"\n          preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\">\n          <rect width=\"100%\" height=\"100%\" fill=\"#777\"></rect>\n        </svg>\n        <div class=\"container\">\n          <div class=\"carousel-caption text-right\">\n            <h1>One more for good measure.</h1>\n            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget\n              metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n            <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Browse gallery</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n\n\n  <!-- Marketing messaging and featurettes\n================================================== -->\n  <!-- Wrap the rest of the page in another container to center all the content. -->\n\n  <div class=\"container marketing\">\n\n    <!-- Three columns of text below the carousel -->\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <svg class=\"bd-placeholder-img rounded-circle\" width=\"140\" height=\"140\" xmlns=\"http://www.w3.org/2000/svg\"\n          preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\" aria-label=\"Placeholder: 140x140\">\n          <title>Placeholder</title>\n          <rect width=\"100%\" height=\"100%\" fill=\"#777\"></rect><text x=\"50%\" y=\"50%\" fill=\"#777\" dy=\".3em\">140x140</text>\n        </svg>\n        <h2>Heading</h2>\n        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies\n          vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus\n          magna.</p>\n        <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\n      </div><!-- /.col-lg-4 -->\n      <div class=\"col-lg-4\">\n        <svg class=\"bd-placeholder-img rounded-circle\" width=\"140\" height=\"140\" xmlns=\"http://www.w3.org/2000/svg\"\n          preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\" aria-label=\"Placeholder: 140x140\">\n          <title>Placeholder</title>\n          <rect width=\"100%\" height=\"100%\" fill=\"#777\"></rect><text x=\"50%\" y=\"50%\" fill=\"#777\" dy=\".3em\">140x140</text>\n        </svg>\n        <h2>Heading</h2>\n        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis\n          consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.\n        </p>\n        <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\n      </div><!-- /.col-lg-4 -->\n      <div class=\"col-lg-4\">\n        <svg class=\"bd-placeholder-img rounded-circle\" width=\"140\" height=\"140\" xmlns=\"http://www.w3.org/2000/svg\"\n          preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\" aria-label=\"Placeholder: 140x140\">\n          <title>Placeholder</title>\n          <rect width=\"100%\" height=\"100%\" fill=\"#777\"></rect><text x=\"50%\" y=\"50%\" fill=\"#777\" dy=\".3em\">140x140</text>\n        </svg>\n        <h2>Heading</h2>\n        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta\n          felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum\n          massa justo sit amet risus.</p>\n        <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\n      </div><!-- /.col-lg-4 -->\n    </div><!-- /.row -->\n\n\n    <!-- START THE FEATURETTES -->\n\n    <hr class=\"featurette-divider\">\n\n    <div class=\"row featurette\">\n      <div class=\"col-md-7\">\n        <h2 class=\"featurette-heading\">First featurette heading. <span class=\"text-muted\">It’ll blow your mind.</span>\n        </h2>\n        <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod\n          semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus\n          commodo.</p>\n      </div>\n      <div class=\"col-md-5\">\n        <svg class=\"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto\" width=\"500\"\n          height=\"500\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n          role=\"img\" aria-label=\"Placeholder: 500x500\">\n          <title>Placeholder</title>\n          <rect width=\"100%\" height=\"100%\" fill=\"#eee\"></rect><text x=\"50%\" y=\"50%\" fill=\"#aaa\" dy=\".3em\">500x500</text>\n        </svg>\n      </div>\n    </div>\n\n    <hr class=\"featurette-divider\">\n\n    <div class=\"row featurette\">\n      <div class=\"col-md-7 order-md-2\">\n        <h2 class=\"featurette-heading\">Oh yeah, it’s that good. <span class=\"text-muted\">See for yourself.</span></h2>\n        <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod\n          semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus\n          commodo.</p>\n      </div>\n      <div class=\"col-md-5 order-md-1\">\n        <svg class=\"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto\" width=\"500\"\n          height=\"500\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n          role=\"img\" aria-label=\"Placeholder: 500x500\">\n          <title>Placeholder</title>\n          <rect width=\"100%\" height=\"100%\" fill=\"#eee\"></rect><text x=\"50%\" y=\"50%\" fill=\"#aaa\" dy=\".3em\">500x500</text>\n        </svg>\n      </div>\n    </div>\n\n    <hr class=\"featurette-divider\">\n\n    <div class=\"row featurette\">\n      <div class=\"col-md-7\">\n        <h2 class=\"featurette-heading\">And lastly, this one. <span class=\"text-muted\">Checkmate.</span></h2>\n        <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod\n          semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus\n          commodo.</p>\n      </div>\n      <div class=\"col-md-5\">\n        <svg class=\"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto\" width=\"500\"\n          height=\"500\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n          role=\"img\" aria-label=\"Placeholder: 500x500\">\n          <title>Placeholder</title>\n          <rect width=\"100%\" height=\"100%\" fill=\"#eee\"></rect><text x=\"50%\" y=\"50%\" fill=\"#aaa\" dy=\".3em\">500x500</text>\n        </svg>\n      </div>\n    </div>\n\n    <hr class=\"featurette-divider\">\n\n    <!-- /END THE FEATURETTES -->\n\n  </div><!-- /.container -->\n\n\n  <!-- FOOTER -->\n  <footer class=\"container\">\n    <p class=\"float-right\"><a href=\"#\">Back to top</a></p>\n    <p>© 2017-2019 Company, Inc. · <a href=\"#\">Privacy</a> · <a href=\"#\">Terms</a></p>\n  </footer>\n</main>\n<script src=\"https://code.jquery.com/jquery-3.4.1.slim.min.js\"\n  integrity=\"sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n\" crossorigin=\"anonymous\"></script>\n<script>window.jQuery || document.write('<script src=\"/docs/4.4/assets/js/vendor/jquery.slim.min.js\"><\\/script>')</script>\n<script src=\"/docs/4.4/dist/js/bootstrap.bundle.min.js\"\n  integrity=\"sha384-6khuMg9gaYr5AxOqhkVIODVIvm9ynTT5J4V1cfthmT+emCG6yVmEZsRHdxlotUnm\" crossorigin=\"anonymous\"></script>\n\n<div class=\"nsc-panel nsc-panel-compact nsc-hide\">\n  <div class=\"nsc-panel-move\"></div>\n  <div class=\"nsc-panel-tooltip\">\n    <div class=\"nsc-panel-tooltip-layout\" layout=\"row\" layout-align=\"start center\">CTRL+V to toggle the panel</div>\n  </div>\n\n  <div class=\"nsc-panel-layout\" flex=\"\" layout=\"row\" layout-align=\"start center\">\n    <div class=\"nsc-panel-groups\" flex=\"\" layout=\"row\" layout-align=\"start start\">\n\n      <!-- group -->\n      <div class=\"nsc-panel-group\" flex=\"none\" layout=\"row\" layout-align=\"start start\">\n        <div class=\"nsc-panel-button separated active\">\n          <div class=\"nsc-panel-select\" flex=\"\" layout=\"row\">\n            <div class=\"nsc-panel-text nsc-noselect\" flex=\"\" layout=\"row\" layout-align=\"center center\">\n              <span class=\"nsc-icon nsc-icon-cursor-normal\" data-i18n=\"videoPanelSimpleCursor\"\n                data-event=\"nimbus-editor-active-tools\" data-event-param=\"cursorDefault\">&nbsp;</span>\n            </div>\n            <div class=\"nsc-panel-trigger\">\n              <span class=\"nsc-icon nsc-icon-arrow\">&nbsp;</span>\n            </div>\n          </div>\n          <div class=\"nsc-panel-dropdown to-top\">\n            <ul flex=\"\" layout=\"row\" layout-align=\"start center\">\n              <li class=\"nsc-panel-dropdown-icon\" flex=\"\" layout=\"row\" layout-align=\"start center\">\n                <span class=\"nsc-icon nsc-icon-cursor-shade\" data-i18n=\"videoPanelFocusMouse\"\n                  data-event=\"nimbus-editor-active-tools\" data-event-param=\"cursorShadow\">&nbsp;</span>\n              </li>\n              <li class=\"nsc-panel-dropdown-icon\" flex=\"\" layout=\"row\" layout-align=\"start center\">\n                <span class=\"nsc-icon nsc-icon-cursor-circle\" data-i18n=\"videoPanelAnimatedCursor\"\n                  data-event=\"nimbus-editor-active-tools\" data-event-param=\"cursorRing\">&nbsp;</span>\n              </li>\n              <!--<li class=\"nsc-panel-dropdown-icon \" flex layout=\"row\" layout-align=\"start center\">-->\n              <!--<span class=\"nsc-icon nsc-icon-cursor-tail\"></span>-->\n              <!--</li>-->\n              <!--<li class=\"nsc-panel-dropdown-icon \" flex layout=\"row\" layout-align=\"start center\">-->\n              <!--<span class=\"nsc-icon nsc-icon-cursor-long\"></span>-->\n              <!--</li>-->\n              <li class=\"nsc-panel-dropdown-icon\" flex=\"\" layout=\"row\" layout-align=\"start center\">\n                <span class=\"nsc-icon nsc-icon-cursor-normal\" data-i18n=\"videoPanelSimpleCursor\"\n                  data-event=\"nimbus-editor-active-tools\" data-event-param=\"cursorDefault\">&nbsp;</span>\n              </li>\n              <!--<li class=\"nsc-panel-dropdown-icon\" flex layout=\"row\" layout-align=\"start center\">-->\n              <!--<span class=\"nsc-icon nsc-icon-cursor-none\" data-event=\"nimbus-editor-active-tools\" data-event-param=\"cursorNone\"></span>-->\n              <!--</li>-->\n            </ul>\n          </div>\n        </div>\n      </div>\n      <!-- /group -->\n\n      <!-- group -->\n      <div class=\"nsc-panel-group\" flex=\"none\" layout=\"row\" layout-align=\"start start\">\n        <button class=\"nsc-panel-button\" type=\"button\">\n          <span class=\"nsc-icon nsc-icon-pen\" data-i18n=\"videoPanelPen\" data-event=\"nimbus-editor-active-tools\"\n            data-event-param=\"pen\">&nbsp;</span>\n        </button>\n        <button class=\"nsc-panel-button\" type=\"button\">\n          <span class=\"nsc-icon nsc-icon-arrow-line\" data-i18n=\"videoPanelArrow\" data-event=\"nimbus-editor-active-tools\"\n            data-event-param=\"arrow\">&nbsp;</span>\n        </button>\n        <button class=\"nsc-panel-button\" type=\"button\">\n          <span class=\"nsc-icon nsc-icon-square\" data-i18n=\"videoPanelSquare\" data-event=\"nimbus-editor-active-tools\"\n            data-event-param=\"square\">&nbsp;</span>\n        </button>\n        <div class=\"nsc-panel-button separated\">\n          <div class=\"nsc-panel-select\" flex=\"\" layout=\"row\">\n            <div class=\"nsc-panel-text nsc-noselect\" flex=\"\" layout=\"row\" layout-align=\"center center\">\n              <span class=\"nsc-icon nsc-icon-attention\" data-i18n=\"videoPanelMark\"\n                data-event=\"nimbus-editor-active-tools\" data-event-param=\"notifRed\">&nbsp;</span>\n            </div>\n            <div class=\"nsc-panel-trigger\">\n              <span class=\"nsc-icon nsc-icon-arrow\">&nbsp;</span>\n            </div>\n          </div>\n          <div class=\"nsc-panel-dropdown to-top\">\n            <ul flex=\"\" layout=\"row\" layout-align=\"start center\">\n              <li class=\"nsc-panel-dropdown-icon\" flex=\"\" layout=\"row\" layout-align=\"start center\">\n                <span class=\"nsc-icon nsc-icon-attention\" data-i18n=\"videoPanelMark\"\n                  data-event=\"nimbus-editor-active-tools\" data-event-param=\"notifRed\">&nbsp;</span>\n              </li>\n              <li class=\"nsc-panel-dropdown-icon\" flex=\"\" layout=\"row\" layout-align=\"start center\">\n                <span class=\"nsc-icon nsc-icon-question\" data-i18n=\"videoPanelQuestion\"\n                  data-event=\"nimbus-editor-active-tools\" data-event-param=\"notifBlue\">&nbsp;</span>\n              </li>\n              <li class=\"nsc-panel-dropdown-icon\" flex=\"\" layout=\"row\" layout-align=\"start center\">\n                <span class=\"nsc-icon nsc-icon-done\" data-i18n=\"videoPanelCheckmark\"\n                  data-event=\"nimbus-editor-active-tools\" data-event-param=\"notifGreen\">&nbsp;</span>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"nsc-panel-button assembled\">\n          <div class=\"nsc-panel-select\" flex=\"\" layout=\"row\">\n            <div class=\"nsc-panel-text nsc-noselect\" flex=\"\" layout=\"row\" layout-align=\"center center\">\n              <span class=\"nsc-icon nsc-icon-fill-none nsc-panel-icon-fill\">\n                <span class=\"nsc-panel-icon-fill-inner\" id=\"nsc_panel_button_colors\" style=\"background:#00FF00;\"\n                  data-event=\"nimbus-editor-active-color\" data-event-param=\"#00FF00\">&nbsp;</span>\n              </span>\n            </div>\n            <div class=\"nsc-panel-trigger\">\n              <span class=\"nsc-icon nsc-icon-arrow\">&nbsp;</span>\n            </div>\n          </div>\n          <div class=\"nsc-panel-dropdown\">\n            <div class=\"nsc-panel-drop-area\">\n              <div class=\"nsc-panel-colors\">\n\n                <!-- picked -->\n                <div class=\"nsc-colors-picked\">\n                  <div class=\"nsc-colors-picked-layout\" flex=\"\" layout=\"row\" layout-align=\"start start\" layout-wrap=\"\">\n                    <div class=\"nsc-colors-picked-item\">\n                      <button class=\"nsc-colors-picked-button\" type=\"button\" data-event=\"nimbus-editor-active-color\"\n                        data-event-param=\"#000000\">\n                        <span class=\"nsc-colors-picked-button-inner\" style=\"background: #000000;\">&nbsp;</span>\n                      </button>\n                    </div>\n                    <div class=\"nsc-colors-picked-item\">\n                      <button class=\"nsc-colors-picked-button\" type=\"button\" data-event=\"nimbus-editor-active-color\"\n                        data-event-param=\"#0000FF\">\n                        <span class=\"nsc-colors-picked-button-inner\" style=\"background: #0000FF;\">&nbsp;</span>\n                      </button>\n                    </div>\n                    <div class=\"nsc-colors-picked-item\">\n                      <button class=\"nsc-colors-picked-button\" type=\"button\" data-event=\"nimbus-editor-active-color\"\n                        data-event-param=\"#FF00FF\">\n                        <span class=\"nsc-colors-picked-button-inner\" style=\"background: #FF00FF;\">&nbsp;</span>\n                      </button>\n                    </div>\n                    <div class=\"nsc-colors-picked-item\">\n                      <button class=\"nsc-colors-picked-button\" type=\"button\" data-event=\"nimbus-editor-active-color\"\n                        data-event-param=\"#00FFFF\">\n                        <span class=\"nsc-colors-picked-button-inner\" style=\"background: #00FFFF;\">&nbsp;</span>\n                      </button>\n                    </div>\n                    <div class=\"nsc-colors-picked-item\">\n                      <button class=\"nsc-colors-picked-button\" type=\"button\" data-event=\"nimbus-editor-active-color\"\n                        data-event-param=\"#00FF00\">\n                        <span class=\"nsc-colors-picked-button-inner\" style=\"background: #00FF00;\">&nbsp;</span>\n                      </button>\n                    </div>\n                    <div class=\"nsc-colors-picked-item\">\n                      <button class=\"nsc-colors-picked-button\" type=\"button\" data-event=\"nimbus-editor-active-color\"\n                        data-event-param=\"#FFFF00\">\n                        <span class=\"nsc-colors-picked-button-inner\" style=\"background: #FFFF00;\">&nbsp;</span>\n                      </button>\n                    </div>\n                    <div class=\"nsc-colors-picked-item\">\n                      <button class=\"nsc-colors-picked-button\" type=\"button\" data-event=\"nimbus-editor-active-color\"\n                        data-event-param=\"#FF0000\">\n                        <span class=\"nsc-colors-picked-button-inner\" style=\"background: #FF0000;\">&nbsp;</span>\n                      </button>\n                    </div>\n                    <div class=\"nsc-colors-picked-item\">\n                      <button class=\"nsc-colors-picked-button\" type=\"button\" data-event=\"nimbus-editor-active-color\"\n                        data-event-param=\"#FFFFFF\">\n                        <span class=\"nsc-colors-picked-button-inner\" style=\"background: #FFFFFF;\">&nbsp;</span>\n                      </button>\n                    </div>\n                    <!--<div class=\"nsc-colors-picked-item\">-->\n                    <!--<button class=\"nsc-colors-picked-button custom\" type=\"button\"> -->\n                    <!--<i class=\"nsc-icon ic-color-custom\"></i> -->\n                    <!--</button>-->\n                    <!--</div>-->\n                  </div>\n                </div>\n                <!-- /picked -->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- /group -->\n\n      <!-- group -->\n      <div class=\"nsc-panel-group\" flex=\"none\" layout=\"row\" layout-align=\"start start\">\n        <button class=\"nsc-panel-button nsc-hide\" type=\"button\">\n          <span class=\"nsc-icon nsc-icon-eraser\" data-i18n=\"videoPanelClear\" data-event=\"nimbus-editor-active-tools\"\n            data-event-param=\"clear\">&nbsp;</span>\n        </button>\n        <button class=\"nsc-panel-button\" type=\"button\">\n          <span class=\"nsc-icon nsc-icon-eraser-all\" data-i18n=\"videoPanelClearAll\"\n            data-event=\"nimbus-editor-active-tools\" data-event-param=\"clearAll\">&nbsp;</span>\n        </button>\n        <button class=\"nsc-panel-button\" type=\"button\">\n          <span class=\"nsc-icon nsc-icon-webcam\" data-i18n=\"videoPanelCamera\"\n            id=\"nimbus_web_camera_toggle\">&nbsp;</span>\n        </button>\n      </div>\n      <!-- /group -->\n    </div>\n\n    <div class=\"nsc-panel-actions\" flex=\"none\" layout=\"row\" layout-align=\"start center\">\n      <button class=\"nsc-panel-button big\" type=\"button\" id=\"nsc_panel_button_play\" style=\"display: none;\">\n        <span class=\"nsc-icon nsc-icon-play\">&nbsp;</span>\n      </button>\n      <button class=\"nsc-panel-button big\" type=\"button\" id=\"nsc_panel_button_pause\">\n        <span class=\"nsc-icon nsc-icon-pause\">&nbsp;</span>\n      </button>\n      <button class=\"nsc-panel-button big\" type=\"button\" id=\"nsc_panel_button_stop\">\n        <span class=\"nsc-icon nsc-icon-stop\">&nbsp;</span>\n      </button>\n    </div>\n\n    <!-- panel togglers -->\n    <div class=\"nsc-panel-togglers\" layout=\"row\" layout-align=\"start center\" flex=\"none\">\n      <button class=\"nsc-panel-toggle-button\" type=\"button\">\n        <span class=\"nsc-icon nsc-icon-panel-close\" data-i18n=\"videoPanelHideShowPanel\">&nbsp;</span>\n      </button>\n    </div>\n    <!-- /panel togglers -->\n\n  </div>\n</div>\n<div class=\"nsc-video-editor nsc-hide\"></div>\n<div class=\"nsc-content-camera nsc-hide\">\n  <div class=\"nsc-content-camera-buttons\" flex=\"none\" layout=\"row\" layout-align=\"start start\">\n    <button class=\"nsc-content-camera-button\" type=\"button\" id=\"nsc_video_camera_collapse\" style=\"display: none\">\n      <span class=\"nsc-icon nsc-icon-panel-collapse\"></span>\n    </button>\n    <button class=\"nsc-content-camera-button\" type=\"button\" id=\"nsc_video_camera_expand\">\n      <span class=\"nsc-icon nsc-icon-panel-expand\"></span>\n    </button>\n    <button class=\"nsc-content-camera-button\" type=\"button\" id=\"nsc_video_camera_close\">\n      <span class=\"nsc-icon nsc-icon-panel-close\"></span>\n    </button>\n  </div>\n  <div class=\"nsc-content-camera-container\">\n    <div class=\"nsc-content-camera-shadow\"></div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _link4_link4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link4/link4.component */ "./src/app/link4/link4.component.ts");
/* harmony import */ var _link3_link3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link3/link3.component */ "./src/app/link3/link3.component.ts");
/* harmony import */ var _link2_link2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./link2/link2.component */ "./src/app/link2/link2.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _link1_link1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./link1/link1.component */ "./src/app/link1/link1.component.ts");








const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], data: { animation: 'HomePage' } },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], data: { animation: 'Link1Page' } },
    { path: 'link1', component: _link1_link1_component__WEBPACK_IMPORTED_MODULE_7__["Link1Component"] },
    { path: 'link2', component: _link2_link2_component__WEBPACK_IMPORTED_MODULE_4__["Link2Component"] },
    { path: 'link3', component: _link3_link3_component__WEBPACK_IMPORTED_MODULE_3__["Link3Component"] },
    { path: 'link4', component: _link4_link4_component__WEBPACK_IMPORTED_MODULE_2__["Link4Component"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'myApp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _summery_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summery.pipe */ "./src/app/summery.pipe.ts");
/* harmony import */ var _link4_link4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link4/link4.component */ "./src/app/link4/link4.component.ts");
/* harmony import */ var _link3_link3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link3/link3.component */ "./src/app/link3/link3.component.ts");
/* harmony import */ var _link2_link2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./link2/link2.component */ "./src/app/link2/link2.component.ts");
/* harmony import */ var _link1_link1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./link1/link1.component */ "./src/app/link1/link1.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _link1_link1_component__WEBPACK_IMPORTED_MODULE_5__["Link1Component"],
            _link2_link2_component__WEBPACK_IMPORTED_MODULE_4__["Link2Component"],
            _link3_link3_component__WEBPACK_IMPORTED_MODULE_3__["Link3Component"],
            _link4_link4_component__WEBPACK_IMPORTED_MODULE_2__["Link4Component"],
            _summery_pipe__WEBPACK_IMPORTED_MODULE_1__["SummeryPipe"]
        ],
        imports: [
            _material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            ng2_validation__WEBPACK_IMPORTED_MODULE_14__["CustomFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home{\r\n    height: 100%;\r\n    overflow-y: hidden;\r\n}\r\n\r\n.home-holder{\r\n  height:calc(100vh - 56px);\r\n  margin: 0;\r\n}\r\n\r\n.container{\r\n    max-width: 42em;\r\n}\r\n\r\n.intro{\r\n    background-color: #333;\r\n    color: #fff;\r\n    height: 100%;\r\n    padding: 7% 0 1%;\r\n}\r\n\r\n.intro .intro-holder h1{\r\n    padding-bottom: 10%;\r\n}\r\n\r\n.intro .intro-holder p:first-of-type{\r\n    margin-bottom: 7%;\r\n}\r\n\r\n.mat-raised-button:not([class*=mat-elevation-z]){\r\n    padding: 5px 20px;\r\n    font-size: 17px;\r\n    font-weight: 700;\r\n    margin-bottom: 41px;\r\n}\r\n\r\n.footer{\r\n    background-color: #333;\r\n    color: #fff;\r\n    padding: 3% 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFNBQVM7QUFDWDs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21le1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4uaG9tZS1ob2xkZXJ7XHJcbiAgaGVpZ2h0OmNhbGMoMTAwdmggLSA1NnB4KTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogNDJlbTtcclxufVxyXG5cclxuLmludHJve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogNyUgMCAxJTtcclxufVxyXG4uaW50cm8gLmludHJvLWhvbGRlciBoMXtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbn1cclxuLmludHJvIC5pbnRyby1ob2xkZXIgcDpmaXJzdC1vZi10eXBle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNyU7XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtcclxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQxcHg7XHJcbn1cclxuLmZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDMlIDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/link1/link1.component.css":
/*!*******************************************!*\
  !*** ./src/app/link1/link1.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n  \r\n.example-container > * {\r\n    width: 100%;\r\n}\r\n  \r\n.login-page{\r\n    height: 100%;\r\n}\r\n  \r\n.jumbotron{\r\n  height:calc(100vh - 56px);\r\n  margin: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGluazEvbGluazEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2xpbmsxL2xpbmsxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuICBcclxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSAgXHJcblxyXG4ubG9naW4tcGFnZXtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmp1bWJvdHJvbntcclxuICBoZWlnaHQ6Y2FsYygxMDB2aCAtIDU2cHgpO1xyXG4gIG1hcmdpbjogMDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/link1/link1.component.ts":
/*!******************************************!*\
  !*** ./src/app/link1/link1.component.ts ***!
  \******************************************/
/*! exports provided: Link1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link1Component", function() { return Link1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Link1Component = class Link1Component {
    constructor() {
        this.model = {};
    }
    ngOnInit() {
    }
    onSubmit() {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    }
};
Link1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'link1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./link1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/link1/link1.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./link1.component.css */ "./src/app/link1/link1.component.css")).default]
    })
], Link1Component);



/***/ }),

/***/ "./src/app/link2/link2.component.css":
/*!*******************************************!*\
  !*** ./src/app/link2/link2.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpbmsyL2xpbmsyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/link2/link2.component.ts":
/*!******************************************!*\
  !*** ./src/app/link2/link2.component.ts ***!
  \******************************************/
/*! exports provided: Link2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link2Component", function() { return Link2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Link2Component = class Link2Component {
    constructor() { }
    ngOnInit() {
    }
};
Link2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'link2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./link2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/link2/link2.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./link2.component.css */ "./src/app/link2/link2.component.css")).default]
    })
], Link2Component);



/***/ }),

/***/ "./src/app/link3/link3.component.css":
/*!*******************************************!*\
  !*** ./src/app/link3/link3.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar .nav-link.active {\r\n    color: #007bff;\r\n}\r\n\r\n.sidebar .nav-link {\r\n    font-weight: 500;\r\n    color: #333;\r\n}\r\n\r\n.sidebar .nav-link .feather {\r\n    margin-right: 4px;\r\n    color: #999;\r\n}\r\n\r\n.sidebar .nav-link .feather:hover {\r\n    color: #333;\r\n}\r\n\r\n.nav {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding-left: 0;\r\n    margin-bottom: 0;\r\n    list-style: none;\r\n    padding: 15px 0;\r\n    font-size: 14px;\r\n}\r\n\r\n.sidebar-heading {\r\n    font-size: .75rem;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.text-muted {\r\n    color: #6c757d!important;\r\n}\r\n\r\n.mb-2, .my-2 {\r\n    margin-bottom: .5rem!important;\r\n}\r\n\r\n.pt-3, .py-3 {\r\n    padding-top: 1rem!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGluazMvbGluazMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUVJLGFBQWE7SUFFYixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvbGluazMvbGluazMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGluayB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWxpbmsgLmZlYXRoZXI6aG92ZXIge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5uYXYge1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uc2lkZWJhci1oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4udGV4dC1tdXRlZCB7XHJcbiAgICBjb2xvcjogIzZjNzU3ZCFpbXBvcnRhbnQ7XHJcbn1cclxuLm1iLTIsIC5teS0yIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB0LTMsIC5weS0zIHtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/link3/link3.component.ts":
/*!******************************************!*\
  !*** ./src/app/link3/link3.component.ts ***!
  \******************************************/
/*! exports provided: Link3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link3Component", function() { return Link3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _post_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../post-service.service */ "./src/app/post-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let Link3Component = class Link3Component {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
};
Link3Component.ctorParameters = () => [
    { type: _post_service_service__WEBPACK_IMPORTED_MODULE_1__["PostServiceService"] }
];
Link3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'link3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./link3.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/link3/link3.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./link3.component.css */ "./src/app/link3/link3.component.css")).default]
    })
], Link3Component);



/***/ }),

/***/ "./src/app/link4/link4.component.css":
/*!*******************************************!*\
  !*** ./src/app/link4/link4.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\r\n    color: #5a5a5a;\r\n}\r\n.carousel-item {\r\n    height: 32rem;\r\n}\r\n.carousel {\r\n    margin-bottom: 4rem;\r\n}\r\n.marketing .col-lg-4 {\r\n    margin-bottom: 1.5rem;\r\n    text-align: center;\r\n}\r\n.marketing .col-lg-4 {\r\n    margin-bottom: 1.5rem;\r\n    text-align: center;\r\n}\r\n.marketing h2 {\r\n    font-weight: 400;\r\n}\r\n.featurette-heading {\r\n    margin-top: 7rem;\r\n    font-size: 50px;\r\n}\r\n.bd-placeholder-img-lg {\r\n    font-size: 3.5rem;\r\n    text-anchor: middle;\r\n}\r\nsvg {\r\n    overflow: hidden;\r\n    vertical-align: middle;\r\n}\r\nfooter{\r\n    padding: 2% 02px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGluazQvbGluazQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbGluazQvbGluazQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBjb2xvcjogIzVhNWE1YTtcclxufVxyXG4uY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDMycmVtO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxufVxyXG4gICAgXHJcbi5tYXJrZXRpbmcgLmNvbC1sZy00IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hcmtldGluZyAuY29sLWxnLTQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWFya2V0aW5nIGgyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5mZWF0dXJldHRlLWhlYWRpbmcge1xyXG4gICAgbWFyZ2luLXRvcDogN3JlbTtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG5cclxuLmJkLXBsYWNlaG9sZGVyLWltZy1sZyB7XHJcbiAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbn1cclxuc3ZnIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5mb290ZXJ7XHJcbiAgICBwYWRkaW5nOiAyJSAwMnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/link4/link4.component.ts":
/*!******************************************!*\
  !*** ./src/app/link4/link4.component.ts ***!
  \******************************************/
/*! exports provided: Link4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link4Component", function() { return Link4Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Link4Component = class Link4Component {
    constructor() { }
    ngOnInit() {
    }
};
Link4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'link4',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./link4.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/link4/link4.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./link4.component.css */ "./src/app/link4/link4.component.css")).default]
    })
], Link4Component);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");











































let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        ],
        exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],],
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/post-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/post-service.service.ts ***!
  \*****************************************/
/*! exports provided: PostServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostServiceService", function() { return PostServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PostServiceService = class PostServiceService {
    constructor(http) {
        this.http = http;
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }
    getPosts(post) {
        return this.http.get(this.url);
    }
    createPost(post) {
        return this.http.post(this.url, JSON.stringify(post));
    }
    updatePost(post) {
        return this.http.put(this.url + "/" + post.id, JSON.stringify(post));
    }
    deletePost(post) {
        return this.http.delete(this.url + "/" + post.id);
    }
};
PostServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PostServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostServiceService);



/***/ }),

/***/ "./src/app/summery.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/summery.pipe.ts ***!
  \*********************************/
/*! exports provided: SummeryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummeryPipe", function() { return SummeryPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SummeryPipe = class SummeryPipe {
    transform(value, limit) {
        if (!value)
            return null;
        let actualLimit = (limit) ? limit : 30;
        return value.substr(0, actualLimit) + "....";
    }
};
SummeryPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'summery'
    })
], SummeryPipe);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\A.R\Desktop\myApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);