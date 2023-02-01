// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {gql, GraphQLClient} from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_API_URL!;

export default async function comments(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const graphQLClient: any = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.HYGRAPH_AUTH_TOKEN}`
    }
  })

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: $String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: { connect: {slug: $slug }}})
    }
  `
  const result = await graphQLClient.request(query, req.body)

  res.status(200).send(result)
}
