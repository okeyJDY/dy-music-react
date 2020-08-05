import DYDiscover from "@/pages/discover";
import DYMine from "@/pages/mine";
import DYFriend from "@/pages/friend";

const routes = [
  {
    path: "/",
    exact: true,
    component: DYDiscover
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
