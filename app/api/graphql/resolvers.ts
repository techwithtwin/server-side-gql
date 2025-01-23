const resolvers = {
  SearchType: {
    __resolveType: (obj) => {
      if (obj.species) {
        return 'Animal'
      }
      return 'Person'
    },
  },
  Person: {
    name: (person: { id: string; name: string }) => {
      return person.name.toUpperCase()
    },
    pets: (person) => {
      return [
        {
          species: 'Cat',
          name: 'Simba' + person.id,
        },
      ]
    },
  },
  Query: {
    search: () => {
      return [
        { name: 'boniface', id: '13344' },
        { species: 'Reptilia', name: 'Ratus Navigitus' },
      ]
    },
    me: () => {
      return 'Me'
    },
    people: () => {
      return [{ id: '1234-4553-3222', name: 'henry', pets: [1, 2, 3] }]
    },
  },
}

export default resolvers
