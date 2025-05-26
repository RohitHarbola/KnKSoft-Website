import React from 'react';
import { StrategyCardProps } from './types';

const StrategyCard: React.FC<StrategyCardProps> = ({ icon: Icon, title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg border transition-all duration-300 border-gray-100 hover:border-primary hover:border grid grid-cols-[10%_80%] gap-8 py-6">
            <div className="w-12 h-12 mb-4 text-primary bg-primary rounded-r-md flex items-center justify-center">
                <Icon size={35} className='text-white' />
            </div>
            <div className='flex flex-col'>
                <h3 className="text-xl lg:text-2xl font-bold mb-3">{title}</h3>
                <p className="font-thin text-sm lg:text-base">{description}</p>
            </div>

        </div>
    );
};

export default StrategyCard; 