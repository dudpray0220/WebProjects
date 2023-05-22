import { createWebHistory, createRouter } from "vue-router";
import ApplicationView from "../views/ApplicationView.vue";
import LoginView from "../views/LoginView.vue";
import ConfigurationView from "../views/ConfigurationView.vue";
import FileView from "../views/FileView.vue";
import DevicesView from "../views/DevicesView.vue";

import CommonSettingsView from "../views/Settings/CommonSettingsView.vue";
import UsersView from "../views/Settings/UsersView.vue";
import DesignSettingsView from "../views/Settings/DesignSettingsView.vue";
import GroupsView from "../views/Settings/GroupsView.vue";
import LangSettingsView from "../views/Settings/LangSettingsView.vue";
import HintsView from "../views/Settings/HintsView.vue";
import PluginSettingsView from "../views/Settings/PluginSettingsView.vue";
import PluginSettingsDeviceInfoView from "../views/Settings/PluginSettingsDeviceInfoView.vue";
import PluginSettingsDeviceLogView from "../views/Settings/PluginSettingsDeviceLogView.vue";
import PluginSettingsMessagingView from "../views/Settings/PluginSettingsMessagingView.vue";
import PluginSettingsPushView from "../views/Settings/PluginSettingsPushView.vue";

import PluginDeviceInfoView from "../views/Functions/PluginDeviceInfoView.vue";
import PluginDeviceLogView from "../views/Functions/PluginDeviceLogView.vue";
import PluginMessagingView from "../views/Functions/PluginMessagingView.vue";
import PluginPushView from "../views/Functions/PluginPushView.vue";
import PluginAuditView from "../views/Functions/PluginAuditView.vue";

import ProfileView from "../views/ProfileView.vue";

const routes = [
  {
    path: "/",
    component: DevicesView,
    beforeEnter: (to, from, next) => {
      // 로그인 시 메인페이지로 아니면 login 페이지로
      if (this.$store.state.isLogin) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/login",
    component: LoginView,
  },
  {
    path: "/applications",
    component: ApplicationView,
  },
  {
    path: "/configurations",
    component: ConfigurationView,
  },
  {
    path: "/files",
    component: FileView,
  },

  // Settings 안 페이지
  {
    path: "/designSettings",
    component: DesignSettingsView,
  },
  {
    path: "/commonSettings",
    component: CommonSettingsView,
  },
  {
    path: "/users",
    component: UsersView,
  },
  {
    path: "/groups",
    component: GroupsView,
  },
  {
    path: "/langSettings",
    component: LangSettingsView,
  },
  {
    path: "/hints",
    component: HintsView,
  },
  {
    path: "/pluginSettings",
    component: PluginSettingsView,
  },
  {
    path: "/plugin-settings-deviceinfo",
    component: PluginSettingsDeviceInfoView,
  },
  {
    path: "/plugin-settings-devicelog",
    component: PluginSettingsDeviceLogView,
  },
  {
    path: "/plugin-settings-messaging",
    component: PluginSettingsMessagingView,
  },
  {
    path: "/plugin-settings-push",
    component: PluginSettingsPushView,
  },

  // Functions 안 페이지
  {
    path: "/plugin-deviceinfo",
    component: PluginDeviceInfoView,
  },
  {
    path: "/plugin-devicelog",
    component: PluginDeviceLogView,
  },
  {
    path: "/plugin-messaging",
    component: PluginMessagingView,
  },
  {
    path: "/plugin-push",
    component: PluginPushView,
  },
  {
    path: "/plugin-audit",
    component: PluginAuditView,
  },

  // MyPage
  {
    path: "/profile",
    component: ProfileView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
