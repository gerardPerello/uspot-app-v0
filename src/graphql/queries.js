import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
query GetRepositories {
    repositories {
      edges {
        node {
          id
          name
          ownerName
          createdAt
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          description
          language
          ownerAvatarUrl
        }
      }
    }
}
`