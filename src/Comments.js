import React from 'react';
import {Button, Comment, Form, Header} from 'semantic-ui-react'
import bb from "./KakaoTalk_Photo_2020-08-10-23-51-51.jpeg"

class Comments extends React.Component{
  render(){
    return(<Comment.Group>
      <Header as='h3' dividing>
        Comments
      </Header>

      <Comment>
        <Comment.Avatar src={bb}/>
        <Comment.Content>
          <Comment.Author as='a'>Chloe</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>How artistic!</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>

      <Comment>
        <Comment.Avatar src='/images/avatar/small/elliot.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>Youngsen</Comment.Author>
          <Comment.Metadata>
            <div>Yesterday at 12:30AM</div>
          </Comment.Metadata>
          <Comment.Text>
            <p>It sucks!</p>
          </Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
        <Comment.Group>
          <Comment>
            <Comment.Avatar src='/images/avatar/small/jenny.jpg' />
            <Comment.Content>
              <Comment.Author as='a'>Chloe2</Comment.Author>
              <Comment.Metadata>
                <div>Just now</div>
              </Comment.Metadata>
              <Comment.Text>That's not very nice!</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </Comment>

      <Form reply>
        <Form.TextArea />
        <Button content='Add Reply' labelPosition='left' icon='edit' primary />
      </Form>
    </Comment.Group>)
  }
}

export default Comments
