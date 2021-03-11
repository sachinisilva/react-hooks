import React, { } from 'react';

export default function TestFunctionalComp(props) {

  return (
    <div>
      <label>{props.name}</label>
    </div>
  );
}

TestFunctionalComp.defaultProps = {
    name: 'Foo'
};