import React from 'react';

import Button from './components/button/Button.js'

import './style.scss';

export default function App() {
  return (
    <div>
      <header>
        <div class="container">
          <h1 class="primary-title">
            <i class="fas fas fa-book text-primary"></i>{' '}
            <span class="text-primary">Book</span> List App
          </h1>
        </div>
      </header>
      <main>
        <div class="container">
          <form class="book-form">
            <div class="form-control">
              <label for="title">Title</label>
              <input id="title" type="text" />
            </div>
            <div class="form-control">
              <label for="author">Author</label>
              <input id="author" type="text" />
            </div>
            <div class="form-control">
              <label for="isbn">ISBN</label>
              <input id="isbn" type="text" />
            </div>
            <Button type="submit">
              Submit
            </Button>
          </form>
          <table class="booklist-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th></th>
              </tr>
            </thead>
            <tbody id="book-list"></tbody>
          </table>
        </div>
      </main>
      <Button>H</Button>
    </div>
  );
}
