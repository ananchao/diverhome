import * as types from '../mutation-types'
import api from '../../api/api'

const state = {
    memberShip: {},
    badge: -1
}

const getters = {
    badgeStr: state => {
        return state.badge <= 0 ? '' : state.badge + ''
    }
}

const mutations = {
    [types.INIT_USER](state, memberShip) {
        state.memberShip = memberShip
    },
    [types.GET_BADGE](state, badge) {
        state.badge = badge
    }
}

const actions = {
    // 初始化用户信息
    initUser({ commit, state }, { member_id }) {
        return api.get('getMemberById/' + member_id).then((res) => {
            commit(types.INIT_USER, res.data)
        })
    },
    // 获取用户未读公告数
    getBadge({ commit, state }, { member_id }) {
        return api.get('getNoticeBadge/' + member_id).then((res) => {
            commit(types.GET_BADGE, res.data)
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}