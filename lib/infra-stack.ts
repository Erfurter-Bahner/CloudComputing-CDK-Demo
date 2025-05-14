import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloFunction = new lambda.Function(this, 'HelloFunction', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromInline(`
        exports.handler = async function(event) {
          console.log("Request received");
          return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Hallo Kasche' })
          };
        };
      `),
    });

    new apigateway.LambdaRestApi(this, 'Endpoint', {
      handler: helloFunction
    });
  }
}
