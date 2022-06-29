import myPlugin from '~/plugins/store'

export const plugins = [myPlugin()]

export const actions = {
  test({ dispatch }, payload = 'hello') {
    console.log('## Test ##', payload)
    dispatch('layer1/test', 'HAHA', { root: true })
  },
}
