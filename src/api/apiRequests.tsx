import axios from "axios";
import { AllRootDataModel } from "../models/AllRootDataModel";
import { SimpleProductModel } from "../models/SimpleProductModel";


export const getData = async (): Promise<SimpleProductModel[]> => {
    try {
        console.log('Calling get("product")');
        const { data } = await axios.get<AllRootDataModel[]>(
            'https://tinyurl.com/vht7ah2'
        );
        return transformData(data);
    } catch (error: unknown) {
        console.error('Specific error:', error);
        throw error;
    }
};


// Extracting only the relevant details for convenience
const transformData = (data: AllRootDataModel[]): SimpleProductModel[] => {
    return data.map(item => ({
        id: item.id,
        title: item.title,
        description: item.desc,
        price: item.price,
        imageUrl: item.image?.url || '' 
    }));
};

