import axios from 'axios';
// import company from '../reducer/company';
export const getCompanyRedux = () => {
  return {
    type: 'GET_COMPANY',
    payload: axios.get(
      `https://crownhire.site/api/v1/companies`
    )
  };
};

export const addCompanyRedux = data => {
  return {
    type: 'ADD_COMPANY',
    payload: axios.post(
      `https://crownhire.site/api/v1/companies`,
      data
    )
  };
};

export const updateCompanyRedux = (id, data) => {
  return {
    type: 'UPDATE_COMPANY',
    payload: axios.patch(
      `https://crownhire.site/api/v1/companies/${id}`,
      data
    )
  };
};

export const deleteCompanyRedux = id => {
  return {
    type: 'DELETE_COMPANY',
    payload: axios.delete(
      `https://crownhire.site/api/v1/companies/${id}`
    )
  };
};
