import Default from './default.model'

function getDefault(_, { id }, ctx) {
  return 'DEFAULT'
}
function getDefaults(_, args, ctx) {}
function createDefault(_, { input }, ctx) {}
function updateDefault(_, { input }, ctx) {}
function removeDefault(_, { id }, ctx) {}

export default {
  Query: {
    getDefault,
    getDefaults,
  },
  Mutation: {
    createDefault,
    updateDefault,
    removeDefault,
  },
  Default: {
    createdBy(defaultObj) {
      return 'Created By Me'
    },
  },
}
