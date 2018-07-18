// IE10 Mobile Viewport fix 2.0.0
// Copyright (C) 2013-2018 ConsidoNet Solutions / www.considonet.com
// Released under MIT Licence

/*
VERSION HISTORY
2.0.0 (20180718) @pg
+ Switched to semver
* Dist package now transpiled from ES6 (compatibility with building environments not transpiling node_modules)
+ Source linted with tslint

1.2.1.20180214 @pg
+ TypeScript declarations

1.2.0.20171106 @pg
* Now acting as a separate npm module
* jQuery no longer required

1.1.0 @pg
+ ES6

1.0.0 @pg
+ Initial version

*/

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  document.addEventListener("DOMContentLoaded", () => {

    const msViewportStyle = document.createElement("style");
    msViewportStyle.appendChild(
      document.createTextNode(
        "@-ms-viewport{width:auto!important}"
      )
    );
    document.getElementsByTagName("head")[0].appendChild(msViewportStyle);

  });
}
