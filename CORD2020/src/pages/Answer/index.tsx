import React from 'react';
import { connect } from 'dva';
import { Input } from 'antd';
import { List, Spin, Alert } from 'antd';

const { Search } = Input;

function AnswerIndex(props: any) {
  const { question, answers, dispatch, answerLoading, route } = props;
  console.log({ route });

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
      {answerLoading ? (
        <Spin tip="Loading...">
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
      ) : (
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
      )}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    question: state.answerSpace.question,
    answers: state.answerSpace.answers,
    answerLoading: state.loading.models.answerSpace,
  };
};
export default connect(mapStateToProps)(AnswerIndex);
