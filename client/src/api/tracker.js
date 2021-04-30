import axios from 'axios';

const postInteractionReq = (data) => {
  return axios({
    method: 'POST',
    url: `/interactions`,
    data: data
  });
};

export { postInteractionReq };