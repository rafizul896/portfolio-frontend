import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/MainLayout/Main";
import ProjectsPage from "../Pages/Projects/ProjectsPage";
import ProjectDetailsPage from "../Pages/Projects/ProjectDetailsPage";
import BlogsPage from "../Pages/Blogs/BlogsPage";
import BlogDetailsPage from "../Pages/Blogs/BlogDetailsPage";
import SkillPage from "../Pages/Skills/SkillPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/projects/:id",
        element: <ProjectDetailsPage />,
      },
      {
        path: "/blogs",
        element: <BlogsPage />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetailsPage />,
      },
      {
        path: "/skills",
        element: <SkillPage />,
      },
    ],
  },
]);
