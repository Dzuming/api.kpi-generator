import {
  makeExecutableSchema,
  // addMockFunctionsToSchema,
} from 'graphql-tools';
import resolvers from './resolvers';
// import mocks from './mocks';

const typeDefs = `
type Chart {
  id: Int
  title: String
}
type Query {
  charts: [Chart]
 }
`;

// const schema = makeExecutableSchema({ typeDefs });

// addMockFunctionsToSchema({ schema, mocks });

export default makeExecutableSchema({ typeDefs, resolvers });
