import { RoleAuthCrudAppPage } from './app.po';

describe('role-auth-crud-app App', function() {
  let page: RoleAuthCrudAppPage;

  beforeEach(() => {
    page = new RoleAuthCrudAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
