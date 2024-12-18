#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { WebAppCdkStack } from '../lib/stacks/web-app-stack';

const app = new cdk.App();
const env = { account: '533267137845', region: 'us-east-2' };
new WebAppCdkStack(app, 'WebAppStack', { env });
