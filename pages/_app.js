import '../styles/globals.css'

import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";


function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

const progress = new ProgressBar({
    size: 2,
    color: "#79bfd1",
    className: "bar-of-progress",
    delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);


export default wrapper.withRedux(MyApp);
