import { HighlightTextPipe } from './highlight-text.pipe';

describe('HighlightTextPipe', () => {
  const pipe = new HighlightTextPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('wrap a simple string in <span>', () => {
    expect(pipe.transform('foobar', 'foo')).toBe('<span class="highlight-text">foo</span>bar')
  })

  it('wrap an uppercase string in <span>', () => {
    expect(pipe.transform('FOOBAR', 'foo')).toBe('<span class="highlight-text">FOO</span>BAR')
  })
  
  it('wrap an uppercase with spaces in <span>', () => {
    expect(pipe.transform('FOO BAR', 'foo')).toBe('<span class="highlight-text">FOO</span> BAR')
  })

  it('wrap multiple words in <span>', () => {
    expect(pipe.transform('FOO FOO', 'foo')).toBe('<span class="highlight-text">FOO</span> <span class="highlight-text">FOO</span>')
  })
});
