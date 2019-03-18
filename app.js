const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String,
    world: String
  }
`);

const root = { hello: () => 'Hello!' };
const roo2 = { world: () => 'world' };

graphql(schema, '{ hello }', root).then((res) => {
    console.log(res);
});
graphql(schema, '{ world }', roo2).then(res => {
    console.log(res);
});