/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      name
      email
      age
      salary
      organisation_id
      createdAt
      updatedAt
      version
      organisation {
        id
        name
        address
        createdAt
        updatedAt
        version
      }
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $id: ID
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEmployees(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        email
        age
        salary
        organisation_id
        createdAt
        updatedAt
        version
        organisation {
          id
          name
          address
          createdAt
          updatedAt
          version
        }
      }
      nextToken
    }
  }
`;
export const getOrganisation = /* GraphQL */ `
  query GetOrganisation($id: ID!) {
    getOrganisation(id: $id) {
      id
      name
      address
      createdAt
      updatedAt
      version
    }
  }
`;
export const listOrganisations = /* GraphQL */ `
  query ListOrganisations(
    $id: ID
    $filter: ModelOrganisationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrganisations(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        address
        createdAt
        updatedAt
        version
      }
      nextToken
    }
  }
`;
