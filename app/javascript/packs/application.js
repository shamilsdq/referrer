import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Support component names relative to this directory:
var componentRequireContext = require.context("src", true);
var ReactRailsUJS = require("react_ujs");

// Makes React dev tools etc, work.
ReactRailsUJS.mountComponents();

ReactRailsUJS.useContext(componentRequireContext);
