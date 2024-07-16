import React from 'react';
import { Button, Popover } from 'react-bootstrap';

function PopoverExample() {
  const popover = (
    <Popover id="popover-example">
      <Popover.Title as="h3">Popover title</Popover.Title>
      <Popover.Content>
        This is the content of the popover.
      </Popover.Content>
    </Popover>
  );

  return (
    <div>
      <Button variant="primary" id="popover-button">
        Click me
      </Button>

      <Popover placement="right" target="popover-button">
        {popover}
      </Popover>
    </div>
  );
}

export default PopoverExample;