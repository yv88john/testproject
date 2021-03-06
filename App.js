import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label } from 'native-base';

export default class FixedLabelExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>testing</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
