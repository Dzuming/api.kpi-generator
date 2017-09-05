import express from 'express';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';
import bodyParser from 'body-parser';
import db from './models';
var models = require('./models');
import schema from './data/schema';

const GRAPHQL_PORT = 3000;

const graphQLServer = express();

graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
graphQLServer.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
models
  .sequelize
  .sync()
  .then(function () {
    var server = graphQLServer.listen(GRAPHQL_PORT, function () {
      console.log('Express server listening on port ' + server.address().port);
    });
  });
