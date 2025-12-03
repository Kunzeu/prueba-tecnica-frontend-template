import React from 'react';

interface DashboardHeaderProps {
    title: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title }) => {
    return (
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {title}
        </h1>
    );
};

export default DashboardHeader;
