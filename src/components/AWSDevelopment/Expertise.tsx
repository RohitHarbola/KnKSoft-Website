import React from 'react';
import Image from 'next/image';

const awsServices = [
  { name: 'Amazon EC2', image: 'https://www.signitysolutions.com/hs-fs/hubfs/aws-lambda-logo%201.png?width=53&height=64&name=aws-lambda-logo%201.png' },
  { name: 'Amazon DynamoDB', image: 'https://www.signitysolutions.com/hs-fs/hubfs/DynamoDB%201.png?width=67&height=71&name=DynamoDB%201.png' },
  { name: 'Amazon Lambda', image: 'https://www.signitysolutions.com/hs-fs/hubfs/Group%20554.png?width=55&height=66&name=Group%20554.png' },
  { name: 'Amazon ElastiCache', image: 'https://www.signitysolutions.com/hs-fs/hubfs/AWS_ElastiCache_Icon-1%201.png?width=56&height=65&name=AWS_ElastiCache_Icon-1%201.png' },
  { name: 'Amazon S3', image: 'https://www.signitysolutions.com/hs-fs/hubfs/aws-s3-simple-storage-service-logo-B280D33C1B-seeklogo%201.png?width=56&height=68&name=aws-s3-simple-storage-service-logo-B280D33C1B-seeklogo%201.png' },
  { name: 'Amazon Route 53', image: 'https://www.signitysolutions.com/hs-fs/hubfs/aws-route53-logo-png-transparent%201.png?width=60&height=74&name=aws-route53-logo-png-transparent%201.png' },
  { name: 'Amazon RDS', image: 'https://www.signitysolutions.com/hs-fs/hubfs/aws-rds-logo%201.png?width=63&height=68&name=aws-rds-logo%201.png' },
  { name: 'Amazon API Gateway', image: 'https://www.signitysolutions.com/hs-fs/hubfs/aws-api-gateway-logo-png-transparent%201.png?width=60&height=74&name=aws-api-gateway-logo-png-transparent%201.png' },
  { name: 'AWS IoT', image: 'https://www.signitysolutions.com/hs-fs/hubfs/aws-iot_20copy%201.png?width=65&height=75&name=aws-iot_20copy%201.png' },
  { name: 'Amazon VPC', image: 'https://www.signitysolutions.com/hs-fs/hubfs/103-1035651_padlock-clipacx%201.png?width=89&height=56&name=103-1035651_padlock-clipacx%201.png' },
  { name: 'AWS CloudFormation', image: 'https://www.signitysolutions.com/hs-fs/hubfs/aws-cloudformation-logo-png-transparent%201.png?width=68&height=83&name=aws-cloudformation-logo-png-transparent%201.png' },
  { name: 'CloudFront', image: 'https://www.signitysolutions.com/hs-fs/hubfs/Group%20555.png?width=76&height=92&name=Group%20555.png' },
];

export function Expertise() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">

          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Our Expertise in AWS&nbsp;
            <span className="text-primary mt-2 block">Tools and Technologies</span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            Leverage our deep expertise in AWS services to build scalable, secure, and efficient cloud solutions
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {awsServices.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-4 md:p-6 rounded-xl 
                bg-white border border-gray-100 hover:border-blue-100
                shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out
                transform hover:-translate-y-1"
            >
              <div className="relative w-16 h-16 md:w-20 md:h-20 mb-4">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 64px, 80px"
                />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-800 text-center
                group-hover:text-blue-600 transition-colors duration-300">
                {service.name}
              </h3>
              <p className="mt-2 text-xs md:text-sm text-gray-500 text-center hidden group-hover:block
                transition-all duration-300">
                Click to learn more
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}