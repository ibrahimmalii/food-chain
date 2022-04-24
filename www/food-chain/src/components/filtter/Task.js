import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Task(props) {
  const task = useRef();
  const date = useRef();
  const amount = useRef();

  const [optionsValue, setOptionsValue] = useState([]);

  const updateValue = () => {
    props.onSelectType({
      id: props.data.id,
      task: task.current.value,
      date: date.current.value,
      amount: amount.current.value,
    });
  };

  let options = [];
  const iterateOptions = useCallback(() => {
    options = [];
    setOptionsValue([]);
    for (const item in props.availableMilestones) {
      if (props.availableMilestones[item].selected) {
        options.push(
          <option value={item} disabled>
            {item}
          </option>
        );
      } else {
        options.push(<option value={item}>{item}</option>);
      }
    }
    return setOptionsValue(options);
  }, []);

  useEffect(() => {
    iterateOptions();
  }, [props.isChanged]);

  return (
    <div>
      <Form>
        <div className='d-flex'>
          <Form.Group className='mb-3 flex-grow-1' controlId='formBasicEmail'>
            <Form.Label>Milestone Descriptino</Form.Label>
            <Form.Select ref={task} onChange={updateValue}>
              <option>Select a milestone type</option>
              {optionsValue}
            </Form.Select>
          </Form.Group>
          <Form.Group className='mx-3' controlId='formBasicPassword'>
            <Form.Label>
              Disabled select UTC <i className='fa fa-question'></i>
            </Form.Label>
            <Form.Control
              ref={date}
              type='date'
              onChange={updateValue}
              placeholder='Due Date'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Deposit Amount</Form.Label>
            <Form.Control
              ref={amount}
              type='number'
              onChange={updateValue}
              placeholder='0'
              min='0'
              max='100'
            />
          </Form.Group>
        </div>
      </Form>
    </div>
  );
}
