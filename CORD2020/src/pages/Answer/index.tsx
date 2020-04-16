import React from 'react';
import { connect } from 'dva';
import { Input } from 'antd';
import { List, Avatar } from 'antd';

const { Search } = Input;

function AnswerIndex(props: any) {
  const { question, answers, dispatch } = props;

  const getAnswers = (value: String) => {
    dispatch({ type: 'answerSpace/getAnswersAsync', data: value });
  };

  return (
    <div>
      <Search
        placeholder={question}
        onSearch={value => getAnswers(value)}
        enterButton
      />
      <List
        itemLayout="horizontal"
        dataSource={answers}
        renderItem={(item: any) => (
          <List.Item>
            <List.Item.Meta
              avatar={<div>{item.confidence}</div>}
              title={<div>{item.answer}</div>}
              description={item.abstract_bert}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    question: state.answerSpace.question,
    answers: state.answerSpace.answers,
  };
};
export default connect(mapStateToProps)(AnswerIndex);
