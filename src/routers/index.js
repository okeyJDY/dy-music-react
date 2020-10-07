import React from "react";
import { Redirect } from "react-router-dom";

import DYDiscover from "@/pages/discover";
import DYMine from "@/pages/mine";
import DYFriend from "@/pages/friend";

import DYRecommend from "@/pages/discover/c-pages/recommend";
import DYRanking from "@/pages/discover/c-pages/ranking";
import DYSongs from "@/pages/discover/c-pages/songs";
import DYDjradio from "@/pages/discover/c-pages/djradio";
import DYArist from "@/pages/discover/c-pages/artist";
import DYAlbum from "@/pages/discover/c-pages/album";

import DYDjradioCategory from "@/pages/discover/c-pages/djradio/c-pages/djradio-category";
import DYDjradioRanking from "@/pages/discover/c-pages/djradio/c-pages/djradio-ranking";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />
  },
  {
    path: "/discover",
    component: DYDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />
      },
      {
        path: "/discover/recommend",
        component: DYRecommend,
      },
      {
        path: "/discover/ranking",
        component: DYRanking,
      },
      {
        path: "/discover/songs",
        component: DYSongs,
      },
      {
        path: "/discover/djradio",
        component: DYDjradio,
        routes: [
          {
            path: "/discover/djradio",
            exact: true,
            render: () => <Redirect to="/discover/djradio/category" />
          },
          {
            path: "/discover/djradio/category",
            exact: true,
            component: DYDjradioCategory
          },
          {
            path: "/discover/djradio/category/:id",
            component: DYDjradioRanking
          }
        ]
      },
      {
        path: "/discover/artist",
        component: DYArist,
      },
      {
        path: "/discover/album",
        component: DYAlbum,
      }
    ]
  },
  {
    path: "/mine",
    component: DYMine
  },
  {
    path: "/friend",
    component: DYFriend
  },
]

export default routes;
