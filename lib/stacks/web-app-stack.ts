import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {
  AmazonLinuxImage,
  AmazonLinuxGeneration,
  Instance,
  InstanceType,
  InstanceClass,
  InstanceSize,
  IVpc,
} from 'aws-cdk-lib/aws-ec2';

interface WebAppStackProps extends StackProps {
  vpc: IVpc;
}

export class WebAppStack extends Stack {
  readonly webServer: Instance;

  constructor(scope: Construct, id: string, props: WebAppStackProps) {
    super(scope, id, props);

    const STACK_RESOURCE_IDENTIFIER = `WebAppStack-${props.env!.region}`;

    // Define EC2 instance linux t2.micro
    // Load nginx docker image into ECR and deploy, bring task definition onto EC2
    // Give EC2 instance basic IAM role

    const webServerName = `WebServer-${STACK_RESOURCE_IDENTIFIER}`;
    this.webServer = new Instance(this, webServerName, {
      vpc: props.vpc,
      instanceName: 'web-hosting-box',
      instanceType: InstanceType.of(InstanceClass.T2, InstanceSize.MICRO),
      machineImage: new AmazonLinuxImage({ generation: AmazonLinuxGeneration.AMAZON_LINUX_2 }),
    });
  }
}
