/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee($organisation_id: String) {
    onCreateEmployee(organisation_id: $organisation_id) {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee($organisation_id: String) {
    onUpdateEmployee(organisation_id: $organisation_id) {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee($organisation_id: String) {
    onDeleteEmployee(organisation_id: $organisation_id) {
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
export const onCreateOrganisation = /* GraphQL */ `
  subscription OnCreateOrganisation($id: String) {
    onCreateOrganisation(id: $id) {
      id
      name
      address
      createdAt
      updatedAt
      version
    }
  }
`;
export const onUpdateOrganisation = /* GraphQL */ `
  subscription OnUpdateOrganisation($id: String) {
    onUpdateOrganisation(id: $id) {
      id
      name
      address
      createdAt
      updatedAt
      version
    }
  }
`;
export const onDeleteOrganisation = /* GraphQL */ `
  subscription OnDeleteOrganisation($id: String) {
    onDeleteOrganisation(id: $id) {
      id
      name
      address
      createdAt
      updatedAt
      version
    }
  }
`;
