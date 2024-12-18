import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Vpc, IVpc } from 'aws-cdk-lib/aws-ec2';

export class VpcStack extends Stack {
  readonly vpc: IVpc;

  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const STACK_RESOURCE_IDENTIFIER = `VpcStack-${props.env!.region}`;

    const vpcName = `Vpc-${STACK_RESOURCE_IDENTIFIER}`;
    this.vpc = new Vpc(this, vpcName);
  }
}
