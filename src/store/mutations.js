export default {
  SIDEBAR_OPEN(state) {
    state.sidebarOpen = true;
  },
  SIDEBAR_CLOSE(state) {
    state.sidebarOpen = false;
  },
  SET_DARK_MODE(state, value) {
    state.darkMode = value
  }
  /*ROUTE_LOADING(state) {
    state.routeLoading = true;
  },
  ROUTE_READY(state) {
    state.routeLoading = false;
  }*/
}
