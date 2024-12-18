#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { WebAppStack } from '../lib/stacks/web-app-stack';
import { VpcStack } from '../lib/stacks/vpc-stack';

const app = new cdk.App();
const env = { account: '533267137845', region: 'us-east-2' };
const vpcStack = new VpcStack(app, 'VpcStack', { env });
const webAppStack = new WebAppStack(app, 'WebAppStack', { env, vpc: vpcStack.vpc });
