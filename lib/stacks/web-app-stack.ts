import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

interface WebAppStackProps extends StackProps {

}

export class WebAppCdkStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const STACK_RESOURCE_IDENTIFIER = `WebAppStack-${props.env!.region}`

    // The code that defines your stack goes here

    // Define ECS service with one t2.micro instance
    // Load nginx docker image into ECR and deploy onto Fargate and run
  }
}
