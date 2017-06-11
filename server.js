import express from 'express';
import { buildSchema } from 'graphql';
import graphqlHTTP from 'express-graphql';

const app = express();

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const root = {
    hello: () => {
        return 'Hello world !';
    },
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(1337, () => {
    console.log('Server started, listening on http://localhost:1337/graphql');
});