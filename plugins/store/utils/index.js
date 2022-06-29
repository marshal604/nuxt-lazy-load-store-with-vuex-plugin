import _ from 'lodash'
import * as utils from './index'

export const registerStore = (store, { namespaces, module }) => {
  const storeModule = _.pick(module, [
    'state',
    'getters',
    'mutations',
    'actions',
  ])
  const isNestedStore = namespaces.length > 1
  if (isNestedStore)
    utils.registerStore(store, {
      namespaces: namespaces.slice(0, -1),
      module: { state: {} },
    })
  if (store.hasModule(namespaces)) return
  const preserveState = Boolean(_.get(store.state, namespaces.join('.')))
  store.registerModule(
    namespaces,
    { namespaced: true, ...storeModule },
    { preserveState }
  )
}

export const registerStores = (store, { modules }) => {
  for (const module of modules)
    utils.registerStore(store, { namespaces: module.namespaces, module })
}
