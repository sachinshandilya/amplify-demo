/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
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
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
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
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
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
export const createOrganisation = /* GraphQL */ `
  mutation CreateOrganisation(
    $input: CreateOrganisationInput!
    $condition: ModelOrganisationConditionInput
  ) {
    createOrganisation(input: $input, condition: $condition) {
      id
      name
      address
      createdAt
      updatedAt
      version
    }
  }
`;
export const updateOrganisation = /* GraphQL */ `
  mutation UpdateOrganisation(
    $input: UpdateOrganisationInput!
    $condition: ModelOrganisationConditionInput
  ) {
    updateOrganisation(input: $input, condition: $condition) {
      id
      name
      address
      createdAt
      updatedAt
      version
    }
  }
`;
export const deleteOrganisation = /* GraphQL */ `
  mutation DeleteOrganisation(
    $input: DeleteOrganisationInput!
    $condition: ModelOrganisationConditionInput
  ) {
    deleteOrganisation(input: $input, condition: $condition) {
      id
      name
      address
      createdAt
      updatedAt
      version
    }
  }
`;
