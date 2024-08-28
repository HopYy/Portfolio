import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";

export const routes = [
    {
        path: "/",
        element: <AboutMe />
    },
    {
        path: "/projects",
        element: <Projects />
    },
]