import { gql, request } from "graphql-request";
import { getEnvOrError } from "./env";

const graphqlAPI: string = getEnvOrError("NEXT_PUBLIC_API_URL");

export const getPosts = async () => {
    const query = gql`
        query GetPosts {
            postsConnection {
                edges {
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                                url
                            }
                        }
                        createdAt
                        excerpt
                        slug
                        title
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `
    
    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges;
}