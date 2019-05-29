import {queryAllByAttribute, getConfig, buildQueries} from './all-utils'

const getClassAttribute = () => getConfig().classAttribute

const queryAllByClass = (...args) =>
  queryAllByAttribute(getClassAttribute(), ...args)

const getMissingError = (c, id) =>
  `Unable to find an element by: [${getClassAttribute()}="${id}"]`

const [, getAllByClass, findAllByClass] = buildQueries(
  queryAllByClass,
  undefined,
  getMissingError,
)

export {queryAllByClass, getAllByClass, findAllByClass}
