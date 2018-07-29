import Vue from 'vue';
import Router from 'vue-router';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import RobotBases from '../parts/RobotBases.vue';
import HomePage from '../home/HomePage.vue';
import SidebarBuild from '../sidebars/SidebarBuild.vue';
import SidebarStandard from '../sidebars/SidebarStandard.vue';
import PartInfo from '../parts/PartInfo.vue';
import RobotBuilder from '../build/RobotBuilder.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    components: {
      default: HomePage,
      sidebar: SidebarStandard,
    },
    name: 'Home',
    path: '/',
  }, {
    components: {
      default: RobotBuilder,
      sidebar: SidebarBuild,
    },
    name: 'Build',
    path: '/build',
  }, {
    children: [
      {
        component: RobotHeads,
        name: 'BrowseHeads',
        path: 'heads',
      },
      {
        component: RobotArms,
        name: 'BrowseArms',
        path: 'arms',
      },
      {
        component: RobotTorsos,
        name: 'BrowseTorsos',
        path: 'torsos',
      },
      {
        component: RobotBases,
        name: 'BrowseBases',
        path: 'bases',
      },
    ],
    component: BrowseParts,
    name: 'BrowsParts',
    path: '/parts/browse',
  }, {
    component: PartInfo,
    name: 'Parts',
    path: '/parts/:partType/:id',
    props: true,
  }],
});
