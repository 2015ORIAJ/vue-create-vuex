import * as actions from './acctions'
import * as getters from './getters'
import * as mutations from './mutations'
import state from './state'

const journalModule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export default journalModule