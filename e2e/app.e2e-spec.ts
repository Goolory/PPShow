import { PPShowPage } from './app.po';

describe('ppshow App', function() {
  let page: PPShowPage;

  beforeEach(() => {
    page = new PPShowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
