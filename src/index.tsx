import React from 'react';
import ReactDOM from 'react-dom/client';
import { Model, createServer } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer de website',
          type: 'deposit',
          category: 'Trabalho',
          amount: 6000,
          createdAt: new Date('2023-04-01 09:45:42'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2023-04-08 12:07:02'),
        },
        {
          id: 3,
          title: 'Hamburgueria',
          type: 'withdraw',
          category: 'Alimentação',
          amount: 52,
          createdAt: new Date('2023-04-11 22:15:11'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);