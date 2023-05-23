import {registerApplication, start} from "single-spa";

registerApplication(
    'navbar',
    () => System.import("navbar"),
    location => location.pathname.startsWith('/')
)

start();
