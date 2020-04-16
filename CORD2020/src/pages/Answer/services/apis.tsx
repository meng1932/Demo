import request from '../../../utils/request';

export function fetchAnswer(askedQuestion: any) {
  return request(`http://3.211.123.139/search?question=${askedQuestion}`);
}
