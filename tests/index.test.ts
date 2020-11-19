import { Trakt } from '../index';
import { expect } from 'chai';

describe('nodeless-trakt-ts', function () {
  it('movies.trending', async function () {
    const trakt = new Trakt({
      client_id:
        "7fe1f186b1d1075ab1681cf9651fa253d17369c36a17088719c493595b1ffd4d",
      client_secret:
        "d390417c3f1a56a52fe0fb496c8c3e3d10a37bde522822be5821c243899a4344",
    });
    const movies = await trakt.movies.trending({ page: 1, limit: 10});

    expect(movies.length).equal(10, 'movie length not correct');

    const keys = ['movie', 'watchers'];
    for (const m in movies[0]) {
      expect(keys.includes(m)).to.equal(true, `${m} not in interface TrendingMovie`);
    }
  });
});
