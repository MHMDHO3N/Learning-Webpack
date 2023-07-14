// require("./test.txt");

// require("./style.css");
// There are two ways to use loaders in your application:

// Configuration (recommended): Specify them in your webpack.config.js file.
// Inline: Specify them explicitly in each import statement. like below

// It's possible to specify loaders in an import statement, or any equivalent "importing" method. Separate loaders from the resource
// import Styles from 'style-loader!css-loader?modules!./styles.css';

// note => Prefixing
// Prefixing with ! will disable all configured normal loaders
// import Styles from '!style-loader!css-loader?modules!./styles.css';

// Prefixing with !! will disable all configured loaders (preLoaders, loaders, postLoaders)

// Prefixing with -! will disable all configured preLoaders and loaders but not postLoaders

import data from "!!ts-loader?modules!./data.ts";

console.warn("Mansour");

console.log(JSON.stringify(data));
