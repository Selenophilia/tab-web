import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'http://localhost:10004/graphql',
  documents: ["src/**/*.graphql"],
  generates: {
    './src/gql/': {
      preset: 'client'
    }
  }
}
 
export default config