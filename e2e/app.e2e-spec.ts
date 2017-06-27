import { LovelyBoutiquePage } from './app.po';

describe('lovely-boutique App', () => {
  let page: LovelyBoutiquePage;

  beforeEach(() => {
    page = new LovelyBoutiquePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
