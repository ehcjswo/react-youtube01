import React from 'react';

import { categories } from '../utils/content';

const Category = ({ setSelectCategory, selectCategory }) => {
    return (
        <div>
            {categories.map(category => (
                <button
                    style={{
                        backgroundColor:
                            category.name === selectCategory ? '#fff' : '',
                        color:
                            category.name === selectCategory ? '#000' : '#fff',
                        borderRadius:
                            category.name === selectCategory ? '20px' : '',
                    }}
                    key={category.name}
                    onClick={() => setSelectCategory(category.name)}
                >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                </button>
            ))}
        </div>
    );
};

export default Category;
