import { rest } from 'msw';

export const handlers = [
  rest.get('/api/promotions/', (_req, res, ctx) => {
    const promotions = [
      { id: '1', promotion_code: 'TESTME10', description: 'Get $10.00 off your next order' },
      { id: '2', promotion_code: 'YOINK50', description: 'Get 50% off your next order' }
    ];

    return res(ctx.json({ promotions }))
  })
];
