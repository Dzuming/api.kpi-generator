import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import db from './models';
import schema from './data/schema';

const GRAPHQL_PORT = 3000;

const graphQLServer = express();

graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
db
  .sequelize
  .sync()
  .then(() => {
    const server = graphQLServer.listen(GRAPHQL_PORT, () => {
      console.log('Express server listening on port ' + server.address().port);
    });
  });
