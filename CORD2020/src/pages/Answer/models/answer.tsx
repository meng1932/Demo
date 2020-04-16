import * as apis from '../services/apis';

export default {
  namespace: 'answerSpace',
  state: {
    question: 'who is a stupid dog',
    start: 0,
    end: 5,
    answers: [
      {
        abstract_bert:
          'in december 2019, the 2019 novel coronavirus pneumonia (ncp, officially named coronavirus disease 2019 (covid-19) by the world health organization) broke out in wuhan, hubei, and it quickly spread to the whole country and abroad. the situation was at stake. the sudden and serious covid-19 epidemic has brought us a lot of urgent problems. how to effectively control the spread of covid-19 ? when does the population infection rate rise to its peak ? what will eventually be the number of infected patients ? how to make early diagnosis ? what effective antiviral drugs are available ? how to effectively treat with existing drugs ? can it successfully improve the survival rate of critically patients ? in response to the above questions, we put forward corresponding suggestions and reflections from the perspective of the infectious clinician.',
        answer: 'the population infection rate',
        confidence: 0.5501365637981052,
        end: 100,
        idx: 2158,
        start: 98,
      },
    ],
  },
  reducers: {
    getAnswers: (state: any, payload: any) => {
      let _state = state;
      _state.answers = payload.data;
      return _state;
    },
    changeQuestion: (state: any, payload: any) => {
      let _state = state;
      _state.question = payload.data;
      return _state;
    },
  },
  effects: {
    *getAnswersAsync(payload: any, { put, call }: any) {
      yield put({
        type: 'changeQuestion',
        data: payload.data,
      });
      const askedQuestion = payload.data.replace(' ', '%');
      const answers = yield call(apis.fetchAnswer, askedQuestion);
      yield put({
        type: 'getAnswers',
        data: answers.data,
      });
    },
  },
};
