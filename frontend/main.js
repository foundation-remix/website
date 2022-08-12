import $ from "jquery";
window.$ = $;

// Foundation (NOTE: Adjust settings in _foundation-settings.scss)
import "/foundation/foundation.js";
import "/foundation/foundation.scss";
import "motion-ui";
//import "motion-ui/dist/motion-ui.js";

// Application specific.
import App from "/app.vue";
import router from "/router";

import { createApp } from "vue";

const Vue = createApp(App);

Vue.use(router);
Vue.mount("#app");
