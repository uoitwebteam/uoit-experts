import { UoitExpertsPage } from './app.po';

describe('uoit-experts App', () => {
  let page: UoitExpertsPage;

  beforeEach(() => {
    page = new UoitExpertsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
