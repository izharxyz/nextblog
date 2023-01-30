import { gql, request } from "graphql-request";
import { getEnvOrError } from "./env";

const graphqlAPI: string = process.env.NEXT_PUBLIC_API_URL!;

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

export const getRecentPosts = async () => {
    const query = gql`
    query GetRecentPostDetails {
        posts (
            orderBy: createdAt_ASC
            last: 3
        ) {
            title
            featuredImage {
                url
            }
            createdAt
            slug
        }
    }
    `

    const result = await request(graphqlAPI, query);
    return result.posts;
}

export const getSimilarPosts = async () => {
    const query = gql`
    query GetSimilarPostDetails($slug: string!, $categories: [string!]) {
        posts (
            where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories }}}
            last: 3
        ) {
            title
            featuredImage {
                url
            }
            createdAt
            slug
        }
    }
    `

    const result = await request(graphqlAPI, query);
    return result.posts;
}

const getCategories = async () => {
    const query = gql`
        query GetCategories {
            categories {
                name
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.categories;
}