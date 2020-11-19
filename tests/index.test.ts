import { Trakt } from '../index';
import { expect } from 'chai';

describe('nodeless-trakt-ts', function () {
  it('movies.trending', async function () {
    const trakt = new Trakt({
      client_id:
        "Your Trakt Client Id",
      client_secret:
        "Your Trakt Secret Id",
    });
    const movies = await trakt.movies.trending({ page: 1, limit: 10});

    expect(movies.length).equal(10, 'movie length not correct');

    const keys = ['movie', 'watchers'];
    for (const m in movies[0]) {
      expect(keys.includes(m)).to.equal(true, `${m} not in interface TrendingMovie`);
    }
  });
});
