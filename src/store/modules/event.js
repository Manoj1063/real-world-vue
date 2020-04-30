import EventService from '@/services/EventService.js'

export const namespaced = true

export const state = {
  categories: [
    'sustainability',
    'nature',
    'animal welfare',
    'housing',
    'education',
    'food',
    'community'
  ],
  todos: [
    { id: 1, title: '...', done: true },
    { id: 2, title: '...', done: false },
    { id: 3, title: '...', done: true },
    { id: 4, title: '...', done: false }
  ],
  events: [],
  eventsTotal: 0,
  event: {}
}

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
  SET_EVENTS(state, events) {
    state.events = events
  },
  TOTAL_EVENTS(state, eventsTotal) {
    state.eventsTotal = eventsTotal
  },
  SET_EVENT(state, event) {
    state.event = event
  }
}

export const actions = {
  createEvent({ commit, rootState }, event) {
    console.log('User Event is ' + rootState.user.user.name)
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event)
    })
  },
  fetchEvents({ commit }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then(response => {
        console.log(
          'The total events are: ' + response.headers['x-total-count']
        )
        commit('TOTAL_EVENTS', response.headers['x-total-count'])
        commit('SET_EVENTS', response.data)
      })
      .catch(error => {
        console.log('There is an error:' + error.response)
      })
  },
  fetchEvent({ commit, getters }, id) {
    var event = getters.getEventByID(id)
    if (event) {
      commit('SET_EVENT', event)
    } else {
      EventService.getEvent(id)
        .then(response => {
          commit('SET_EVENT', response.data)
        })
        .catch(eror => {
          console.log('There was an error', error.response)
        })
    }
  }
}

export const getters = {
  catLength: state => {
    return state.categories.length
  },
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  },
  activeTodoCount: state => {
    return state.todos.filter(todo => !todo.done).length
  },
  getEventByID: state => id => {
    return state.events.find(event => event.id === id)
  }
}
