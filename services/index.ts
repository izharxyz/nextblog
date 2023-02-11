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

export const getFeaturedPosts = async () => {
    const query = gql`
        query GetFeaturedPosts() {
            post (where: { featuredPost: true ) {
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
            }
        }
    `
    
    const result = await request(graphqlAPI, query);
    return result.post;
}

export const getPostDetails = async (slug: string) => {
    const query = gql`
        query GetPostDetails( $slug: String! ) {
            post (where: { slug: $slug}) {
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
                content {
                    raw
                }
            }
        }
    `
    
    const result = await request(graphqlAPI, query, { slug });
    return result.post;
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

export const getSimilarPosts = async (categories: string, slug: string) => {
    const query = gql`
    query GetSimilarPostDetails($slug: String!, $categories: [String!]) {
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

    const result = await request(graphqlAPI, query, {slug, categories});
    return result.posts;
}

export const getCategories = async () => {
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

export const submitComment = async (obj: any) => {
    const result = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
    return result.json();
}

export const getComments = async (slug: string) => {
    const query = gql`
      query GetComments($slug:String!) {
        comments(where: {post: {slug:$slug}}){
          name
          createdAt
          comment
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
  
    return result.comments;
  };