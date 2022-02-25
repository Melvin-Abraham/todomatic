import React from 'react';
import Container from 'components/Container/Container';
import './Appbar.css';

/**
 * Renders header/appbar on the top of the page
 */
function Appbar() {
  return (
    <header className="appbar-root">
      <Container className="appbar-container">
        <h1 className="appbar-title">
          Todomatic
        </h1>
      </Container>
    </header>
  )
}

export default Appbar;
