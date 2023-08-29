import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Layout from "../components/layout/Layout/Layout";
import Homepage from "../components/pages/Homepage/Homepage";
import Reservations from "../components/pages/Reservations/Reservations";
import NotFound from "../components/pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Homepage />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
  {
    path: "/reservations",
    element: (
      <Layout>
        <Reservations />
      </Layout>
    ),
  },
]);

export default router;
