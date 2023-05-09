import { useState } from "react";
import { useRouter } from "next/router";
import { Flex,Select,Box } from "@chakra-ui/react";

import { filterData, getFilterValues } from "../Utitlities/filterData";

const SearchFilter = () => {
  
    const [filters, setFilters] = useState(filterData);
    const router = useRouter();

    const searchProperties = (filterValues) =>{
        const path = router.pathname;
        const {query} = router;

        const values = getFilterValues(filterValues);

        values.forEach((item) => {
            if(item.value && filterValues?.[item.name]) {
                query[item.name] = item.value
            }
        })

        router.push({pathname:path, query})

    }
  
    return (
        <Flex justifyContent="center" alignItems="center" bg="gray.100" flexWrap="wrap">


            {filters.map((filter) => 
                ( <Box key={filter.queryName} >
                    <Select
                        p="2"
                        w="fit-content" 
                        placeholder={filter.placeholder}
                        onChange = {e => searchProperties( {[filter.queryName]:e.target.value})}
                    >
                        
                        {filter?.items?.map((item) => (
                            <option value={item.value} key={item.value} >
                                {item.name}
                            </option>
                        ))}

                    </Select>    
                </Box>)
            )}
       
        
        </Flex>
    )
}

export default SearchFilter;