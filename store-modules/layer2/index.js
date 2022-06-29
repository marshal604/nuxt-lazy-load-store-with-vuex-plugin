export const actions = {
  test(store, payload = 'hello') {
    console.log('##Layer2 Test ##', payload)
  },
}

export const namespaces = ['layer2']
