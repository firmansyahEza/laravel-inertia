require("./bootstrap");
import { createApp, h } from "vue";
import { App, plugin, Link } from "@inertiajs/inertia-vue3";

const el = document.getElementById("app");

createApp({
    render: () =>
        h(App, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) => require(`./pages/${name}`).default,
        }),
})
    .component("inertia-link", Link)
    .use(plugin)
    .mount(el);
