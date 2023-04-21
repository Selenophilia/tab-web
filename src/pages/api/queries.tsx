import { gql } from '@apollo/client'

export const getCareers: any = gql`
    query getAllCareers {
        allCareers {
            jobTitle
            location
            posted
        }
    }
`
