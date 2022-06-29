import { registerStores } from './utils'

const getStoreModules = async (actionName) => {
  const dict = {
    'layer2/test': () => [import('~/store-modules/layer2')],
    'layer3/test': () => [import('~/store-modules/layer3')],
  }
  if (!dict[actionName]) return []

  const storeModules = await Promise.all(dict[actionName]())
  return storeModules
}
export default () => {
  return (store) => {
    const originDispatch = store.dispatch
    store.dispatch = async (...arg) => {
      const modules = await getStoreModules(arg[0])
      registerStores(store, { modules })
      originDispatch(...arg)
    }
  }
}
