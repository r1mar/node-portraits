import { NodePortraitsAppPage } from './app.po';

describe('node-portraits-app App', () => {
  let page: NodePortraitsAppPage;

  beforeEach(() => {
    page = new NodePortraitsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
