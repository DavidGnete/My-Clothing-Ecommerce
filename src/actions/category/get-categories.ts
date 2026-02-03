'use server';
import { Category } from '../../generated/prisma/index';
import prisma from '@/lib/prisma';

export const getCategories = async () => {

    try{
        const Categories = await prisma.category.findMany({
            orderBy: {
                name: 'asc'
            }
        });

        return Categories;


    } catch (error) {
        console.log(error)
        return[];
    }
}