import { useState, useEffect, useMemo } from 'react';
import { Product, Stats } from '../types';
import { initialData } from '../lib/mockData';

const expensiveCalculation = (data: Product[]) => {
    console.log("Calculando estadísticas pesadas...");
    let sum = 0;
    // Reduced iterations for performance, but kept the logic structure
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < 1000; j++) { // Reduced from 10000 to 1000 for demo purposes, or keep as is if requirement
            sum += Math.random();
        }
    }
    return data.map(item => ({ ...item, complexScore: sum }));
};

export const useProductData = () => {
    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState<'asc' | 'desc'>("asc");

    // Simulate fetching
    useEffect(() => {
        // Simulate network delay
        const timer = setTimeout(() => {
            setData(initialData);
            setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const filteredAndSortedData = useMemo(() => {
        const lowerFilter = filter.toLowerCase();

        let result = data.filter((item) => {
            return item.name.toLowerCase().includes(lowerFilter) ||
                item.description.toLowerCase().includes(lowerFilter) ||
                item.category.toLowerCase().includes(lowerFilter);
        });

        if (sort === 'asc') {
            result = [...result].sort((a, b) => a.price - b.price);
        } else {
            result = [...result].sort((a, b) => b.price - a.price);
        }

        return expensiveCalculation(result);
    }, [data, filter, sort]);

    const stats: Stats = useMemo(() => {
        const totalValue = filteredAndSortedData.reduce((acc, curr) => acc + curr.price, 0);
        return {
            totalItems: filteredAndSortedData.length,
            totalValue
        };
    }, [filteredAndSortedData]);

    return {
        loading,
        filter,
        setFilter,
        sort,
        setSort,
        stats,
        products: filteredAndSortedData
    };
};
