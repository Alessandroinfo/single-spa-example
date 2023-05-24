import {registerApplication, start} from "single-spa";
import './global.css';

registerApplication(
    'navbar',
    () => System.import("navbar"),
    location => location.pathname.startsWith('/')
)

registerApplication(
    'section',
    () => System.import("section"),
    location => location.pathname.startsWith('/section')
)

start();
