import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import awsExports from "./aws-exports";
import { Auth } from "aws-amplify";

const client = (() => {
  return new AWSAppSyncClient({
    url: awsExports.aws_appsync_graphqlEndpoint,
    region: awsExports.aws_appsync_region,
    auth: {
      type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
      jwtToken: async () => {
        const session = await Auth.currentSession();
        return session.getIdToken().getJwtToken();
      },
    },
  });
})();

export default client;
