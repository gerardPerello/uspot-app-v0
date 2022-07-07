
import {useEffect, useState} from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {

    //const { data = {}, loading, refetch} = useQuery(GET_REPOSITORIES)

    //const { repositories1 = null } = data

    
    const [repositories, setRepositories] = useState(null)
    
    const fetchRepositories = async() => {
        const response = await globalThis.fetch('http://172.20.10.9:5000/api/repositories')
        const json = await response.json()
        console.log(json)
        setRepositories(json)
    }

    useEffect(() => {
        fetchRepositories()
    }, [])
    

    const repositoriesNodes = repositories 
        ? repositories.edges.map(edge => edge.node)
        : []

    return {repositories: repositoriesNodes}

    //return { loading, repositories: repositoriesNodes, refetch}
}

export default useRepositories