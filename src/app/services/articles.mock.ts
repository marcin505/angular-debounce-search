import { ArticlesResponse } from '../types/article';

export const articlesResponseMock: ArticlesResponse = {
  hits: [
    {
      created_at: '2018-01-03T22:20:48.000Z',
      title: 'Reading privileged memory with a side-channel',
      url:
        'https://googleprojectzero.blogspot.com/2018/01/reading-privileged-memory-with-side.html',
      author: 'brandon',
      points: 2334,
      story_text: null,
      comment_text: null,
      num_comments: 520,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1515018048,
      relevancy_score: 7877,
      _tags: ['story', 'author_brandon', 'story_16065845'],
      objectID: '16065845',
      _highlightResult: {
        title: {
          value: '<em>Rea</em>ding privileged memory with a side-channel',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['rea'],
        },
        url: {
          value:
            'https://googleprojectzero.blogspot.com/2018/01/<em>rea</em>ding-privileged-memory-with-side.html',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['rea'],
        },
        author: {
          value: 'brandon',
          matchLevel: 'none',
          matchedWords: [],
        },
      },
    },
  ],
  nbHits: 4842793,
  page: 0,
  nbPages: 50,
  hitsPerPage: 20,
  exhaustiveNbHits: false,
  query: 'rea',
  params: 'advancedSyntax=true&analytics=true&analyticsTags=backend&query=rea',
  processingTimeMS: 18,
};
