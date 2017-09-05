import db from '../models';

const resolvers = {
  Query: {
    charts() {
      return db.Chart.findAll();
    },
  },
};

export default resolvers;
