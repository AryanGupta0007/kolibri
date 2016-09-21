
const Vuex = require('vuex');
const coreStore = require('kolibri/coreVue/vuex/store');
const constants = require('./constants');

/**
 ** pageState schemas

Users page:
  {
    users: [] // list of objects generated by actions._userState
  }

Data export page:
  {}

Content import/export page:
  {
    taskList: [] // list of objects
    channelList: [] // list of objects
    wizardState: {} // object
  }

**/


const initialState = {
  pageName: constants.PageNames.USER_MGMT_PAGE,
  pageState: {},
  facility: undefined,
};

const mutations = {
  ADD_USER(state, user) {
    state.pageState.users.push(user);
  },
  UPDATE_USERS(state, users) {
    users.forEach(user => {
      state.pageState.users.forEach(existingUser => {
        if (existingUser.id === user.id.toString()) {
          existingUser.username = user.username;
          existingUser.full_name = user.full_name;
          existingUser.roles = user.roles;
        }
      });
    });
  },
  DELETE_USER(state, id) {
    state.pageState.users = state.pageState.users.filter(user => user.id !== id);
  },
  SET_FACILITY(state, id) {
    state.facility = id;
  },
  SET_PAGE_NAME(state, name) {
    state.pageName = name;
  },
  SET_PAGE_STATE(state, pageState) {
    state.pageState = pageState;
  },

  // content import-export-specific mutations
  SET_CONTENT_PAGE_TASKS(state, taskList) {
    state.pageState.taskList = taskList;
  },
  SET_CONTENT_PAGE_CHANNELS(state, channelList) {
    state.pageState.channelList = channelList;
  },
  SET_CONTENT_PAGE_WIZARD_STATE(state, wizardState) {
    state.pageState.wizardState = wizardState;
  },
  SET_CONTENT_PAGE_WIZARD_DRIVES(state, driveList) {
    state.pageState.wizardState.driveList = driveList;
  },
  SET_CONTENT_PAGE_WIZARD_ERROR(state, error) {
    state.pageState.wizardState.error = error;
  },
  SET_CONTENT_PAGE_WIZARD_BUSY(state, isBusy) {
    state.pageState.wizardState.busy = isBusy;
  },
};


// assigns core state and mutations
Object.assign(initialState, coreStore.initialState);
Object.assign(mutations, coreStore.mutations);


module.exports = new Vuex.Store({
  state: initialState,
  mutations,
});
