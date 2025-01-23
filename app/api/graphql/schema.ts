const schema = `#graphql

    type UserStatus {
        ACTIVE
        DEACTIVATED
    }
    type User {
        id: ID!
        username: String!
        profile: Profile!
        status: UserStatus!
    }

    type Profile {
        id: ID!
        firstName: String!
        lastName: String!
        school: String!
        age: Int!
        oldEmail: String! @deprecated(reason: "No More")
        email: String!
        IsMarried: Boolean!
        address: String!

    }

    type Query {
        me: User!
    }

`

export default schema
