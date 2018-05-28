import { WebIdeGitPage } from './app.po';

describe('web-ide-git App', () => {
  let page: WebIdeGitPage;

  beforeEach(() => {
    page = new WebIdeGitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
