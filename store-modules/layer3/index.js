export const actions = {
  test(store, payload = 'hello') {
    console.log('##Layer3 Test ##', payload)
  },
}

export const namespaces = ['layer3']
