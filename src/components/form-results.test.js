import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from './form/Form.js';
import Results from './results/Results.js';
import superagent from 'superagent';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('*', (req, res, ctx) => {
    return res(ctx.json({
      results: [
        { name: 'test' },
        { name: 'Also test' }
      ],
    }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Testing form and results components', () => {
  it('Needs to run a function on button click', async () => {
    let handleUpdate = jest.fn();

    render(<Form updateResults={handleUpdate} />);

    let button = screen.getByText('Go');

    expect(button).toBeInTheDocument();

    // userEvent.type(input: 'urlEntry', "https://pokeapi.co/api/v2/pokemon/" );

    fireEvent.click(button);

    await waitFor(() => expect(handleUpdate).toHaveBeenCalled());
  });

  it('Should print response headers and response body to the results window on a successful API call', async () => {
    const response = await superagent.get('https://pokeapi.co/api/v2/pokemon/');
    let headers = response.headers;
    let body = response.body;


    render(<Results data={body} headerData={headers} />)

    expect(screen.getByText("results")).toBeInTheDocument();
    expect(screen.getByText("cache-control")).toBeInTheDocument();

  });

});