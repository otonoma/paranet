import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql';

const QueryRoot = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    getValue: {
      type: GraphQLString,
      resolve: () => "Hello world!!!"
    }
  })
});

const schema = new GraphQLSchema({ query: QueryRoot });

const app = express();
app.use('/api', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000/api');
});