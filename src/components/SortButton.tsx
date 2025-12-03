import React from 'react';

interface SortButtonProps {
    sortOrder: 'asc' | 'desc';
    onToggle: () => void;
}

const SortButton: React.FC<SortButtonProps> = ({ sortOrder, onToggle }) => {
    return (
        <button
            onClick={onToggle}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
        >
            Ordenar por Precio ({sortOrder === 'asc' ? '↑' : '↓'})
        </button>
    );
};

export default SortButton;
