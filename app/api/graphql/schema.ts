const schema = `#graphql

    interface Character {
        name: String!
        outfit: String!
        strengthStat: Int!
    }

    type Person implements Character {
        name: String!   
        outfit: String!
        strengthStat: Int!

        backgroundStory: String!
    }
    type Alien implements Character {
        name: String!
        outfit: String!
        strengthStat: Int!

        homeWorld: String!
    }

    type Query {
        me: Person!
        characters: [Character!]!
    }

`

export default schema
