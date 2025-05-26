import React from 'react';
import StrategyCard from './StrategyCard';
import { strategyData } from './strategyData';
import { Strategy } from './types';

const Strategies: React.FC = () => {
    return (
        <section className="py-16 px-4 pt-44 lg:pt-72">
            <div className="max-w-7xl mx-auto">
                <div className='text-center mb-12'>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
                        Proven Strategies Our Web Development Services
                        <span className="text-primary block mt-2">
                            Company Uses For Building Robust Solutions
                        </span>
                    </h2>
                    <p className="mt-2 max-w-2xl mx-auto text-base font-thin lg:text-lg text-foreground">
                        Here are the key strategies we follow for building robust web solutions. Whether you&apos;re looking for custom web application developers or an enterprise web application development company, we&apos;ve got you covered.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {strategyData.map((strategy: Strategy) => (
                        <StrategyCard
                            key={strategy.title}
                            icon={strategy.icon}
                            title={strategy.title}
                            description={strategy.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Strategies;
